import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");

const markup = createMarkup(galleryItems);

container.insertAdjacentHTML("beforeend", markup);

function createMarkup(arr) {
  return arr
    .map(({ original, description }) => {
      return `<li class="gallery__item">
              <a href="${original}" class="gallery__link">
                <img class="gallery__image" src="${original}" alt="${description}" title="${description}">
              </a>
            </li>`;
    })
    .join("");
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});

console.log(galleryItems);
