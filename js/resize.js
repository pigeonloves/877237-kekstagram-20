'use strict';

(function () {
  var Scale = {
    MIN: 25,
    MAX: 100,
    DEFAULT: 100,
    STEP: 25
  };
  var imgUploadPreview = document.querySelector('.img-upload__preview');
  var imgUploadScale = document.querySelector('.img-upload__scale');
  var scaleControlSmaller = imgUploadScale.querySelector('.scale__control--smaller');
  var scaleControlBigger = imgUploadScale.querySelector('.scale__control--bigger');
  var scaleControlValue = imgUploadScale.querySelector('.scale__control--value');

  scaleControlValue.value = Scale.DEFAULT + '%';

  var scaleDownHandler = function () {
    var scaleValue = parseInt(scaleControlValue.value, 10);
    var newValue = scaleValue - Scale.STEP >= Scale.MIN ? scaleValue - Scale.STEP : Scale.MIN;
    imgUploadPreview.style.transform = 'scale(' + (newValue) / 100 + ')';
    scaleControlValue.value = (newValue) + '%';
  };

  var scaleUpHandler = function () {
    var scaleValue = parseInt(scaleControlValue.value, 10);
    var newValue = scaleValue + Scale.STEP <= Scale.MAX ? scaleValue + Scale.STEP : Scale.MAX;
    imgUploadPreview.style.transform = 'scale(' + (newValue) / 100 + ')';
    scaleControlValue.value = (newValue) + '%';
  };

  scaleControlSmaller.addEventListener('click', scaleDownHandler);
  scaleControlBigger.addEventListener('click', scaleUpHandler);

})();
