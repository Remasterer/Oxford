$(document).ready(function() {
    const $tabs =  $('.js-tabs'),
          $bar = $('.js-tabs__bar', $tabs),
          $tab = $('a', $bar),
          $content = $('.js-tabs__content', $tabs),
          $activeClass = 'active';

          $($tab[0]).addClass($activeClass)
          var linkHref = $($tab[0]).attr('href');

          $content.each(function() {
            $content.removeClass($activeClass);
            $tabs.find(linkHref).addClass($activeClass);
          })
          
      $tab.each(function() {
          var $this = $(this);
          $this.on('click', function(e) {
              e.preventDefault();
              $tab.removeClass($activeClass)
              $this.addClass($activeClass);
              var href = $this.attr('href');
              $content.removeClass($activeClass)
              $tabs.find(href).addClass($activeClass)
          })
      })
  
  })