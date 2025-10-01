import { useContext } from "react";
import { BookContext } from "../contexts/FlipBookContext";
import { NavegationContext } from "../contexts/NavegationContext";
import { useOpenCloseBook } from "./useOpencloseBook";

//IR A LA SIGUIENTE PÁGINA
export function useGoNextButton() {
  const { maxLocation, numOfPapers } = useContext(BookContext);
  const { setIsAnimating, setCurrentLocation, isAnimating, currentLocation } =
    useContext(NavegationContext);
  const { openBook, closeBook } = useOpenCloseBook();

  //funcion reutilizable para efecto flipped
  function flippedBook(idNumber, time) {
    const currentPage = document.querySelector(`#p${idNumber}`);
    currentPage.classList.add("is-turning");
    setTimeout(() => {
      currentPage.classList.add("flipped");
    }, 50);
    setTimeout(() => {
      currentPage.classList.remove("is-turning");
    }, time);
    setTimeout(() => {
      setIsAnimating(false);
      setCurrentLocation((prev) => prev + 1);
    }, 500);
  }
  //IR A LA SIGUIENTE PÁGINA
  function goNextPage() {

    if(currentLocation === maxLocation){return null}
    //confirmamos que no estamos con el libro cerado en la ultima pagina
    if (isAnimating) return; // no permitir doble clic
    setIsAnimating(true);
    if (currentLocation < maxLocation && currentLocation >= 1) {

      //en el caso de estar en la primera pagina
      if (currentLocation === 1) {
        console.log("open");
        
        openBook();
        flippedBook(1, 1000);
      }
      //en el caso de estar en la penúltima pg
      if (currentLocation === numOfPapers) {
        flippedBook(currentLocation, 0);
        closeBook();
      }
      //resto de casos
      if (currentLocation != 1 && currentLocation != numOfPapers) {
        flippedBook(currentLocation, 300);
      }
    } else {
      return null;
    }
  }
  return { goNextPage };
}
