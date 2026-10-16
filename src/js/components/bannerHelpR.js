import { bannerHelp } from "../../data/bannerHelp";

export function renderBannerHelp() {
  const divImage = document.getElementById("help-banner-img");

  if (divImage) {
    divImage.src = bannerHelp.imageUrl;
  }
}
