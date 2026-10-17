import "./style.css";
import { createIcons } from "lucide";
import * as lucideIcons from "lucide";
import { renderBannerHelp } from "./js/components/bannerHelpR";
import { renderBannerPrincipal } from "./js/components/bannerPrincipalR.js";
import { renderProductsData } from "./js/components/productsDataR.js";

document.addEventListener("DOMContentLoaded", () => {
  createIcons({
    icons: lucideIcons,
  });

  renderBannerPrincipal();
  renderBannerHelp();
  renderProductsData();
});
