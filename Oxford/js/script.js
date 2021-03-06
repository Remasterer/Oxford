"use strict";

var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    $('.header').removeClass('scrolling');
  } else {
    $('.header').addClass('scrolling');
  }

  if ($(window).scrollTop() > 0) {
    $('.header').addClass('in-scroll');
  }

  prevScrollpos = currentScrollPos;

  if (currentScrollPos <= $('.header').height() + 30) {
    $('.header').removeClass('scrolling');
  }
};

$('.copywrite-footer__inner').append(" <a href=\"http://comebackagency.com/\"><span> Created by Come Back Agency </span> <img src=\"http://comebackagency.com/logo.svg\" alt=\"\"></a>");
$('.search-icon').click(function (event) {
  $(this).hide();
  $('.probox').addClass('active');
});
$('.innericon').click(function () {
  $('.search-icon').show();
  $('.probox').removeClass('active');
});

(function () {
  var originalPositions = [];
  var daElements = document.querySelectorAll('[data-da]');
  var daElementsArray = [];
  var daMatchMedia = []; //Заполняем массивы

  if (daElements.length > 0) {
    var number = 0;

    for (var index = 0; index < daElements.length; index++) {
      var daElement = daElements[index];
      var daMove = daElement.getAttribute('data-da');

      if (daMove != '') {
        var daArray = daMove.split(',');
        var daPlace = daArray[1] ? daArray[1].trim() : 'last';
        var daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
        var daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
        var daDestination = document.querySelector('.' + daArray[0].trim());

        if (daArray.length > 0 && daDestination) {
          daElement.setAttribute('data-da-index', number); //Заполняем массив первоначальных позиций

          originalPositions[number] = {
            "parent": daElement.parentNode,
            "index": indexInParent(daElement)
          }; //Заполняем массив элементов 

          daElementsArray[number] = {
            "element": daElement,
            "destination": document.querySelector('.' + daArray[0].trim()),
            "place": daPlace,
            "breakpoint": daBreakpoint,
            "type": daType
          };
          number++;
        }
      }
    }

    dynamicAdaptSort(daElementsArray); //Создаем события в точке брейкпоинта

    for (var _index = 0; _index < daElementsArray.length; _index++) {
      var el = daElementsArray[_index];
      var _daBreakpoint = el.breakpoint;
      var _daType = el.type;
      daMatchMedia.push(window.matchMedia("(" + _daType + "-width: " + _daBreakpoint + "px)"));

      daMatchMedia[_index].addListener(dynamicAdapt);
    }
  } //Основная функция


  function dynamicAdapt(e) {
    for (var _index2 = 0; _index2 < daElementsArray.length; _index2++) {
      var _el = daElementsArray[_index2];
      var _daElement = _el.element;
      var _daDestination = _el.destination;
      var _daPlace = _el.place;
      var _daBreakpoint2 = _el.breakpoint;
      var daClassname = "_dynamic_adapt_" + _daBreakpoint2;

      if (daMatchMedia[_index2].matches) {
        //Перебрасываем элементы
        if (!_daElement.classList.contains(daClassname)) {
          var actualIndex = indexOfElements(_daDestination)[_daPlace];

          if (_daPlace === 'first') {
            actualIndex = indexOfElements(_daDestination)[0];
          } else if (_daPlace === 'last') {
            actualIndex = indexOfElements(_daDestination)[indexOfElements(_daDestination).length];
          }

          _daDestination.insertBefore(_daElement, _daDestination.children[actualIndex]);

          _daElement.classList.add(daClassname);
        }
      } else {
        //Возвращаем на место
        if (_daElement.classList.contains(daClassname)) {
          dynamicAdaptBack(_daElement);

          _daElement.classList.remove(daClassname);
        }
      }
    }

    customAdapt();
  } //Вызов основной функции


  dynamicAdapt(); //Функция возврата на место

  function dynamicAdaptBack(el) {
    var daIndex = el.getAttribute('data-da-index');
    var originalPlace = originalPositions[daIndex];
    var parentPlace = originalPlace['parent'];
    var indexPlace = originalPlace['index'];
    var actualIndex = indexOfElements(parentPlace, true)[indexPlace];
    parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
  } //Функция получения индекса внутри родителя


  function indexInParent(el) {
    var children = Array.prototype.slice.call(el.parentNode.children);
    return children.indexOf(el);
  } //Функция получения массива индексов элементов внутри родителя 


  function indexOfElements(parent, back) {
    var children = parent.children;
    var childrenArray = [];

    for (var i = 0; i < children.length; i++) {
      var childrenElement = children[i];

      if (back) {
        childrenArray.push(i);
      } else {
        //Исключая перенесенный элемент
        if (childrenElement.getAttribute('data-da') == null) {
          childrenArray.push(i);
        }
      }
    }

    return childrenArray;
  } //Сортировка объекта


  function dynamicAdaptSort(arr) {
    arr.sort(function (a, b) {
      if (a.breakpoint > b.breakpoint) {
        return -1;
      } else {
        return 1;
      }
    });
    arr.sort(function (a, b) {
      if (a.place > b.place) {
        return 1;
      } else {
        return -1;
      }
    });
  } //Дополнительные сценарии адаптации


  function customAdapt() {//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }
})();

;

function scrollToAnchor(event) {
  event.preventDefault();
  var aim = $("section[data-name='" + $(this).attr('href') + "']");
  $('html,body').animate({
    scrollTop: aim.offset().top - $('.header__top').height()
  }, 'slow');
}

$('.arr-dwn').click(scrollToAnchor);
;
$('.our-team__slider').slick({
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 480,
    settings: {
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});
;
$('.testimonials__slider').slick({
  slidesToShow: 3,
  // 1
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: 0,
  draggable: false,
  swipe: false,
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: false,
      swipe: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: 0
    }
  }]
}); // // Remove your custom active class active slide finished
// $('.testimonials__slider').on('afterChange', function(e, slick, currentSlide, nextSlide) {
//   $('.slick-clone-current').removeClass('slick-clone-current');
// });

