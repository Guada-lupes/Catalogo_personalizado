import { useForm } from '../contexts/FormContext';
import '../styles/SelectorIdioma.css';

const SelectorIdioma = () => {
  const { formData, handleIdiomaChange } = useForm();

  const handleChange = (e) => {
    handleIdiomaChange(e.target.value);
  };

  return (
    <div className="form-group">
      <label className="selector-idioma-label">
        Seleccionar idioma
        <select
          className="selector-idioma"
          value={formData.idioma}
          onChange={handleChange}
        >
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </label>
    </div>
  );
};

export default SelectorIdioma;
