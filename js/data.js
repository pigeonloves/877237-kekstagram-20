'use strict';

(function () {

  var pictures = [];
  var onError = function (message) {
    console.error(message);
  };

  var onSuccess = function (data) {
    pictures = data;
    console.log(data, pictures);
    window.gallery.render(data);
  };

  var loadData = function () {
    window.backend.load(onSuccess, onError);
  };

  loadData();

})();
