var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos  ) {
    $('.header').removeClass('scrolling');
  } else {
        $('.header').addClass('scrolling');
  }
  if($(window).scrollTop() > 0){
    $('.header').addClass('in-scroll');
  }
  prevScrollpos = currentScrollPos;
  if(currentScrollPos <= $('.header').height()+30){
    $('.header').removeClass('scrolling');
  }
}
$('.copywrite-footer__inner').append(` <a href="http://comebackagency.com/"><span> Created by Come Back Agency </span> <img src="http://comebackagency.com/logo.svg" alt=""></a>`)
$('.search-icon').click(function(event){
	$(this).hide();
	$('.probox').addClass('active');
})
$('.innericon').click(function () { 
  $('.search-icon').show();
	$('.probox').removeClass('active');
})