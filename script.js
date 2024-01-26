document.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var navbarHome = document.querySelector('.navbarHome');
  var navbar = document.querySelector('.navbar');
  var windowWidth = window.innerWidth;

  if (scrollPosition > 100) {
    navbar.style.boxShadow = '2px 20px 15px 10px rgba(0, 0, 0, 0.244)';
    // navbar.style.backgroundColor = 'rgb(11 22 38)';
    if (windowWidth >= 768) {
      navbar.style.padding = '20px 30px';
    }
  } else {
    navbar.style.boxShadow = 'none';
    // navbar.style.backgroundColor = 'rgb(11 22 38)';
    navbar.style.animation = 'gradientAnimationBack 1s linear forwards';
    if (windowWidth >= 768) {
      navbar.style.padding = '10px 10px';
    }
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const paragraphs = document.querySelectorAll('.text-center p');

  paragraphs.forEach((paragraph, index) => {
      setTimeout(() => {
          paragraph.classList.add('active');
      }, index * 100);
  });
});


