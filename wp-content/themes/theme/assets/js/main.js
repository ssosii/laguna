/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/funcs/cookies.js":
/*!***************************************!*\
  !*** ./resources/js/funcs/cookies.js ***!
  \***************************************/
/***/ (function() {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n// COOKIES\nvar Cookies = /*#__PURE__*/function () {\n  function Cookies() {\n    _classCallCheck(this, Cookies);\n\n    this.WHCheckCookies();\n  }\n\n  _createClass(Cookies, [{\n    key: \"WHCheckCookies\",\n    value: function WHCheckCookies() {\n      if (this.WHReadCookie(\"cookies_accepted\") != \"T\") {\n        var message_container = document.createElement(\"div\");\n        message_container.id = \"cookies-message-container\";\n        var html_code = '<div id=\"cookies-message\" style=\"color: #000; padding: 10px 10px; font-size: 12px; line-height: 16px; display: flex; justify-content: space-between; align-items: center; position: fixed; bottom: 15px; right: 15px; background-color: #fff; width: calc(100% - 30px) !important; max-width: 400px; font-family: sans-serif; z-index: 999; box-sizing: border-box; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\">';\n        html_code += '<svg id=\"Capa_1\" style=\"fill:#051527\" enable-background=\"new 0 0 556.235 556.235\" height=\"30\" viewBox=\"0 0 556.235 556.235\" width=\"30\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m278.118 0c-153.6 0-278.118 124.518-278.118 278.118s124.518 278.118 278.118 278.118c8.144 0 16.158-.533 24.126-1.218-4.327-10.325-6.743-21.652-6.743-33.547 0-24.433 10.151-46.429 26.381-62.219-5.701-12.89-8.999-27.073-8.999-42.075 0-57.6 46.694-104.294 104.294-104.294 15.002 0 29.184 3.297 42.075 8.999 15.791-16.23 37.786-26.381 62.219-26.381 11.895 0 23.222 2.415 33.547 6.741.685-7.968 1.218-15.98 1.218-24.124-.001-153.6-124.519-278.118-278.118-278.118zm-191.206 278.118c-9.599 0-17.382-7.783-17.382-17.382 0-9.601 7.783-17.382 17.382-17.382s17.382 7.781 17.382 17.382c0 9.599-7.783 17.382-17.382 17.382zm86.911 139.058c-19.201 0-34.765-15.566-34.765-34.765 0-19.201 15.564-34.765 34.765-34.765s34.765 15.564 34.765 34.765c0 19.199-15.564 34.765-34.765 34.765zm34.765-243.353c-19.201 0-34.765-15.566-34.765-34.765 0-19.201 15.564-34.765 34.765-34.765s34.765 15.564 34.765 34.765c0 19.199-15.564 34.765-34.765 34.765zm52.147 139.059c-9.599 0-17.382-7.783-17.382-17.382 0-9.601 7.783-17.382 17.382-17.382s17.382 7.781 17.382 17.382c.001 9.599-7.782 17.382-17.382 17.382zm104.294-243.353c9.599 0 17.382 7.781 17.382 17.382 0 9.599-7.783 17.382-17.382 17.382s-17.382-7.783-17.382-17.382c0-9.601 7.783-17.382 17.382-17.382zm17.383 173.824c-19.201 0-34.765-15.566-34.765-34.765 0-19.201 15.564-34.765 34.765-34.765s34.765 15.564 34.765 34.765c-.001 19.199-15.565 34.765-34.765 34.765z\"/></svg>';\n        html_code += '<div class=\"cookie__message\" style=\"display: inline-block; width: 60%; margin: 0 2%; text-align: justify;\">This website uses cookies. We use cookies to ensure that we give you the best experience on our website to personalise content and adverts';\n        html_code += \"</div>\";\n        html_code += '<a href=\"#\" id=\"accept-cookies-checkbox\" name=\"accept-cookies\" style=\"padding: 4% 7%; color: #FFF; display: inline-block; margin-left: 1%; text-decoration: none; font-size: 16px; cursor: pointer;\">';\n        html_code += \"OK\";\n        html_code += \"</a>\";\n        html_code += \"</div>\";\n        message_container.innerHTML = html_code;\n        document.body.appendChild(message_container);\n\n        var _self = this;\n\n        document.getElementById(\"accept-cookies-checkbox\").addEventListener(\"click\", function (e) {\n          e.preventDefault();\n\n          _self.WHCloseCookiesWindow();\n        }, false);\n      }\n    }\n  }, {\n    key: \"WHCloseCookiesWindow\",\n    value: function WHCloseCookiesWindow() {\n      this.WHCreateCookie(\"cookies_accepted\", \"T\", 365);\n      document.getElementById(\"cookies-message-container\").removeChild(document.getElementById(\"cookies-message\"));\n    }\n  }, {\n    key: \"WHReadCookie\",\n    value: function WHReadCookie(name) {\n      var nameEQ = name + \"=\";\n      var ca = document.cookie.split(\";\");\n\n      for (var i = 0; i < ca.length; i++) {\n        var c = ca[i];\n\n        while (c.charAt(0) == \" \") {\n          c = c.substring(1, c.length);\n        }\n\n        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);\n      }\n\n      return null;\n    }\n  }, {\n    key: \"WHCreateCookie\",\n    value: function WHCreateCookie(name, value, days) {\n      var date = new Date();\n      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);\n      var expires = \"; expires=\" + date.toGMTString();\n      document.cookie = name + \"=\" + value + expires + \"; path=/\";\n    }\n  }]);\n\n  return Cookies;\n}();\n\nwindow.onload = function () {\n  var cookies = new Cookies();\n};\n\n//# sourceURL=webpack://webpack-starter/./resources/js/funcs/cookies.js?");

/***/ }),

/***/ "./resources/js/funcs/transition.js":
/*!******************************************!*\
  !*** ./resources/js/funcs/transition.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar transition = function transition() {\n  var anchors = [].concat(_toConsumableArray(document.querySelectorAll(\".menu-item a\")), _toConsumableArray(document.querySelectorAll(\"[data-internal-page]\")));\n  var transitionElement = document.querySelector(\".transition\");\n  transitionElement.classList.remove(\"is-active\");\n  if (!anchors.length || transition_el) return;\n  anchors.forEach(function (anchor) {\n    if (anchor.getAttribute(\"target\")) return;\n    anchor.addEventListener(\"click\", function (e) {\n      transitionElement.classList.add(\"is-active\");\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (transition);\n\n//# sourceURL=webpack://webpack-starter/./resources/js/funcs/transition.js?");

/***/ }),

/***/ "./resources/js/index.js":
/*!*******************************!*\
  !*** ./resources/js/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./resources/scss/style.scss\");\n/* harmony import */ var _funcs_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./funcs/cookies */ \"./resources/js/funcs/cookies.js\");\n/* harmony import */ var _funcs_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_funcs_cookies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _funcs_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./funcs/transition */ \"./resources/js/funcs/transition.js\");\n\n\n // import navigation from \"./funcs/navigation\";\n// import transition from \"./funcs/transition\";\n// import animation from \"./funcs/animation\";\n\n(0,_funcs_transition__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://webpack-starter/./resources/js/index.js?");

/***/ }),

/***/ "./resources/scss/style.scss":
/*!***********************************!*\
  !*** ./resources/scss/style.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-starter/./resources/scss/style.scss?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/js/index.js");
/******/ 	
/******/ })()
;