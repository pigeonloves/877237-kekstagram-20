'use strict';

(function () {

  var pictures = [];
  var onError = function () {};

  // var onSuccess = function (data) {
  //   console.log(data);
  //   pictures = data.slice().sort(function(a, b){
  //     return b.comments - a.commments
  //   })
  //   console.log(pictures);
  //   window.gallery.render(pictures);
  // };

  var onSuccess = function (data) {
    console.log(data);
    pictures = data;
    // var getRandomPictures = function (min, max, num) {
    //   // var arr = [];
    //   var randomPictures = [];
    //   for (var i = min; i <= max; i++) {
    //     var newPictures = pictures.push(i);
    //     // console.log(newPictures);
    //   }
    //   for (i = 0; i < num; i++) {
    //     randomPictures.push(pictures.splice(Math.floor(Math.random() * (pictures.length)), 1)[0]);
    //   }
    //   return randomPictures;
    // };
    // var randomPics = getRandomPictures(1, 25, 10);

    // var getRandomPictures = function (min, max, num) {
    //   // var arr = [];
    //   var randomPictures = [];
    //   for (var i = 0; i <= 24; i++) {
    //     var newPictures = pictures.push(i);
    //     // console.log(newPictures);
    //   }
    //   for (var i = 0; i < 10; i++) {
    //     randomPictures.push(pictures.splice(Math.floor(Math.random() * (pictures.length)), 1)[0]);
    //   }
    //   return randomPictures;
    // };

    // for (var i = 0; i < 10; i++) {
    //   var randomPictures = [];
    //   randomPictures.push(pictures.splice(Math.floor(Math.random() * (pictures.length)), 1)[0]);
    // }
    // console.log(randomPictures);

    var shuffle = function (array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    var randomPictures = shuffle(pictures);
    console.log(randomPictures);

    window.gallery.render(randomPictures);
  };

  var loadData = function () {
    window.backend.load(onSuccess, onError);
  };

  loadData();

  window.data = onSuccess;

})();
