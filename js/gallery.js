'use strict';

(function () {
  var picturesBlock = document.querySelector('.pictures');
  var getFillPicture = window.data.getFillPicture;
  var pictures = window.data.pictures;

  var renderPictures = function () {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < pictures.length; i++) {
      fragment.appendChild(getFillPicture(pictures[i]));
      console.log(getFillPicture(pictures[i]));
    }

    picturesBlock.appendChild(fragment);
  };

  renderPictures();

})();
