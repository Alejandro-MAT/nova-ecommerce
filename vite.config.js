import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite"; // <-- El plugin oficial de Tailwind v4

export default defineConfig({
  plugins: [
    tailwindcss(), // <-- Activamos el plugin aquí
  ],
});
