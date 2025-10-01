export function getPageDataById(
    pageId,
    needsExtraPage,
    numOfPapers,
    numOfPapersIndex,
    numOfPagesIndex,
    propertiesStartNum,
    paginatedItems,
    hasOrphanIndexPage,
    idPublicity,
    sortData,
    sortPublicity,
    hasPublicity
) {
  if (pageId === 1) {
    return { type: "cover" };
  }
  //Ultima pagina: si hay una pagina extra
  if (needsExtraPage && pageId === numOfPapers) {
    return { type: "lastPage", id: pageId };
  }
  //Indice: si es mayor que 1 y menor o igual que el numero de hojas del indice
  //considerar si hasOrphanIndexPage
  if (pageId > 1 && pageId <= numOfPapersIndex + 1) {
    
    //posición en el array
    const itemPosition = (pageId - 1) * 2;
    //si tiene huerfana, y estamos en la ultima pagina del indice, le enviamos la data de front y back
    if (hasOrphanIndexPage && pageId == numOfPapersIndex + 1) {
      //enviamos el ultimo elemento de array
      const contentFront = paginatedItems[numOfPagesIndex - 1];
      const contentBack =   sortData.slice(0, 2);
      return { type: "index", contentFront, contentBack, id: pageId };
    }
    const contentFront = paginatedItems[itemPosition - 2];
    const contentBack = paginatedItems[itemPosition - 1];
    return { type: "index", contentFront, contentBack, id: pageId };
  }
  if (pageId > numOfPapersIndex + 1 && pageId <= numOfPapers) {
    //Tiene publicidad
    if(hasPublicity){
      
    if (pageId < idPublicity &&  pageId !=idPublicity) {
      //calculamos la base del corte
      const propSliceStartAt =
        (pageId - (numOfPapersIndex + 1) - 1) * 4 + propertiesStartNum;
      //creamos la porcion de data
            console.log(sortData, pageId, idPublicity, propSliceStartAt);
      const items = sortData.slice(propSliceStartAt, propSliceStartAt + 4);
      return {
        type: "properties",
        items,
        id: pageId,
      };
    }
    if(pageId > idPublicity && pageId !=idPublicity){
      const propSliceStartAt =
        ((pageId-1) - (numOfPapersIndex + 2)) * 4 + propertiesStartNum;
      //creamos la porcion de data
      const items = sortData.slice(propSliceStartAt, propSliceStartAt + 4);
      return {
        type: "properties",
        items,
        id: pageId,
      };
    }
    if (pageId === idPublicity) {
            console.log(idPublicity);
      return { type: "publicity", id: pageId };
    }
    }
    //No tiene publicidad
    if(!hasPublicity){
      const propSliceStartAt =
        (pageId - (numOfPapersIndex + 2)) * 4 + propertiesStartNum;
      //creamos la porcion de data
      const items = sortData.slice(propSliceStartAt, propSliceStartAt + 4);
      return {
        type: "properties",
        items,
        id: pageId,
      };
    }
  } //retorna un objeto
}
