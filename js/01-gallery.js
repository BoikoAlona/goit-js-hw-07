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
            class="gallery__link" data-source=${original}
            alt = ${description}/>
            </a>
            </li>`;
        })
        .join(``);
    galleryList.innerHTML = markup;
}

randerList();

galleryList.addEventListener("click", openModal);

function openModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create
        (`<img src="${event.target.dataset.source}"
    width="800" height="600">`);
    instance.show();
    
    window.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            instance.close();
        }
    })
}