$(document).ready(function() {
    const $tabs =  $('.js-tabs'),
          $bar = $('.js-tabs__bar', $tabs),
          $tab = $('a', $bar),
          $content = $('.js-tabs__content', $tabs),
          $activeClass = 'active'
          
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