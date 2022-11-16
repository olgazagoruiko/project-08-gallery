const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower'
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight'
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View'
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms'
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains'
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing'
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows'
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape'
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea'
  },
];

//  Розмітка елемента галереї
// Посилання на оригінальне зображення повинне зберігатися в data-атрибуті source на елементі img, і вказуватися в href посилання (це необхідно для доступності).

// <li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//   >
//     <img
//       class="gallery__image"
//       src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
//       data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//       alt="Tulips"
//     />
//   </a>
// </li>

// 1. Pендер розмітки по масиву даних galleryItems з app.js і наданим шаблоном

const makeImageGallery = function (galleryImages) {
  const {preview, original, description} = galleryImages;
  return `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
  </a>
  </li>`
  
}
const makeGalleryImages = galleryItems.map(makeImageGallery).join("");
console.log(makeGalleryImages);

const ulContainer = document.querySelector('.js-gallery');
ulContainer.insertAdjacentHTML('beforeend', makeGalleryImages);

// 2. Реалізація делегування на галереї ul.js-gallery і отримання url великого зображення.


const backDropBox = document.querySelector('.lightbox');
const imgEl = backDropBox.querySelector('.lightbox__image');
const btnClose = document.querySelector('.lightbox__button');
const overlayBox = document.querySelector('.lightbox__overlay');
window.addEventListener('keydown', onEscKeyPress);


ulContainer.addEventListener('click', openModal);
btnClose.addEventListener('click', closeModal);
overlayBox.addEventListener('click',onOverlayClick)

function openModal(event) {
  const isImageEl = event.target.classList.contains('gallery__image');
  if (!isImageEl) {
    return
  };
  console.log(event.target);
  console.log(event.target.dataset.source);
  const urlImage = event.target.dataset.source;
//3. Відкриття модального вікна при натисканні на елементі галереї.
  
  backDropBox.classList.add('is-open');
  
  console.log(imgEl);
  imgEl.src = urlImage;
}
// 4. Закриття модального вікна при натисканні на кнопку button


function closeModal(event) {
  backDropBox.classList.remove('is-open');
  imgEl.src = '';

}
function onOverlayClick(event) {
  if (event.curentTarget === event.Target) {
  closeModal(event);
  }
}
function onEscKeyPress(event) {
  console.log(event);
  if (event.code ==="Escape") {
  closeModal();
  }
}

