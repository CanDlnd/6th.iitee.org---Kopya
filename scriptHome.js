document.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var navbarHome = document.querySelector('.navbarHome');
  var about = document.querySelector('.about');

  if (scrollPosition > 100) {
    about.classList.add('aboutAnimated');
  } else {
    about.classList.remove('aboutAnimated');
  }
});

document.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var navbarHome = document.querySelector('.navbarHome');
  var windowWidth = window.innerWidth;

  if (scrollPosition > 100) {
    navbarHome.style.boxShadow = '2px 20px 15px 10px rgba(0, 0, 0, 0.244)';
    navbarHome.style.backgroundColor = '#0ba5545';
    if (windowWidth >= 768) {
      navbarHome.style.padding = '20px 30px';
    }
  } else {
    navbarHome.style.boxShadow = 'none';
    navbarHome.style.backgroundColor = '#0ba5545';
    navbarHome.style.animation = 'gradientAnimationBack 1s linear forwards';
    if (windowWidth >= 768) {
      navbarHome.style.padding = '10px 10px';
    }
  }
});

$(document).ready(function () {
  $('.card').hover(
    function () {
      $('.card').removeClass('hovered');
      $(this).addClass('hovered');
    },
  );
});

const countdown = document.querySelector(".countdown");

const interval = setInterval(() => {
  const plannedDate = new Date(2024, 2, 27);
  const current = new Date();
  const diff = plannedDate - current;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24)) + "";
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24) + "";
  const minutes = Math.floor((diff / (1000 * 60)) % 60) + "";
  const seconds = Math.floor((diff / 1000) % 60) + "";

  countdown.innerHTML = `
      <div data-content="DAY">${days.length === 1 ? `0${days}` : days}</div>
      <div data-content="HRS">${hours.length === 1 ? `0${hours}` : hours}</div>
      <div data-content="MIN">${minutes.length === 1 ? `0${minutes}` : minutes}</div>
      <div data-content="SEC" class="sec">${seconds.length === 1 ? `0${seconds}` : seconds}</div>
    `;

  if (diff < 0) {
    clearInterval(interval);
    countdown.innerHTML = "<h1>TIME OVER...</h1>";
  }
}, 1000);


jQuery(document).ready(function() {
  
    var btn = $('#buttonUp');
  
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        setTimeout(function() {
          btn.addClass('show');
        }, 0);
      } else {
        btn.removeClass('show');
      }
    });
  
    $(window).scroll();
    
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 0}, '300');
    });
  
  });
  
  /*CALL-FOOTER AND CALL-NAVBAR*/

$(function(){
    $("#footer-container").load("footer.html");
    $("#navbar-container").load("navbar.html");
});

