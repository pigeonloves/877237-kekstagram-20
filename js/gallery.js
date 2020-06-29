'use strict';

(function () {

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

  var getRandomInt = window.random.getRandomInt;
  var getSeveralRandom = window.random.getSeveralRandom;

  var pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  var picturesBlock = document.querySelector('.pictures');

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

  window.gallery = {
    picturesBlock: picturesBlock,
  };

})();
