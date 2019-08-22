


function checkForVisibility() {
  var martins = document.querySelectorAll(".martin");
  let slide = document.querySelectorAll(".martin-box");
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


