"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_starter"] = self["webpackChunkwebpack_starter"] || []).push([["resources_js_funcs_navigation_js"],{

/***/ "./resources/js/funcs/navigation.js":
/*!******************************************!*\
  !*** ./resources/js/funcs/navigation.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar navigation = function navigation(burgerClass, menuClass) {\n  var burger = document.querySelector(\".navigationOpen\");\n  var nav = document.querySelector(\".navigation--component\");\n  var html = document.documentElement;\n  var body = document.body;\n  if (!burger || !nav) return;\n  console.log(\"click\", burger, nav);\n  burger.addEventListener(\"click\", function () {\n    body.classList.toggle(\"_navigation-open\");\n    if (body.classList.contains(\"_navigation-open\")) {\n      burger.classList.add(\"open\");\n      html.style.overflowY = \"hidden\";\n      body.classList.add(\"open\");\n      return;\n    }\n    burger.classList.remove(\"open\");\n    html.style.overflowY = \"auto\";\n    body.classList.remove(\"_navigation-open\");\n\n    // if (nav.classList.contains(\"active\")) {\n    //     burger.classList.add(\"open\");\n    //     html.style.overflowY = \"hidden\";\n    //     body.classList.add(\"open\");\n    //     return\n    // }\n    // burger.classList.remove(\"open\");\n    // html.style.overflowY = \"auto\";\n    // body.classList.remove(\"open\");\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (navigation);\n\n//# sourceURL=webpack://webpack-starter/./resources/js/funcs/navigation.js?");

/***/ })

}]);