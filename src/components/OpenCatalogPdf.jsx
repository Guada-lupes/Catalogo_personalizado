import { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import CatalogPDF from '../components/catalog/CatalogPDF';
import { useForm } from '../contexts/FormContext';
import { useDevelopmentsContext } from '../contexts/DevelopmentsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import "../styles/FlipBookComponentStyle.css"
//import { height } from '@fortawesome/free-solid-svg-icons/faBed';

const OpenCatalogPdf = () => {
  const { formData, isFormValid } = useForm();
  const { data, error } = useDevelopmentsContext();
  const [isGenerating, setIsGenerating] = useState(false); //comprobamos si se esta generando el Pdf.

  const handleOpenPDF = async () => {
    setIsGenerating(true); // Mostrar mensaje
    try {
      const blob = await pdf(
        <CatalogPDF data={data} formData={formData} isFormValid={isFormValid} />
      ).toBlob();

      const url = URL.createObjectURL(blob);
      window.open(url);
    } catch (error) {
      console.error('Error generando PDF:', error);
      //se puede anadir un mensaje de error.
    } finally {
      setIsGenerating(false); // Ocultar mensaje
    }
  };

  if (error) return <div>Error: {error}</div>;

  return (

      
      <button className='download-button'
        onClick={() => {
          if (data && formData && isFormValid) handleOpenPDF();
        }}
        disabled={isGenerating} // Desactivamos boton en lo que se genera el Pdf.
      >
        {isGenerating ? 'Generando PDF...' : <FontAwesomeIcon icon={faDownload} className="expand"/>}
      </button>

  );
};

export default OpenCatalogPdf;
