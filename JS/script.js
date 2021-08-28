//이미지 갤러리 스크립트
const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
};
const getImgPosValue = (imgSize, winSize) => {
    const windowSize = winSize;
    const totalWidth = windowSize - imgSize;
    const randomPosVal = getRandomInt(totalWidth);

    return `${randomPosVal}px`;
};
const setImgPosition = elImg => {
    const windowW = 770;
    console.log(windowW)
    const windowH = 860;
    const imgWidth = Math.round(elImg.getBoundingClientRect().width);
    const imgHeight = Math.round(elImg.getBoundingClientRect().height);

    elImg.style.left = getImgPosValue(imgWidth, windowW);
    elImg.style.top = getImgPosValue(imgHeight, windowH);
};
/* Let's create a posibility to manipulate the z-index of imgs if needed. */
// let z = 10;
// const increaseZindex = (el) => {
// 	el.style.zIndex = z;
// 	z++; // Place counter after styling, to start as of first let 'z' value
// };
const imgArray = [];

function createImgArray() {
    const galleryImg = document.querySelectorAll(".gallery__item");

    galleryImg.forEach(function (el) {
        const imgId = el.getAttribute("id");
        imgArray.push(imgId);

        setImgPosition(el);
        // increaseZindex(el);
    });
}
createImgArray();

let currentIndex = imgArray.length - 1;
const showImg = (elImg, elClass) => {
    currentIndex++; // First increase the img index
    if (elImg) {
        elImg.classList.remove(elClass); // Then use that increased index to show next img
        setImgPosition(
            elImg); // And also use that increased index to set a new img position inside the gallery
    }
};
const hideImg = (elImg, elClass) => {
    currentIndex--; // First decrease the img index
    if (elImg) {
        elImg.classList.add(elClass); // Then use that decreased index to hide prev img
    }
    // Let's remove the first signal image after one click/tap
    const imgSignalId = "js-item-signal";
    if (imgArray.includes(imgSignalId)) {
        imgArray.pop();

        const imgSignal = document.querySelector(`#${imgSignalId}`);
        imgSignal.remove();
    }
};

function toggleImgVisibility() {
    const $this = this;
    const hasImgsClass = "has-imgs";
    const img = {
        first: document.querySelector(`#${imgArray[0]}`),
        last: document.querySelector(`#${imgArray[imgArray.length - 1]}`),
        current: document.querySelector(`#${imgArray[currentIndex]}`),
        hiddenClass: 'is-hidden'
    };


    if (currentIndex === -1) {
        showImg(img.first, img.hiddenClass);
        $this.classList.add(hasImgsClass);
    }

    if (currentIndex === imgArray.length) {
        hideImg(img.last, img.hiddenClass);
        $this.classList.remove(hasImgsClass);
        $(".sec2 .right p").classList.add(active);

    }

    const hasImgsClassExists = $this.classList.contains(hasImgsClass);

    return hasImgsClassExists ? showImg(img.current, img.hiddenClass) : hideImg(img.current, img.hiddenClass);
}

const gallery = document.querySelector("#js-gallery");
gallery.addEventListener("click", toggleImgVisibility);


//가로 스크롤

$(window).scroll(function () {
    let scroll = $(window).scrollTop();

    $(".scroll").text(scroll);

    let offset = (scroll - $("#section8").offset().top)


    if (scroll > $("#section8").offset().top) {

        $(".sec8").css("left", -offset + "px")

    }
});

//메뉴 숨기기 부분 

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    if (st > lastScrollTop && st > navbarHeight) {
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }

    }
    lastScrollTop = st;
}

//loading 

$(function () {
    
});