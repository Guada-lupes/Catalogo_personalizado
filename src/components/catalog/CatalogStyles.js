import { StyleSheet } from '@react-pdf/renderer';

const useStyles = (color) => {
  return StyleSheet.create({
    page: {
      padding: 40,
      position: 'relative',
      marginBottom: 0,
    },
    noPaddingPage: {
      position: 'relative', // Página sin padding
    },
    //Portada
    coverPage: {
      padding: 40,
      position: 'relative',
      flexDirection: 'column',
    },
    leftStripe: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: 85,
      height: '290',
      backgroundColor: `${color}`,
    },

    logoBox: {
      position: 'absolute',
      top: 30,
      left: 70,
      width: 150,
      height: 150,
      objectFit: 'contain',
    },
    gradientBorderWrapper: {
      flexDirection: 'column',
      width: 340, // ancho total del borde externo
      height: 430, // alto total del borde externo

      justifyContent: 'space-between',
      alignItems: 'center',
    },

    middleRow: {
      flex: 1,
      flexDirection: 'row',
    },

    gradientColumn: {
      width: 20,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },

    gradientBlockVertical: {
      flex: 1,
    },

    titleWrapper: {
      marginTop: 160,
      marginLeft: 30,
      alignItems: 'flex-start',
    },
    subtitle: {
      fontSize: 36,
      fontWeight: 'normal',
      fontFamily: 'PT Serif Caption',
      color: '#000',
      textAlign: 'left',
    },
    mainTitle: {
      fontSize: 54,
      fontWeight: 'bold',
      color: '#000',
      textAlign: 'left',
      fontFamily: 'PT Serif',
      marginBottom: '10',
    },

    titleUnderline: {
      width: 350,
      height: 20,
      backgroundColor: `${color}`,
      marginTop: 6,
      marginBottom: 20,
    },
    gradientRow: {
      flexDirection: 'row',
      width: 350,
      height: 20,
      marginTop: 6,
      marginBottom: 20,
    },
    gradientBlock: {
      flex: 1,
    },
    gradientRowBorder: {
      flexDirection: 'row',
      width: 380,
      height: 20,
    },

    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 595,
      height: 842,

      zIndex: 0,
    },

    houseImage: {
      width: 525,
      height: 372,
      position: 'absolute',
      objectFit: 'cover',
      bottom: 0,
      right: 0,
    },

    text: {
      color: color,
      fontSize: 14,
      marginBottom: 10,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'black',
      paddingBottom: 10,
      marginBottom: 20,
      textAlign: 'center',
    },
    // Estilos del índice
    indiceContainer: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginLeft: 20,
      width: '80%', //Ancho pagina dejamos para sidebar
    },
    indexBox: {
      borderColor: `${color}`,
      borderWidth: 3,
      margin: 30,
      marginBottom: 0,
      height: 85,
      justifyContent: 'center',
      paddingLeft: 20,
    },

    indiceTitle: {
      fontSize: 36,
      fontWeight: 'normal',
      color: `black`,
      textAlign: 'left',
      fontFamily: 'PT Serif',
    },
    indexLine: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 5,
      paddingLeft: 2,
    },
    indexNumber: {
      fontSize: 7,
      color: '#1a1a1a',
      marginRight: 3,
      fontFamily: 'PT Serif',
      fontWeight: 'bold',
    },
    indexText: {
      fontSize: 6,
      color: 'black',
      fontFamily: 'PT Serif',
    },

    indiceContent: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      width: '100%',
      gap: 5,
    },
    column: {
      width: '25%',
      marginRight: 0,
      marginTop: 20,
      marginBottom: 20,
    },
    columnsContainer: {
      paddingLeft: 10,
      flexDirection: 'row',
      width: '100%',
      gap: 6, // menor separación entre columnas
    },
    cityName: {
      fontSize: 8,
      fontFamily: 'PT Serif',
      color: 'black',
      marginBottom: 5,
    },
    cityDescription: {
      fontSize: 6,
      color: 'black',
      marginBottom: 2,
    },
    sidebar: {
      width: '63px',
      backgroundColor: `${color}`,
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      padding: 5,
    },

    //contraportada

    logoContainer: {
      width: 130,
      height: 130,
      justifyContent: 'center',
      alignItems: 'center',
    },

    logo: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
    },
    cardContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
    },

    card: {
      backgroundColor: '#FFFFFF',
      padding: 20,
      width: '50%',
      alignItems: 'center',
    },
    cardText: {
      fontSize: 14,
      marginVertical: 5,
      textAlign: 'center',
      fontFamily: 'PT Serif Caption',
    },

    //property Pages
    contentPage: {
      paddingTop: 40,
      paddingRight: 0,
      paddingBottom: 40,
      paddingLeft: 0, // Quitar margen izquierdo
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: '100%',
    },

    infoCardWrapper: {
      borderWidth: 1,
      borderColor: color,
      padding: '0 10 0 10', // Ajusta para que no quede muy apretado
      alignSelf: 'center', // Centra horizontalmente
    },

    cardWrapperSingle: {
      marginTop: 0,
      paddingTop: 0,
      alignSelf: 'flex-start',
    },

    imageContainerRight: {
      marginRight: -10,
      marginLeft: 0,
    },
    imageContainerLeft: {
      marginLeft: -10,
    },

    topBorderRight: {
      height: 18,
      width: '100%',
      backgroundColor: `${color}`,
      borderTopLeftRadius: 3,
    },
    topBorderLeft: {
      height: 18,
      width: '100%',
      backgroundColor: `${color}`,
      borderTopRightRadius: 3,
    },

    rightBorder: {
      width: 18,
      height: '95%', // más corto que la imagen
      backgroundColor: `${color}`,
      borderBottomRightRadius: 3,
    },
    leftBorder: {
      width: 18,
      height: '95%',
      backgroundColor: `${color}`,
      borderBottomLeftRadius: 3,
    },

    cardWrapper: {
      flexDirection: 'row',
      alignItems: 'center',

      paddingHorizontal: 5,
      marginBottom: 80,
      marginTop: 100,
      gap: 60,
    },

    sectionImageRight: {
      width: 246,
      height: 300,
      objectFit: 'cover',
      borderBottomLeftRadius: 3,
      borderTopLeftRadius: 3,
    },
    sectionImageLeft: {
      width: 246,
      height: 300,
      objectFit: 'cover',
      borderBottomRightRadius: 3,
      borderTopLeftRadius: 3,
    },

    projectTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
      fontFamily: 'PT Serif',
      marginTop: 1,
    },
    projectTitleReference: {
      fontSize: 10,
      fontWeight: 'bold',
      marginBottom: 1,
      fontFamily: 'PT Serif',
      marginTop: 30,
      color: 'grey',
    },
    imageRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },

    infoContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center', // Centrar verticalmente
      alignItems: 'flex-start', // Centrar horizontalmente
      gap: 5,
      marginTop: 25,
      marginBottom: 60,
    },
    infoContainerTight: {
      flex: 1,
      marginLeft: 50,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: 5,
      marginBottom: 60,
      marginTop: 15,
    },

    titleText: {
      fontSize: 29,
      marginBottom: 15,
      fontFamily: 'PT Serif',
    },

    infoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },

    infoIcon: {
      fontFamily: 'FontAwesome',
      fontSize: 14,
      marginRight: 20,
    },
    infoText: {
      fontSize: 12,
    },

    //Pagina Final
    finalPage: {
      backgroundColor: `${color}`,
      justifyContent: 'center',
      alignItems: 'center',
    },

    whiteBox: {
      width: 212,
      height: 200,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },

    finalLogo: {
      width: 100,
      height: 100,
      objectFit: 'contain',
    },
    //footer
    footer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 'auto',

      width: '100%',
    },
    line: {
      width: '100%',
      height: 1,
      backgroundColor: `${color}`, // Usar color para la línea
      flex: 1,
      marginHorizontal: 25,
    },
    pageNumber: {
      fontSize: 12,
      fontFamily: 'PT Serif',
      color: 'black',
      marginHorizontal: 10,
    },
  });
};

export default useStyles;
