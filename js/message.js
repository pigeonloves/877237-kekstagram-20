'use strict';

(function () {
  var main = document.querySelector('main');
  var successTemplate = document.querySelector('#success').content.querySelector('.success');
  var errorTemplate = document.querySelector('#error').content.querySelector('.error');

  var renderSuccess = function () {
    var newSuccess = successTemplate.cloneNode(true);
    document.addEventListener('keydown', successEscPressHandler);
    newSuccess.addEventListener('click', successModalClickHandler);
    main.append(newSuccess);
  };

  var closeSuccessModal = function () {
    var success = document.querySelector('.success');
    document.removeEventListener('keydown', successEscPressHandler);
    success.remove();
  };

  var successEscPressHandler = function (evt) {
    if (evt.key === window.constans.ESC) {
      closeSuccessModal();
    }
  };

  var successModalClickHandler = function () {
    closeSuccessModal();
  };

  var renderError = function (errorMessage) {
    var newError = errorTemplate.cloneNode(true);
    newError.querySelector('.error__title').textContent = errorMessage;
    document.addEventListener('keydown', errorEscPressHandler);
    newError.addEventListener('click', errorModalClickHandler);
    main.append(newError);
  };

  var closeErrorModal = function () {
    var error = document.querySelector('.error');
    document.removeEventListener('keydown', errorEscPressHandler);
    error.parentNode.removeChild(error);
  };

  var errorEscPressHandler = function (evt) {
    if (evt.key === window.constans.ESC) {
      closeErrorModal();
    }
  };

  var errorModalClickHandler = function () {
    closeErrorModal();
  };

  window.message = {
    success: renderSuccess,
    error: renderError
  };

})();
