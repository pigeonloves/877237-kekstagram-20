'use strict';

(function () {
  var picturesBlock = document.querySelector('.pictures');
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

  var renderPictures = function (data) {
    var fragment = document.createDocumentFragment();
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      fragment.appendChild(getFillPicture(data[i]));
    }

    picturesBlock.appendChild(fragment);
  };

  renderPictures();

  window.gallery = {
    render: renderPictures
  };

})();
