import { Document, Font } from '@react-pdf/renderer';
import BackCover from './BackCover';
import useStyles from './CatalogStyles';
import CoverPage from './CoverPage';
import FinalPage from './FinalPage';
import IndexPage from './IndexPage';
import PropertyPage from './PropertyPage';
import PublicidadPage from './PublicidadPage';
import BlankPage from './BlankPage';

import { transformCatalogData } from '../utils/transformCatalogData';
import { generateIndexContent } from '../utils/generateIndexContent';

const CatalogPDF = ({ data, formData, isFormValid }) => {
  const styles = useStyles(formData.color);
  const { color, asociacion, zona } = formData;

  Font.register({
    family: 'FontAwesome',
    src: `${window.location.origin}/icons/fa-solid-900.ttf`,
  });

  Font.register({
    family: 'PT Serif',
    fonts: [
      { src: '/fonts/PTSerif-Regular.ttf' },
      { src: '/fonts/PTSerif-Bold.ttf', fontWeight: 'bold' },
    ],
  });

  Font.register({
    family: 'PT Serif Caption',
    fonts: [{ src: '/fonts/PTSerifCaption-Regular.ttf' }],
  });

  const companyLogoUrl = data.company.image.replace(
    'https://app.zoddak.com',
    ''
  );

  const imageUrl = `${window.location.origin}/portada-foto.jpg`;
  const backgroundImageUrl = `${window.location.origin}/imagenContraportada.jpg`;

  const transformData = transformCatalogData(
    zona.length > 0
      ? data.devs.filter((item) => zona.includes(item.town))
      : data,
    formData.idioma //pasamos el idioma
  );

  if (!isFormValid) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>
          Por favor, selecciona todos los campos para generar el catálogo.
        </h2>
      </div>
    );
  }

  const orderedCatalog = transformData.toSorted((a, b) =>
    a.town.localeCompare(b.town)
  ); // ordenamos alfabeticamente por town.

  const orderedByPages = Array.from(
    //creamos array donde cada pagina tiene 2 propiedas y dividimos el catalogo en paginas de dos propiedades.
    { length: Math.ceil(orderedCatalog.length / 2) },
    (item, index) => orderedCatalog.slice(index * 2, index * 2 + 2) //y dividimos el catalogo en paginas de dos propiedades.
  );

  //indice de 5 columnas
  const COLUMN_COUNT = 4;
  const MAX_ITEMS_COLUMN_CONTEXT = 45;

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Hi, you can change the number of columns and the maximun total items per column in the function so that it's more flexible ;) //
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const indicePages = generateIndexContent(
    orderedCatalog,
    COLUMN_COUNT,
    MAX_ITEMS_COLUMN_CONTEXT
  );

  const totalBeforeFinal =
    2 + // CoverPage && BackCover
    indicePages.length +
    orderedByPages.length +
    (formData.publicidad ? 2 : 0);

  const needsExtraPage = totalBeforeFinal % 2 !== 0;

  return (
    <Document>
      {/* Portada y Contraportada */}
      <CoverPage
        color={color}
        logoUrl={companyLogoUrl}
        imageUrl={imageUrl}
        styles={styles}
        idioma={formData.idioma}
      />
      <BackCover
        color={color}
        logoUrl={companyLogoUrl}
        asociacion={asociacion}
        styles={styles}
        company={data.company}
        backgroundUrl={backgroundImageUrl}
      />

      {/* Índice */}
      {indicePages.map((columns, i) => (
        <IndexPage
          key={`IndexPage-${i}`}
          color={color}
          styles={styles}
          page={columns}
          idioma={formData.idioma}
          pageNumber={i + 2}
        />
      ))}

      {/* Páginas de propiedades + publicidad en el medio si aplica */}
      {orderedByPages.map((pair, pageIndex) => {
        const middleIndex = Math.floor(orderedByPages.length / 2);

        if (pageIndex === middleIndex && formData.publicidad) {
          return [
            <PublicidadPage
              key="PublicidadPage-1"
              styles={styles}
              color={color}
            />,
            <PublicidadPage
              key="PublicidadPage-2"
              styles={styles}
              color={color}
            />,
            <PropertyPage
              key={`${pageIndex}-Page`}
              pair={pair}
              pageIndex={pageIndex}
              color={color}
              logoUrl={companyLogoUrl}
              styles={styles}
              isLastPage={pageIndex === orderedByPages.length - 1}
              company={data.company}
              totalIndexPages={indicePages.length}
              idioma={formData.idioma}
            />,
          ];
        }

        return (
          <PropertyPage
            key={`${pageIndex}-Page`}
            pair={pair}
            pageIndex={pageIndex}
            color={color}
            logoUrl={companyLogoUrl}
            styles={styles}
            isLastPage={pageIndex === orderedByPages.length - 1}
            company={data.company}
            totalIndexPages={indicePages.length}
            idioma={formData.idioma}
          />
        );
      })}

      {/* Página extra si es necesaria */}
      {needsExtraPage &&
        (formData.publicidad ? (
          <PublicidadPage styles={styles} color={color} />
        ) : (
          <BlankPage styles={styles} backgroundUrl={backgroundImageUrl} />
        ))}

      {/* Página final */}
      <FinalPage color={color} logoUrl={companyLogoUrl} styles={styles} />
    </Document>
  );
};

export default CatalogPDF;
