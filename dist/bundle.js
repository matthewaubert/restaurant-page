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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/leaves.png */ \"./src/assets/leaves.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Rampart+One&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Rampart One */\n\n/* Roboto */\n\n\n/* general */\n\n:root {\n  --bg: #f2f2f2;\n  --neutral-200: #e5e5e5;\n  --neutral-300: #d4d4d4;\n  --neutral-700: #404040;\n  --neutral-800: #262626;\n  --gap-100: 0.4rem;\n  --gap-150: 0.6rem;\n  --gap-300: 1.2rem;\n  --gap-400: 1.6rem;\n  --font-stack: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  font-family: var(--font-stack);\n  color: var(--neutral-800);\n  line-height: 1.25;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  transition: all .1s ease-in-out;\n}\n\nhtml, body {\n  min-height: 100vh;\n}\n\nbody {\n  background-color: var(--bg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n}\n\nbody::before {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-repeat: repeat;\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  opacity: 0.5;\n}\n\na {\n  text-decoration: none;\n}\n\nh1 {\n  background-color: var(--bg);\n  border-radius: 24px;\n  box-shadow: 0 0 18px 24px var(--bg);\n  color: var(--neutral-700);\n  font-family: 'Rampart One', var(--font-stack);\n  font-size: calc(2.0rem + 2vw);\n  text-align: center;\n}\n\nh3 {\n  font-size: 1.3rem;\n}\n\nh4 {\n  font-size: 1.1rem;\n  font-weight: bold;\n}\n\np, li {\n  font-size: calc(0.9rem + 0.25vw);\n}\n\nli {\n  font-weight: 500;\n  list-style-type: none;\n}\n\n\n/* content */\n\n#content {\n  width: min(42rem, 80%);\n  position: relative;\n  z-index: 1;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  padding: var(--gap-400) 0;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-400);\n  background-color: var(--bg);\n  box-shadow: 0 0 12px rgba(0,0,0,0.2);\n  border-radius: 16px;\n  padding: var(--gap-400);\n}\n\nmain > div {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-300);\n}\n\n\n/* nav */\n\nnav {\n  display: grid;\n  place-content: center;\n}\n\n#nav {\n  display: flex;\n  gap: calc(var(--gap-100) + 1.5vw);\n}\n\n#nav li {\n  display: grid;\n  place-content: center;\n  border-radius: 16px 16px 0 0;\n  width: 6.4rem;\n  width: calc(4.7rem + 2vw);\n  height: 3rem;\n  background-color: var(--neutral-200);\n  border: 1px solid var(--neutral-300);\n}\n\n#nav .selected {\n  background-color: var(--bg);\n  border-bottom: none;\n  border-top: 1px solid var(--neutral-300);\n  border-right: 1px solid var(--neutral-300);\n  border-left: 1px solid var(--neutral-300);\n  box-shadow: 0 -6px 8px rgba(0,0,0,0.1);\n}\n\n#nav li:hover {\n  cursor: pointer;\n  background-color: var(--bg);\n}\n\n\n/* home */\n\n.review > p:last-child {\n  text-align: right;\n  margin-top: var(--gap-100);\n}\n\n.about img {\n  height: 100%;\n  width: 100%;\n  border-radius: 12px;\n}\n\n.about-info {\n  display: grid;\n  grid-template-columns: 3fr 2fr;\n  grid-template-rows: 1fr 1fr;\n  gap: var(--gap-300);\n}\n\n.about-info p {\n  grid-row: 1 / -1;\n}\n\n/* menu */\n\n.meal {\n  display: flex;\n  gap: var(--gap-400);\n}\n\n.meal > img {\n  height: 40%;\n  width: 40%;\n  border-radius: 12px;\n}\n\n.meal > div {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-100);\n}\n\n\n/* contact */\n\n.contact-block {\n  display: flex;\n  flex-direction: row;\n}\n\n.contact-block > img {\n  border-radius: 12px;\n  height: 40%;\n  width: 40%\n}\n\n.contact-block > div {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap-300);\n}\n\n.contact-info {\n  display: flex;\n  flex-direction: row;\n  gap: var(--gap-150);\n}\n\n.contact-info > img {\n  height: 20px;\n  width: 20px;\n}\n\n\n/* mobile media query */\n\n@media only screen and (max-width: 675px) {\n\n  .about-info {\n    grid-template-columns: 1fr;\n  }\n\n  .meal {\n    flex-direction: column;\n  }\n\n  .meal > img {\n    height: 60%;\n    width: 60%;\n  }\n\n  .contact-block {\n    flex-direction: column;\n  }\n\n  .contact-block > img {\n    width: 75%;\n    height: 75%;\n  }\n\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContactInfo: () => (/* binding */ createContactInfo),\n/* harmony export */   renderContact: () => (/* binding */ renderContact)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _assets_munchy_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/munchy.jpg */ \"./src/assets/munchy.jpg\");\n/* harmony import */ var _assets_clock_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/clock.svg */ \"./src/assets/clock.svg\");\n/* harmony import */ var _assets_map_marker_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/map-marker.svg */ \"./src/assets/map-marker.svg\");\n/* harmony import */ var _assets_phone_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/phone.svg */ \"./src/assets/phone.svg\");\n/* harmony import */ var _assets_email_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/email.svg */ \"./src/assets/email.svg\");\n\n\n\n\n\n\n\n// render contact tab\nfunction renderContact() {\n  const main = document.createElement('main');\n\n  main.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createParagraph)(\"Come visit us during our regular hours - we'd love to see you here at Munchy's! And feel free to contact us via the phone number or email provided below.\"));\n  main.appendChild(createContactBlock());\n\n  return main;\n}\n\nfunction createContactBlock() {\n  // create an obj of meal text for each obj in menuContent\n  const photo = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)(_assets_munchy_jpg__WEBPACK_IMPORTED_MODULE_1__, \"A photo of Munchy\");\n  const contactInfo =  {\n    hours: createContactInfo(\"hours\"),\n    location: createContactInfo(\"location\"),\n    phone: createContactInfo(\"phone\"),\n    email: createContactInfo(\"email\")\n  };\n  const assembledContactInfo = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.assemble)(contactInfo);\n\n  return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.assemble)({photo, assembledContactInfo}, 'contact-block');\n}\n\n// create hours content\nfunction createContactInfo(type) {\n  const hours = {\n    img: {\n      src: _assets_clock_svg__WEBPACK_IMPORTED_MODULE_2__,\n      alt: \"clock icon\"\n    },\n    text: {\n      line1: 'Wed - Sun: 8am - 3pm',\n      line2: 'Mon - Tue: closed',\n    }\n  };\n  const location = {\n    img: {\n      src: _assets_map_marker_svg__WEBPACK_IMPORTED_MODULE_3__,\n      alt: \"map marker icon\"\n    },\n    text: {\n      line1: '123 Hickory Rd',\n      line2: 'Woodford, VT 05201',\n    }\n  };\n  const phone = {\n    img : {\n      src: _assets_phone_svg__WEBPACK_IMPORTED_MODULE_4__,\n      alt: \"phone icon\"\n    },\n    text: {\n      line1: \"(802) 440-3947\"\n    }\n  }\n  const email = {\n    img : {\n      src: _assets_email_svg__WEBPACK_IMPORTED_MODULE_5__,\n      alt: \"email icon\"\n    },\n    text: {\n      line1: \"munchys@gmail.com\"\n    }\n  }\n  \n  let info;\n  switch(type) {\n    case 'hours':\n      info = hours;\n      break;\n    case 'location':\n      info = location;\n      break;\n    case 'phone':\n      info = phone;\n      break;\n    case 'email':\n      info = email;\n      break;\n  }\n\n  const icon = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)(info.img.src, info.img.alt);\n\n  // add hours text to container\n  const textContainer = document.createElement('div');\n  for (const key in info.text) {\n    textContainer.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createParagraph)(info.text[key]));\n  }\n\n  return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.assemble)({icon, textContainer}, 'contact-info');\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   assemble: () => (/* binding */ assemble),\n/* harmony export */   createHeader: () => (/* binding */ createHeader),\n/* harmony export */   createImg: () => (/* binding */ createImg),\n/* harmony export */   createParagraph: () => (/* binding */ createParagraph)\n/* harmony export */ });\n// create tab header element\nfunction createHeader(text, level) {\n  const title = document.createElement(`h${level}`);\n  title.innerText = text;\n\n  return title;\n}\n\n// create paragraph element\nfunction createParagraph(text) {\n  const paragraph = document.createElement('p');\n  paragraph.innerText = text;\n  \n  return paragraph;\n}\n\n// create img element\nfunction createImg(srcText, altText) {\n  const img = document.createElement('img');\n  img.src = srcText;\n  img.alt = altText;\n\n  return img;\n}\n\n// assemble obj of HTML elements into container div\nfunction assemble(obj, className) {\n  const container = document.createElement('div');\n  if (className) container.classList.add(className);\n\n  for (const key in obj) {\n    container.appendChild(obj[key]);\n  }\n\n  return container;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/helpers.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHome: () => (/* binding */ renderHome)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _assets_cabin_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/cabin.jpg */ \"./src/assets/cabin.jpg\");\n\n\n\n\n// render home tab\nfunction renderHome() {\n  const main = document.createElement('main');\n\n  main.appendChild(createAbout());\n  main.appendChild(createReviews());\n\n  return main;\n}\n\n// create about content\nfunction createAbout() {\n  const img = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)(_assets_cabin_jpg__WEBPACK_IMPORTED_MODULE_2__, \"A photo of Munchy's Eats\");\n  \n  const text = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createParagraph)(\"Munchy's Eats is a quaint little cafe tucked away in the Enchanted Forest, off Rt 9, just past the Great Oak. It's the passion project of Munchy McSquirrel, however, Munchy couldn't do this alone. A family project through-and-through, Munchy receives so much help from the entire McSquirrel clan.\");\n  const hours = (0,_contact__WEBPACK_IMPORTED_MODULE_1__.createContactInfo)(\"hours\");\n  const location = (0,_contact__WEBPACK_IMPORTED_MODULE_1__.createContactInfo)(\"location\");\n  const aboutInfo = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.assemble)({text, hours, location}, 'about-info');\n\n  return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.assemble)({img, aboutInfo}, 'about');\n}\n\n// create review content\nfunction createReviews() {\n  const reviewContent = [\n    {\n      text: \"Um, freaking delicious! We just moved to the area and wow what a breakfast this was. Just incredible. There are so many options. Definitely scurry on by to check this place out.\",\n      author: \"~ Scrat\"\n    },\n    {\n      text: \"Best bagel I've ever had! I know it may look crazy because I get it double toasted, but I promise you this is the yummiest bagel I've ever had! And I eat bagels for breakfast almost every morning.\",\n      author: \"~ Nibbles\"\n    },\n    {\n      text: \"Sure, it's a quaint little cafe. But it's out in the middle of nowhere and the portions of food are on the small side.\",\n      author: \"~ Squeaky\"\n    }\n  ];\n\n  // create a 'review' object for each obj in reviewContent; containing container, text, and author elements\n  const reviews = [];\n  reviewContent.forEach(revCont => {\n    const review = {\n      text: (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createParagraph)(revCont.text),\n      author: (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createParagraph)(revCont.author)\n    };\n    reviews.push(review);\n  });\n\n  // create reviews container, add header\n  const reviewsContainer = document.createElement('div');\n  reviewsContainer.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHeader)(\"Reviews\", 2));\n  \n  // assemble reviews and add to container\n  reviews.forEach((rev, i) => {\n    const container = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.assemble)(rev, 'review');\n    reviewsContainer.appendChild(container);\n\n    // add line separation\n    if (i < reviews.length - 1) reviewsContainer.appendChild(document.createElement('hr'));\n  });\n\n  return reviewsContainer;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _load_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-page.js */ \"./src/load-page.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n\n// cache container\nconst content = document.querySelector('#content');\n\n// load page\ncontent.append(...(0,_load_page_js__WEBPACK_IMPORTED_MODULE_1__.loadPage)(_home_js__WEBPACK_IMPORTED_MODULE_2__.renderHome));\n\n// cache DOM\nconst tabs = document.querySelectorAll('#nav > li');\nlet main = document.querySelector('main');\n\n// add event listeners\ntabs.forEach(tab => tab.addEventListener('click', switchTab));\n\n// delete main and switch to tab that was clicked\nfunction switchTab(e) {\n  main.remove();\n\n  // add bottom border to target el and remove others\n  tabs.forEach(tab => tab.classList.remove('selected'));\n  e.target.classList.add('selected');\n\n  // obj to relate tab text content to correct page loader func\n  const tabLoaders = {\n    'Home': _home_js__WEBPACK_IMPORTED_MODULE_2__.renderHome,\n    'Menu': _menu_js__WEBPACK_IMPORTED_MODULE_3__.renderMenu,\n    'Contact': _contact_js__WEBPACK_IMPORTED_MODULE_4__.renderContact\n  };\n\n  // run appropriate tabLoader depending on which tab was clicked\n  main = tabLoaders[e.target.innerText]();\n  content.appendChild(main);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/load-page.js":
/*!**************************!*\
  !*** ./src/load-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadPage: () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\n\n// initial page load\nfunction loadPage(renderPage) {\n  return [renderHeader(), renderNav(), renderPage()];\n}\n\n// render \"Munchie's Eats\" header\nfunction renderHeader() {\n  const header = document.createElement('header');\n  header.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHeader)(\"Munchy's Eats\", 1));\n\n  return header;\n}\n\n// render navigation tabs\nfunction renderNav() {\n  const nav = document.createElement('nav');\n\n  // create ul and 3 li\n  const ul = document.createElement('ul');\n  ul.setAttribute('id', 'nav');\n  const tabText = ['Home', 'Menu', 'Contact'];\n\n  tabText.forEach(tab => {\n    const li = document.createElement('li');\n    li.innerText = tab;\n    if (tab === 'Home') li.classList.add('selected');\n\n    ul.appendChild(li);\n  });\n  nav.appendChild(ul);\n\n  return nav;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/load-page.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMenu: () => (/* binding */ renderMenu)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _assets_mac_n_cheese_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/mac-n-cheese.jpg */ \"./src/assets/mac-n-cheese.jpg\");\n/* harmony import */ var _assets_cookies_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/cookies.jpg */ \"./src/assets/cookies.jpg\");\n/* harmony import */ var _assets_monkey_bread_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/monkey-bread.jpg */ \"./src/assets/monkey-bread.jpg\");\n/* harmony import */ var _assets_brownie_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/brownie.jpg */ \"./src/assets/brownie.jpg\");\n/* harmony import */ var _assets_mushroom_soup_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/mushroom-soup.jpg */ \"./src/assets/mushroom-soup.jpg\");\n\n\n\n\n\n\n\n// render menu tab\nfunction renderMenu() {\n  const main = document.createElement('main');\n\n  main.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createParagraph)(\"All of the dishes in our menu are incredibly delicious and hand-crafted from only nature's finest ingredients.\"));\n  main.appendChild(createMenu());\n\n  return main;\n}\n\n// create menu content\nfunction createMenu() {\n  const menuContent = [\n    {\n      title: \"Munchy's Mac and Cheese\",\n      cost: \"$7.00\",\n      description: \"Munchy's signature mac and cheese, based on a recipe passed down by the McSquirrel family for generations.\",\n      photo: _assets_mac_n_cheese_jpg__WEBPACK_IMPORTED_MODULE_1__\n    },\n    {\n      title: \"Macadamia Nut Monstrosity\",\n      cost: \"$2.50\",\n      description: \"A cookie baked with mouth-watering macadamia nuts.\",\n      photo: _assets_cookies_jpg__WEBPACK_IMPORTED_MODULE_2__\n    },\n    {\n      title: \"Squirrel Monkey Bread\",\n      cost: \"$8.00\",\n      description: \"Your favorite pull-apart sweet bread, created by none other than Munchy's second cousin once removed, Squirrel Monkey.\",\n      photo: _assets_monkey_bread_jpg__WEBPACK_IMPORTED_MODULE_3__\n    },\n    {\n      title: \"Mint Brownie\",\n      cost: \"$3.00\",\n      description: \"A Brownie baked with mint hand-picked from the garden.\",\n      photo: _assets_brownie_jpg__WEBPACK_IMPORTED_MODULE_4__\n    },\n    {\n      title: \"Mushroom Soup\",\n      cost: \"$6.00\",\n      description: \"Thick, flavorful soup made with mushrooms harvested from the forest floor.\",\n      photo: _assets_mushroom_soup_jpg__WEBPACK_IMPORTED_MODULE_5__\n    },\n  ];\n\n  // create an obj of meal text for each obj in menuContent\n  const mealText = [];\n  menuContent.forEach(menuCont => {\n    const meal = {\n      title: (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createHeader)(menuCont.title, 3),\n      cost: document.createElement('span'),\n      description: (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createParagraph)(menuCont.description),\n    }\n    meal.cost.innerText = menuCont.cost;\n    mealText.push(meal);\n  });\n\n  // create a menu object of text and photo for each obj in menuContent\n  const meals = [];\n  menuContent.forEach((menuCont, i) => {\n    meals.push({\n      textContainer: (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.assemble)(mealText[i]),\n      photo: (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createImg)(menuCont.photo, menuCont.title),\n    });\n  });\n\n  // create menu container, add header\n  const menuContainer = document.createElement('div');\n\n  // assemble menu items and add to container\n  meals.forEach((meal, i) => {\n    menuContainer.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.assemble)(meal, 'meal'));\n\n    // add line separation\n    if (i < meals.length - 1) menuContainer.appendChild(document.createElement('hr'));\n  });\n\n  return menuContainer;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/assets/brownie.jpg":
