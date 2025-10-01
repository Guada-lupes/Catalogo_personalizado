
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { FormContextProvider } from "./contexts/FormContext.jsx";
import { BookContextProvider } from "./contexts/FlipBookContext.jsx";
import { DevelopmentsContextProvider } from "./contexts/DevelopmentsContext.jsx";
import { NavegationContextProvider } from "./contexts/NavegationContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(

    <FormContextProvider>
      <DevelopmentsContextProvider>
        <BookContextProvider>
          <NavegationContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
          </NavegationContextProvider>
        </BookContextProvider>
      </DevelopmentsContextProvider>
    </FormContextProvider>

);
