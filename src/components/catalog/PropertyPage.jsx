import React from 'react';
import { Page, Text, View, Image } from '@react-pdf/renderer';

const PropertyPage = ({
  styles,
  color,
  pair,
  pageIndex,
  logoUrl,
  isLastPage,
  company,
  totalIndexPages,
  idioma,
}) => (
  <Page key={pageIndex} size="A4" style={styles.contentPage}>
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: pair.length === 1 ? 0 : undefined,
      }}
      wrap={false}
    >
      {pair.map((item, idx) => {
        const isEvenPage = pageIndex % 2 === 0;
        const isEvenCard = idx % 2 === 0;
        const shouldSwap = isEvenPage ? isEvenCard : !isEvenCard;

        const referenceLabel = idioma === 'en' ? 'Reference' : 'Referencia';

        return (
          <View
            key={idx}
            style={[
              styles.cardWrapper,
              pair.length === 1 && {
                marginTop: 0,
                marginBottom: 0,
                paddingTop: 0,
              },
            ]}
          >
            {shouldSwap ? (
              <>
                <View style={styles.imageContainerLeft}>
                  <View
                    style={[styles.topBorderLeft, { backgroundColor: color }]}
                  />
                  <View style={styles.imageRow}>
                    <Image
                      src={item.image || logoUrl}
                      style={styles.sectionImageLeft}
                    />
                    <View
                      style={[styles.rightBorder, { backgroundColor: color }]}
                    />
                  </View>
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.projectTitle}>
                    {referenceLabel}: {item.reference}
                  </Text>
                  {[
                    ['\uf3c5', item.location],
                    ['\uf02e', item.status],
                    ['\uf073', item.statusDateInfo],

                    ['\uf015', item.type],
                    ['\uf236', item.beds],
                    ['\uf2cd', item.baths],
                    ['\uf153', item.priceRange],
                    ['\uf546', item.area],
                  ].map(([icon, text], i) => (
                    <View style={styles.infoRow} key={i}>
                      <Text style={styles.infoIcon}>{icon}</Text>
                      <Text style={styles.infoText}>{text}</Text>
                    </View>
                  ))}
                </View>
              </>
            ) : (
              <>
                <View style={styles.infoContainerTight}>
                  <Text style={styles.projectTitle}>
                    {' '}
                    {referenceLabel}: {item.reference}
                  </Text>
                  {[
                    ['\uf3c5', item.location],
                    ['\uf02e', item.status],
                    ['\uf073', item.statusDateInfo],
                    ['\uf015', item.type],
                    ['\uf236', item.beds],
                    ['\uf2cd', item.baths],
                    ['\uf153', item.priceRange],
                    ['\uf546', item.area],
                  ].map(([icon, text], i) => (
                    <View style={styles.infoRow} key={i}>
                      <Text style={styles.infoIcon}>{icon}</Text>
                      <Text style={styles.infoText}>{text}</Text>
                    </View>
                  ))}
                </View>
                <View style={styles.imageContainerRight}>
                  <View
                    style={[styles.topBorderRight, { backgroundColor: color }]}
                  />
                  <View style={styles.imageRow}>
                    <View
                      style={[styles.leftBorder, { backgroundColor: color }]}
                    />
                    <Image
                      src={item.image || logoUrl}
                      style={styles.sectionImageRight}
                    />
                  </View>
                </View>
              </>
            )}
          </View>
        );
      })}
      {isLastPage && pair.length === 1 && (
        <View style={[styles.infoCardWrapper, { borderColor: color }]}>
          <View style={styles.card}>
            <View style={styles.logoContainer}>
              {logoUrl && <Image src={logoUrl} style={styles.logo} />}
            </View>
            <Text style={styles.cardText}>
              {company?.name || 'Nombre empresa'}
            </Text>
            <Text style={styles.cardText}>{company?.email || 'email'}</Text>
            <Text style={styles.cardText}>{company?.phone || 'Teléfono'}</Text>
            <Text style={styles.cardText}>{company?.web || 'Web'}</Text>
          </View>
        </View>
      )}

      <View style={[styles.footer, { marginTop: 30 }]}>
        <View style={[styles.line, { backgroundColor: color }]} />
        <Text style={styles.pageNumber}>{pageIndex + totalIndexPages + 1}</Text>
        <View style={[styles.line, { backgroundColor: color }]} />
      </View>
    </View>
  </Page>
);

export default PropertyPage;
