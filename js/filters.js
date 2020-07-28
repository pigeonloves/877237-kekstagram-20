'use strict';

(function () {
  var MAX_LENGTH = 10;
  var filterRandom = function (data) {
    return data.sort(function () {
      return window.utils.getRandomInt(-1, 1);
    }).slice(0, MAX_LENGTH);
  };
  var filterComments = function (data) {
    return data.sort(function (a, b) {
      return b.comments.length - a.comments.length;
    });
  };

  var filterData = function (data, filter) {
    var copyData = data.slice();
    switch (filter.id) {
      case 'filter-default':
        return copyData;

      case 'filter-random':
        return filterRandom(copyData);

      case 'filter-discussed':
        return filterComments(copyData);
    }
    return copyData;
  };

  window.filter = filterData;

})();
