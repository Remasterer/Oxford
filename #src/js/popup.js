var $btn = $('.js-popup-btn'),
    $popup = $('.js-popup'),
    $from = $('.js-popup-form', $popup),
    $close = $('.js-popup-close', $popup),
    $activeClass = 'active';
    
    $btn.on('click', function() {
        $popup.addClass($activeClass)
    })
    
    $($popup).on('click', function(e) {
        if (e.target !== this)
          return;
        $(this).removeClass($activeClass)
      });
    
    $close.on('click', function() {
        $popup.removeClass($activeClass)
    })




// MASKS
$('.phone').mask('(000) 000-0000');