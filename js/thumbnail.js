import { openBigPicture } from './window-rendering.js';

const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const container = document.querySelector('.pictures');


const createThumbnail = (data) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = data.url;
  thumbnail.querySelector('.picture__img').alt = data.description;

  thumbnail.querySelector('.picture__comments').textContent = data.comments.length;
  thumbnail.querySelector('.picture__likes').textContent = data.likes;

  thumbnail.addEventListener('click', () => openBigPicture(data));

  return thumbnail;
};


const renderThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });
  container.append(fragment);
};

export{renderThumbnails};
