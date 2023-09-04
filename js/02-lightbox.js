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
          <img class="gallery__image" src="${original}" alt="${description}" title="${description}">
        </a>
      </li>`
    }).join('');
};

function onClick (evt) {
   if (evt.target === evt.currentTarget) {
    return;
   }
evt.preventDefault();

var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250
});
 
};
console.log(galleryItems);
