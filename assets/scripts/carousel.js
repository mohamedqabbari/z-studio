
let dur = document.querySelector(".carousel").getAttribute("data-duration");
let carouselItems = document.getElementsByClassName("carousel-item");
let index = carouselItems.length - 1;

function carouselTransition(){
    Array.from(carouselItems).forEach(element => {
        element.style.opacity = '0';
    });
    carouselItems[index].style.opacity = '1';
    index--;
    if (index == -1) {
        index = carouselItems.length - 1;
    }
    setTimeout(carouselTransition, parseInt(dur) * 1000);
}
carouselTransition();