import { useState, useEffect, useCallback } from 'react';

function useCompaniesZoddakApi() {
  const [data, setData] = useState(null); // almacenamos los datos
  const [loading, setLoading] = useState(false); //peticion en proceso o no.
  const [error, setError] = useState(null); // gestion de errores.

  const fetchCompanies = useCallback(async () => {
    //creamos peticion y envolvemos en callback para no repetir render
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/companies/all_companies', {
        method: 'GET',
        redirect: 'follow',
      });

      if (!response.ok) {
        //lanzamos error si no responde
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.text(); //convertimos a texto
      setData(JSON.parse(result));
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'An unknown error occurred'
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    //ejecutamos una sola vez al motar el componente.
    fetchCompanies();
  }, [fetchCompanies]);

  return { data, loading, error };
}

export default useCompaniesZoddakApi;
