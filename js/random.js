'use strict';

(function () {

  var getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var getSeveralRandom = function (min, max, num) {
    var arr = [];
    var res = [];
    for (var i = min; i <= max; i++) {
      arr.push(i);
    }
    for (i = 0; i < num; i++) {
      res.push(arr.splice(Math.floor(Math.random() * (arr.length)), 1)[0]);
    }
    return res;
  };

  window.random = {
    getRandomInt: getRandomInt,
    getSeveralRandom: getSeveralRandom,
  };

})();
