export const INDEX_COMPONENT_TYPE = {
  ITEM_HEADER: 'itemHeader',
  ITEM_INDEX: 'itemIndex',
};
export const generateIndexContent = (
  orderedDevelopments,
  columnsPerPage,
  maxItemsPerColumn
) => {
  const indexPages = [];
  const totalIndexPages = Math.ceil(
    orderedDevelopments.length / (maxItemsPerColumn * columnsPerPage)
  );

  orderedDevelopments = orderedDevelopments.map((item, i) => ({
    ...item,
    page: Math.floor(i / 2) + totalIndexPages + 1, // tenemos 2 propiedades por pagina, damos el numero base y sumamos pageoffset
  }));

  // Agrupar por town
  const groupedByTown = groupedDevelopementsByTown(orderedDevelopments);
  Object.keys(groupedByTown).forEach((town) =>
    appendTownToIndex(
      //agregamos los elementos del indice paginado
      indexPages, //patginas actuales
      groupedByTown[town], //lista de desarrollo de esa localidad
      columnsPerPage,
      maxItemsPerColumn
    )
  );

  return indexPages; //devolvemos las paginas del indice generadas
};

export const groupedDevelopementsByTown = (orderedDevelopments) => {
  return orderedDevelopments.reduce((acc, item) => {
    const town = item.town || 'Otras Zonas'; //si no tiene localidad agrupamos en otras zonas
    if (!acc[town]) acc[town] = []; //si no ahi array lo creamos
    acc[town].push(item); //agregamos el item al grupo
    return acc;
  }, {});
};

export const appendTownToIndex = (
  indexPages,
  developments,
  columnsPerPage,
  maxItemsPerColumn
) => {
  const nextColumnWithSpace = indexPages
    .at(-1)
    ?.find((column) => column.length < maxItemsPerColumn);

  if (!nextColumnWithSpace) {
    //agregamos nueva pagina vacia si no ahi columna.
    indexPages.push(getNewIndexPage(columnsPerPage));
    return appendTownToIndex(
      indexPages,
      developments,
      columnsPerPage,
      maxItemsPerColumn
    );
  }

  const needHeader = !indexPages //verificamos si ya ahi un item para la localidd
    .flat(2)
    .find(
      (indexItem) =>
        indexItem.componentType === INDEX_COMPONENT_TYPE.ITEM_HEADER &&
        indexItem.town === developments[0].town
    );

  if (needHeader)
    developments = [
      {
        town: developments[0].town,
        totalDevelopments: developments.length,
        componentType: INDEX_COMPONENT_TYPE.ITEM_HEADER,
      },
      ...developments,
    ];

  const totalSpacesRequired = developments.length;

  const totalSpacedAvailable = maxItemsPerColumn - nextColumnWithSpace.length;

  const developmentsFitInTheColumn =
    totalSpacesRequired <= totalSpacedAvailable;

  const developmentsToBeProccess = developmentsFitInTheColumn
    ? developments
    : developments.slice(0, totalSpacedAvailable);
  const restDevelopments = developmentsFitInTheColumn
    ? []
    : developments.slice(totalSpacedAvailable, developments.length);

  const newIndexItems = developmentsToBeProccess.map((development) =>
    development.componentType
      ? development
      : {
          componentType: INDEX_COMPONENT_TYPE.ITEM_INDEX,
          ...development,
        }
  );

  newIndexItems.forEach((item) => {
    nextColumnWithSpace.push(item);
  });

  return !restDevelopments.length
    ? indexPages
    : appendTownToIndex(
        indexPages,
        restDevelopments,
        columnsPerPage,
        maxItemsPerColumn
      );
};

export const getNewIndexPage = (columnsPerPage) =>
  Array.from({ length: columnsPerPage }, () => []);
