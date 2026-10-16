import "./style.css";
import { createIcons } from "lucide";
import * as lucideIcons from "lucide";
import { renderBannerHelp } from "./js/components/bannerHelpR";

document.addEventListener("DOMContentLoaded", () => {
  createIcons({
    icons: lucideIcons,
  });

  renderBannerHelp();
});
