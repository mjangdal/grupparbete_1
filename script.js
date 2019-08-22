


function checkForVisibility() {
  var martins = document.querySelectorAll(".martin");
  let slide = document.querySelectorAll(".martin-box");
  let topcontent = document.querySelectorAll(".topcontent");
  topcontent.forEach(function (el) {
    if (isElementInViewport(el)) {
      el.classList.add("topcontent-visible");
    }
    else{
      el.classList.remove("topcontent-visible"); 
    }
  });
  //sliding in the headlines
  martins.forEach(function(martin) {
    if (isElementInViewport(martin)) {
      martin.classList.add("martin-visible")
    }else {
      martin.classList.remove("martin-visible");
    }
  });
  //spinning boxex entrance
  slide.forEach(function(slide){
    
    if (isElementInViewport(slide)){
      //Checking if the boxes have beed shown
      if (slide.dataset.anime == 'true'){
        return;
      }
      else{ //if not show spin them in
        anime({
          targets: '.martin-box',
          translateY: [(anime.random(50,500)),0],
          translateX:[(anime.random(50,250)),0],
          opacity: [0,1],
          rotate: [0,360],
          delay: function(el, i, l) {
            return i * 100;
          },
        })
        slide.dataset.anime = 'true';
      }
    }
    else slide.dataset.anime = 'false' ;
  });
}


function isElementInViewport (el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= -0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 200 
  );
}

if (window.addEventListener) {
  addEventListener('DOMContentLoaded', checkForVisibility, false);
  addEventListener('load', checkForVisibility, false);
  addEventListener('scroll', checkForVisibility,false)
}
//Making the boxes dissapear
document.querySelectorAll('.martin-box').forEach(box => {
  box.addEventListener("click", function(){
    anime({
    targets: this,
    opacity: [1,0],
    scale:2,
    })
  });
});


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
