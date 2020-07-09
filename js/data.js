'use strict';

(function () {

  var pictures = [];
  var onError = function () {};

  var onSuccess = function (data) {
    pictures = data;
    window.gallery.render(pictures);
  };

  var loadData = function () {
    window.backend.load(onSuccess, onError);
  };

  loadData();

})();
