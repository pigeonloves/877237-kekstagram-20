'use strict';

(function () {
  var body = document.querySelector('body');
  var tagInput = body.querySelector('.text__hashtags');
  var commentInput = body.querySelector('.text__description');
  var uploaderPicture = body.querySelector('#upload-file');
  var editorPicture = body.querySelector('.img-upload__overlay');
  var closeEditorPicture = body.querySelector('#upload-cancel');
  var imgUploadForm = body.querySelector('.img-upload__form');

  var openPopup = function () {
    editorPicture.classList.remove('hidden');
    body.classList.add('modal-open');
    document.addEventListener('keydown', popupEscPressHandler);
  };

  var closePopup = function () {
    editorPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    uploaderPicture.value = '';
    window.effect.reset();
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

  var resetForm = function () {
    imgUploadForm.reset();
    closePopup();
  };

  var onError = function (error) {
    resetForm();
    window.message.error(error);
  };

  var onSuccess = function () {
    resetForm();
    window.message.success();
  };

  imgUploadForm.addEventListener('submit', function (evt) {
    window.backend.upload(new FormData(imgUploadForm), onSuccess, onError);
    evt.preventDefault();
  });

})();
