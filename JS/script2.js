let $container = $('#progress'),
    $progressBar = $container.find('.progress-bar'),
    $progressText = $container.find('.progress-text'),

    imgLoad = imagesLoaded('body'),
    imgTotal = imgLoad.images.length,
    imgLoaded = 0,
    current = 0,
    progressTimer = setInterval(updateProgress, 1000 / 60);

imgLoad.on('progress', function () {
    imgLoaded++;
});

function updateProgress() {
    let target = (imgLoaded / imgTotal) * 100;
    current += (target - current) * 0.1;

    $progressBar.css({
        width: current + '%'
    });
    $progressText.text(Math.floor(current) + '%');

    if (current >= 100) {
        clearInterval(progressTimer);
        $container.addClass('progress-complete');
        $progressBar.add($progressText)
            .delay(500)
            .animate({
                opacity: 0
            }, 250, function () {
                $container.animate({
                    top: '-100%'
                }, 1000, 'easeInOutQuint');
            });
         gsap.to("header h1", {
                duration: 0.3,
                opacity: 1,
                delay: 2
        })
        const c=1;
        const child = document.querySelector(`.sec1 h1 strong:nth-child(${c})`);
        gsap.to(child,{
            duration: 1,
            opacity: 1,
             delay: 2
        })
        
        const child1 = document.querySelector(`.sec1 h1 strong:last-child`);
        gsap.to(child1,{
            duration: 1,
            opacity: 1,
            delay: 2.5
        })
        gsap.to(".sec1 h1 em", {
            duration: 1,
            opacity: 1,
            delay: 3
        })
        gsap.to("nav", {
            duration: 1,
            opacity: 1,
            delay: 3.5
        })
    };
    if (current > 99.9) {
        current = 100;
    };
};

/*배경*/

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var bgg = document.getElementById("bg_glow");
w = ctx.canvas.width = window.innerWidth;
h = ctx.canvas.height = window.innerHeight;

window.onresize = function () {
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    maxHeight = h * .9
    minHeight = h * .5;
    dots = [];
    pushDots();
    ctx.globalCompositeOperation = "lighter";
};

document.getElementById("overlay").onclick = function () {
    hue = Math.random() * 360;
    bgg.style.background = "radial-gradient(ellipse at center, hsla(" + hue +
        ",50%,50%,.8) 0%,rgba(0,0,0,0) 100%)";
    dots = [];
    pushDots();
}

dots = [{}];
mx = 0;
my = 0;
md = 100;
maxWidth = 15;
minWidth = 2;
maxHeight = h * .9
minHeight = h * .5;
maxSpeed = 35;
minSpeed = 6;
hue = 230;
hueDif = 50; // Hue +/-
glow = 10; // Set to 0 for better performance
ctx.globalCompositeOperation = "lighter";

function pushDots(num) {
    for (i = 1; i < md; i++) {
        dots.push({
            x: Math.random() * w,
            y: Math.random() * h / 2,
            h: Math.random() * (maxHeight - minHeight) + minHeight,
            w: Math.random() * (maxWidth - minWidth) + minWidth,
            c: Math.random() * ((hue + hueDif) - (hue - hueDif)) + (hue - hueDif),
            m: Math.random() * (maxSpeed - minSpeed) + minSpeed
        });
    }
}
pushDots();

function render() {
    ctx.clearRect(0, 0, w, h);
    for (i = 1; i < dots.length; i++) {
        ctx.beginPath();
        grd = ctx.createLinearGradient(dots[i].x, dots[i].y, dots[i].x + dots[i].w, dots[i].y + dots[i].h);
        grd.addColorStop(.0, "hsla(" + dots[i].c + ",50%,50%,.0)");
        grd.addColorStop(.2, "hsla(" + dots[i].c + 20 + ",50%,50%,.5)");
        grd.addColorStop(.5, "hsla(" + dots[i].c + 50 + ",70%,60%,.8)");
        grd.addColorStop(.8, "hsla(" + dots[i].c + 80 + ",50%,50%,.5)");
        grd.addColorStop(1., "hsla(" + (dots[i].c + 100) + ",50%,50%,.0)");
        ctx.shadowBlur = glow;
        ctx.shadowColor = "hsla(" + (dots[i].c) + ",50%,50%,1)";
        ctx.fillStyle = grd;
        ctx.fillRect(dots[i].x, dots[i].y, dots[i].w, dots[i].h);
        ctx.closePath();
        dots[i].x += dots[i].m / 100;
        if (dots[i].x > w + maxWidth) {
            dots.splice(i, 1);
            dots.push({
                x: 0,
                y: Math.random() * h,
                h: Math.random() * (maxHeight - minHeight) + minHeight,
                w: Math.random() * (maxWidth - minWidth) + minWidth,
                c: Math.random() * ((hue + hueDif) - (hue - hueDif)) + (hue - hueDif),
                m: Math.random() * (maxSpeed - minSpeed) + minSpeed
            });
        }
    }

    window.requestAnimationFrame(render);
}

bgg.style.background = "radial-gradient(ellipse at center, hsla(" + hue + ",50%,50%,.8) 0%,rgba(0,0,0,0) 100%)";
render();


gsap.registerPlugin(ScrollTrigger);

//움직이는 글씨부분
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".move_w1 div",
        start: "center bottom",
        end: "center top",
        scrub: true
    }
});
tl.to(".move_w1 div", {
    xPercent: -40,
    duration: 3
});

const s = gsap.timeline({
    scrollTrigger: {
        trigger: ".move_w2 div",
        start: "center bottom",
        end: "center top",
        scrub: true

    }
});
s.to(".move_w2 div", {
    xPercent: 10,
    duration: 3
});

// section2 글씨 부분
gsap.from("#section2 h1", {
    scrollTrigger: {
        trigger: "#section2",
        scrub: true,
        start: "top top",
        end: "+=50%"
    },
    duration: 1.5,
    opacity: 0,
    x: -100
});
gsap.from("#section2 .left p", {
    scrollTrigger: {
        trigger: "#section2",
        scrub: true,
        start: "top top",
        end: "+=80%"
    },
    duration: 2,
    opacity: 0,
    y: 150
});
//section3 부분
gsap.from(".hr", {
    scrollTrigger: {
        trigger: ".line",
        scrub: true,
        start: "top top",
        end: "+=5%",
    },
    scaleX: 0,
    transformOrigin: "left center",
    ease: "none",
    duration: 4
});

gsap.from(".hr2", {
    scrollTrigger: {
        trigger: ".line_2",
        scrub: true,
        start: "top top",
        end: "+=5%"
    },
    scaleX: 0,
    transformOrigin: "left center",
    ease: "none",
    duration: 4
});

gsap.from(".hr3", {
    scrollTrigger: {
        trigger: ".line_3",
        scrub: true,
        start: "top top",
        end: "+=5%",
    },
    scaleX: 0,
    transformOrigin: "left center",
    ease: "none",
    duration: 4
});

gsap.from(".hr4", {
    scrollTrigger: {
        trigger: ".line_4",
        scrub: true,
        start: "top top",
        end: "+=5%",
    },
    scaleX: 0,
    transformOrigin: "left center",
    ease: "none",
    duration: 4
});
gsap.from(".hr5", {
    scrollTrigger: {
        trigger: ".line_5",
        scrub: true,
        start: "top top",
        end: "+=5%",
    },
    scaleX: 0,
    transformOrigin: "left center",
    ease: "none",
    duration: 4
});