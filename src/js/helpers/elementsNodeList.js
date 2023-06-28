const html = document.documentElement;
const body = document.body;
const pageWrapper = document.querySelector('.page');
const header = document.querySelector('.header');
const firstScreen = document.querySelector('[data-observ]');
const burgerButton = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu');
const lockPaddingElements = document.querySelectorAll('[data-lp]');
const tabsLinks = document.querySelector('.tabs-links');
const tabsLink = document.querySelectorAll('.tabs-link');
const tabsContent = document.querySelectorAll('.tabs-content');
const subForm = document.querySelector('.sub__form');
const footerForm = document.querySelector('.footer-form');
const footerNavigation = document.querySelector('.footer-navigation');


export {
  html,
  body,
  pageWrapper,
  header,
  firstScreen,
  burgerButton,
  menu,
  lockPaddingElements,
  tabsLinks,
  tabsLink,
  tabsContent,
  subForm,
  footerForm,
  footerNavigation,
};
