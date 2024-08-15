/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

//кнопки "показать все" и "скрыть"
var buttonMoreServices = document.querySelector('.services__button-more');
var buttonHideServices = document.querySelector('.services__button-hide');
var servicesList = document.querySelector('.services__list');

if (servicesList.scrollHeight <= servicesList.clientHeight) {
  buttonMoreServices.style.display = "none";
  buttonHideServices.style.display = "none";
}

;
buttonMoreServices.addEventListener("click", function () {
  servicesList.style.height = "100%";
  buttonMoreServices.style.display = "none";
  buttonHideServices.style.display = "flex";
});
buttonHideServices.addEventListener("click", function () {
  servicesList.style.height = "160px";
  buttonMoreServices.style.display = "flex";
  buttonHideServices.style.display = "none";
});
var buttonMoreRepair = document.querySelector('.repair__button-more');
var buttonHideRepair = document.querySelector('.repair__button-hide');
var RepairList = document.querySelector('.repair__list');

if (RepairList.scrollHeight <= RepairList.clientHeight) {
  buttonMoreRepair.style.display = "none";
  buttonHideRepair.style.display = "none";
}

;
buttonMoreRepair.addEventListener("click", function () {
  RepairList.style.height = "100%";
  buttonMoreRepair.style.display = "none";
  buttonHideRepair.style.display = "flex";
});
buttonHideRepair.addEventListener("click", function () {
  RepairList.style.height = "160px";
  buttonMoreRepair.style.display = "flex";
  buttonHideRepair.style.display = "none";
});
var buttonMoreAboutus = document.querySelector('.about-us__button-more');
var buttonHideAboutus = document.querySelector('.about-us__button-hide');
var textaboutAs = document.querySelector('.about-us__text');

if (textaboutAs.scrollHeight <= textaboutAs.clientHeight) {
  buttonMoreAboutus.style.display = "none";
  buttonHideAboutus.style.display = "none";
}

;
buttonMoreAboutus.addEventListener("click", function () {
  textaboutAs.style.height = "100%";
  buttonMoreAboutus.style.display = "none";
  buttonHideAboutus.style.display = "flex";
});
buttonHideAboutus.addEventListener("click", function () {
  buttonMoreAboutus.style.display = "flex";
  buttonHideAboutus.style.display = "none";

  if (window.innerWidth < 768) {
    textaboutAs.style.height = "90px";
  } else if (window.innerWidth >= 768) {
    textaboutAs.style.height = "160px";
  }
}); //выделение элемента навигации

var aboutAsLink = document.querySelectorAll('.about-us__menu-link');
aboutAsLink.forEach(function (link) {
  link.addEventListener("click", function (event) {
    aboutAsLink.forEach(function (active) {
      active.classList.remove('about-us__active');
    });
    event.target.classList.add('about-us__active');
  });
}); //выделение элемента меню-бургер

var menuLink = document.querySelectorAll('.menu__link');
menuLink.forEach(function (link) {
  link.addEventListener("click", function (event) {
    menuLink.forEach(function (active) {
      active.classList.remove('menu__active');
    });
    event.target.classList.add('menu__active');
  });
}); //открытие/закрытие бургер-меню

var burgerIcon = document.querySelector('.header__menu-burger');
var menuBurger = document.querySelector('.menu');
var closeIcon = document.querySelector('.header__burger-close');
var background = document.querySelector('.background');
burgerIcon.addEventListener("click", function () {
  menuBurger.style.display = "flex";
  background.style.display = "block";
});
closeIcon.addEventListener("click", function () {
  background.style.display = "none";
  menuBurger.style.display = "none";
});
background.addEventListener("click", function () {
  background.style.display = "none";
  menuBurger.style.display = "none";
}); //модальные окна

