$(document).ready(function() {
    const $tabs =  $('.js-gallery-tabs'),
          $bar = $('.js-gallery-tabs__bar', $tabs),
          $tab = $('.js-gallery-tabs__tab', $bar),
          $sabtabs = $('.js-gallery-tabs__subtabs', $tab),
          $sabtab = $('.js-gallery-tabs__subtab', $sabtabs),

          $hashtags = $('.gallery__tabs-hashtags', $sabtabs),
          $hashtag = $('a', $hashtags),
          
          $content = $('.js-gallery-tabs__content', $tabs),
          $activeClass = 'active';

          $hashtag.on('click', function(e){
              e.preventDefault();

              var cont = $($(this).attr('href'));
              cont.addClass('active')
              $hashtag.removeClass('active')
              $(this).addClass('active')
              
              $content.removeClass('active')
              $tab.find($($(this).attr('href')).addClass('active'))
          })

          $($tab[0]).addClass('active')
          $($sabtabs[0]).addClass('active');
          var firstsubtab =  $($('.js-gallery-tabs__subtab',$($sabtabs[0]) )[0])
          firstsubtab.addClass('active')
          $('.gallery__tabs-hashtags',firstsubtab ).addClass('active').find('a:first-child').addClass('active')
          var firsthref = $('.gallery__tabs-hashtags',firstsubtab ).find('a:first-child').attr('href')
          $tabs.find($(firsthref)).addClass('active')          
       

      $tab.each(function() {
          var $this = $(this);

          $this.on('click', function() {
              $tab.removeClass('active')
              $this.addClass('active')

              var subtab = $('.gallery__tabs-subtabs li', $this);

              console.log(subtab)

            subtab.on('click', function(){
                subtab.removeClass('active')
                $(this).addClass('active')
            })
          }) 

      })
  
  })