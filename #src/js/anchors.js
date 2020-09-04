
function scrollToAnchor(event){
    event.preventDefault();

    let aim = $("section[data-name='"+ $(this).attr('href') +"']");
    $('html,body').animate({scrollTop: aim.offset().top - $('.header__top').height()},'slow');
}
$('.arr-dwn').click(scrollToAnchor);
