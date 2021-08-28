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

setTimeout(()=>{
    document.querySelector("#header").classList.remove("show");
}, 1000);