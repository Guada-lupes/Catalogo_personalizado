import { getStatusDateInfo } from '../utils/getStatusDateInfo';

export const transformCatalogData = (rawData, idioma = 'es') => {
  if (!Array.isArray(rawData)) {
    console.error('rawData no es un array:', rawData);
    return [];
  }
  return rawData
    .filter((item) => item.visible)
    .map((item) => {
      // Validamos los campos y asignamos valores predeterminados si es necesario
      const title =
        (typeof item.title === 'object' ? item.title[idioma] : item.title) ||
        (idioma === 'es' ? 'Título no disponible' : 'Title not available');

      const areaText =
        (typeof item.area === 'object' ? item.area[idioma] : item.area) ||
        (idioma === 'es' ? 'Ubicación desconocida' : 'Location unknown');
      const townText =
        item.town || (idioma === 'es' ? 'Ciudad desconocida' : 'Unknown city');
      const location = `${areaText}, ${townText}`;
      
      const reference =
        (typeof item.reference === 'object'
          ? item.reference[idioma]
          : item.reference) ||
        (idioma === 'es'
          ? 'Referencia no disponible'
          : 'Reference not available');
      const status =
        (typeof item.status === 'object' ? item.status[idioma] : item.status) ||
        (idioma === 'es' ? 'Estado no disponible' : 'Status not available');

      const type =
        (typeof item.type === 'object' ? item.type[idioma] : item.type) ||
        (idioma === 'es' ? 'Tipo no disponible' : 'Type not available');
      const statusDateInfo = getStatusDateInfo(
        item.status,
        item.start_date,
        item.completion_date,
        idioma
      );

      const priceMin = item.price?.min ?? null;
      const priceMax = item.price?.max ?? null;
      const priceRange =
        priceMin !== null && priceMax !== null
          ? `${priceMin.toLocaleString()} € - ${priceMax.toLocaleString()} €`
          : priceMin !== null
          ? `${priceMin.toLocaleString()} €`
          : priceMax !== null
          ? `${priceMax.toLocaleString()} €`
          : idioma === 'es'
          ? 'Precio no disponible'
          : 'Price not available';

      const image =
        item.pictures?.[0]?.pic_md.replace('https://admin.zoddak.com', '') ||
        (idioma === 'es' ? 'Imagen no disponible' : 'Image not available');

      const beds =
        item.beds?.min && item.beds?.max
          ? `${item.beds.min} - ${item.beds.max}`
          : 'N/D';

      const baths =
        item.baths?.min && item.baths?.max
          ? `${item.baths.min} - ${item.baths.max}`
          : 'N/D';

      const area =
        item.areas?.built_area?.min && item.areas?.built_area?.max
          ? `${item.areas.built_area.min} - ${item.areas.built_area.max} m²`
          : 'N/D';

      const town =
        item.town || (idioma === 'es' ? 'Ciudad desconocida' : 'Unknown city');

      // Si el proyecto tiene campos faltantes, mostramos una advertencia
      if (!title || !image || !location) {
        console.warn(
          'Proyecto con campos faltantes en índice',
          rawData.indexOf(item),
          item
        );
      }

      return {
        title,
        areaText,
        location,
        areaText,
        status,
        statusDateInfo,
        type,
        reference,
        priceRange,
        image,
        town,
        beds,
        area,
        baths,
      };
    });
};
