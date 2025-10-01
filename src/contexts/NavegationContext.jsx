import {
  createContext,
  useState,
  useMemo,
  useCallback,
} from "react";

export const NavegationContext = createContext();
export const NavegationContextProvider = ({ children }) => {
  // CONST LOGICA PASAR PAGINAS DEL LIBRO
  //Ubicación actual a partir de los IDs
  const [currentLocation, setCurrentLocation] = useState(1);
  const isAtBeginning = true;
  //Controlar animación
  const [isAnimating, setIsAnimating] = useState(false);
  //Función reutilizable para setear propiedades
  const setProperty = useCallback((id, property, value) => {
    document.querySelector(id).style.setProperty(property, value);
  }, []);
  //es hoja pasada
  const isPastPage = useCallback(
    (id) => {
      return id < currentLocation;
    },
    [currentLocation]
  );
  const value = useMemo(() => 
({    currentLocation,
      setCurrentLocation,
      isAtBeginning,
      isAnimating,
      setIsAnimating,
      setProperty,
      isPastPage})
  , [
    currentLocation,
    setCurrentLocation,
    isAtBeginning,
    isAnimating,
    isPastPage,
  ]);
  return (
    <NavegationContext.Provider value={value}>
      {children}
    </NavegationContext.Provider>
  );
};
