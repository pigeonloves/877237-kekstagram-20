'use strict';

(function () {
  var tagInput = window.validation.tagInput;
  var commentInput = window.validation.commentInput;
  var picturesBlock = document.querySelector('.pictures');
  var uploaderPicture = picturesBlock.querySelector('#upload-file');
  var editorPicture = picturesBlock.querySelector('.img-upload__overlay');
  var closeEditorPicture = picturesBlock.querySelector('#upload-cancel');
  var body = document.querySelector('body');

  var openPopup = function () {
    editorPicture.classList.remove('hidden');
    body.classList.add('modal-open');
    document.addEventListener('keydown', popupEscPressHandler);
  };

  var closePopup = function () {
    editorPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    uploaderPicture.value = '';
    document.removeEventListener('keydown', popupEscPressHandler);
  };

  var popupEscPressHandler = function (evt) {
    if (evt.key === window.constans.ESC && tagInput !== document.activeElement && commentInput !== document.activeElement) {
      evt.preventDefault();
      closePopup();
    }
  };

  uploaderPicture.addEventListener('change', function () {
    openPopup();
  });

  closeEditorPicture.addEventListener('click', function () {
    closePopup();
  });

  window.form = closePopup;

})();
