//스크롤
$(window).scroll(function(){
    let scroll = $(window).scrollTop();

    $(".scroll").text(scroll);

 });

//트렌지션
function pageClick() {
    document.querySelectorAll(".page__click").forEach((elem) => {
        elem.addEventListener("click", (e) => {
            e.preventDefault();
            const dataName = elem.getAttribute('href');
            document.querySelector(".title").classList.add("show");
            document.querySelector("#header").classList.add("show");
            setTimeout(() => {
                window.location.href =
                    "http://bella19910809.dothome.co.kr/port/" + dataName;
            }, 2000);
        });
    });
}
pageClick();

//마우스 커서 효과
var cursor = $(".cursor");
            
var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;
        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

$(document).on("mousemove", function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});
//네비 메뉴
$("#trigger-overlay").on('click',function(){
    $(".overlay-contentscale").addClass('open').css("visibility","visible");
    $("main").addClass('overlay-open');
});

$(".overlay-close").on('click',function(){
    $(".overlay-contentscale").removeClass('open').css("visibility","hidden");
    $("main").removeClass('overlay-open');
});

//탑으로 올리기 
const top1 = document.querySelector('.text-default');
top1.addEventListener('click',function(e){
e.preventDefault();
window.screenTop({top:0, behavior: 'smooth' });
});   


//어바웃 섹션
$("nav a").on('click', function (e) {
    e.preventDefault;
    $(".scrollbox").css('display', 'block')
});

gsap.registerPlugin(ScrollTrigger);

//움직이는 글씨부분
setTimeout(function () {
    let tl = gsap.timeline();
    tl.to("#header", { duration: 0.3, stagger: 0.1, opacity: 1, y: 0, ease: "ease.out" });
    tl.to(".pre-title-w", { duration: 0.4, stagger: 0.1, opacity: 1, y:-40, ease: "ease.out" });
    tl.to(".pr-inner", { duration: 0.4, stagger: 0.1, opacity: 1, y:0,  ease: "ease.out" });
    tl.to(".pre-overlay", { duration: 0.4, stagger: 0.1, y:-150,  ease: "ease.out" });
    tl.to(".pr-scroll", { duration: 0.4, stagger: 0.1, opacity: 1, y:0,  ease: "ease.out" });
    
},1000);

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".pr-desc",
        start: "center bottom",
        end: "center top",
        scrub: true
    }
});
tl2.to(".pr-virg", {
    xPercent: 70,
    duration: 3
});

gsap.to(".prc-col", {
    scrollTrigger: {
      trigger: ".pr-virg",
      toggleActions: "resume pause reset pause",
      start: "bottom center",
    },
    opacity:1, 
    duration: 1
  });
  gsap.to(".swiper-wrapper", {
    scrollTrigger: {
      trigger: "#section3",
      toggleActions: "resume pause",
      start: "bottom center",
    },
    opacity:1, 
    duration: 1
  });
//스크롤시 움직이는 글씨 효과
function isElementUnderBottom(elem, triggerDiff) {
    const {
        top
    } = elem.getBoundingClientRect();
    const {
        innerHeight
    } = window;
    return top > innerHeight + (triggerDiff || 0);
}

function handleScroll() {
    const elems = document.querySelectorAll('.pr-quote');
    elems.forEach(elem => {
        if (isElementUnderBottom(elem, -30)) {
            elem.style.opacity = "0";
            elem.style.transform = 'translateY(100px)';

        } else {
            elem.style.opacity = "1";
            elem.style.transform = 'translateY(-10px)';

        }
    })
}


window.addEventListener('scroll', handleScroll);

//어바웃 슬라이드 
  //슬라이드
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 30,
    grabCursor: false,
});

$(".swiper-container").on("mouseenter", function () {
    cursor.addClass("active");
   
});

$(".swiper-container").on("mouseleave", function () {
    cursor.removeClass("active");
    
});

//애니메이션 섹션
const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".container2",
        start: "top top",
        end: "center center",
        scrub: true
    }
});
tl3.to(".left", {
    opacity: 1,
    duration: 3
});
const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".under_arrow",
        start: "bottom",
        end: "center bottom",
        scrub: true
    }
});
tl1.to(".right", {
    opacity: 1,
    duration: 6
});

//프로젝트 섹션
$(function(){
    let section2 = $("#section2"),
        section2OST = section2.offset().top;
    $(window).scroll(function() {
            if($(this).scrollTop()> section2OST){
                setTimeout(function () {
                    let tl = gsap.timeline();
                    tl.to(".heading_1", { duration: 0.3, stagger: 0.1, opacity: 1, x: 0, ease: "ease.out" });
                    tl.to(".heading-line:nth-child(1)> h3", { duration: 0.4, stagger: 0.1, opacity: 1, y:5, ease: "ease.out" });
                    tl.to(".heading-line:nth-child(2)> h3", { duration: 0.4, stagger: 0.1, opacity: 1, y:5, ease: "ease.out" });
                    tl.to(".heading-line:nth-child(3)> h3", { duration: 0.4, stagger: 0.1, opacity: 1, y:5, ease: "ease.out" });
                    tl.to(".card", { duration: 0.2, stagger: 0.1, opacity: 1, y:0, ease: "ease.out" });
                    tl.to(".card-detail", { duration: 0.4, stagger: 0.1, opacity: 1, y:0, ease: "ease.out" });
                },1000);
            }
    })
})

//스크립트 섹션 
setTimeout(function () {
    let tl0 = gsap.timeline();
    tl0.to(".container h1 em:nth-child(1)", { duration: 0.3, stagger: 0.1, opacity: 1, y: 0, ease: "ease.out" });
    tl0.to(".container h1 em:nth-child(2)", { duration: 0.3, stagger: 0.1, opacity: 1, y: 0, ease: "bounce.out" });
    tl0.to(".container h1 em:nth-child(3)", { duration: 0.3, stagger: 0.1, opacity: 1, y: 0, ease: "ease.out" });
    tl0.to(".container h1 em:last-child",   { duration: 0.3,   stagger: 0.1, opacity: 1, y:0 , ease: "ease.out" });
}, 1000);

