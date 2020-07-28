'use strict';

(function () {
  var body = document.querySelector('body');
  var bigPicture = document.querySelector('.big-picture');
  var bigPictureComments = bigPicture.querySelector('.social__comments');
  var bigPictureComment = bigPicture.querySelector('.social__comment');
  var bigPictureClose = bigPicture.querySelector('.big-picture__cancel');
  var commentsLoader = bigPicture.querySelector('.comments-loader');

  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  commentsLoader.classList.add('hidden');

  var renderComment = function (item) {
    var newComment = bigPictureComment.cloneNode(true);
    newComment.querySelector('.social__picture').src = item.avatar;
    newComment.querySelector('.social__picture').alt = item.name;
    newComment.querySelector('.social__text').textContent = item.message;
    return newComment;
  };

  var commentsLoaderHandler = function (comments, i) {
    createComment(comments.slice(0, 5 * i));
  };

  var renderBigPicture = function (picture) {
    bigPicture.querySelector('.big-picture__img img').src = picture.url;
    bigPicture.querySelector('.likes-count').textContent = picture.likes;
    bigPicture.querySelector('.social__caption').textContent = picture.description;
    createComment(picture.comments.slice(0, 5));

    if (picture.comments.length > 5) {
      var countClick = Math.ceil(picture.comments.length % 5);
      var index = 1;
      bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
      bigPicture.querySelector('.social__comments-count').classList.remove('hedden');
      commentsLoader.classList.remove('hidden');
    }

    commentsLoader.addEventListener('click', () => {
      index++
      commentsLoaderHandler(picture.comments, index);

      if (countClick === index) {
        bigPicture.querySelector('.social__comments-count').classList.add('hedden');
        commentsLoader.classList.add('hidden');
      }
    });
  };

  var createComment = function (comments) {
    var fragment = document.createDocumentFragment();
    comments.forEach(function (item) {
      fragment.appendChild(renderComment(item));
    });
    bigPictureComments.innerHTML = '';
    bigPictureComments.appendChild(fragment);
  };

  var buttonCloseClickHandler = function (evt) {
    evt.preventDefault();
    closePreview();
  };

  var escPressHandler = function (evt) {
    if (evt.key === window.constans.ESC) {
      evt.preventDefault();
      closePreview();
    }
  };

  var closePreview = function () {
    body.classList.remove('modal-open');
    bigPicture.classList.add('hidden');
    bigPictureClose.removeEventListener('click', buttonCloseClickHandler);
    document.removeEventListener('keydown', escPressHandler);
  };

  var showPreview = function (picture) {
    renderBigPicture(picture);
    body.classList.add('modal-open');
    bigPicture.classList.remove('hidden');
    bigPictureClose.addEventListener('click', buttonCloseClickHandler);
    document.addEventListener('keydown', escPressHandler);
  };

  window.preview = {
    show: showPreview,
  };

})();
