'use strict';

var DATA = {
  count: 25,
  url: '',
  description: ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'],
  likes: {
    min: 15,
    max: 200
  },
  avatar: ['img/avatar-1.svg', 'img/avatar-2.svg', 'img/avatar-3.svg', 'img/avatar-4.svg', 'img/avatar-5.svg', 'img/avatar-6.svg'],
  message: ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это простнепрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать таконеудачный момент?!'],
  name: ['Саша', 'Артем', 'Дима', 'Настя', 'Егор', 'Андрей']
};

var pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

var picturesBlock = document.querySelector('.pictures');


var getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// console.log(getRandomInt(1, 6));

var getSeveralRandom = function (min, max, num) {
  var arr = [];
  var res = [];
  for (var i = min; i <= max; i++) {
    arr.push(i);
  }
  for (i = 0; i < num; i++) {
    res.push(arr.splice(Math.floor(Math.random() * (arr.length)), 1)[0]);
  }
  return res;
};

var picturesAddress = getSeveralRandom(1, DATA.count, DATA.count);

var getComments = function () {
  var commentsArr = [];

  for (var i = 0; i < 6; i++) {
    var newComment = {
      avatar: DATA.avatar[getRandomInt(0, DATA.avatar.length - 1)],
      message: DATA.message[getRandomInt(0, DATA.message.length - 1)],
      name: DATA.name[getRandomInt(0, DATA.name.length - 1)]
    };
    commentsArr.push(newComment);
  }

  commentsArr.length = Math.round(Math.random() * commentsArr.length);
  return commentsArr;
};

var getPicture = function (index) {
  return {
    url: 'photos/' + picturesAddress[index - 1] + '.jpg',
    description: DATA.description[getRandomInt(0, DATA.description.length - 1)],
    likes: getRandomInt(DATA.likes.min, DATA.likes.max),
    comments: getComments(),
  };
};

var getPictures = function () {
  var array = [];

  for (var i = 0; i < DATA.count; i++) {
    array.push(getPicture(i + 1));
  }

  return array;
};

var getFillPicture = function (data) {
  var element = pictureTemplate.cloneNode(true);
  var img = element.querySelector('.picture__img');
  var comments = element.querySelector('.picture__comments');
  var likes = element.querySelector('.picture__likes');

  img.src = data.url;
  img.alt = data.description;
  comments.textContent = data.comments.length;
  likes.textContent = data.likes;

  return element;
};

var pictures = getPictures();

var renderPictures = function () {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < pictures.length; i++) {
    fragment.appendChild(getFillPicture(pictures[i]));
  }

  picturesBlock.appendChild(fragment);
};

renderPictures();

// Форма редактирования изображения
var uploaderPicture = picturesBlock.querySelector('#upload-file');
var editorPicture = picturesBlock.querySelector('.img-upload__overlay');
var closeEditorPicture = picturesBlock.querySelector('#upload-cancel');
var body = document.querySelector('body');

uploaderPicture.addEventListener('change', function () {
  editorPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  // console.log(uploadFile);
});

closeEditorPicture.addEventListener('click', function () {
  editorPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  uploaderPicture.value = '';
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    editorPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    uploaderPicture.value = '';
  }
});

// Ползунок
var effectScale = picturesBlock.querySelector('.effect-level__pin');

effectScale.addEventListener('mouseup', function () {

});

// Валидация хеш-тегов
var tagInput = picturesBlock.querySelector('.text__hashtags');

tagInput.addEventListener('input', function () {
  var splittedTags = tagInput.value.split('');
  var tagSymbol = /^#[a-zа-яA-ZА-Я0-9]*$/;
  var tagSymbolTest = tagSymbol.test;

  for (var i = 0; i < splittedTags.length; i++) {
    if (splittedTags[0] !== '#') {
      tagInput.setCustomValidity('Хештег должен начинаться с «#»!');
    } else if (splittedTags.length < 2) {
      tagInput.setCustomValidity('Хештег должен состоять минимум из 2-х символов!');
    } else if (splittedTags.length > 20) {
      tagInput.setCustomValidity('Максимальная длина хештега на должна превышать 25 символов!');
    } else if (!tagSymbolTest) {
      console.log(!tagSymbolTest);
      tagInput.setCustomValidity('Хештег содержит недопустимые символы!');
    } else {
      tagInput.setCustomValidity('');
    }
  }
});
