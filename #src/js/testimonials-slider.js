$('.testimonials__slider').slick({
    slidesToShow:3 , // 1
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: 0,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: 0,
          }
        }
      ]
})
// $('.testimonials__slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
//     const slideCount = $(".testimonials__slider").slick("getSlick").slideCount - 1
//     const nextSlideIsFirst = currentSlide === slideCount
//     const nextSlideIsLast  = nextSlide === slideCount
//     const $activeSlide = $('.testimonial-item.slick-active')
//     if (nextSlideIsFirst) {
//       alert('12')
//     }
//     if (nextSlideIsLast) {
//         $(`.testimonials__slider`).addClass('lol'));
//   })
  
//   // Remove your custom active class active slide finished
//   $('.testimonials__slider').on('afterChange', function(e, slick, currentSlide, nextSlide) {
//     $('.slick-clone-current').removeClass('slick-clone-current');
//   })