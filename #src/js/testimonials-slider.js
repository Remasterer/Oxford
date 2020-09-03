$('.testimonials__slider').slick({
    slidesToShow: 1,
    dots: true,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1,
            }
        }
    ]
})