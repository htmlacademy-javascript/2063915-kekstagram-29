import { isEscapeKey} from './util.js';
const bigPictureOpenElement = document.querySelector('.big-picture');

const bigPictureCloseElement = document.querySelector('.big-picture__cancel');

const socialCommentCount = document.querySelector('.social__comment-count');

const commentsLoader = document.querySelector('.comments-loader');

const bigPictureImg = document.querySelector('.big-picture__img img');

const likesCount = document.querySelector('.likes-count');

// eslint-disable-next-line no-unused-vars
const commentsCount = document.querySelector('.comments-count');

const socialComments = document.querySelector('.social__comments');

const socialCption = document.querySelector('.social__caption');


const onDocumentKeydown = (evt) => {

  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};


const drawComment = (comment) => {
  const commentLi = document.createElement('li');
  commentLi.classList.add('social__comments');
  const commentImg = document.createElement('img');
  commentImg.src = comment.avatar;
  commentImg.alt = comment.name;
  commentImg.classList.add('social__picture');
  commentLi.append(commentImg);


  const commentMessage = document.createElement('p');
  commentMessage.textContent = comment.message;
  commentMessage.classList.add('social__text');
  commentLi.append(commentMessage);


  return commentLi;
};


function openBigPicture (data) {
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  bigPictureOpenElement.classList.remove('hidden');

  bigPictureImg.src = data.url;
  likesCount.textContent = data.likes;
  socialCption.textContent = data.description;
  socialComments.innerHTML = '';
  document.body.classList.add('modal-open');

  data.comments.forEach((comment) => {
    const commentHtml = drawComment(comment);
    socialComments.append(commentHtml);
  });
  bigPictureCloseElement.addEventListener('click', () => {
    closeBigPicture();
  });
  document.addEventListener('keydown', onDocumentKeydown);

}


function closeBigPicture () {
  bigPictureOpenElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
}

export {openBigPicture, closeBigPicture, drawComment};

