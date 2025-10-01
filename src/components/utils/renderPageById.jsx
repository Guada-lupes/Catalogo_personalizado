import photoCover from "/portada-fotos-inmobiliaria-1024x512.jpg";
import { getPageDataById } from "../utils/getPageDataById";
import { CoverComponent } from "../flippedbook/CoverComponent";
import { IndexComponent } from "../flippedbook/IndexComponent";
import { PaperComponent } from "../flippedbook/PaperComponent";
import { LastPageComponent } from "../flippedbook/LastPageComponent";
import { PublicityPaperComponent } from "../flippedbook/PublicityPaperComponent";
import { BookContext } from "../../contexts/FlipBookContext";
import { useContext } from "react";
import { useDevelopmentsContext } from "../../contexts/DevelopmentsContext";

export const renderPageById = (pageId) => {
  const {
    needsExtraPage,
    numOfPapers,
    numOfPapersIndex,
    numOfPagesIndex,
    propertiesStartNum,
    paginatedItems,
    hasOrphanIndexPage,
    idPublicity,
    sortPublicity,
    hasPublicity
  } = useContext(BookContext);
  const { sortData } = useDevelopmentsContext();
  
  //Ejecutamos la función que va a indicar tipo de hoja y data
  const pageData = getPageDataById(
    pageId,
    needsExtraPage,
    numOfPapers,
    numOfPapersIndex,
    numOfPagesIndex,
    propertiesStartNum,
    paginatedItems,
    hasOrphanIndexPage,
    idPublicity,
    sortData,
    sortPublicity,
    hasPublicity
  );

  if (!pageData) return null;
  //extraemos del objeto que retorna el tipo
  const { type } = pageData;
  //Casos
  switch (type) {
    case "cover":
      return <CoverComponent key={pageData.id} id={1} photo={photoCover} />;
    case "index":
      return (
        <IndexComponent
          key={pageData.id}
          id={pageData.id}
          contentFront={pageData.contentFront}
          contentBack={pageData.contentBack}
        />
      );
    case "properties":
      return (
        <PaperComponent
          key={pageData.id}
          id={pageData.id}
          properties={pageData.items}
        />
      );
    case "publicity":
      return <PublicityPaperComponent key={pageData.id} id={pageData.id} />;
    case "lastPage":
      return <LastPageComponent key={pageData.id} id={pageData.id} />;
    default:
      return null;
  }
};
