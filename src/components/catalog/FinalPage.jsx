import React from 'react';
import { Page, View, Image } from '@react-pdf/renderer';

const FinalPage = ({ styles, color, logoUrl }) => (
  <Page size="A4" style={[styles.finalPage, { backgroundColor: color }]}>
    <View style={styles.whiteBox}>
      <Image src={logoUrl} style={styles.finalLogo} />
    </View>
  </Page>
);

export default FinalPage;
