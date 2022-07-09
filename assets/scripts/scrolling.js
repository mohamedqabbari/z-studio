let navbar = document.querySelector("nav");

window.onscroll = function () {
    if (window.scrollY >= 50) {
        navbar.style.position = 'fixed';
        navbar.style.backgroundColor = '#212121';
    }else {
        navbar.style.position = 'absolute';
        navbar.style.backgroundColor = '';
    }
}