var callIcon = document.querySelectorAll('.icon-call');
var chatIcon = document.querySelectorAll('.icon-chat');
var closeModal = document.querySelectorAll('.modal__close');
var callModal = document.querySelector('.modal__call');
var chatModal = document.querySelector('.modal__chat');
var backgroundModal = document.querySelector('.background__modal');
callIcon.forEach(function (call) {
  call.addEventListener("click", function () {
    callModal.style.display = "flex";
    backgroundModal.style.display = "block";
  });
});
chatIcon.forEach(function (chat) {
  chat.addEventListener("click", function () {
    chatModal.style.display = "flex";
    backgroundModal.style.display = "block";
  });
});
closeModal.forEach(function (close) {
  close.addEventListener("click", function () {
    chatModal.style.display = "none";
    callModal.style.display = "none";
    backgroundModal.style.display = "none";
  });
});
backgroundModal.addEventListener("click", function () {
  chatModal.style.display = "none";
  callModal.style.display = "none";
  backgroundModal.style.display = "none";
}); //слайдер

var initSwiper = function initSwiper() {
  var mediaQueryList = window.matchMedia("(max-width: 767px)");
  var swiper = null;

  var createSwiper = function createSwiper() {
    swiper = new Swiper('.swiper', {
      spaceBetween: 16,
      loop: true,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
  };

  var destroySwiper = function destroySwiper() {
    if (swiper) {
      swiper.destroy();
      swiper = null;
    }
  };

  var handleMediaQueryChange = function handleMediaQueryChange(e) {
    if (e.matches) {
      createSwiper();
    } else {
      destroySwiper();
    }
  };

  mediaQueryList.addEventListener("change", handleMediaQueryChange);
  handleMediaQueryChange(mediaQueryList); // Функция для проверки разрешения экрана и обновления страницы при достижении 768px

  var checkResolutionAndReload = function checkResolutionAndReload() {
    if (window.innerWidth >= 768) {
      location.reload();
    }

    if (window.innerWidth < 768) {
      location.reload();
    }
  };

  window.addEventListener('resize', function () {
    checkResolutionAndReload();
  });
};

initSwiper();

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "./index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.svg */ "./assets/favicon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/burger-close.svg */ "./img/burger-close.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo.svg */ "./img/logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/search.svg */ "./img/search.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/call.svg */ "./img/call.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/chat.svg */ "./img/chat.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/profile.svg */ "./img/profile.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/burger.svg */ "./img/burger.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/repair.svg */ "./img/repair.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/checkstatus.svg */ "./img/checkstatus.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/desktope_vers.png */ "./img/desktope_vers.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cps-768.png */ "./img/cps-768.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cps-mobile.jpg */ "./img/cps-mobile.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/lenovo.png */ "./img/lenovo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/samsung.png */ "./img/samsung.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./img/apple.png */ "./img/apple.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./img/sonic.png */ "./img/sonic.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./img/bosch.png */ "./img/bosch.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./img/hp.png */ "./img/hp.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./img/acer.png */ "./img/acer.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./img/sony.png */ "./img/sony.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Services</title>\r\n    <link rel=\"shortcut icon\" type=\"image/png\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n    <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/swiper@11.0.5/swiper-bundle.min.css\">\r\n    <script defer src=\"https://cdn.jsdelivr.net/npm/swiper@11.0.5/swiper-bundle.min.js\"></script>\r\n</head>\r\n<body>\r\n    <div class=\"container\">\r\n        <aside class=\"menu\">\r\n            <div class=\"menu__top\">\r\n                <div class=\"menu__header\">\r\n                    <div class=\"menu__left\">\r\n                        <img class=\"header__img header__burger-close\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"закрыть меню\">\r\n                        <img  class=\"header__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"логотип\">\r\n                    </div>\r\n                    <div class=\"menu__right\">\r\n                        <img class=\"header__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"поиск\">\r\n                    </div>\r\n                </div>\r\n                <nav class=\"menu__navigation\">\r\n                    <ul class=\"menu__list\">\r\n                        <li class=\"menu__item\"><a href=\"#\" class=\"menu__link menu__active\">Ремонт техники</a></li>\r\n                        <li class=\"menu__item\"> <a href=\"#\" class=\"menu__link\">Услуги и сервисы</a></li>\r\n                        <li class=\"menu__item\"> <a href=\"#\" class=\"menu__link\">Корпоративным клиентам</a></li>\r\n                        <li class=\"menu__item\"> <a href=\"#\" class=\"menu__link\">Продавцам техники</a></li>\r\n                        <li class=\"menu__item\"> <a href=\"#\" class=\"menu__link\">Партнерам</a></li>\r\n                        <li class=\"menu__item\"> <a href=\"#\" class=\"menu__link\">Производителям</a></li>\r\n                        <li class=\"menu__item\"> <a href=\"#\" class=\"menu__link\">Наши сервисные центры</a></li>\r\n                        <li class=\"menu__item\"> <a href=\"#\" class=\"menu__link\">Контакты</a></li>\r\n                    </ul>\r\n                </nav>\r\n            </div>\r\n            <div class=\"menu__footer\">\r\n                <div class=\"menu__connection\">\r\n                    <div class=\"menu__connection-icon\">\r\n                        <img class=\"header__img icon-call\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"заказать звонок\">\r\n                        <img class=\"header__img icon-chat\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"написать в чат\">\r\n                        <img class=\"header__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"профиль\">\r\n                    </div>\r\n                    <div class=\"menu__contacts\">\r\n                        <a class=\"menu__contacts-email\" href=\"mailto:mail@cps.com\">mail@cps.com</a>\r\n                        <a class=\"menu__contacts-phone\" href=\"tel:88008908900\">8 800 890 8900</a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"menu__language\">\r\n                    <button class=\"button menu__language-button\">RU</button>\r\n                    <button class=\"button menu__language-button\">EN</button>\r\n                    <button class=\"button menu__language-button\">CH</button>\r\n                </div>\r\n            </div>\r\n        </aside>\r\n        <div class=\"wrapper\">\r\n            <header class=\"header\">\r\n                        <div class=\"header__menu-left\">\r\n                            <img class=\"header__img header__menu-burger\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"меню\">\r\n                            <img  class=\"header__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"логотип\">\r\n                        </div>\r\n                        <div class=\"header__menu-right\">\r\n                            <div class=\"header__menu_hidden\">\r\n                                <img class=\"header__img icon-call\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"заказать звонок\">\r\n                                <img class=\"header__img icon-chat\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"написать в чат\">\r\n                                <img class=\"header__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"профиль\">\r\n                            </div>\r\n                            <ul class=\"header__informations\">\r\n                                <li class=\"header__informations-item\">\r\n                                  <a href=\"#\" class=\"header__informations-link\">\r\n                                    <span class=\"header__informations-text\">Оставить заявку</span>\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" width=\"40\" height=\"40\" class=\"header__informations-icon\" alt=\"Заявка\">\r\n                                  </a>\r\n                                </li>\r\n                                <li class=\"header__informations-item\">\r\n                                  <a href=\"#\" class=\"header__informations-link\">\r\n                                    <span class=\"header__informations-text\">Статус ремонта</span>\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" width=\"40\" height=\"40\" class=\"header__informations-icon\" alt=\"Статус\">\r\n                                  </a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n            </header>\r\n            <main class=\"main\">\r\n                    <div class=\"section\">\r\n                        <section class=\"about-us\">\r\n                            <h1 class=\"about-us__title\">Услуги и сервисы</h1>\r\n                            <nav class=\"about-us__navigation\">\r\n                                <ul class=\"about-us__menu\">\r\n                                    <li class=\"about-us__menu-item\"><a href=\"#\" class=\"about-us__menu-link about-us__active\">Ремонтируемые бренды</a></li>\r\n                                    <li class=\"about-us__menu-item\"> <a href=\"#\" class=\"about-us__menu-link\">Ремонтируемые устройства</a></li>\r\n                                    <li class=\"about-us__menu-item\"> <a href=\"#\" class=\"about-us__menu-link\">Цены на услуги</a></li>\r\n                                    <li class=\"about-us__menu-item\"> <a href=\"#\" class=\"about-us__menu-link\">Адреса сервисных центров</a></li>\r\n                                    <li class=\"about-us__menu-item\"> <a href=\"#\" class=\"about-us__menu-link\">Специальные цены</a></li>\r\n                                    <li class=\"about-us__menu-item\"> <a href=\"#\" class=\"about-us__menu-link\">Отзывы</a></li>\r\n                                </ul>\r\n                            </nav>\r\n                            <div class=\"about-us__content\">\r\n                                <div class=\"about-us__content-text\">\r\n                                    <div class=\"about-us__text\">\r\n                                        <p class=\"about-us__text-item about-us__text-top\">\r\n                                            Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.\r\n                                        </p>\r\n                                        <p class=\"about-us__text-item\">\r\n                                            Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким. \r\n                                        </p>\r\n                                    </div>\r\n                                    <button class=\"about-us__button-more button-more\">\r\n                                        Читать далее\r\n                                    </button>\r\n                                    <button class=\"about-us__button-hide button-hide\">\r\n                                        Скрыть\r\n                                    </button>\r\n                                </div>\r\n                                <picture class=\"about-us__content-img\">\r\n                                    <source media=\"(min-width: 1120px)\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"> \r\n                                    <source media=\"(min-width: 768px)\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\">\r\n                                    <img  src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"логотип\" width=\"320\" height=\"176\">\r\n                                </picture>      \r\n                            </div>\r\n                        </section>\r\n                        <section class=\"services\">\r\n                            <h2 class=\"title-section\">\r\n                                Ремонт техники различных брендов\r\n                            </h2>\r\n                            <div class=\"services__content\">\r\n                                <div class=\"services__block swiper\">\r\n                                    <ul class=\"services__list swiper-wrapper\">\r\n                                        <li class=\"services__item swiper-slide\"><a href=\"#\" class=\"services__link\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"lenovo\"></a></li>\r\n                                        <li class=\"services__item swiper-slide\"><a href=\"#\" class=\"services__link\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"samsung\"></a></li>\r\n                                        <li class=\"services__item swiper-slide\"><a href=\"#\" class=\"services__link\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"apple\"></a></li>\r\n                                        <li class=\"services__item swiper-slide\"><a href=\"#\" class=\"services__link\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"sonic\"></a></li>\r\n                                        <li class=\"services__item swiper-slide\"><a href=\"#\" class=\"services__link\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"bosch\"></a></li>\r\n                                        <li class=\"services__item swiper-slide\"><a href=\"#\" class=\"services__link\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"hp\"></a></li>\r\n                                        <li class=\"services__item swiper-slide\"><a href=\"#\" class=\"services__link\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"acer\"></a></li>\r\n                                        <li class=\"services__item swiper-slide\"><a href=\"#\" class=\"services__link\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"sony\"></a></li>\r\n                                        <li class=\"services__item swiper-slide\"><a href=\"#\" class=\"services__link\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"lenovo\"></a></li>\r\n                                    </ul>\r\n                                    <div class=\"swiper-pagination\"></div>\r\n                                </div>\r\n                                <div class=\"services__buttons\">\r\n                                    <button class=\"services__button-more button-more\">Показать все</button>\r\n                                    <button class=\"services__button-hide button-hide\">Скрыть</button>\r\n                                </div>\r\n                            </div>\r\n                        </section>\r\n                        <section class=\"repair\">\r\n                            <h2 class=\"title-section\">\r\n                                Ремонт различных видов техники\r\n                            </h2>\r\n                            <div class=\"repair__content\">\r\n                                <div class=\"repair__block swiper\">\r\n                                    <ul class=\"repair__list swiper-wrapper\">\r\n                                        <li class=\"repair__item swiper-slide\"><a href=\"#\" class=\"repair__link\">Ремонт ноутбуков</a></li>\r\n                                        <li class=\"repair__item swiper-slide\"><a href=\"#\" class=\"repair__link\">Ремонт планшетов</a></li>\r\n                                        <li class=\"repair__item swiper-slide\"><a href=\"#\" class=\"repair__link\">Ремонт ПК</a></li>\r\n                                        <li class=\"repair__item swiper-slide\"><a href=\"#\" class=\"repair__link\">Ремонт  мониторов</a></li>\r\n                                        <li class=\"repair__item swiper-slide\"><a href=\"#\" class=\"repair__link\">Ремонт ноутбуков</a></li>\r\n                                        <li class=\"repair__item swiper-slide\"><a href=\"#\" class=\"repair__link\">Ремонт планшетов</a></li>\r\n                                    </ul>\r\n                                    <div class=\"swiper-pagination\"></div>\r\n                                </div>\r\n                                <div class=\"repair__buttons\">\r\n                                    <button class=\"repair__button-more button-more\">Показать все</button>\r\n                                    <button class=\"repair__button-hide button-hide\">Скрыть</button>\r\n                                </div>\r\n                            </div>\r\n                        </section>\r\n                        <section class=\"price\">\r\n                            <h2 class=\"title-section\">\r\n                                Цены на услуги\r\n                            </h2>\r\n                            <div class=\"price__block swiper\">\r\n                                    <div class=\"price__header\">\r\n                                        <h3 class=\"price__title\">Ремонтные услуги</h3>\r\n                                        <h3 class=\"price__title\">Цена</h3>\r\n                                        <h3 class=\"price__title\">Срок</h3>\r\n                                    </div>\r\n                                    <ul class=\"price__list swiper-wrapper\">\r\n                                        <li class=\"price__item swiper-slide\">\r\n                                            <div class=\"price__el\">\r\n                                                <div class=\"price__description\">\r\n                                                    <h3 class=\"price__item-title\">Ремонтные услуги</h3>\r\n                                                    <p class=\"price__item-content\">Тестирование с выдачей технического заключения</p>\r\n                                                </div>\r\n                                                <div class=\"price__description\">\r\n                                                    <h3 class=\"price__item-title\">Цена</h3>\r\n                                                    <p class=\"price__item-content\">Бесплатно</p>\r\n                                                </div>\r\n                                                <div class=\"price__description\">\r\n                                                    <h3 class=\"price__item-title\">Срок</h3>\r\n                                                    <p class=\"price__item-content\">30-120 мин</p>\r\n                                                </div>\r\n                                            </div>\r\n                                            <a href=\"#\" class=\"price__link\">заказать</a>\r\n                                        </li>\r\n                                        <li class=\"price__item swiper-slide\">\r\n                                            <div class=\"price__el\">\r\n                                                <div class=\"price__description\">\r\n                                                    <h3 class=\"price__item-title\">Ремонтные услуги</h3>\r\n                                                    <p class=\"price__item-content\">Диагностика </p>\r\n                                                </div>\r\n                                                <div class=\"price__description\">\r\n                                                    <h3 class=\"price__item-title\">Цена</h3>\r\n                                                    <p class=\"price__item-content\">Бесплатно</p>\r\n                                                </div>\r\n                                                <div class=\"price__description\">\r\n                                                    <h3 class=\"price__item-title\">Срок</h3>\r\n                                                    <p class=\"price__item-content\">30 мин</p>\r\n                                                </div>\r\n                                            </div>\r\n                                            <a href=\"#\" class=\"price__link\">заказать</a>\r\n                                        </li>\r\n                                        <li class=\"price__item swiper-slide\">\r\n                                            <div class=\"price__el\">\r\n                                                <div class=\"price__description\">\r\n                                                    <h3 class=\"price__item-title\">Ремонтные услуги</h3>\r\n                                                    <p class=\"price__item-content\">Замена дисплея</p>\r\n                                                </div>\r\n                                                <div class=\"price__description\">\r\n                                                    <h3 class=\"price__item-title\">Цена</h3>\r\n                                                    <p class=\"price__item-content\">1 000 ₽</p>\r\n                                                </div>\r\n                                                <div class=\"price__description\">\r\n                                                    <h3 class=\"price__item-title\">Срок</h3>\r\n                                                    <p class=\"price__item-content\">30-120 мин</p>\r\n                                                </div>\r\n                                            </div>\r\n                                            <a href=\"#\" class=\"price__link\">заказать</a>\r\n                                        </li>\r\n                                        <li class=\"price__item swiper-slide\">\r\n                                            <div class=\"price__el\">\r\n                                                <div class=\"price__description\">\r\n                                                    <h3 class=\"price__item-title\">Ремонтные услуги</h3>\r\n                                                    <p class=\"price__item-content\">Замена полифонического динамика</p>\r\n                                                </div>\r\n                                                <div class=\"price__description\">\r\n                                                    <h3 class=\"price__item-title\">Цена</h3>\r\n                                                    <p class=\"price__item-content\">1 000 ₽</p>\r\n                                                </div>\r\n                                                <div class=\"price__description\">\r\n                                                    <h3 class=\"price__item-title\">Срок</h3>\r\n                                                    <p class=\"price__item-content\">30-120 мин</p>\r\n                                                </div>\r\n                                            </div>\r\n                                            <a href=\"#\" class=\"price__link\">заказать</a>\r\n                                        </li>\r\n                                        <li class=\"price__item swiper-slide\">\r\n                                            <div class=\"price__el\">\r\n                                                <div class=\"price__description\">\r\n                                                    <h3 class=\"price__item-title\">Ремонтные услуги</h3>\r\n                                                    <p class=\"price__item-content\">Замена программного обеспечения</p>\r\n                                                </div>\r\n                                                <div class=\"price__description\">\r\n                                                    <h3 class=\"price__item-title\">Цена</h3>\r\n                                                    <p class=\"price__item-content\">1 000 ₽</p>\r\n                                                </div>\r\n                                                <div class=\"price__description\">\r\n                                                    <h3 class=\"price__item-title\">Срок</h3>\r\n                                                    <p class=\"price__item-content\">30-120 мин</p>\r\n                                                </div>\r\n                                            </div>\r\n                                            <a href=\"#\" class=\"price__link\">заказать</a>\r\n                                        </li>\r\n                                        <li class=\"price__item swiper-slide\">\r\n                                            <div class=\"price__el\">\r\n                                                <div class=\"price__description\">\r\n                                                    <h3 class=\"price__item-title\">Ремонтные услуги</h3>\r\n                                                    <p class=\"price__item-content\">Тестирование с выдачей технического заключения</p>\r\n                                                </div>\r\n                                                <div class=\"price__description\">\r\n                                                    <h3 class=\"price__item-title\">Цена</h3>\r\n                                                    <p class=\"price__item-content\">Бесплатно</p>\r\n                                                </div>\r\n                                                <div class=\"price__description\">\r\n                                                    <h3 class=\"price__item-title\">Срок</h3>\r\n                                                    <p class=\"price__item-content\">30-120 мин</p>\r\n                                                </div>\r\n                                            </div>\r\n                                            <a href=\"#\" class=\"price__link\">заказать</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                    <div class=\"swiper-pagination\"></div>\r\n                            </div>\r\n                            <div class=\"price__content\">\r\n                                <p class=\"price__info\">Все цены указаны с учетом НДС. Стоимость ремонта указана на единичную услугу. Для получения коммерческого предложения на постоянное обслуживание, оставьте заявку.</p>\r\n                                <div class=\"price__block-offer\">\r\n                                    <a href=\"#\" class=\"price__offer\">Получить коммерческое предложение</a>\r\n                                </div>\r\n                            </div>\r\n                        </section>\r\n                    </div>\r\n            </main>\r\n            <footer class=\"footer\">\r\n                    <p class=\"footer__content\">© 2019 CPS<br>\r\n                        Разработано командой Apesong </p>\r\n                    <a class=\"footer__content footer__content-conf\">Политика конфиденциальности</a>\r\n                    <p class=\"footer__content\">Информация, размещенная на данной странице, не является публичной офертой</p>\r\n            </footer>\r\n        </div>\r\n        <div class=\"background\"></div>\r\n        <div class=\"background__modal\"></div>\r\n        <aside class=\"modal__call modal\">\r\n            <div class=\"modal__header\">\r\n                <img class=\"modal__close\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"закрыть\">\r\n                <h1 class=\"modal__title\">Заказать звонок</h1>\r\n            </div>\r\n            <form action=\"#\" class=\"modal-call__form\">\r\n                <div class=\"form__top\">\r\n                    <input type=\"tel\" name=\"tel\" placeholder=\"Телефон\" required=\"required\" class=\"modal__input\" pattern=\"[0-9]*\">\r\n                    <p class=\"modal__agreement\">\r\n                    Нажимая “отправить”, вы даете согласие на <a href=\"#\" class=\"agreement\">обработку персональных данных</a> и соглашаетесь с нашей <a href=\"#\" class=\"agreement\">политикой конфиденциальности</a>\r\n                </p>\r\n                </div>\r\n                <div class=\"modal__block-btn\">\r\n                    <button class=\"modal__btn\">\r\n                        <span class=\"modal__btn-text\">ОТПРАВИТЬ</span>\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </aside>\r\n        <aside class=\"modal__chat modal\">\r\n            <div class=\"modal__header\">\r\n                <img class=\"modal__close\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"закрыть\">\r\n                <h1 class=\"modal__title\">Обратная связь</h1>\r\n            </div>\r\n            <form action=\"#\" class=\"modal-chat__form\">\r\n                <div class=\"form__top\">\r\n                    <input type=\"text\" name=\"name\" placeholder=\"Имя\" required=\"required\" class=\"modal__input\">\r\n                    <input type=\"tel\" name=\"tel\" placeholder=\"Телефон\" required=\"required\" class=\"modal__input\" pattern=\"[0-9]*\">\r\n                    <input type=\"email\" name=\"email\" placeholder=\"Электронная почта\" required=\"required\" class=\"modal__input\">\r\n                    <textarea name=\"message\" class=\"modal__textarea modal__input\" placeholder=\"Сообщение\"></textarea>\r\n                    <p class=\"modal__agreement\">\r\n                    Нажимая “отправить”, вы даете согласие на <a href=\"#\" class=\"agreement\">обработку персональных данных</a> и соглашаетесь с нашей <a href=\"#\" class=\"agreement\">политикой конфиденциальности</a>\r\n                </p>\r\n                </div>\r\n                <div class=\"modal__block-btn\">\r\n                    <button class=\"modal__btn\">\r\n                        <span class=\"modal__btn-text\">ОТПРАВИТЬ</span>\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </aside>\r\n    </div>\r\n</body>\r\n</html>\r\n\r\n\r\n                    \r\n                ";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/favicon.svg":
/*!****************************!*\
  !*** ./assets/favicon.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/favicon.svg";

/***/ }),

