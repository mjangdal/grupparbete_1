// Text animation subheading
let textWrapper = document.querySelector('.v-text-animation-subheading');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.v-text-animation-subheading .letter',
    // translateX: [40,0],
    // translateZ: 0,
    opacity: [0,1],
    // easing: "easeOutExpo",
    duration: 1200,
    delay: function(el, i) {
      return 30 * i;
    }
  }).add({
    targets: '.v-text-animation-subheading .letter',
    // translateX: [0,-30],
    opacity: [1,0],
    // easing: "easeInExpo",
    duration: 1100,
    delay: function(el, i) {
      return 30 * i;
    }
  });