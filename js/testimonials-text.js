// Testimonials box animering

function checkVisibility() {
    var texts = document.querySelectorAll(".v-testimonials-text");
    texts.forEach(function (el) {
      if (isElementInViewport(el)) {
        el.classList.add("v-testimonials-text-visible");
      } else {
        el.classList.remove("v-testimonials-text-visible");
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
    addEventListener('DOMContentLoaded', checkVisibility, false);
    addEventListener('load', checkVisibility, false);
    addEventListener('scroll', checkVisibility, false);
  }