/***/ "./img/acer.png":
/*!**********************!*\
  !*** ./img/acer.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/acer.png";

/***/ }),

/***/ "./img/apple.png":
/*!***********************!*\
  !*** ./img/apple.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/apple.png";

/***/ }),

/***/ "./img/bosch.png":
/*!***********************!*\
  !*** ./img/bosch.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/bosch.png";

/***/ }),

/***/ "./img/burger-close.svg":
/*!******************************!*\
  !*** ./img/burger-close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/burger-close.svg";

/***/ }),

/***/ "./img/burger.svg":
/*!************************!*\
  !*** ./img/burger.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/burger.svg";

/***/ }),

/***/ "./img/call.svg":
/*!**********************!*\
  !*** ./img/call.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/call.svg";

/***/ }),

/***/ "./img/chat.svg":
/*!**********************!*\
  !*** ./img/chat.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/chat.svg";

/***/ }),

/***/ "./img/checkstatus.svg":
/*!*****************************!*\
  !*** ./img/checkstatus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/checkstatus.svg";

/***/ }),

/***/ "./img/cps-768.png":
/*!*************************!*\
  !*** ./img/cps-768.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cps-768.png";

/***/ }),

/***/ "./img/cps-mobile.jpg":
/*!****************************!*\
  !*** ./img/cps-mobile.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cps-mobile.jpg";

/***/ }),

