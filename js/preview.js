'use strict';

(function () {
  var body = document.querySelector('body');
  var bigPicture = document.querySelector('.big-picture');
  var bigPictureComments = bigPicture.querySelector('.social__comments');
  var bigPictureComment = bigPicture.querySelector('.social__comment');

  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');

  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');

  var renderComment = function (item) {
    var newComment = bigPictureComment.cloneNode(true);
    newComment.querySelector('.social__picture').src = item.avatar;
    newComment.querySelector('.social__picture').alt = item.name;
    newComment.querySelector('.social__text').textContent = item.discription;
    return newComment;
  };

  var renderBigPicture = function (picture) {
    bigPicture.querySelector('.big-picture__img').src = picture.url;
    bigPicture.querySelector('.likes-count').textContent = picture.likes;
    bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
    bigPicture.querySelector('.social__caption').textContent = picture.discription;
    createComment(picture);
  };

  var createComment = function (picture) {
    var fragment = document.createDocumentFragment();
    picture.comments.forEach(function (item) {
      fragment.appendChild(renderComment(item));
    });
    bigPictureComments.appendChild(fragment);
  };

})();
