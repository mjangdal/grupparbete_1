// Submit button animation

let submitButtonMouseover = document.querySelector(".v-signup-submit");
let submitButtonMouseout = document.querySelector(".v-signup-submit");

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