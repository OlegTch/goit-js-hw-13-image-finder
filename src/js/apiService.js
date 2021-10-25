import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';

export default class ImagesApiService {
  constructor() {
    this.API_KEY = `23915751-8a3ca73cec67b4d724eaf6158`;
    this.BASE_URL = `https://pixabay.com/api/`;
    this.searchQuery = '';
    this.pageNumber = 1;
    this.pageSize = 12;
  }

  fetchImages = () => {
    console.log('До запроса', this);
    const url = `${this.BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.pageNumber}&per_page=${this.pageSize}&key=${this.API_KEY}`;

    return fetch(url)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then(data => {
        // this.incrementPage();
        // console.log(data.hits);
        console.log('После запроса', this);
        return data.hits;
      })
      .catch(error =>
        // console.log(error)
        this.onFetchError(error),
      );

    // .catch(error => this.onFetchError(error));

    // fetchImages = async () =>
    // try {
    //   const response = await fetch(url);
    //   const data = await response.json();
    //   console.log(data.hits);
    //   return data;
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  incrementPage = () => {
    this.pageNumber += 1;
  };

  resetPage = () => {
    this.pageNumber = 1;
  };

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  onFetchError = error => {
    alert({
      text: 'Ошибка запроса',
      delay: 1500,
    });
  };

  // Второй способ
  //     fetch(url)
  //     .then(response => {
  //       // console.log('response', response);
  //       if (response.status === 200) {
  //         console.log('all good');
  //         return response.json();
  //       }
  //     })
  //     .then(data => {
  //       // console.log(data);
  //       console.log(data.hits);
  //     })
  //     .catch(error => console.log(error.message));
  // };
}

// new ImagesApiService().fetchImages();
// //
// // https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=${apiKey}
// // const baseUrl = ` https://pixabay.com/api/`;
// const apiKey = `23915751-8a3ca73cec67b4d724eaf6158`;
// // const options = {
// //   headers: {
// //     Authorization: '23915751-8a3ca73cec67b4d724eaf6158',
// //   },
// // };

// let someName = 'cat';
// let pageNumber = 1;
// let pageSize = 12;

// const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${someName}&page=${pageNumber}&per_page=${pageSize}&key=${apiKey}`;
// // fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${someName}`, options)
// // fetch(
// //   `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${someName}&page=${pageNumber}&per_page=${pageSize}`,
// //   options,
// // )

// export default class ImagesApiService {
//   constructor() {
//     // this.loadButton = document.querySelector('.button');
//     this.list = document.querySelector('.gallery');
//     // this.imput = document.querySelector('input');
//   }

//   addListeners = () => {
//     console.log('addListeners');
//     console.log(this.loadButton);
//     console.log(this.list);
//     console.log(this.imput);
//   };

//   init = () => {
//     console.log('START');
//     this.addListeners();
//   };
// }

// new ImagesApiService().init();

// fetch(url, {})
//   .then(response => {
//     // console.log('response', response);
//     if (response.status === 200) {
//       console.log('all good');
//       return response.json();
//     }
//   })
//   .then(data => {
//     // console.log(data);

//     console.log(data.hits);
//   })
//   .catch(error => console.log(error.message));

// // fetch(url, {})
// //   .then(response => {
// //     // console.log('response', response);
// //     if (response.status === 200) {
// //       console.log('all good');
// //       return response.json();
// //     }
// //   })
// //   .then(data => {
// //     // console.log(data);

// //     console.log(data.hits);
// //   })
// //   .catch(error => console.log(error.message));

// //
// //
// // function fetchImageByName(imageName) {
// //   fetch(
// //     url,
// //     // options,
// //   )
// //     .then(responce => responce.json())
// //     .then(console.log);
// // }

// // export default { fetchImageByName };

// //   что_искать&page=номер_страницы&per_page=12&key=${apiKey}
