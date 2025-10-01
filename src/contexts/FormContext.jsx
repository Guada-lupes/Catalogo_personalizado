import { createContext, useContext, useState, useEffect } from 'react';

const FormContext = createContext();

//creamos contexto
export const useForm = () => useContext(FormContext);

//creamos proveedor de contexto
export const FormContextProvider = ({ children }) => {
  //contante que guardará los datos del formulario
  const [formData, setFormData] = useState({
    color: '#000000',
    asociacion: null,
    zona: [],
    publicidad: false,
    idioma: 'es', // por defecto Espanol.
  });

  // Validación del formulario
  const [isFormValid, setIsFormValid] = useState(false);

  // Validar cuando cambia el formulario
  useEffect(() => {
    const { color, asociacion, zona } = formData;
    setIsFormValid(!!color && !!asociacion && zona.length > 0);
  }, [formData]);

  // Funciones para manejar cambios
  const handleColorChange = (color) => {
    setFormData((prev) => ({ ...prev, color: color }));
  };

  const handleAsociacionChange = (asociacion) => {
    setFormData((prev) => ({ ...prev, asociacion: asociacion }));
  };

  const handleZonaChange = (zona) => {
    setFormData((prev) => ({ ...prev, zona: zona }));
  };

  const handlePublicidadChange = (publicidad) => {
    //publicidad manejamos el cambio.
    setFormData((prev) => ({ ...prev, publicidad }));
  };

  // Handler para idioma
  const handleIdiomaChange = (idioma) => {
    setFormData((prev) => ({ ...prev, idioma }));
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        handleColorChange,
        handleAsociacionChange,
        handleZonaChange,
        handlePublicidadChange, //publicidad
        handleIdiomaChange,
        isFormValid,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
