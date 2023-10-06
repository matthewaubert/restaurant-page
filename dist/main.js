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

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDescription: () => (/* binding */ createDescription),\n/* harmony export */   createHeader: () => (/* binding */ createHeader)\n/* harmony export */ });\n// create tab header\nfunction createHeader(text) {\n  const title = document.createElement('h1');\n  title.innerText = text;\n\n  return title;\n}\n\n// create tab description\nfunction createDescription(text) {\n  const description = document.createElement('p');\n  description.innerText = text;\n  \n  return description;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/helpers.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHome: () => (/* binding */ renderHome)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\n\n// render home tab\nfunction renderHome() {\n  const header = document.createElement('header');\n  const main = document.createElement('main');\n\n  header.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHeader)(\"Munchie's Eats\"));\n  main.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createDescription)(\"Munchie's Eats is a quaint little cafe tucked away in the trunk of the Great Oak in the Enchanted Forest, just off Rt 112.\"));\n  main.appendChild(createHours());\n  main.appendChild(createReviews());\n\n  return [header, main];\n}\n\n// create hours content\nfunction createHours() {\n  const hoursText = {\n    'Wed - Sun': '8am - 3pm',\n    'Mon - Tue': 'Closed',\n  };\n\n  const hoursContainer = document.createElement('div');\n  const header = document.createElement('h2');\n  header.innerText = \"Hours\";\n  hoursContainer.appendChild(header);\n\n  for (const key in hoursText) {\n    const day = document.createElement('p');\n    day.innerText = `${key}: ${hoursText[key]}`;\n    hoursContainer.appendChild(day);\n  }\n\n  return hoursContainer;\n}\n\n// create review content\nfunction createReviews() {\n  const reviewContent = [\n    {\n      text: \"Um, freaking delicious! We just moved to the area and wow what a breakfast this was. There are so many options, too. Definitely scurry on by to check this place out.\",\n      author: \"~ Scrat\"\n    },\n    {\n      text: \"Best bagel I've ever had! I know it may look crazy because I get it double toasted, but I promise you this is the yummiest bagel I've ever had! And I eat bagels for breakfast almost every morning.\",\n      author: \"~ Nibbles\"\n    },\n    {\n      text: \"Sure, it's a quaint little cafe. I do think the portions of food are on the small side, though...\",\n      author: \"~ Squeaky\"\n    }\n  ];\n\n  const reviews = [];\n  reviewContent.forEach(revCont => {\n    const review = {\n      container: document.createElement('div'),\n      text: document.createElement('p'),\n      author: document.createElement('p')\n    };\n    review.text.innerText = revCont.text;\n    review.author.innerText = revCont.author;\n    reviews.push(review);\n  });\n\n  const reviewsContainer = document.createElement('div');\n  const header = document.createElement('h2');\n  header.innerText = \"Reviews\";\n  reviewsContainer.appendChild(header);\n  \n  // assemble reviews and add to container\n  reviews.forEach((rev, i) => {\n    rev.container.appendChild(rev.text);\n    rev.container.appendChild(rev.author);\n    rev.container.classList.add('review');\n    reviewsContainer.appendChild(rev.container);\n\n    // add line\n    if (i < reviews.length - 1) reviewsContainer.appendChild(document.createElement('hr'));\n  });\n\n  return reviewsContainer;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-page.js */ \"./src/load-page.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\n\n(0,_load_page_js__WEBPACK_IMPORTED_MODULE_0__.loadPage)((0,_home_js__WEBPACK_IMPORTED_MODULE_1__.renderHome)());\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/load-page.js":
/*!**************************!*\
  !*** ./src/load-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadPage: () => (/* binding */ loadPage)\n/* harmony export */ });\nfunction loadPage(page) {\n  const content = document.querySelector('#content');\n  page.forEach(el => content.appendChild(el));\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/load-page.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMenu: () => (/* binding */ renderMenu)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\n\nconst header = document.createElement('header');\nconst main = document.createElement('main');\n\nfunction renderMenu() {\n  header.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHeader)('Menu'));\n}\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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