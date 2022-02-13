window.addEventListener('DOMContentLoaded', function () {

    // size 

    let sizeShow = document.querySelector('.product__size-name__span');
    let sizeChoise = document.querySelector('#xs-choise');

    sizeChoise.addEventListener("click", () => {
        sizeShow;
    });

    // counter

    let counterDisplayElem = document.querySelector('.product__counter-number');
    let counterShow = document.querySelector('.product__amount__span');
    let counterMinusElem = document.querySelector('.product__counter-minus');
    let counterPlusElem = document.querySelector('.product__counter-plus');

    let count = 1;

    updateDisplay();

    counterPlusElem.addEventListener("click", () => {
        count++;
        updateDisplay();
    });

    counterMinusElem.addEventListener("click", () => {

        if (count != 1) {
            count--;
        };
    
        updateDisplay();
    });

    function updateDisplay() {
        counterDisplayElem.innerHTML = count;
        counterShow.innerHTML = count;
    };

    // carousel

    let position = 0;
    const slidesToShow = 5.5;
    const slidesToScroll = 1;
    const container = document.querySelector('.carousel__container');
    const track = document.querySelector('.carousel__track');
    const btnPrev = document.querySelector('.carousel__buttons-prev');
    const btnNext = document.querySelector('.carousel__buttons-next');
    const items = document.querySelectorAll('.carousel__item');
    const itemsCount = items.length;
    const itemWidth = container.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    items.forEach((item) => {
         item.style.minWidth = `${itemWidth}px`;
    });

    btnNext.addEventListener('click', () => {
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    });

    btnPrev.addEventListener('click', () => {
        const itemsLeft = Math.abs(position) / itemWidth;

        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    });

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
    };

    const checkBtns = () => {
        btnPrev.hidden = position === 0;
        btnNext.hidden = position <= -(itemsCount - slidesToShow) * itemWidth;
    };

    checkBtns();

    // Review slider 

    let ReviewPosition = 0;
    const SecondSlidesToShow = 5.5;
    const SecondSlidesToScroll = 1;
    const ReviewContainer = document.querySelector('.review__carousel-container');
    const ReviewTrack = document.querySelector('.review__carousel-track');
    const btnReviewPrev = document.querySelector('.review__carousel-buttons__prev');
    const btnReviewNext = document.querySelector('.review__carousel-buttons__next');
    const itemsReview = document.querySelectorAll('.review__carousel-item');
    const itemsCountReview = itemsReview.length;
    const itemWidthReview = ReviewContainer.clientWidth / SecondSlidesToShow;
    const movePositionReview = slidesToScroll * itemWidthReview;

    itemsReview.forEach((item) => {
         item.style.minWidth = `${itemWidthReview}px`;
    });

    btnReviewNext.addEventListener('click', () => {
        const itemsLeftSecond = itemsCountReview - (Math.abs(ReviewPosition) + SecondSlidesToShow * itemWidthReview) / itemWidthReview;

        ReviewPosition -= itemsLeftSecond >= SecondSlidesToScroll ? movePositionReview : itemsLeftSecond * itemWidthReview;

        setPositionReview();
        checkBtnsReview();
    });

    btnReviewPrev.addEventListener('click', () => {
        const itemsLeftSecond = Math.abs(ReviewPosition) / itemWidthReview;

        ReviewPosition += itemsLeftSecond >= SecondSlidesToScroll ? movePositionReview : itemsLeftSecond * itemWidthReview;

        setPositionReview();
        checkBtnsReview();
    });

    const setPositionReview = () => {
        ReviewTrack.style.transform = `translateX(${ReviewPosition}px)`;
    };

    const checkBtnsReview = () => {
        btnReviewPrev.hidden = ReviewPosition === 0;
        btnReviewNext.hidden = ReviewPosition <= -(itemsCountReview - SecondSlidesToShow) * itemWidthReview;
    };

    checkBtnsReview();

    // modal 

    const openBtn = document.getElementById('open');
    const modalContainer = document.getElementById('modal-container');
    const closeBtn = document.getElementById('close-modal');

    // openBtn.addEventListener('click', () => {
    //     modalContainer.classList.add('show');
    //     modalContainer.classList.remove('hide');
    // });

    // closeBtn.addEventListener('click', () => {
    //     modalContainer.classList.add('hide');
    //     modalContainer.classList.remove('show');
    // });

    openBtn.addEventListener('click', openModal);

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', outsideClick);

    function openModal() {
        modalContainer.style.display = 'flex';
    };

    function closeModal() {
        modalContainer.style.display = 'none';
    };

    function outsideClick(e) {
        if (e.target == modalContainer) {
            modalContainer.style.display = 'none';
        };
    };
});