'use strict';

(function () {
  var CoordX = {
    MIN: 0,
    MAX: 100
  };
  var effectLevelLine = document.querySelector('.effect-level__line');
  var effectLevelPin = document.querySelector('.effect-level__pin');
  var effectLevelDepth = document.querySelector('.effect-level__depth');
  var effectLevelValue = document.querySelector('.effect-level__value');

  effectLevelPin.addEventListener('mousedown', function (evt) {
    var startCoordsX = evt.clientX;

    var mouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();
      var shiftX = startCoordsX - moveEvt.clientX;
      startCoordsX = moveEvt.clientX;

      var newCoordX = ((effectLevelPin.offsetLeft - shiftX) / effectLevelLine.clientWidth) * 100;
      if (newCoordX >= CoordX.MIN && newCoordX <= CoordX.MAX) {
        effectLevelPin.style.left = newCoordX + '%';
        effectLevelDepth.style.width = newCoordX + '%';
        effectLevelValue.value = Math.round(newCoordX);
        window.effect.change(newCoordX);
      }
    };

    var mouseUpHandler = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  });

})();
