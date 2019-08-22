// Text animation

let textAnimation = document.querySelectorAll(".v-text-animation");

function checkForVisibility() {
  textAnimation.forEach(function (el) {
    if (isElementInViewport(el)) {
      if (el.dataset.hasAppeared == 'true') return;
      else {
        anime.timeline({
            loop: false
          })
          .add({
            targets: '.v-text-animation .word',
            scale: [14, 1],
            opacity: [0, 1],
            easing: "easeOutCirc",
            duration: 800,
            delay: function (el, i) {
              return 200 * i;
            }
          });
        el.dataset.hasAppeared = 'true';
      }
    } else el.dataset.hasAppeared = 'false';

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