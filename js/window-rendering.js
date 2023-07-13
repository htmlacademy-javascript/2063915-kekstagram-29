// eslint-disable-next-line no-unused-vars
const bigPictureOpenElement = document.querySelector('.big-picture');
// eslint-disable-next-line no-unused-vars
const bigPictureCloseElement = document.querySelector('big-picture__cancel');
// eslint-disable-next-line no-unused-vars
const socialCommentCount = document.querySelector('.social__comment-count');
// eslint-disable-next-line no-unused-vars
const commentsLoader = document.querySelector('.comments-loader');
// eslint-disable-next-line no-unused-vars
const bigPictureImg = document.querySelector('.big-picture__img img');
// eslint-disable-next-line no-unused-vars
const likesCount = document.querySelector('.likes-count');
// eslint-disable-next-line no-unused-vars
const commentsCount = document.querySelector('.comments-count');
// eslint-disable-next-line no-unused-vars
const socialComments = document.querySelector('.social__comments');
// eslint-disable-next-line no-unused-vars
const socialCption = document.querySelector('.social__caption');

// eslint-disable-next-line no-unused-vars
const onDocumentKeydown = (evt) => {
  // eslint-disable-next-line no-undef
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closebigPicture();
  }
};

// eslint-disable-next-line no-unused-vars
const drawComment = (comment) => {
  const commentLi = document.createElement('li');
  commentLi.classList.add('social__comments');
  const commentImg = document.createElement('img');
  commentImg.src = comment.avatar;
  commentImg.alt = comment.name;
  commentImg.classList.add('social__picture');
  commentLi.append(commentImg);

  // eslint-disable-next-line no-unused-vars
  const commentMessage = document.createElement('p');
  commentMessage.textContent = comment.message;
  commentMessage.classList.add('social__text');
  commentLi.append(commentMessage);


  return commentLi;
};

// eslint-disable-next-line no-unused-vars
function openbigPicture (data) {
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  bigPictureOpenElement.classList.remove('hidden');

  bigPictureImg.src = data.url;
  likesCount.textContent = data.likes;
  socialCption.textContent = data.description;


  // eslint-disable-next-line no-undef
  bigPictureComments.innerHTML = '';
  document.body.classList.add('modal-open');

  data.comments.forEach((comment) => {
    const commentHtml = drawComment(comment);
    // eslint-disable-next-line no-undef
    bigPictureComments.append(commentHtml);
  });

  document.addEventListener('keydown', onDocumentKeydown);

}

// eslint-disable-next-line no-unused-vars
function closebigPicture () {
  bigPictureOpenElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);

  bigPictureCloseElement.addEventListener('click', () => {
    closebigPicture();
  });
}

export {openbigPicture, closebigPicture, drawComment};