/***/ "./img/desktope_vers.png":
/*!*******************************!*\
  !*** ./img/desktope_vers.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/desktope_vers.png";

/***/ }),

/***/ "./img/hp.png":
/*!********************!*\
  !*** ./img/hp.png ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/hp.png";

/***/ }),

/***/ "./img/lenovo.png":
/*!************************!*\
  !*** ./img/lenovo.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/lenovo.png";

/***/ }),

/***/ "./img/logo.svg":
/*!**********************!*\
  !*** ./img/logo.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logo.svg";

/***/ }),

/***/ "./img/profile.svg":
/*!*************************!*\
  !*** ./img/profile.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/profile.svg";

/***/ }),

/***/ "./img/repair.svg":
/*!************************!*\
  !*** ./img/repair.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/repair.svg";

/***/ }),

/***/ "./img/samsung.png":
/*!*************************!*\
  !*** ./img/samsung.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/samsung.png";

/***/ }),

/***/ "./img/search.svg":
/*!************************!*\
  !*** ./img/search.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/search.svg";

/***/ }),

/***/ "./img/sonic.png":
/*!***********************!*\
  !*** ./img/sonic.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/sonic.png";

/***/ }),

/***/ "./img/sony.png":
/*!**********************!*\
  !*** ./img/sony.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/sony.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_html-loader_dist_runtim-b0975e"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map