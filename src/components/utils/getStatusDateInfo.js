// Función que genera una descripción formateada de fechas del proyecto basada en su estado
export const getStatusDateInfo = (
  status,
  startDateRaw,
  completionDateRaw,
  idioma = 'es'
) => {
  //traduciones en caso de error.

  const translations = {
    es: {
      started: 'comenzado',
      upcoming: 'próximamente',
      finished: 'terminado',
      planned: 'sobre plano',
      licensed: 'con licencia',
      toConsult: 'A Consultar',
      labels: {
        start: 'Inicio',
        completion: 'Finalización',
        finished: 'Finalizado',
      },
    },
    en: {
      started: 'started',
      upcoming: 'upcoming',
      finished: 'finished',
      planned: 'planned',
      licensed: 'licensed',
      toConsult: 'To Consult',
      labels: {
        start: 'Start',
        completion: 'Completion',
        finished: 'Finished',
      },
    },
  };
  const lang = translations[idioma] || translations['es'];

  // Valores inválidos comunes que queremos ignorar
  const invalidValues = ['none', 'n/a', '', null, undefined];

  // Función auxiliar para validar un campo de texto
  const isValid = (value) =>
    typeof value === 'string' &&
    !invalidValues.includes(value.trim().toLowerCase());

  const fallbackValue = lang.toConsult;

  // Si el valor no es válido, usamos 'A Consultar'
  const startDate = isValid(startDateRaw?.[idioma])
    ? startDateRaw[idioma]
    : fallbackValue;

  const completionDate = isValid(completionDateRaw?.[idioma])
    ? completionDateRaw[idioma]
    : fallbackValue;

  // Normalizamos el status
  let statusText = isValid(status?.[idioma])
    ? status[idioma].toLowerCase()
    : '';

  // Aceptamos también 'completed' como equivalente a 'finished'
  if (statusText === 'completed') {
    statusText = lang.finished;
  }

  let statusDateInfo = '';

  switch (statusText) {
    case lang.started:
      statusDateInfo = `${lang.labels.completion}: ${completionDate}`;
      break;

    case lang.upcoming:
      statusDateInfo = `${lang.labels.start}: ${startDate}\n${lang.labels.completion}: ${completionDate}`;
      break;

    case lang.finished:
      // Solo mostramos la fecha de finalización
      statusDateInfo = `${lang.labels.finished}: ${completionDate}`;
      break;

    case lang.planned:
      // Mostramos inicio y finalización, separados con salto de línea
      statusDateInfo = `${lang.labels.start}: ${startDate}\n${lang.labels.completion}: ${completionDate}`;
      break;

    case lang.licensed:
      // Solo mostramos la fecha de inicio
      statusDateInfo = `${lang.labels.start}: ${startDate}`;
      break;

    default:
      // Estado no reconocido o faltante
      statusDateInfo = fallbackValue;
  }

  // Envuelve el texto respetando palabras, insertando saltos de línea en espacios
  const wrapText = (text, maxLength = 50) => {
    if (text.length <= maxLength) return text;

    const words = text.split(' ');
    let lines = [];
    let currentLine = '';

    for (const word of words) {
      // Si al agregar la palabra actual se supera el límite, creamos una nueva línea
      if ((currentLine + word).length > maxLength) {
        lines.push(currentLine.trim());
        currentLine = word + ' ';
      } else {
        currentLine += word + ' ';
      }
    }

    // Agregamos la última línea si quedó algo
    if (currentLine.trim()) {
      lines.push(currentLine.trim());
    }

    return lines.join('\n');
  };

  return wrapText(statusDateInfo);
};
