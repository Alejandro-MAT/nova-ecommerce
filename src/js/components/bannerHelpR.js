import { bannerHelp } from "../../data/bannerHelp";

export function renderBannerHelp() {
  const divImageHelp = document.getElementById("help-banner-img");

  if (divImageHelp) {
    divImageHelp.src = bannerHelp.imageUrl;
    divImageHelp.alt = bannerHelp.alt;
  }
}
