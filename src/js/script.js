'use strict';

window.addEventListener('DOMContentLoaded', () => {

    //slider 
    var slider = tns({
        container: '.slider__inner',
        items: 4,
        slideBy: 1,
        autoplay: true,
        nav: false,
        autoplayButtonOutput: false,
        autoplayHoverPause: true,
        autoplayTimeout: 2000,
        controls: false,
        center: true,
        fixedWidth: 445,
        startIndex: 2,
        gutter: 64,
      });

      document.querySelector('.slider__prev').addEventListener('click', function () {
        slider.goTo('prev');
      });

      document.querySelector('.slider__next').addEventListener('click', function () {
        slider.goTo('next');
      });
      

    //tabs
    function app() {
        const tabs = document.querySelectorAll('.promo__item'),
              cards = document.querySelectorAll('.catalog__item');

        function filter(category, items) {
            items.forEach((item) => {
                const ifItemFiltered = !item.classList.contains(category);
                if (ifItemFiltered) {
                    item.style.display = 'none';
                } else {
                    item.style.display ='block';
                }
            });
        }

        tabs.forEach((item) => {
            item.addEventListener('click', () => {
            const current = item.dataset.filter;
            filter(current, cards);
            })
        });
    }
    app();

    //hamburger
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__menu_active');
        })
    })
});
