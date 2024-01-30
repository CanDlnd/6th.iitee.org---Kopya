document.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var navbarHome = document.querySelector('.navbarHome');
    var navbar = document.querySelector('.navbar');
    var windowWidth = window.innerWidth;

    if (scrollPosition > 100) {
        navbar.style.boxShadow = '2px 20px 15px 10px rgba(0, 0, 0, 0.244)';
        if (windowWidth >= 768) {
            navbar.style.padding = '20px 30px';
        }
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.animation = 'gradientAnimationBack 1s linear forwards';
        if (windowWidth >= 768) {
            navbar.style.padding = '10px 10px';
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const paragraphs = document.querySelectorAll('.text-center p');

    paragraphs.forEach((paragraph, index) => {
        setTimeout(() => {
            paragraph.classList.add('active');
        }, index * 100);
    });
});

jQuery(document).ready(function () {

    var btn = $('#buttonUp');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            setTimeout(function () {
                btn.addClass('show');
            }, 0);
        } else {
            btn.removeClass('show');
        }
    });

    $(window).scroll();

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

});

/*CALL-FOOTER AND CALL-NAVBAR*/

$(function(){
    $("#footer-container").load("footer.html");
    $("#navbar-container").load("navbar.html");
});