/*!********************************!*\
  !*** ./src/assets/brownie.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c392dfeb801d8baa72ac.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/brownie.jpg?");

/***/ }),

/***/ "./src/assets/cabin.jpg":
/*!******************************!*\
  !*** ./src/assets/cabin.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"64702422162bd0b5a74b.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/cabin.jpg?");

/***/ }),

/***/ "./src/assets/clock.svg":
/*!******************************!*\
  !*** ./src/assets/clock.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"680c94a905d08db4dc92.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/clock.svg?");

/***/ }),

/***/ "./src/assets/cookies.jpg":
/*!********************************!*\
  !*** ./src/assets/cookies.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1e4573afa6ae92b00f15.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/cookies.jpg?");

/***/ }),

/***/ "./src/assets/email.svg":
/*!******************************!*\
  !*** ./src/assets/email.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dbb6699618e1c4ee8b80.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/email.svg?");

/***/ }),

/***/ "./src/assets/leaves.png":
/*!*******************************!*\
  !*** ./src/assets/leaves.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0cfaecdeab0e06f704df.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/leaves.png?");

/***/ }),

/***/ "./src/assets/mac-n-cheese.jpg":
/*!*************************************!*\
  !*** ./src/assets/mac-n-cheese.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"552daded576712a72e1e.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/mac-n-cheese.jpg?");

/***/ }),

/***/ "./src/assets/map-marker.svg":
/*!***********************************!*\
  !*** ./src/assets/map-marker.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"95bb187980f209d7c0b2.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/map-marker.svg?");

/***/ }),

/***/ "./src/assets/monkey-bread.jpg":
/*!*************************************!*\
  !*** ./src/assets/monkey-bread.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a55ed96ca7ed12d69340.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/monkey-bread.jpg?");

/***/ }),

/***/ "./src/assets/munchy.jpg":
/*!*******************************!*\
  !*** ./src/assets/munchy.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ae5a2b686c4df6a0309d.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/munchy.jpg?");

/***/ }),

/***/ "./src/assets/mushroom-soup.jpg":
/*!**************************************!*\
  !*** ./src/assets/mushroom-soup.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"34ff8e89cfc4b5f6338a.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/mushroom-soup.jpg?");

/***/ }),

/***/ "./src/assets/phone.svg":
/*!******************************!*\
  !*** ./src/assets/phone.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"123cf7dcb1367a1576d3.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/phone.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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