import React from 'react';
import { Page, View, Image } from '@react-pdf/renderer';

const BlankPage = ({ styles, backgroundUrl }) => (
  <Page size="A4" style={styles.noPaddingPage}>
    <View style={styles.cardContainer}>
      {/* Imagen de fondo */}
      {backgroundUrl && (
        <Image src={backgroundUrl} style={styles.backgroundImage} />
      )}
    </View>
  </Page>
);

export default BlankPage;
