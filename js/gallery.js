'use strict';

(function () {
  var picturesBlock = document.querySelector('.pictures');
  var pictures = window.data;
  var pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  var getFillPicture = function (data) {
    var element = pictureTemplate.cloneNode(true);
    var img = element.querySelector('.picture__img');
    var comments = element.querySelector('.picture__comments');
    var likes = element.querySelector('.picture__likes');

    img.src = data.url;
    img.alt = data.description;
    comments.textContent = data.comments.length;
    likes.textContent = data.likes;

    return element;
  };

  var renderPictures = function () {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < pictures.length; i++) {
      fragment.appendChild(getFillPicture(pictures[i]));
    }

    picturesBlock.appendChild(fragment);
  };

  renderPictures();

})();
