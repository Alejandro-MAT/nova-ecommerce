// ==========================================================================
// 1. IMPORTACIONES DE ESTILOS Y Librerías
// ==========================================================================

// Importa el archivo de estilos globales configurado con Tailwind CSS
// para que se apliquen los diseños y colores personalizados en toda la aplicación.
import "./style.css";

// Importa la función principal 'createIcons' de la librería Lucide,
// la cual se encarga de transformar las etiquetas HTML en iconos vectoriales SVG.
import { createIcons } from "lucide";

// Importa TODO el paquete de iconos de Lucide agrupándolos bajo un comodín (*).
// Esto permite que cualquier icono que llames en tu HTML con 'data-lucide' se renderice automáticamente.
import * as lucideIcons from "lucide";

// ==========================================================================
// 2. INICIALIZACIÓN DE LA APLICACIÓN Y RENDERIZADO DE ICONOS
// ==========================================================================

// Escucha el evento 'DOMContentLoaded' para garantizar que el navegador
// haya leído y construido todo el HTML antes de intentar pintar los iconos.
document.addEventListener("DOMContentLoaded", () => {
  // Ejecuta la función que busca en todo tu documento HTML las etiquetas
  // con atributos 'data-lucide="..."' y las sustituye por los iconos gráficos correspondientes.
  createIcons({
    icons: lucideIcons,
  });
});
