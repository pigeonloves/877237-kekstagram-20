'use strict';

(function () {
  // var DEBOUNCE_INTERVAL = 500;

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

  var debounce = function (cb) {
    var lastTimeout = null;

    return function () {
      var parameters = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        cb.apply(null, parameters);
      }, window.constans.DEBOUNCE_INTERVAL);
    };
  };

  window.utils = {
    getRandomInt: getRandomInt,
    getSeveralRandom: getSeveralRandom,
    debounce: debounce
  };

})();
