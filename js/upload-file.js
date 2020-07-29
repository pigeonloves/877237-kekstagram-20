'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
  var upload = document.querySelector('#upload-file');
  var imagesPreview = document.querySelector('.img-upload__preview').querySelector('img');

  upload.addEventListener('change', function () {
    var file = upload.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        imagesPreview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
})();
