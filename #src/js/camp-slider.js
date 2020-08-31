$('.camp-slider__slider').slick({
    dots:false,
    slidesToShow: 3,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
        }
    ]
});
