import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

gallery.innerHTML = galleryItems
  .map(
    (image) => `<li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`
  )
  .join("");

const openImage = (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  const closeImage = (e) => {
    if (e.code !== "Escape") {
      return;
    }
    instance.close();
    gallery.removeEventListener("keydown", closeImage);
  };

  gallery.addEventListener("keydown", closeImage);
};

gallery.addEventListener("click", openImage);
