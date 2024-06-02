/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createContactPage)\n/* harmony export */ });\nfunction createContactPage() {\r\n  const content = document.getElementById('content');\r\n\r\n  const heading = document.createElement('h1');\r\n  heading.textContent = \"Contact Us\";\r\n\r\n  const paragraph = document.createElement('p');\r\n  paragraph.textContent = \"We would love to hear from you. Contact us at the following address or phone number.\";\r\n\r\n  const address = document.createElement('p');\r\n  address.textContent = \"123 Food Street, Culinary City, Yumland\";\r\n\r\n  const phone = document.createElement('p');\r\n  phone.textContent = \"(123) 456-7890\";\r\n\r\n  content.appendChild(heading);\r\n  content.appendChild(paragraph);\r\n  content.appendChild(address);\r\n  content.appendChild(phone);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadHome() {\r\n  const content = document.getElementById('content');\r\n  content.textContent = '';\r\n\r\n  const headline = document.createElement('h1');\r\n  headline.textContent = 'Welcome to our Restaurant!';\r\n\r\n  const image = document.createElement('img');\r\n  image.src = './img/restaurant-img.jpg';\r\n  image.alt = 'Restaurant Image';\r\n\r\n  const description = document.createElement('p');\r\n  description.textContent = 'We serve the best food in town. Come and enjoy our delicious meals!';\r\n\r\n  content.appendChild(headline);\r\n  content.appendChild(image);\r\n  content.appendChild(description);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './styles.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\nfunction clearContent() {\r\n  const content = document.getElementById('content');\r\n  content.innerHTML = '';\r\n}\r\n\r\nfunction setActiveButton(buttonId) {\r\n  const buttons = document.querySelectorAll('nav button');\r\n  buttons.forEach(button => {\r\n    if (button.id === buttonId) {\r\n      button.classList.add('active');\r\n    } else {\r\n      button.classList.remove('active');\r\n    }\r\n  });\r\n}\r\n\r\ndocument.getElementById('home-btn').addEventListener('click', () => {\r\n  clearContent();\r\n  (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  setActiveButton('home-btn');\r\n});\r\n\r\ndocument.getElementById('menu-btn').addEventListener('click', () => {\r\n  clearContent();\r\n  (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  setActiveButton('menu-btn');\r\n});\r\n\r\ndocument.getElementById('contact-btn').addEventListener('click', () => {\r\n  clearContent();\r\n  (0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  setActiveButton('contact-btn');\r\n});\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  setActiveButton('home-btn');\r\n});\r\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenuPage)\n/* harmony export */ });\nfunction createMenuPage() {\r\n  const content = document.getElementById('content');\r\n\r\n  const heading = document.createElement('h1');\r\n  heading.textContent = \"Our Menu\";\r\n\r\n  const paragraph = document.createElement('p');\r\n  paragraph.textContent = \"Explore our delicious menu items crafted by our talented chefs.\";\r\n\r\n  const menuList = document.createElement('ul');\r\n  const items = [\"Pizza\", \"Pasta\", \"Salad\", \"Desserts\"];\r\n  items.forEach(item => {\r\n    const listItem = document.createElement('li');\r\n    listItem.textContent = item;\r\n    menuList.appendChild(listItem);\r\n  });\r\n\r\n  content.appendChild(heading);\r\n  content.appendChild(paragraph);\r\n  content.appendChild(menuList);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;