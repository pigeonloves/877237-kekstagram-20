'use strict';

(function () {
  var picturesBlock = document.querySelector('.pictures');
  var effectLevelLine = picturesBlock.querySelector('.effect-level__line');
  var effectLevelPin = picturesBlock.querySelector('.effect-level__pin');
  var effectLevelDepth = picturesBlock.querySelector('.effect-level__depth');

  var imgUploadPreview = picturesBlock.querySelector('.img-upload__preview');
  var imgUploadEffectLevel = picturesBlock.querySelector('.img-upload__effect-level');
  var effectsRadio = picturesBlock.querySelectorAll('.effects__radio');
  var scaleControlValue = picturesBlock.querySelector('.scale__control--value');
  var currentEffect = 'none';

  var selectEffect = function (value) {
    imgUploadEffectLevel.classList.remove('hidden');
    switch (currentEffect) {
      case 'chrome':
        return 'grayscale(' + value + ')';
      case 'sepia':
        return 'sepia(' + value + ')';
      case 'marvin':
        return 'invert(' + value * 100 + '%)';
      case 'phobos':
        return 'blur(' + 3 * value + 'px)';
      case 'heat':
        return 'brightness(' + 3 * value + ')';
      default:
        imgUploadEffectLevel.classList.add('hidden');
        return '';
    }
  };

  var resetEffectsValue = function () {
    effectLevelPin.style.left = 100 + '%';
    effectLevelDepth.style.width = 100 + '%';
    imgUploadPreview.style.filter = '';
    imgUploadPreview.style.transform = '';
    scaleControlValue.value = 100 + '%';
  };

  var onEffectChange = function (evt) {
    currentEffect = evt.target.value;
    resetEffectsValue();
    imgUploadPreview.style.filter = selectEffect(1);
  };

  var getSaturationValue = function (evt) {
    return (evt.target.offsetLeft / effectLevelLine.offsetWidth).toFixed(2);
  };

  var onSaturationChange = function (evt) {
    var value = getSaturationValue(evt);
    imgUploadPreview.style.filter = selectEffect(value);
  };

  effectsRadio.forEach(function (item) {
    item.addEventListener('change', onEffectChange);
  });

  window.effect = onSaturationChange;

})();
