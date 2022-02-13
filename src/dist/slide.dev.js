"use strict";

var slider = document.getElementsByClassName('c-slider')[0];
var timeline = new TimelineLite();
var info = document.getElementsByClassName('c-drag')[0];
var canMove = false;
var touchDown = 0;
var prevX = 0;
var slides = document.getElementsByClassName('c-slide');
var slideWidth = slides[0].offsetWidth + 20;

var init = function init() {
  slider.addEventListener('mousedown', handleMouse);
  slider.addEventListener('mouseup', handleMouse);
  slider.addEventListener('mousemove', handleMove);
  slider.addEventListener('touchstart', handleTouch);
  slider.addEventListener('touchmove', handleTouchMove);
};
/* Mouse handlers */


var handleMouse = function handleMouse(e) {
  if (e.type === 'mouseup') {
    canMove = false;
  } else {
    canMove = true;
  }
};

var handleMove = function handleMove(e) {
  if (e.pageX < prevX && canMove) {
    /* to left */
    info.innerHTML = 'Swiping left!';
    handleSwipeLeft();
    canMove = false;
  } else if (e.pageX > prevX && canMove) {
    /* to right */
    info.innerHTML = 'Swiping right!';
    handleSwipeRight();
    canMove = false;
  }

  prevX = e.pageX;
};
/* Touch handlers */


var handleTouch = function handleTouch(e) {
  touchDown = e.touches[0].clientX;
};

var handleTouchMove = function handleTouchMove(e) {
  if (!touchDown) {
    return;
  }

  var touchUp = e.touches[0].clientX;
  var touchDiff = touchDown - touchUp;

  if (touchDiff > 0) {
    info.innerHTML = 'Swiping left!';
    handleSwipeLeft();
  } else {
    info.innerHTML = 'Swiping right!';
    handleSwipeRight();
  }

  touchDown = null;
};
/* Swipe handlers */


var handleSwipeLeft = function handleSwipeLeft() {
  timeline.fromTo(slider, 1, {
    x: '0px'
  }, {
    x: "-".concat(slideWidth, "px"),
    ease: Power4.easeOut
  });
  timeline.to(slider, 0.001, {
    x: '0px',
    onComplete: function onComplete() {
      slider.appendChild(slides[0]);
      slides = document.getElementsByClassName('c-slide');
    }
  });
};

var handleSwipeRight = function handleSwipeRight() {
  timeline.to(slider, 0.001, {
    x: "-".concat(slideWidth, "px"),
    onComplete: function onComplete() {
      var first = slides[0];
      var last = slides[slides.length - 1];
      slider.insertBefore(last, first);
      slides = document.getElementsByClassName('c-slide');
    }
  });
  timeline.to(slider, 1, {
    x: "0px",
    ease: Power4.easeOut
  });
};

init();