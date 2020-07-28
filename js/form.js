'use strict';

(function () {
  // var ESC = 'Escape';
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

  var main = document.querySelector('main');
  var imgUploadForm = document.querySelector('.img-upload__form');
  var successTemplate = document.querySelector('#success').content.querySelector('.success');
  var errorTemplate = document.querySelector('#error').content.querySelector('.error');

  imgUploadForm.addEventListener('submit', function (evt) {
    window.backend.upload(new FormData(imgUploadForm), uploadSuccessHandler, uploadErrorHandler);
    evt.preventDefault();
  });

  var uploadSuccessHandler = function () {
    var newSuccess = successTemplate.cloneNode(true);
    var fragment = document.createDocumentFragment();
    fragment.appendChild(newSuccess);
    main.appendChild(fragment);
    document.addEventListener('keydown', onSuccessModalEscPress);
    document.addEventListener('click', onSuccessModalClick);
    closePopup();
  };

  var closeSuccessModal = function () {
    var success = document.querySelector('.success');
    document.removeEventListener('keydown', onSuccessModalEscPress);
    document.removeEventListener('click', onSuccessModalClick);
    success.parentNode.removeChild(success);
  };

  var onSuccessModalEscPress = function (evt) {
    if (evt.key === window.constans.ESC) {
      closeSuccessModal();
    }
  };

  var onSuccessModalClick = function (evt) {
    if (!evt.target.classList.contains('success__inner')
    && !evt.target.classList.contains('success__title')) {
      closeSuccessModal();
    }
  };

  var uploadErrorHandler = function (errorMessage) {
    var newError = errorTemplate.cloneNode(true);
    var fragment = document.createDocumentFragment();
    newError.querySelector('.error__title').textContent = errorMessage;
    fragment.appendChild(newError);
    main.appendChild(fragment);
    document.addEventListener('keydown', onErrorModalEscPress);
    document.addEventListener('click', onErrorModalClick);
    closePopup();
  };

  var closeErrorModal = function () {
    var error = document.querySelector('.error');
    document.removeEventListener('keydown', onErrorModalEscPress);
    document.removeEventListener('click', onErrorModalClick);
    error.parentNode.removeChild(error);
  };

  var onErrorModalEscPress = function (evt) {
    if (evt.key === window.constans.ESC) {
      closeErrorModal();
    }
  };

  var onErrorModalClick = function (evt) {
    if (!evt.target.classList.contains('error__inner')
     && !evt.target.classList.contains('error__title')) {
      closeErrorModal();
    }
  };

})();
