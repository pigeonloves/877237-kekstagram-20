'use strict';

(function () {
  var picturesBlock = document.querySelector('.pictures');
  var pictureFilter = document.querySelector('.img-filters');
  var pictures = [];
  var onError = function () {};

  var onSuccess = function (data) {
    pictures = data;
    window.gallery.render(pictures);
    pictureFilter.classList.remove('img-filters--inactive');
  };

  var loadData = function () {
    window.backend.load(onSuccess, onError);
  };

  loadData();

  var filterButtons = pictureFilter.querySelectorAll('.img-filters__button');

  var selectButton = function (button) {
    filterButtons.forEach(function (btn) {
      btn.classList.remove('img-filters__button--active');
    });
    button.classList.add('img-filters__button--active');
  };

  var filterData = function (evt) {
    evt.preventDefault();
    var target = evt.target;
    if (target.classList.contains('img-filters__button')) {
      selectButton(target);
      window.gallery.remove();
      window.gallery.render(window.filter(pictures, target));
    }
  };

  var filterClickHandler = window.utils.debounce(filterData);

  pictureFilter.addEventListener('click', filterClickHandler);

  picturesBlock.addEventListener('click', function (evt) {

    var picture = evt.target.closest('.picture');
    if (picture) {
      evt.preventDefault();
      window.preview.show(pictures[picture.dataset.id]);
    }
  });

})();
