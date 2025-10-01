import { useDevelopmentsContext } from '../contexts/DevelopmentsContext';
import { useForm } from '../contexts/FormContext';
import '../styles/SelectorZona.css';
import { SyncLoader } from 'react-spinners';

const SelectorZona = () => {
  const { formData, handleZonaChange } = useForm();
  const { data, loading, error } = useDevelopmentsContext();

  if (loading || !data)
    return (
      <div className="loading-container">
        <SyncLoader color="#1bb394ff" size={15} />
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  const zonasUnicas = [
    ...new Set(data.devs.map((item) => item.town).filter(Boolean)),
  ];

  const todasSeleccionadas = formData.zona.length === zonasUnicas.length;

  const toggleZona = (zona) => {
    if (formData.zona.includes(zona)) {
      handleZonaChange(formData.zona.filter((z) => z !== zona));
    } else {
      handleZonaChange([...formData.zona, zona]);
    }
  };

  const toggleTodas = () => {
    if (todasSeleccionadas) {
      handleZonaChange([]);
    } else {
      handleZonaChange(zonasUnicas);
    }
  };

  return (
    <div>
      <label>Seleccionar Zona(s):</label>
      <div className="selector-zona-horizontal">
        {/* Checkbox de Todas las zonas */}
        <div className="zona-item">
          <label>
            <input
              type="checkbox"
              checked={todasSeleccionadas}
              onChange={toggleTodas}
            />
            <span>Todas las zonas</span>
          </label>
        </div>

        {/* Checkboxes de zonas individuales */}
        {zonasUnicas.map((town) => (
          <div className="zona-item" key={town}>
            <label>
              <input
                type="checkbox"
                value={town}
                checked={formData.zona.includes(town)}
                onChange={() => toggleZona(town)}
              />
              <span>{town}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectorZona;