$('.camp-slider__slider').slick({
  dots: false,
  slidesToShow: 3,
  arrows: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});
;
$(document).ready(function () {
  var $tabs = $('.js-tabs'),
      $bar = $('.js-tabs__bar', $tabs),
      $tab = $('.js-tabs__tab', $bar),
      $content = $('.js-tabs__content', $tabs),
      $activeClass = 'active';
  $($tab[0]).addClass($activeClass);
  var linkHref = $('a', $tab[0]).attr('href');
  $content.each(function () {
    $content.removeClass($activeClass);
    $tabs.find(linkHref).addClass($activeClass);
  });
  $tab.each(function () {
    var $this = $(this),
        $link = $('a', $this);
    $link.on('click', function (e) {
      //   e.preventDefault();
      if ($this.children().length > 1) {
        var $subtubs = $('.js-tabs__subtabs', $this),
            $sublinks = $('a', $subtubs);
        $($sublinks[0]).addClass($activeClass);
        $tabs.find($($sublinks[0]).attr('href')).addClass($activeClass);
        $sublinks.each(function () {
          $(this).on('click', function (e) {
            $('.js-tabs__subcontent').removeClass($activeClass);
            $('.js-tabs__subtabs a').removeClass($activeClass);
            $(this).addClass($activeClass);
            $tabs.find($(this).attr('href')).addClass($activeClass);
          });
        });
      }

      $tab.removeClass($activeClass);
      $this.addClass($activeClass);
      var href = $link.attr('href');
      $content.removeClass($activeClass);
      $tabs.find(href).addClass($activeClass);
    });
  });
});
$('.reviews__slider').slick([]);
var $btn = $('.js-popup-btn'),
    $popup = $('.js-popup'),
    $from = $('.js-popup-form', $popup),
    $close = $('.js-popup-close', $popup),
    $activeClass = 'active';
$btn.on('click', function () {
  $popup.addClass($activeClass);
});
$($popup).on('click', function (e) {
  if (e.target !== this) return;
  $(this).removeClass($activeClass);
});
$close.on('click', function () {
  $popup.removeClass($activeClass);
}); // MASKS

$('.phone').mask('(000) 000-0000');
;
$(document).ready(function () {
  var $tabs = $('.js-gallery-tabs'),
      $bar = $('.js-gallery-tabs__bar', $tabs),
      $tab = $('.js-gallery-tabs__tab', $bar),
      $sabtabs = $('.js-gallery-tabs__subtabs', $tab),
      $sabtab = $('.js-gallery-tabs__subtab', $sabtabs),
      $hashtags = $('.gallery__tabs-hashtags', $sabtabs),
      $hashtag = $('a', $hashtags),
      $content = $('.js-gallery-tabs__content', $tabs),
      $activeClass = 'active';
  $hashtag.on('click', function (e) {
    e.preventDefault();
    var cont = $($(this).attr('href'));
    cont.addClass('active');
    $hashtag.removeClass('active');
    $(this).addClass('active');
    $content.removeClass('active');
    $tab.find($($(this).attr('href')).addClass('active'));
  });
  $($tab[0]).addClass('active');
  $($sabtabs[0]).addClass('active');
  var firstsubtab = $($('.js-gallery-tabs__subtab', $($sabtabs[0]))[0]);
  firstsubtab.addClass('active');
  $('.gallery__tabs-hashtags', firstsubtab).addClass('active').find('a:first-child').addClass('active');
  var firsthref = $('.gallery__tabs-hashtags', firstsubtab).find('a:first-child').attr('href');
  $tabs.find($(firsthref)).addClass('active');
  $tab.each(function () {
    var $this = $(this),
        link = $('a.button.e--light-blue', $this);
    link.on('click', function (e) {
      if (e.target == this) {
        $tab.removeClass('active');
        $this.addClass('active');
        var firstSabtabs = $('.gallery__tabs-subtabs li', $this),
            firstTags = $(firstSabtabs[0]).find('.gallery__tabs-hashtags');
        firstSabtabs.removeClass('active');
        $(firstSabtabs[0]).addClass('active');
        var firstTag = $(firstSabtabs[0]).find('.gallery__tabs-hashtags a:first-child');
        firstTags.removeClass('active');
        console.log(firstTag);
        firstTag.addClass('active');
        $content.removeClass('active');
        $tabs.find($(firstTag.attr('href'))).addClass('active');
      }
    });
  });
  $sabtab.each(function () {
    var $this = $(this),
        link = $('a.button.e--light-red', $this);
    link.on('click', function (e) {
      if (e.target == this) {
        $sabtab.removeClass('active');
        $this.addClass('active');
        var tags = $('.gallery__tabs-hashtags', $this);
        $hashtags.removeClass('active');
        tags.addClass('active');
        var first_tag = $('a:first-child', tags);
        first_tag.addClass('active');
        $content.removeClass('active');
        $tabs.find($(first_tag.attr('href'))).addClass('active');
      }
    });
  }); // var subtab = $('.gallery__tabs-subtabs li');
  // subtab.on('click', function(){
  //   subtab.removeClass('active');
  //   $(this).addClass('active')
  // })
});