document.addEventListener("DOMContentLoaded", () => {
  //popup1
  let popupBg = document.querySelector('.popup__bg');
  let popup = document.querySelector('.popup');
  let openPopupButtons = document.querySelectorAll('.rev__row a');
  let closePopupButton = document.querySelector('.close-popup');

  openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg.classList.add('active');
      popup.classList.add('active');
    })
  });

  closePopupButton.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
      popupBg.classList.remove('active');
      popup.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg.classList.remove('active');
      popup.classList.remove('active');
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  //popup2
  let popupBg2 = document.querySelector('.popup__bg2');
  let popup2 = document.querySelector('.popup2');
  let openPopupButtons2 = document.querySelectorAll('.a2');
  let closePopupButton2 = document.querySelector('.close-popup2');

  openPopupButtons2.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      popupBg2.classList.add('active');
      popup2.classList.add('active');
    })
  });

  closePopupButton2.addEventListener('click', () => {
    popupBg2.classList.remove('active');
    popup2.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === popupBg2) {
      popupBg2.classList.remove('active');
      popup2.classList.remove('active');
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      //ваша функция закрытия окна
      popupBg2.classList.remove('active');
      popup2.classList.remove('active');
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const swiper1 = new Swiper('.swiper1', {
    slidesPerView: 3,
    spaceBetween: 24,
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 10,
        loop: true,
        slidesPerView: 1
      },
      767: {
        spaceBetween: 10,
        slidesPerView: 2
      },
      992: {
        spaceBetween: 20,
        loop: true,
        slidesPerView: 2
      },
      1200: {
        spaceBetween: 24,
        slidesPerView: 3
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // Scroll
  $('.go_to').click(function () { // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 100 }, 800); // анимируем скроолинг к элементу scroll_el
    }
    return false; // выключаем стандартное действие
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // svg
  $(function () {
    jQuery('img.svg').each(function () {
      var $img = jQuery(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');

      jQuery.get(imgURL, function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, else we gonna set it if we can.
        if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
          $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

      }, 'xml');

    });
  });
});
