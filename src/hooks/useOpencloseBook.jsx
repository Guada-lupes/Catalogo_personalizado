import { useCallback, useContext } from "react";
import { NavegationContext } from "../contexts/NavegationContext";

export const useOpenCloseBook = ()=>{
  const { setProperty, isAtBeginning } = useContext(NavegationContext);
  function openBook() {
     setProperty("#book", "transform", "translateX(50%)");
  }
  function closeBook(isAtBeginning) {
    if (isAtBeginning) {
      setProperty("#book", "transform", "translateX(0%)");
    } else {
      setProperty("#book", "transform", "translateX(100%)");
    }
  }
  return { openBook, closeBook };
}