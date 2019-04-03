let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let toggle = document.getElementsByClassName('link');
let home = document.getElementById('homeLink');
let about = document.getElementById('aboutLink');
let gallery = document.getElementById('galleryLink');

navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
})

home.addEventListener("click", function() {
    mainNav.classList.remove("active");
})

about.addEventListener("click", function() {
    mainNav.classList.remove("active");
})

gallery.addEventListener("click", function() {
    mainNav.classList.remove("active");
})
