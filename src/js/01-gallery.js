// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const newGallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    image =>
      `
        <a class="gallery__item" href="${image.original}">
            <img class="gallery__image"
            src="${image.preview}"
            alt="${image.description}" />
        </a>
      `,
  )
  .join('');

newGallery.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

// const lightbox = new SimpleLightbox('.gallery a', {
//   /* options */
//   captions: true,
//   captionsData: 'alt',
//   captionDelay: 250,
// });
