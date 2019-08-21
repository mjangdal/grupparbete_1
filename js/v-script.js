// Images scroll animation

function checkForVisibility() {
  var headers = document.querySelectorAll(".v-header");
  headers.forEach(function (el) {
    if (isElementInViewport(el)) {
      el.classList.add("v-header-visible");
    } else {
      el.classList.remove("v-header-visible");
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

// Submit button animation

var performButton = document.querySelector(".v-signup-submit");
var cancelButton = document.querySelector(".v-signup-submit");

performButton.addEventListener("mouseover", function () {
  anime({
    targets: ".v-signup-submit",
    scale: 1.3,
    easing: "easeInCubic",
    duration: 400,
  });
});

cancelButton.addEventListener("mouseout", function (){
  anime({
    targets: ".v-signup-submit",
    scale: 1,
    easing: "easeInCubic",
    duration: 400,
  });
});