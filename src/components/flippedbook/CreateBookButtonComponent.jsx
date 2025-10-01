import { useForm } from "../../contexts/FormContext";
import { useDevelopmentsContext } from "../../contexts/DevelopmentsContext";
import { useNavigate } from "react-router-dom";

export const CreateBookButtonComponent = () => {
  const navigate = useNavigate();
  const { formData, isFormValid } = useForm();
  const { data } = useDevelopmentsContext();

  const handleClick = () => {
    if (!isFormValid) {
      alert(
        "Debes rellenar todos los campos del formulario antes de continuar."
      );
      return;
    }
    if (data && formData && isFormValid) {
      navigate("/2fbook");
    }
  };

  return <button onClick={handleClick}>Visualizar libro</button>;
};
