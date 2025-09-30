# Catalogo_personalizado

Aplicación para generar un catálogo inmobiliario dinámico y personalizable. A través de un formulario inicial, podemos configurar el aspecto y contenido del catálogo para adaptarlo a distintas necesidades.

---

## Funcionalidades

-  **Selección de agencia:** personaliza el catálogo con el logo y color corporativo de la agencia.
-  **Idioma:** soporte para español (ES) e inglés (EN).
-  **Publicidad opcional:** incluye anuncios según convenga.
-  **Zonas:** configuración de áreas geográficas para filtrar propiedades.
-  **Modo FlippedBook online:**  
  Virtualización dinámica que carga 5 páginas simultáneamente según la posición del usuario, permitiendo catálogos de hasta **450 viviendas** sin pérdida de rendimiento.
-  **Versión PDF imprimible:**  
  Generación automática de revista digital usando **React-PDF**.
-  **Integración con API ZODDAK:**  
  Consumo de datos mediante peticiones asíncronas autenticadas con token.

---

## 🚀 ¿Qué aprendí y mejoré?

- Diseño de componentes **React** limpios y modulares, con lógica encapsulada y responsabilidad única.
- Escritura de lógica **JavaScript** clara y reutilizable:  
  cada función y hook cumple una sola tarea y puede aprovecharse en distintos contextos.
- Optimización de rendimiento con Hooks:  
  - `useMemo` para cachear cálculos costosos (paginación, agrupado).  
  - `useCallback` y `React.memo` para evitar renders innecesarios.
- Fortalecí mi experiencia con **Git** y **GitHub** para control de versiones.

---

## Tecnologías utilizadas

`JavaScript` | `HTML` | `CSS` | `React` | `Vite` | `React Router Dom` | `React-PDF` | `React.memo` | `Bootstrap`

---
