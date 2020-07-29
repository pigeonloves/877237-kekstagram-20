'use strict';

(function () {
  var DefaultEffectValue = {
    MIN: 0,
    MAX: 100
  };
  var MaxValueFilter = {
    CHROME: 1,
    SEPIA: 1,
    MARVIN: 100,
    PHOBOS: 3,
    HEAT: 3
  };
  var picturesBlock = document.querySelector('.pictures');
  var effectLevelPin = picturesBlock.querySelector('.effect-level__pin');
  var effectLevelDepth = picturesBlock.querySelector('.effect-level__depth');

  var imgUploadPreview = picturesBlock.querySelector('.img-upload__preview');
  var imgUploadEffectLevel = picturesBlock.querySelector('.img-upload__effect-level');
  var effectsField = picturesBlock.querySelector('.img-upload__effects');
  var scaleControlValue = picturesBlock.querySelector('.scale__control--value');
  var effectLevelValue = imgUploadEffectLevel.querySelector('.effect-level__value');
  var currentEffect = null;

  var filtersMap = {
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
    imgUploadEffectLevel.classList.add('hidden');
    imgUploadPreview.style.filter = '';
    imgUploadPreview.style.transform = '';
    scaleControlValue.value = 100 + '%';
    effectLevelValue.value = '';
  };

  resetEffectsValue();

  var effectChangeHandler = function (evt) {
    var target = evt.target.closest('.effects__radio');
    resetEffectsValue();
    if (target) {
      if (target.value === 'none') {
        imgUploadEffectLevel.classList.add('hidden');
        effectLevelValue.value = DefaultEffectValue.MIN;
      } else {
        imgUploadEffectLevel.classList.remove('hidden');
        effectLevelPin.style.left = 100 + '%';
        effectLevelDepth.style.width = 100 + '%';
        effectLevelValue.value = DefaultEffectValue.MAX;
        currentEffect = target.value;
        imgUploadPreview.style.filter = filtersMap[currentEffect](MaxValueFilter[currentEffect.toUpperCase()]);
      }
    }
  };

  var changeSaturation = function (currentCoord) {
    var value = MaxValueFilter[currentEffect.toUpperCase()] * currentCoord / 100;
    imgUploadPreview.style.filter = filtersMap[currentEffect](value);
  };

  effectsField.addEventListener('change', effectChangeHandler);

  window.effect = {
    change: changeSaturation,
    reset: resetEffectsValue
  };

})();
