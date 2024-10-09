document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.getElementById('hamburger');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });
});
