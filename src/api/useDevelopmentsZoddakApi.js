import { useState, useEffect, useCallback } from 'react';

function useDevelopmentsZoddakApi(companyId) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchZoddakData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/devsapi/all_devs?company_id=${companyId}`, //peticion get
        {
          method: 'GET',
          redirect: 'follow',
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.text();
      setData(JSON.parse(result));
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'An unknown error occurred'
      );
    } finally {
      setLoading(false);
    }
  }, [companyId]);

  useEffect(() => {
    if (companyId) {
      fetchZoddakData();
    }
    //quitar la fetch de dependencias para que solo se vuelva a ejecutar cuando cambie el id de la compañia
  }, [companyId]);

  return { data, loading, error };
}

export default useDevelopmentsZoddakApi;
