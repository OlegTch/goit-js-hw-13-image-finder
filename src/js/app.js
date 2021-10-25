import ImagesApiService from './apiService.js';
import getRefs from './getRefs.js';

import formTpl from '../templates/form.hbs';
import galleryTpl from '../templates/gallery.hbs';

import debounce from 'lodash.debounce';

import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';

defaultModules.set(PNotifyMobile, {});

const refs = getRefs();
const { loadButton, listContainer, formContainer } = refs;

const imagesApiService = new ImagesApiService();

onDisableButtonLoadMore();

function createFormMarkup(form) {
  return formTpl(form);
}

const formMarkup = createFormMarkup();
formContainer.insertAdjacentHTML('afterbegin', formMarkup);

const inputRef = document.querySelector('input');
inputRef.addEventListener('input', debounce(onSearch, 1000));

listContainer.addEventListener('click', event => event.preventDefault());

loadButton.addEventListener('click', onLoadMoreClick);

function onSearch(event) {
  // clearGalleryContainer();
  imagesApiService.query = event.target.value;
  if (imagesApiService.query === '') {
    clearGalleryContainer();
    onDisableButtonLoadMore();
    return onFetchError();
  }

  onEnableButtonLoadMore();
  imagesApiService.resetPage();
  imagesApiService.fetchImages().then(hits => {
    clearGalleryContainer();
    appendGalleryMarkup(hits);
  });
}

function onLoadMoreClick() {
  imagesApiService.incrementPage();
  imagesApiService.fetchImages().then(appendGalleryMarkup);
  //
  setTimeout(() => smoothScroll(), 1000);
}

function appendGalleryMarkup(hits) {
  listContainer.insertAdjacentHTML('beforeend', galleryTpl(hits));
}

function clearGalleryContainer() {
  listContainer.innerHTML = '';
}

function smoothScroll() {
  const elems = document.querySelectorAll('.gallery');
  elems[elems.length - 1].scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}

function onFetchError(error) {
  alert({
    text: 'Введены неправильные данные',
    delay: 1500,
  });
}

function onEnableButtonLoadMore() {
  loadButton.classList.remove('is-hidden');
}

function onDisableButtonLoadMore() {
  loadButton.classList.add('is-hidden');
}
