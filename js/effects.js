'use strict';

(function () {
  var MAX_VALUE_FILTERS = {
    chrome: 1,
    sepia: 1,
    marvin: 100,
    phobos: 3,
    heat: 3
  };
  var picturesBlock = document.querySelector('.pictures');
  // var effectLevelLine = picturesBlock.querySelector('.effect-level__line');
  var effectLevelPin = picturesBlock.querySelector('.effect-level__pin');
  var effectLevelDepth = picturesBlock.querySelector('.effect-level__depth');

  var imgUploadPreview = picturesBlock.querySelector('.img-upload__preview');
  var imgUploadEffectLevel = picturesBlock.querySelector('.img-upload__effect-level');
  var effectsField = picturesBlock.querySelector('.img-upload__effects');
  var scaleControlValue = picturesBlock.querySelector('.scale__control--value');
  var currentEffect = null;

  var Filters = {
    chrome: function (value) {
      return 'grayscale(' + value.toFixed(1) + ')';
    },
    sepia: function (value) {
      return 'sepia(' + value.toFixed(1) + ')';
    },
    marvin: function (value) {
      return 'invert(' + value.toFixed(1) + '%)';
    },
    phobos: function (value) {
      return 'blur(' + value.toFixed(1) + 'px)';
    },
    heat: function (value) {
      return 'brightness(' + value.toFixed(1) + ')';
    },
  };

  var resetEffectsValue = function () {
    imgUploadPreview.classList.remove(imgUploadPreview.classList[1]);
    imgUploadPreview.style.filter = '';
    scaleControlValue.value = '';
  };

  var onEffectChange = function (evt) {
    var target = evt.target.closest('.effects__radio');
    resetEffectsValue();
    if (target) {
      if (target.value === 'none') {
        imgUploadEffectLevel.classList.add('hidden');
      } else {
        imgUploadEffectLevel.classList.remove('hidden');
        effectLevelPin.style.left = 100 + '%';
        effectLevelDepth.style.width = 100 + '%';
        currentEffect = target.value;
      }
      imgUploadPreview.classList.add('effects__preview--' + target.value);
    }
  };

  var changeSaturation = function (currentCoord) {
    var value = MAX_VALUE_FILTERS[currentEffect] * currentCoord / 100;
    imgUploadPreview.style.filter = Filters[currentEffect](value);
  };

  effectsField.addEventListener('change', onEffectChange);

  window.effect = {
    change: changeSaturation,
    reset: resetEffectsValue
  };

})();
