$(document).ready(function() {
    const $tabs =  $('.js-tabs'),
          $bar = $('.js-tabs__bar', $tabs),
          $tab = $('.js-tabs__tab', $bar),
          $content = $('.js-tabs__content', $tabs),
          $activeClass = 'active';

         $($tab[0]).addClass($activeClass)
          var linkHref = $('a', $tab[0]).attr('href');

          $content.each(function() {
            $content.removeClass($activeClass);
            $tabs.find(linkHref).addClass($activeClass);
          })
          
      $tab.each(function() {
          var $this = $(this),
              $link = $('a', $this) 
          $link.on('click', function(e) {
            //   e.preventDefault();

            if ($this.children().length > 1) {
               var $subtubs = $('.js-tabs__subtabs', $this),
                    $sublinks = $('a', $subtubs);
                    $($sublinks[0]).addClass($activeClass)
                    $tabs.find($($sublinks[0]).attr('href')).addClass($activeClass)
                    $sublinks.each(function() {
                        $(this).on('click', function(e){
                           $('.js-tabs__subcontent').removeClass($activeClass)
                           $('.js-tabs__subtabs a').removeClass($activeClass)
                           $(this).addClass($activeClass)

                            $tabs.find($(this).attr('href')).addClass($activeClass)
                        })
                    })

            }
            $tab.removeClass($activeClass)
            $this.addClass($activeClass);
            var href = $link.attr('href');
            $content.removeClass($activeClass)
            $tabs.find(href).addClass($activeClass)
            


          })
      })
  
  })