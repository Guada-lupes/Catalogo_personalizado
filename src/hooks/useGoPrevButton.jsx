import { useContext } from "react";
import { BookContext } from "../contexts/FlipBookContext";
import { NavegationContext } from "../contexts/NavegationContext";
import { useOpenCloseBook } from "./useOpencloseBook";

export const useGoPrevButton = () => {
  const { numOfPapers, maxLocation } = useContext(BookContext);
  const { openBook, closeBook } = useOpenCloseBook();
  const {
    setIsAnimating,
    setCurrentLocation,
    isAnimating,
    currentLocation,
    isAtBeginning,
  } = useContext(NavegationContext);

  //Funcion reutilizable para efecto quitar flipped
  function removeFlipped(idNumber, time1, time) {
    const currentPage = document.querySelector(`#p${idNumber}`);
    currentPage.classList.add("is-turning");
    currentPage.classList.remove("flipped");
    setTimeout(() => {
      currentPage.classList.remove("is-turning");
    }, time1);
    setTimeout(() => {
      setIsAnimating(false);
    }, time);
  }
  const goPrevPage = () => {

if(currentLocation === 1){return null}
    //Confirmamos que no estamos en la pagina 1
    if (isAnimating) return; // no permitir doble clic
    setIsAnimating(true);
    if (currentLocation > 1 && currentLocation <= maxLocation) {

      //si estamos en la pagina 2, cerramos el libro
      if (currentLocation === 2) {
        closeBook(isAtBeginning);
        removeFlipped(1, 1000, 300);
        // en la posicion 2 manipulamos siempre la hoja uno
      }
      if (currentLocation === maxLocation) {
        //si estamos en la ultima pagina y vamos hacia atrás abrimos el libro
        // calculamos el id de la pagina segun el valor numOfPapers porque sera la ultima hoja
        removeFlipped(numOfPapers, 1000, 300);
        openBook();
      }
      // aseguramos que no manipularara la segunda pagina ni la ultima
      if (currentLocation !== 2 && currentLocation !== maxLocation) {
        // seleccionamos la pagina actual menos 1 ya que daremos vuelta a la pg de la izquierda
        removeFlipped(currentLocation - 1, 1000, 300);
        // //   calculamos el zindex que le toca por la localizacion maxima le restamos la localizacion actual y le sumamos 2 para que no se repitan valores al entre los que se han volteado y los que no
      }
      setCurrentLocation((prev) => prev - 1);
    } else {
      return null;
    }
  };
  return { goPrevPage };
};
