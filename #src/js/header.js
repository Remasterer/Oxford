var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $('.header').removeClass('scrolling');
  } else {
    $('.header').addClass('scrolling');
  }
  if($(window).scrollTop() > 0){
    $('.header').addClass('in-scroll');
  }
  prevScrollpos = currentScrollPos;
}

