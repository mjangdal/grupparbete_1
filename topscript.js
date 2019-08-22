
/* Text */

function checkForVisibility() {
  let topcontent = document.querySelectorAll(".topcontent");
  topcontent.forEach(function (el) {
    if (isElementInViewport(el)) {
      el.classList.add("topcontent-visible");
    }
    else{
      el.classList.remove("topcontent-visible"); 
    }
  });
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

if (window.addEventListener) {
  addEventListener('DOMContentLoaded', checkForVisibility, false);
  addEventListener('load', checkForVisibility, false);
  addEventListener('scroll', checkForVisibility, false);
}

/* Knapp */
function performAction() {
  let action = anime({
    targets: '.createbtn',
    easing: 'easeInCubic',
    scale: 1.2,
    opacity: 0.5,
    duration: 500
  })
};

document.querySelector(".createbtn").addEventListener("click", performAction);

anime({
  targets: '.createbtn',
  easing: 'linear',
  delay: 2000,
  opacity: 1,
  duration: 500
});


/* Navigerings meny */

anime({
  targets: '.nav-men',
  easing: 'linear',
  delay: 1400,
  opacity: 1,
  duration: 500
});

/* Extra meny animationer */

function loginFall() {
  let menufall = anime({
    targets: '.login-men',
    translateY: '30rem',
    rotate: 90,
    duration: 4000,
    loop: false,
    left: '240px',
    scale: 0.9, 
    opacity: 0
  })
};

document.querySelector(".login-men").addEventListener("click", loginFall);

function menuFall() {
  let menufall = anime({
    targets: '.meny-men',
    translateY: '30rem',
    rotate: 90,
    duration: 4000,
    loop: false,
    left: '240px',
    scale: 0.9, 
    opacity: 0
  })
};

document.querySelector(".meny-men").addEventListener("click", menuFall);

/* Ta bort logo */

function logoFall() {
  let logofall = anime({
    targets: '.logo',
    translateY: '30rem',
    rotate: 180,
    duration: 4000,
    loop: false,
    right: '240px',
    scale: 0.9, 
    opacity: 0
  })
};

document.querySelector(".logo").addEventListener("click", logoFall);

