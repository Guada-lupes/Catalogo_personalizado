// PublicidadPage.js
import { Page, Image } from '@react-pdf/renderer';

const PublicidadPage = () => (
  <Page size="A4" style={{ padding: 0 }}>
    <Image src="/publicidad.jpg" style={{ width: '100%', height: '100%' }} />
  </Page>
);

export default PublicidadPage;
