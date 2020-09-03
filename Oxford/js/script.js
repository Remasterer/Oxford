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
};

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

; // function scrollToAnchor(aid){
//     e
//     var aim = $("section[data-name='"+ aid +"']");
//     $('html,body').animate({scrollTop: aim.offset().top},'slow');
// }
// $(".arr-dwn").click(function() {
//    scrollToAnchor('first-section');
// });

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
  slidesToShow: 1,
  dots: true,
  responsive: [{
    breakpoint: 480,
    settings: {
      arrows: false,
      slidesToShow: 1
    }
  }]
});
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
      $tab = $('a', $bar),
      $content = $('.js-tabs__content', $tabs),
      $activeClass = 'active';
  $($tab[0]).addClass($activeClass);
  var linkHref = $($tab[0]).attr('href');
  $content.each(function () {
    $content.removeClass($activeClass);
    $tabs.find(linkHref).addClass($activeClass);
  });
  $tab.each(function () {
    var $this = $(this);
    $this.on('click', function (e) {
      e.preventDefault();
      $tab.removeClass($activeClass);
      $this.addClass($activeClass);
      var href = $this.attr('href');
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