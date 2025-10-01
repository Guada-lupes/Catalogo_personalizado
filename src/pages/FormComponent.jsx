import SelectorZona from "../components/SelectorZona";
import SelectorAsociacion from "../components/SelectorAsociacion";
import "../styles/FormStyle.css";
import OpenCatalogPdf from "../components/OpenCatalogPdf";
import SelectorPublicidad from "../components/SelectorPublicidad";
import SelectorIdioma from "../components/SelectorIdioma";
import { CreateBookButtonComponent } from "../components/flippedbook/CreateBookButtonComponent";

export const FormComponent = () => {
  return (
    <div className="form-page">
      <div className="form-wrapper">
        <div className="form-container">
          <h1 className="form-title">Genera tu Catálogo</h1>
          <form
            id="form"
            name="personalized-form"
            method="post"
            autoComplete="off"
          >
            <SelectorAsociacion />
            <div className="horizontal-group">
              <SelectorPublicidad />
              <SelectorIdioma />
            </div>
            <SelectorZona />
          </form>
        </div>
        <div className="button-group">
          <CreateBookButtonComponent />
          <OpenCatalogPdf />
        </div>
      </div>
    </div>
  );
};
