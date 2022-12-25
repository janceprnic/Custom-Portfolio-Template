//variable for the burger menu icon
let burger_menu = document.querySelector('.burger-menu');

//variable for navigation links
let nav_links = document.querySelector('.nav-links');

//function which opens the menu on mobile devices and transforms the burger menu into a "X" button after clicking on it
burger_menu.addEventListener('click', function() {
    nav_links.classList.toggle('nav-links-active');

    burger_menu.classList.toggle('clicked');
})

//function which closes the menu after clicking the navigation links
nav_links.addEventListener('click', function() {
    nav_links.classList.toggle('nav-links-active');

    burger_menu.classList.toggle('clicked');
})

//variable for "go up" button
let goup_btn = document.querySelector('.goup-btn');

//function for that makes the "go up" button appear
window.onscroll = function() {goup_btn_appearance()};

function goup_btn_appearance() {

    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        goup_btn.style.display = "block";
    }
    else {
        goup_btn.style.display = "none";
    }
}