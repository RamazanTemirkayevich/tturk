"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

window.addEventListener('DOMContentLoaded', function () {
  // size 
  // counter
  var counterDisplayElem = document.querySelector('.product__counter-number');
  var counterShow = document.querySelector('.product__amount__span');
  var counterMinusElem = document.querySelector('.product__counter-minus');
  var counterPlusElem = document.querySelector('.product__counter-plus');
  var count = 1;
  updateDisplay();
  counterPlusElem.addEventListener("click", function () {
    count++;
    updateDisplay();
  });
  counterMinusElem.addEventListener("click", function () {
    if (count != 1) {
      count--;
    }

    ;
    updateDisplay();
  });

  function updateDisplay() {
    counterDisplayElem.innerHTML = count;
    counterShow.innerHTML = count;
  }

  ; // carousel

  var position = 0;
  var slidesToShow = 5.5;
  var slidesToScroll = 1;
  var container = document.querySelector('.carousel__container');
  var track = document.querySelector('.carousel__track');
  var btnPrev = document.querySelector('.carousel__buttons-prev');
  var btnNext = document.querySelector('.carousel__buttons-next');
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
    track.style.transform = "translateX(".concat(position, "px)");
  };

  var checkBtns = function checkBtns() {
    btnPrev.hidden = position === 0;
    btnNext.hidden = position <= -(itemsCount - slidesToShow) * itemWidth;
  };

  checkBtns(); // Review slider 

  var ReviewPosition = 0;
  var SecondSlidesToShow = 5.5;
  var SecondSlidesToScroll = 1;
  var ReviewContainer = document.querySelector('.review__carousel-container');
  var ReviewTrack = document.querySelector('.review__carousel-track');
  var btnReviewPrev = document.querySelector('.review__carousel-buttons__prev');
  var btnReviewNext = document.querySelector('.review__carousel-buttons__next');
  var itemsReview = document.querySelectorAll('.review__carousel-item');
  var itemsCountReview = itemsReview.length;
  var itemWidthReview = ReviewContainer.clientWidth / SecondSlidesToShow;
  var movePositionReview = slidesToScroll * itemWidthReview;
  itemsReview.forEach(function (item) {
    item.style.minWidth = "".concat(itemWidthReview, "px");
  });
  btnReviewNext.addEventListener('click', function () {
    var itemsLeftSecond = itemsCountReview - (Math.abs(ReviewPosition) + SecondSlidesToShow * itemWidthReview) / itemWidthReview;
    ReviewPosition -= itemsLeftSecond >= SecondSlidesToScroll ? movePositionReview : itemsLeftSecond * itemWidthReview;
    setPositionReview();
    checkBtnsReview();
  });
  btnReviewPrev.addEventListener('click', function () {
    var itemsLeftSecond = Math.abs(ReviewPosition) / itemWidthReview;
    ReviewPosition += itemsLeftSecond >= SecondSlidesToScroll ? movePositionReview : itemsLeftSecond * itemWidthReview;
    setPositionReview();
    checkBtnsReview();
  });

  var setPositionReview = function setPositionReview() {
    ReviewTrack.style.transform = "translateX(".concat(ReviewPosition, "px)");
  };

  var checkBtnsReview = function checkBtnsReview() {
    btnReviewPrev.hidden = ReviewPosition === 0;
    btnReviewNext.hidden = ReviewPosition <= -(itemsCountReview - SecondSlidesToShow) * itemWidthReview;
  };

  checkBtnsReview(); // modal 

  var openBtn = document.getElementById('open');
  var modalContainer = document.getElementById('modal-container');
  var closeBtn = document.getElementById('close-modal');
  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  window.addEventListener('click', outsideClick);

  function openModal() {
    modalContainer.style.display = 'flex';
  }

  ;

  function closeModal() {
    modalContainer.style.display = 'none';
  }

  ;

  function outsideClick(e) {
    if (e.target == modalContainer) {
      modalContainer.style.display = 'none';
    }

    ;
  }

  ; // add/remove 

  var addItem = document.getElementById('add-btn');
  var itemList = document.getElementById('list-item');
  var removeItem = document.getElementById('remove-btn');
  addItem.addEventListener('click', function () {
    _readOnlyError("itemList"), itemList++;
    itemList.style.display = 'block';
  });
  removeItem.addEventListener('click', function () {
    itemList.style.display = 'none';
  }); // upload 

  var fileInput = document.getElementById("file-input");
  var uploadContainer = document.getElementById("images");
  var numOfFiles = document.getElementById("num-of-files");

  function preview() {
    uploadContainer.innerHTML = "";
    numOfFiles.textContent = "".concat(fileInput.files.length, " Files Selected");
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop = function _loop() {
        i = _step.value;
        var reader = new FileReader();
        var figure = document.createElement("figure");
        var figCap = document.createElement("figcaption");
        figCap.innerText = i.name;
        figure.appendChild(figCap);

        reader.onload = function () {
          var img = document.createElement("img");
          img.setAttribute("src", reader.result);
          figure.insertBefore(img, figCap);
        };

        uploadContainer.appendChild(figure);
        reader.readAsDataURL(i);
      };

      for (var _iterator = fileInput.files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        _loop();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    ;
  }

  ;
  preview(); // tab img

  var tabs = document.querySelector(".tabcontainer");
  var tabButton = document.querySelectorAll(".tabcontainer__column-img");
  var contents = document.querySelectorAll(".tabcontainer__active");

  tabs.onclick = function (e) {
    var id = e.target.dataset.id;

    if (id) {
      tabButton.forEach(function (btn) {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      contents.forEach(function (tabcontainer__active) {
        tabcontainer__active.classList.remove("active");
      });
      var element = document.getElementById(id);
      element.classList.add("active");
    }

    ;
  };
});