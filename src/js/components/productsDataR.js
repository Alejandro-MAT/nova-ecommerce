import { productsData } from "../../data/productsData";
import { icons, createIcons } from "lucide";

let visibleCount = 3;

export function renderProductsData() {
  const cardsContainer = document.getElementById("product-grid");
  const buttonLoadCards = document.getElementById("load-more-btn");

  if (!cardsContainer) return;

  const currenProducts = productsData.slice(0, visibleCount);

  cardsContainer.innerHTML = currenProducts
    .map(
      (product) => `
    <div class="w-full p-2 gap-2 rounded-xl border border-border text-xs text-white">
              <div class="flex justify-between relative">
                <span class="bg-brand absolute left-2 top-2 rounded-xl px-2 py-1.5">-20%</span>
                <button type="button" class="bg-white text-brand absolute right-2 top-2 rounded-lg p-1.5 hover:text-red-600 hover:cursor-pointer">
                  <i data-lucide="heart" class="w-4 h-4"></i>
                </button>
              </div>
              <img src="${product.image}" alt="${product.name}" class="rounded-xl">

              <div class="flex flex-col gap-1 relative">
                <span>${product.name}</span>
                <p class="text-xs text-muted">${product.category}</p>
                <span class="font-semibold">${product.price}</span>
              </div>

              <button type="button" class="flex gap-2 items-center text-gray-custom bg-brand rounded-xl p-2 w-full justify-center hover:cursor-pointer hover:text-accent transition-colors duration-300">
                <i data-lucide="shopping-cart" class="h-5 w-5"></i>
                <span class="font-semibold">Agregar al carrito</span>
              </button>

             </div>
    `,
    )
    .join("");

  createIcons({ icons });

  if (buttonLoadCards) {
    if (visibleCount >= productsData.length) {
      buttonLoadCards.classList.add("hidden");
    } else {
      buttonLoadCards.classList.remove = "hidden";
    }

    buttonLoadCards.onclick = () => {
      visibleCount += 6;
      renderProductsData();
    };
  }
}
