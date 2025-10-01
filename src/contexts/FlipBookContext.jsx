import { createContext, useMemo} from "react";
import { useDevelopmentsContext } from "./DevelopmentsContext";
import { useForm } from "./FormContext";
export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const { sortData, loading, error } = useDevelopmentsContext();
  const {formData} = useForm();
  //CONROLAMOS ESTADO LISTO PARA RENDER
  const isReady = useMemo(() => {
    return !loading && !error && sortData.length > 0;
  }, [loading, error, sortData]);
  //DATA PARA generar el ÍNDICE en PAGINATIONComponent/////////////////////////////
  const indexItems = useMemo(() => {
    return sortData?.map((prop, i) => ({
      location: prop.areaText,
      page: Math.floor(i / 2) + 2,
      zone: prop.town,
    }));
  }, [sortData]);
  console.log(sortData.location);
  
  //Partimos el array de items por una cantidad determinada
  function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }
  //establecemos nº de items por pág
  const ITEMS_PER_PAGE = 130;
  //Generamos un array donde cada posicion es una pagina en el index
  const paginatedItems = useMemo(()=>{
    return chunkArray(indexItems, ITEMS_PER_PAGE);
  }, [indexItems]) 
  //número de páginas del indice
  const numOfPagesIndex = paginatedItems.length;
  //lo usamos Para saber numero de hojas
  const numOfPapersIndex = Math.ceil(numOfPagesIndex / 2);
  //el indice tien hija huerfana
  const hasOrphanIndexPage = numOfPagesIndex % 2 !== 0; // impar: huérfana
  //nos indica si restar 2 o no a sortdata
  const propertiesStartNum = hasOrphanIndexPage ? 2 : 0;
  //CALCULAR NÚMERO DE HOJAS////////////////////////////////////////
  //NÚMERO DE PAGINAS CON SÓLO PROPIEDADES (FUERA DEL ÍNDICE)
  const totalPropToRender = useMemo(() => {
    const totalProp = sortData.length; //suma de propiedades
    const renderProp = totalProp - propertiesStartNum; //suma de prop a renderizar fuera del indice
    return renderProp;
  }, [propertiesStartNum, sortData]);
  //ULTIMA HOGA DE PROPIEDADES HUERFANA
  const hasLastPageOrphan =
    totalPropToRender % 4 === 1 || totalPropToRender % 4 === 2;
  //ULTIMA HOJA CON 1 PROPIEDAD (en front info agencia)
  const onePropLeft = totalPropToRender % 4 === 1;
  //UTLIMA HOJA CON 3 PROPIEDADES (en back info agencia)
  const threePropLeft = totalPropToRender % 4 === 3
  //REQUIERE AÑADIR UNA PÁGINA
  const needsExtraPage = useMemo(() => {
    const remainder = totalPropToRender % 4; //resto de dividir/4 las prop fuera del indice
    const response = remainder === 0 || remainder === 3;
    return response;
  }, [totalPropToRender]);
  //Publicidad
  //si hay publicidad devuelve 1
  const addPublicity= formData.publicidad ? 1 : 0;
  //si hay publicidad es true
  const hasPublicity = formData.publicidad;
  //numero de hojas de las propiedades /2
  const middleInProp = Math.floor((totalPropToRender/4)/2);
  //el id de las propiedades empieza en 
  const idStartForProp = numOfPapersIndex + 2;
  //si hay publicidad devuelve el su id
  const idPublicity = hasPublicity ? idStartForProp + middleInProp +1 : null;
    //NÚMERO DE HOJAS TOTALES
  const numOfPapers = useMemo(() => {
    const propPapers = Math.ceil(totalPropToRender / 4); //num de hojas
    // portada (1), índice (numOfPapersIndex), y contraportada si se necesita
    const staticPages = 1 + numOfPapersIndex + (needsExtraPage ? 1 : 0) + addPublicity;
    return propPapers + staticPages;
  }, [sortData, numOfPagesIndex]);
  //Manejamos ZINDEX
  const maxLocation = numOfPapers + 1;
  
  const value = useMemo(
    () => ({
      numOfPapers,
      paginatedItems,
      numOfPagesIndex,
      numOfPapersIndex,
      propertiesStartNum,
      isReady,
      hasLastPageOrphan,
      hasOrphanIndexPage,
      needsExtraPage,
      maxLocation,
      onePropLeft,
      threePropLeft,
      idPublicity,
      hasPublicity
    }),
    [
      numOfPapers,
      paginatedItems,
      numOfPagesIndex,
      numOfPapersIndex,
      propertiesStartNum,
      isReady,
      hasLastPageOrphan,
      hasOrphanIndexPage,
      needsExtraPage,
      maxLocation,
      onePropLeft,
      threePropLeft,
      idPublicity,
      hasPublicity
    ]
  );
  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};
