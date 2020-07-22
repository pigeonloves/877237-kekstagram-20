'use strict';

(function () {
  var picturesBlock = document.querySelector('.pictures');
  var pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  var getFillPicture = function (data, id) {
    var element = pictureTemplate.cloneNode(true);
    var img = element.querySelector('.picture__img');
    var comments = element.querySelector('.picture__comments');
    var likes = element.querySelector('.picture__likes');

    img.src = data.url;
    img.alt = data.description;
    comments.textContent = data.comments.length;
    likes.textContent = data.likes;
    element.dataset.id = id;

    return element;
  };

  var renderPictures = function (data) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < data.length; i++) {
      fragment.appendChild(getFillPicture(data[i], i));
    }

    picturesBlock.appendChild(fragment);
  };

  var removePictures = function () {
    var pictures = picturesBlock.querySelectorAll('.picture');
    pictures.forEach(function (picture) {
      picture.remove();
    });
  };

  window.gallery = {
    render: renderPictures,
    remove: removePictures,
  };

})();
