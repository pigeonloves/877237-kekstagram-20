'use strict';

(function () {
  var picturesBlock = document.querySelector('.pictures');
  var effectLevelLine = picturesBlock.querySelector('.effect-level__line');
  var effectLevelPin = picturesBlock.querySelector('.effect-level__pin');
  var effectLevelDepth = picturesBlock.querySelector('.effect-level__depth');

  // effectLevelPin.addEventListener('mouseup', function (evt) {
  // (effectLevelPin.offsetLeft / effectLevelLine.getBoundingClientRect().width) * 100;

  effectLevelPin.addEventListener('mousedown', function (evt) {

    var startCoordsX = evt.clientX;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      var shiftX = startCoordsX - moveEvt.clientX;
      startCoordsX = moveEvt.clientX;

      var newCoordX = effectLevelPin.offsetLeft - shiftX;
      if (newCoordX >= 0 && newCoordX <= effectLevelLine.clientWidth) {
        effectLevelPin.style.left = newCoordX + 'px';
        effectLevelDepth.style.width = newCoordX + 'px';
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
