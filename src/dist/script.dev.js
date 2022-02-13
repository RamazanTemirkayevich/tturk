"use strict";

window.addEventListener('DOMContentLoader', function () {
  // counter
  var counterDisplayElem = document.querySelector('.product__counter-number');
  var counterMinusElem = document.querySelector('.product__counter-minus');
  var counterPlusElem = document.querySelector('.product__counter-plus');
  var count = 0;
  updateDisplay();
  counterPlusElem.addEventListener("click", function () {
    count++;
    updateDisplay();
  });
  counterMinusElem.addEventListener("click", function () {
    count--;
    updateDisplay();
  });

  function updateDisplay() {
    counterDisplayElem.innerHTML = count;
  }

  ; // carousel

  var position = 0;
  var slidesToShow = 4;
  var slidesToScroll = 1;
  var container = document.querySelector('.carousel__container');
  var track = document.querySelector('.carousel__track');
  var btnPrev = document.querySelector('.carousel__btn-prev');
  var btnNext = document.querySelector('.carousel__btn-next');
  var items = document.querySelectorAll('.carousel__item');
  var itemsCount = items.length;
  var itemWidth = container.clientWidth / slidesToShow;
  var movePosition = slidesToScroll * itemWidth;
  items.forEach(function (item) {
    item.style.minWidth = "".concat(itemWidth, "px");
  });
  btnNext.addEventListener('click', function () {
    var itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
  });
  btnPrev.addEventListener('click', function () {
    var itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
  });

  var setPosition = function setPosition() {
    track.style.transform = "transitionX(".concat(position, ")");
  };

  var checkBtns = function checkBtns() {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
  };

  checkBtns();
});
addEventListener();