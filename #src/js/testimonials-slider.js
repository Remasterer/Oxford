$('.testimonials__slider').slick({
    slidesToShow:3 , // 1
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: 0,
    draggable: false,
    swipe: false,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows:false,
            swipe: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: 0,
          }
        }
      ]
})

  
  // // Remove your custom active class active slide finished
  // $('.testimonials__slider').on('afterChange', function(e, slick, currentSlide, nextSlide) {
  //   $('.slick-clone-current').removeClass('slick-clone-current');
  // })