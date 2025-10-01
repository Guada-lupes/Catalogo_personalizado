import React from 'react';
import { useForm } from '../contexts/FormContext';
import useCompaniesZoddakApi from '../api/useCompaniesZoddakApi';
import '../styles/SelectorAsociacion.css';

const SelectorAsociacion = () => {
  const { handleAsociacionChange } = useForm();
  const { data, loading, error } = useCompaniesZoddakApi();

  const handleChange = (e) => {
    handleAsociacionChange({ id: e.target.value });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    data?.companies && (
      <label>
        Seleccionar Agencia:
        <select
          onChange={handleChange}
          className="selector-asociacion"
          defaultValue=""
        >
          <option value="" disabled>
            -- Selecciona una --
          </option>
          {data.companies.map((aso) => (
            <option key={aso._id.$oid} value={aso._id.$oid}>
              {aso.name}
            </option>
          ))}
        </select>
      </label>
    )
  );
};

export default SelectorAsociacion;
