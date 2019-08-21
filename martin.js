function checkForVisibility() {
  var martins = document.querySelectorAll(".martin");
  let slides = document.querySelectorAll(".martin-box")
  martins.forEach(function(martin) {
    if (isElementInViewport(martin)) {

      martin.classList.add("martin-visible")
    }else martin.classList.remove("martin-visible");
    
    
    
    
  });

  slides.forEach(function(slide){
    if (slide.dataset.anime === true) return;
    else{
      slide.dataset.anime = true;
      anime({
        targets: '.martin-box',
        translateY: [250,0],
        translateX:[250,0],
        opacity: [0,1],
        rotate: [0,360],
        delay: function(el, i, l) {
          return i * 100;
        },
      })
    }
  });
}

function isElementInViewport (el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= -50 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 200 
  );
}

if (window.addEventListener) {
  addEventListener('DOMContentLoaded', checkForVisibility, false); 
  addEventListener('load', checkForVisibility, false);
  addEventListener('scroll', checkForVisibility,false)
}