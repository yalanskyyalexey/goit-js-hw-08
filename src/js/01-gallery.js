// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const newGallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    image =>
      `
        <div class="gallery__item">
            <a class="gallery__link" href="${image.original}">
                <img
                    class="gallery__image"
                    src="${image.preview}"
                    data-source="${image.original}"
                    alt="${image.description}"
                />
            </a>
        </div>
        `,
  )
  .join('');

newGallery.insertAdjacentHTML('beforeend', markup);
newGallery.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();

  document.removeEventListener('keydown', onEscDown);

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`, {
    onClose: instance => {
      document.removeEventListener('keydown', onEscDown);
    },
  });

  instance.show();

  document.addEventListener('keydown', onEscDown);

  function onEscDown(event) {
    if (event.code === 'Escape') {
      instance.close();
      document.removeEventListener('keydown', onEscDown);
    }
  }
}
