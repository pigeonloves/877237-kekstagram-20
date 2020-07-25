'use strict';

(function () {
  // var SUCCESS_STATUS_CODE = 200;
  // var TIMEOUT = 10000;
  // var URL = 'https://javascript.pages.academy/kekstagram/data';
  var messageOfError = {
    400: 'Неверный запрос',
    401: 'Пользователь не авторизирован',
    403: 'Доступ запрещен',
    404: 'Ничего не найдено',
    500: 'Внутренняя ошибка сервера'
  };

  var createRequest = function (onSuccess, onError) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === window.constans.SUCCESS_STATUS_CODE) {
        onSuccess(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + messageOfError[xhr.status]);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = window.constans.TIMEOUT;
    return xhr;
  };

  var load = function (onSuccess, onError) {
    var xhr = createRequest(onSuccess, onError);
    xhr.open('GET', window.constans.URL);
    xhr.send();
  };

  window.backend = {
    load: load,
  };
})();
