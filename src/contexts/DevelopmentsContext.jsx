import { createContext, useContext, useMemo, useEffect } from 'react';
import useDevelopmentsZoddakApi from '../api/useDevelopmentsZoddakApi';
import { transformCatalogData } from '../components/utils/transformCatalogData';
import { normalizeText } from '../components/utils/normalizeText';
import { useForm } from './FormContext';

const context = createContext();

export const useDevelopmentsContext = () => useContext(context);

export const DevelopmentsContextProvider = ({ children }) => {
  const { formData, handleColorChange } = useForm();

  const { data, loading, error } = useDevelopmentsZoddakApi(
    formData.asociacion?.id // || '614320c862fd011d5b62ef72' no llama por defecto solo cuando id
  );
  //extraemos las agencias
  const company = useMemo(() => {
    return data?.company;
  }, [data]);
  //EXTRAEMOS LOS DEVS
  const devs = useMemo(() => {
    return data?.devs || [];
  }, [data]);

  // EXTRAEMOS COLOR
  useEffect(()=>{
  if (
    !!data &&
    devs.length > 0 &&
    formData.color != data.company.branding_color
  )
    handleColorChange(data?.company.branding_color || '#000000');
  }, [data, formData.color])

  //FILTRAMOS LAS PROPIEDADES SEGÚN FORMULARIO
  const filteredProp = useMemo(() => {
    if (!Array.isArray(formData?.zona) || formData.zona.length === 0) return [];
    const normalizeZone = formData.zona.map((z) => normalizeText(z));
    return devs.filter((prop) =>
      normalizeZone.includes(normalizeText(prop.town))
    );
  }, [devs, formData]);
  //extraemos de la data lo que necesitamos
  const rawData = useMemo(()=>{
    return transformCatalogData(filteredProp, formData.idioma);
  }, [filteredProp]) 
  //ORDENAMOS ALFABÉTICAMENTE LAS VIVIENDAS y SORTDATA SERÁ LA DATA FINAL
  const sortData = useMemo(() => {
    return rawData.sort((a, b) => {
      const titleA = a.town.toLowerCase();
      const titleB = b.town.toLowerCase();
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
    });
  }, [rawData]);
  
  const value = useMemo(
    //el objeto solo actualiza si existen cambios.
    //memoriza valores
    () => ({
      data,
      sortData,
      loading,
      error,
      company,
    }),
    [data, sortData, error, loading, company]
  );

  return <context.Provider value={value}>{children}</context.Provider>;
};
