import ImagesApiService from './apiService.js';
import getRefs from './getRefs.js';

import formTpl from '../templates/form.hbs';
import galleryTpl from '../templates/gallery.hbs';
// import imagesTpl from '../templates/images.hbs';
// import debounce from 'lodash.debounce';
// console.log('API: ', API);

console.log('ImagesApiService', ImagesApiService);
const refs = getRefs();
const { bodyContainer } = refs;
//

//
function createFormMarkup(form) {
  return formTpl(form);
}

function createGalleryMarkup(gallery) {
  return galleryTpl(gallery);
}

// function createImagesMarkup(images) {
//   return imagesTpl(images);
// }

// console.log(createFormMarkup());
// const bodyContainer = document.querySelector('body');
// const imageItem = document.querySelector('.js-image-item');
const formMarkup = createFormMarkup();
const galleryMarkup = createGalleryMarkup();

// const imagesMarkup = createImagesMarkup();
// const formMarkup = formTpl();
// console.log(bodyContainer);
console.log(galleryMarkup);
// formContainer.insertAdjacentHTML('beforeend', formMarkup);
bodyContainer.insertAdjacentHTML('afterbegin', formMarkup);
// bodyContainer.append(formMarkup);
bodyContainer.insertAdjacentHTML('beforeend', galleryMarkup);
// const imageItem = document.querySelector('.js-image-item');

// console.log(imageItem);
// bodyContainer.insertAdjacentHTML('beforeend', imagesMarkup);
// imageItem.insertAdjacentHTML('beforeend', imagesMarkup);
// // formMarkup.insertAdjacentHTML('afterend', galleryMarkup);
// console.log(bodyContainer);

// function makeCountriesList(countres) {
//   let listMarkup = countres.map(country => {
//     return `<li>${country.name}</li>`;
//   });
//   refs.list.innerHTML = listMarkup;
// }
