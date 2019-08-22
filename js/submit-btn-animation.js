// Submit button animation

var submitButtonMouseover = document.querySelector(".v-signup-submit");
var submitButtonMouseout = document.querySelector(".v-signup-submit");

submitButtonMouseover.addEventListener("mouseover", function () {
  anime({
    targets: ".v-signup-submit",
    scale: 1.3,
    easing: "easeInCubic",
    duration: 400,
  });
});

submitButtonMouseout.addEventListener("mouseout", function () {
  anime({
    targets: ".v-signup-submit",
    scale: 1,
    easing: "easeInCubic",
    duration: 400,
  });
});