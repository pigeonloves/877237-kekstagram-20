'use strict';

(function () {
  var COORD_X = {
    min: 0,
    max: 100
  };
  var picturesBlock = document.querySelector('.pictures');
  var effectLevelLine = picturesBlock.querySelector('.effect-level__line');
  var effectLevelPin = picturesBlock.querySelector('.effect-level__pin');
  var effectLevelDepth = picturesBlock.querySelector('.effect-level__depth');

  effectLevelPin.addEventListener('mousedown', function (evt) {
    var startCoordsX = evt.clientX;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      var shiftX = startCoordsX - moveEvt.clientX;
      startCoordsX = moveEvt.clientX;

      var newCoordX = ((effectLevelPin.offsetLeft - shiftX) / effectLevelLine.clientWidth) * 100;
      if (newCoordX >= COORD_X.min && newCoordX <= COORD_X.max) {
        effectLevelPin.style.left = newCoordX + '%';
        effectLevelDepth.style.width = newCoordX + '%';
        window.effect.change(newCoordX);
      }
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
