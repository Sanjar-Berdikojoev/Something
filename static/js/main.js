$(function() {

    $(".slider").slick({
        slidesToShow: 3,
        draggable: true,
        infinity: true,
        speed: 1000,
        easing: "linear",
        draggable: false,
        waitForAnimate: false,
    });
});

const registrWindow = document.querySelector(".registr");
const registrButton = document.querySelector("#registr_window");
const registrCancel = document.querySelector(".registr__cancel");
registrButton.addEventListener("click", (event)=> {
    registrWindow.style.top = '20vh';
    event.preventDefault();
})
registrCancel.addEventListener("click", ()=> {
    registrWindow.style.top = '-1500px';
})
