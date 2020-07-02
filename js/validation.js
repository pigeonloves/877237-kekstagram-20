'use strict';

(function () {
  // Валидация хеш-тегов
  var TAG_MIN_LENGTH = 2;
  var TAG_MAX_LENGTH = 20;
  var picturesBlock = document.querySelector('.pictures');
  var tagInput = picturesBlock.querySelector('.text__hashtags');

  var isDublicate = function (item, index, arr) {
    return arr.indexOf(item, index + 1) >= 0;
  };

  tagInput.addEventListener('input', function () {
    var splittedTags = tagInput.value.trim().toLowerCase().split(' ');
    var tagSymbol = /^#[a-zа-яA-ZА-Я0-9]*$/;
    var tagErrors = [];

    splittedTags = splittedTags.filter(function (item) {
      return item !== '';
    });

    for (var i = 0; i < splittedTags.length; i++) {
      if (splittedTags[i][0] !== '#') {
        tagErrors.push('Хештег должен начинаться с «#»!');
      } else if (!tagSymbol.test(splittedTags[i])) {
        tagErrors.push('Хештег не должен содержать спецсимволы!');
      } else if (splittedTags[i].length < TAG_MIN_LENGTH) {
        tagErrors.push('Хештег должен состоять минимум из 2-х символов!');
      } else if (splittedTags[i].length > TAG_MAX_LENGTH) {
        tagErrors.push('Максимальная длина хештега не должна превышать 20 символов!');
      }
    }

    if (splittedTags.some(isDublicate)) {
      tagErrors.push('Хештеги не должны повторяться!');
    }

    if (tagErrors.length) {
      tagInput.setCustomValidity(tagErrors[0]);
    } else {
      tagInput.setCustomValidity('');
    }
  });

  // Валидация комментариев
  var COMMENT_MAX_LENGTH = 140;
  var commentInput = picturesBlock.querySelector('.text__description');

  commentInput.addEventListener('input', function () {
    var commentLength = commentInput.value.length;

    if (commentLength > COMMENT_MAX_LENGTH) {
      commentInput.setCustomValidity('Максимальная длина комментария не должна превышать 140 символов!' + ' Удалите лишние ' + (commentLength - COMMENT_MAX_LENGTH) + ' симв.');
    } else {
      commentInput.setCustomValidity('');
    }
  });

  window.validation = {
    tagInput: tagInput,
    commentInput: commentInput,
  };

})();
