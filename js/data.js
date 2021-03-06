'use strict';

(function () {
  var pictureFilter = document.querySelector('.img-filters');
  var filterButtons = pictureFilter.querySelectorAll('.img-filters__button');
  var pictures = [];
  var onError = function (error) {
    window.message.error(error);
  };

  var onSuccess = function (data) {
    pictures = data;
    window.gallery.render(pictures);
    pictureFilter.classList.remove('img-filters--inactive');
  };

  var loadData = function () {
    window.backend.load(onSuccess, onError);
  };

  loadData();

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

})();
