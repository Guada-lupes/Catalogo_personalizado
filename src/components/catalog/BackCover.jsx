import React from 'react';
import { Page, Text, View, Image } from '@react-pdf/renderer';

const BackCover = ({ styles, backgroundUrl, logoUrl, company }) => (
  <Page size="A4" style={styles.noPaddingPage}>
    <View style={styles.cardContainer} wrap={false}>
      {backgroundUrl && (
        <Image src={backgroundUrl} style={styles.backgroundImage} />
      )}
      {/* Caja blanca centrada con contenido */}

      <View style={styles.card}>
        <View style={styles.logoContainer}>
          {logoUrl && <Image src={logoUrl} style={styles.logo} />}
        </View>
        <Text style={styles.cardText}>{company?.name || 'Nombre empresa'}</Text>
        <Text style={styles.cardText}>{company?.email || 'email'}</Text>
        <Text style={styles.cardText}>{company?.phone || 'Teléfono'}</Text>
        <Text style={styles.cardText}>{company?.web || 'Web'}</Text>
      </View>
    </View>
  </Page>
);

export default BackCover;
