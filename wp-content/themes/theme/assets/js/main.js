/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/funcs/fadeInElements.js":
/*!**********************************************!*\
  !*** ./resources/js/funcs/fadeInElements.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar fadeInElements = function fadeInElements() {\n  var elements = document.querySelectorAll(\".fadeInTrigger\");\n  console.log(\"ele\", elements);\n  elements.forEach(function (img) {\n    var callback = function callback(entries, observer) {\n      entries.forEach(function (entry) {\n        if (entry.isIntersecting) {\n          entry.target.classList.add(\"fadeIn\");\n        }\n      });\n    };\n    var options = {\n      root: null,\n      rootMargin: \"0px\",\n      threshold: 0\n    };\n    var myObserver = new IntersectionObserver(callback, options);\n    myObserver.observe(img);\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (fadeInElements);\n\n//# sourceURL=webpack://webpack-starter/./resources/js/funcs/fadeInElements.js?");

/***/ }),

/***/ "./resources/js/funcs/headerScrolled.js":
/*!**********************************************!*\
  !*** ./resources/js/funcs/headerScrolled.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar headerScrolled = function headerScrolled(height) {\n  window.addEventListener(\"scroll\", function () {\n    var bodyClassList = document.body.classList;\n    if (scrollY > 70 && !bodyClassList.contains(\"_header-scrolled\")) {\n      bodyClassList.add(\"_header-scrolled\");\n    }\n    if (scrollY < 70 && bodyClassList.contains(\"_header-scrolled\")) {\n      bodyClassList.remove(\"_header-scrolled\");\n    }\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (headerScrolled);\n\n//# sourceURL=webpack://webpack-starter/./resources/js/funcs/headerScrolled.js?");

/***/ }),

/***/ "./resources/js/funcs/map.js":
/*!***********************************!*\
  !*** ./resources/js/funcs/map.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar map = function map() {\n  var listItems = document.querySelectorAll(\"#map .list .item\");\n  var mapItems = document.querySelectorAll(\"#map .map .st0\");\n  var svgMap = document.querySelector(\"#svg2\");\n  var section = document.querySelector(\"#map .list\");\n  if (!svgMap) return;\n  Array.from(listItems).map(function (item) {\n    item.addEventListener(\"mouseover\", function itemHover(e) {\n      var className = e.target.dataset.type;\n      svgMap.classList.add(className);\n      section.classList.add(className);\n    });\n    item.addEventListener(\"mouseout\", function itemHover(e) {\n      var className = e.target.dataset.type;\n      svgMap.classList.remove(className);\n      section.classList.remove(className);\n    });\n  });\n  Array.from(mapItems).map(function (item) {\n    item.addEventListener(\"mouseover\", function itemHover(e) {\n      var className = e.target.id;\n      svgMap.classList.add(className);\n      section.classList.add(className);\n    });\n    item.addEventListener(\"mouseout\", function itemHover(e) {\n      var className = e.target.id;\n      svgMap.classList.remove(className);\n      section.classList.remove(className);\n    });\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (map);\n\n//# sourceURL=webpack://webpack-starter/./resources/js/funcs/map.js?");

/***/ }),

/***/ "./resources/js/funcs/setDate.js":
/*!***************************************!*\
  !*** ./resources/js/funcs/setDate.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar setDate = function setDate() {\n  var dateContainer = document.querySelector(\".acutal-date\");\n  var acutalDate = new Date();\n  dateContainer.innerHTML = acutalDate.getFullYear();\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (setDate);\n\n//# sourceURL=webpack://webpack-starter/./resources/js/funcs/setDate.js?");

/***/ }),

/***/ "./resources/js/index.js":
/*!*******************************!*\
  !*** ./resources/js/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./resources/scss/style.scss\");\n/* harmony import */ var _funcs_setDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./funcs/setDate */ \"./resources/js/funcs/setDate.js\");\n/* harmony import */ var _funcs_headerScrolled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./funcs/headerScrolled */ \"./resources/js/funcs/headerScrolled.js\");\n/* harmony import */ var _funcs_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./funcs/map */ \"./resources/js/funcs/map.js\");\n/* harmony import */ var _funcs_fadeInElements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./funcs/fadeInElements */ \"./resources/js/funcs/fadeInElements.js\");\n\n// import transition from \"./funcs/transition\";\nvar isDOMContains = function isDOMContains(selector) {\n  return !!document.querySelector(selector);\n};\n__webpack_require__.e(/*! import() */ \"resources_js_funcs_navigation_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./funcs/navigation */ \"./resources/js/funcs/navigation.js\")).then(function (_ref) {\n  var navigation = _ref.default;\n  return navigation(\".navigationOpen\", \".navigationClose\", \".navigation--component\");\n});\n\n\n\n\n// import(\"./funcs/langSwitcher\").then(({ default: switcher }) => switcher());\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  (0,_funcs_fadeInElements__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  (0,_funcs_headerScrolled__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(61);\n  (0,_funcs_map__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  (0,_funcs_setDate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\n// transition();\n\n//# sourceURL=webpack://webpack-starter/./resources/js/index.js?");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./resources/scss/style.scss\");\n/* harmony import */ var _funcs_setDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./funcs/setDate */ \"./resources/js/funcs/setDate.js\");\n/* harmony import */ var _funcs_headerScrolled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./funcs/headerScrolled */ \"./resources/js/funcs/headerScrolled.js\");\n/* harmony import */ var _funcs_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./funcs/map */ \"./resources/js/funcs/map.js\");\n/* harmony import */ var _funcs_fadeInElements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./funcs/fadeInElements */ \"./resources/js/funcs/fadeInElements.js\");\n\n// import transition from \"./funcs/transition\";\nvar isDOMContains = function isDOMContains(selector) {\n  return !!document.querySelector(selector);\n};\n__webpack_require__.e(/*! import() */ \"resources_js_funcs_navigation_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./funcs/navigation */ \"./resources/js/funcs/navigation.js\")).then(function (_ref) {\n  var navigation = _ref.default;\n  return navigation(\".navigationOpen\", \".navigationClose\", \".navigation--component\");\n});\n\n\n\n\n// import(\"./funcs/langSwitcher\").then(({ default: switcher }) => switcher());\n\n(0,_funcs_setDate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  (0,_funcs_fadeInElements__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  (0,_funcs_headerScrolled__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(61);\n  (0,_funcs_map__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n});\n\n//   transition();\n\n//# sourceURL=webpack://webpack-starter/./resources/js/index.js?");
>>>>>>> e0e41bdc9b21d45932dac5895037ec9607b1d3da

/***/ }),

/***/ "./resources/scss/style.scss":
/*!***********************************!*\
  !*** ./resources/scss/style.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "../css/style.css";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "webpack-starter:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			};
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
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
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
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
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_starter"] = self["webpackChunkwebpack_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
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