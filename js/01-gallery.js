import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery')

const markup = creatMarkup(galleryItems)

container.insertAdjacentHTML('beforeend', markup);
container.addEventListener('click', onClick);

function creatMarkup (arr) {
    return arr.map(({ original, description }) => {
        return `<li class="gallery__item">
        <a href="${original}" class="gallery__link">
          <img class="gallery__image" src="${original}" alt="${description}" data-source="${original}">
        </a>
      </li>`
    }).join('');
};

function onClick (evt) {
   if (evt.target === evt.currentTarget) {
    return;
   }
evt.preventDefault();

const targetEl = evt.target.closest(".gallery__image");

const instance = basicLightbox.create(
    `<div class="modal">
    <img src="${targetEl.dataset.source}" alt="${targetEl.alt}"/>
    </div>` 
);

instance.show();
};





