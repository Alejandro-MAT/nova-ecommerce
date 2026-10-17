import { bannerPrincipal } from "../../data/bannerPrincipal";

export function renderBannerPrincipal() {
  const bannerPrincipalImg = document.getElementById("principalBanner-img");

  if (bannerPrincipalImg) {
    bannerPrincipalImg.title = bannerPrincipal.title;
    bannerPrincipalImg.alt = bannerPrincipal.alt;
    bannerPrincipalImg.src = bannerPrincipal.imageUrl;
  }
}
