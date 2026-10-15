import "./style.css";
import { createIcons } from "lucide";
import * as lucideIcons from "lucide";

document.addEventListener("DOMContentLoaded", () => {
  createIcons({
    icons: lucideIcons,
  });
});
