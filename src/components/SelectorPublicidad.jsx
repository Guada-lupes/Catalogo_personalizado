import { useForm } from '../contexts/FormContext';
import '../styles/SelectorPublicidad.css';

const SelectorPublicidad = () => {
  const { formData, handlePublicidadChange } = useForm();

  const handleChange = (e) => {
    handlePublicidadChange(e.target.value === 'si');
  };

  return (
    <div className="form-group">
      <label className="selector-publicidad-label">
        ¿Incluir publicidad?
        <select
          className="selector-publicidad"
          value={formData.publicidad ? 'si' : 'no'}
          onChange={handleChange}
        >
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </label>
    </div>
  );
};

export default SelectorPublicidad;
