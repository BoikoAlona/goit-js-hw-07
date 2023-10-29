import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(`.gallery`);

function randerList() {
    const markup = galleryItems
        .map(({ preview, original, description }) => {
            return `<li class="gallery__item">
            <a class="gallery__link" href=${original}>
            <img class="gallery__image" src =${preview}
            alt = ${description}/>
            </a>
            </li>`;
        })
        .join(``);
    galleryList.innerHTML = markup;
}

randerList();

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});