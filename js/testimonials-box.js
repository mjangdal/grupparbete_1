// Testimonials box animering

// function checkVisibility() {
//   var headers = document.querySelectorAll(".v-testimonials");
//   headers.forEach(function (el) {
//     if (isElementInViewport(el)) {
//       if (el.dataset.hasAppeared == 'true') return;
//       else {
//         anime({
//           targets: ".v-testimonials",
//           scale: [0, 1],
//           opacity: 1,
//           easing: "easeInCubic",
//           duration: 1000,
//         });
//         el.dataset.hasAppeared = 'true';
//       }
//       // el.classList.add("v-testimonials-visible");
//     } else {
//       el.dataset.hasAppeared = 'false';
//       // el.classList.remove("v-testimonials-visible");
//     }
//   });
// }

// function isElementInViewport(el) {
//   var rect = el.getBoundingClientRect();

//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// if (window.addEventListener) {
//   addEventListener('DOMContentLoaded', checkVisibility, false);
//   addEventListener('load', checkVisibility, false);
//   addEventListener('scroll', checkVisibility, false);
// }
