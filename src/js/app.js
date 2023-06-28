/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый (не вызванный) код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */

import { tabsLinks, tabsLink, tabsContent, subForm, footerForm, footerNavigation } from './helpers/elementsNodeList';


import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  addTouchClass,
  addLoadedClass,
  Tabs,
  useAccordion,
  submitForm
} from './modules';

Tabs(tabsLinks, tabsLink, tabsContent);
submitForm(subForm);
submitForm(footerForm);
useAccordion(footerNavigation);

import BurgerMenu from './modules/BurgerMenu';

// import { Tabs } from 'modules/Tabs';
//

// import { MousePRLX } from './libs/parallaxMouse'

// import AOS from 'aos'

import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation]);
Swiper.use([Pagination]);

var rewardsSwiper = new Swiper('.team-slider', {
  slidesPerView: 4,
  slidesPerGroup: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: '.team__btn-next',
    prevEl: '.team__btn-prev'
  },
  breakpoints: {
    320: {
      slidesPerView: 2
    },
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1000: {
      slidesPerView: 4
    }
  }
});



var rewardsSwiper = new Swiper('.review-slider', {
  slidesPerView: "auto",
  slidesPerGroup: 1,
  centeredSlides: true,
  spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.review__btn-next',
    prevEl: '.review__btn-prev'
  },
});


/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
 ! (i) необходимо для корректного отображения webp из css
 */
isWebp();

/* Добавление класса touch для HTML если браузер мобильный */
// addTouchClass();

/* Добавление loaded для HTML после полной загрузки страницы */
// addLoadedClass();

/* Модуль для работы с меню (Бургер) */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();

/** Параллакс мышей */
// const mousePrlx = new MousePRLX({});

/** Фиксированный header */
headerFixed();

/**
 *  Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

 * На обертку(враппер) окна добавь класс _overlay-bg
 * На кнопку для закрытия окна добавь класс button-close
 */
togglePopupWindows();

// const tabs = new Tabs('default-tabs', {});

