import { Page, Text, View, Image } from '@react-pdf/renderer';
import { lighten } from '../utils/colorUtils';

const CoverPage = ({ styles, color, logoUrl, imageUrl, idioma }) => {
  // Textos según idioma
  const textos = {
    es: {
      subtitle: 'CATÁLOGO DE',
      mainTitle: 'OBRA NUEVA',
    },
    en: {
      subtitle: 'NEW DEVELOPMENTS',
      mainTitle: 'CATALOG',
    },
  };

  const { subtitle, mainTitle } = textos[idioma] || textos.es; // fallback a español

  return (
    <Page size="A4" style={styles.coverPage}>
      <View style={[styles.leftStripe, { backgroundColor: color }]} />
      <Image src={logoUrl} style={styles.logoBox} />
      <View style={styles.titleWrapper}>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.mainTitle}>{mainTitle}</Text>
        <View style={styles.gradientRow}>
          {[0, 10, 20, 30, 40].map((percent) => (
            <View
              key={percent}
              style={[
                styles.gradientBlock,
                { backgroundColor: lighten(color, percent) },
              ]}
            />
          ))}
        </View>
      </View>
      <Image src={imageUrl} style={styles.houseImage} />
    </Page>
  );
};

export default CoverPage;
