import { Page, Text, View } from '@react-pdf/renderer';
import { INDEX_COMPONENT_TYPE } from '../utils/generateIndexContent';

const IndexPage = ({ styles, color, page, idioma }) => {
  const textos = {
    es: 'INDICE',
    en: 'INDEX',
  };

  const indiceTitle = textos[idioma] || textos.es; //ESPANOL
  const columns = page.map((column) =>
    column.map((item, i) => {
      switch (item.componentType) {
        case INDEX_COMPONENT_TYPE.ITEM_HEADER:
          return (
            <View
              key={item.town + i}
              style={{ fontSize: 8, ...styles.indexLine }}
            >
              <Text style={styles.indexNumber}>{item.town}</Text>
              {/* <Text
                style={styles.indexText}
              >{`${item.totalDevelopments} Propiedades`}</Text> */}
            </View>
          );
        case INDEX_COMPONENT_TYPE.ITEM_INDEX:
          return (
            <View key={item.title + i} style={styles.indexLine}>
              <Text style={styles.indexNumber}>{item.page}</Text>
              <Text style={styles.indexText}>{item.areaText}</Text>
            </View>
          );
      }
    })
  );

  return (
    <Page size="A4" style={styles.noPaddingPage}>
      <View style={[styles.indexBox, { borderColor: color }]}>
        <Text style={styles.indiceTitle}>{indiceTitle}</Text>
      </View>
      <View style={styles.indiceContainer}>
        <View style={styles.columnsContainer}>
          {columns.map((column) => (
            <View key={crypto.randomUUID()} style={styles.column}>
              {column}
            </View>
          ))}
        </View>
      </View>
      <View style={[styles.sidebar, { backgroundColor: color }]} />
      <View style={[styles.footer, { marginBottom: 35 }]}></View>
    </Page>
  );
};

export default IndexPage;
