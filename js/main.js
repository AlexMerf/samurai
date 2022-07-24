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

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("gsap.registerPlugin(ScrollTrigger);\r\n\r\nScrollTrigger.matchMedia({\r\n  \"(min-width: 991px)\": function () {\r\n    gsap.to(\"progress\", {\r\n      value: 100,\r\n      ease: \"none\",\r\n      scrollTrigger: { scrub: 0.3 },\r\n    });\r\n\r\n    gsap.to(\".projects .decor__1\", {\r\n      scrollTrigger: {\r\n        scrub: 1,\r\n      },\r\n      y: -200,\r\n    });\r\n\r\n    gsap.to(\".projects .decor__2\", {\r\n      scrollTrigger: {\r\n        scrub: 1,\r\n      },\r\n      y: 200,\r\n    });\r\n\r\n    gsap.to(\".projects .decor__3\", {\r\n      scrollTrigger: {\r\n        scrub: 1,\r\n      },\r\n      x: 200,\r\n    });\r\n\r\n    gsap.to(\".heroimage .title h1\", {\r\n      scrollTrigger: {\r\n        scrub: 1,\r\n      },\r\n      x: 100,\r\n    });\r\n\r\n    gsap.to(\".js-marquee\", {\r\n      scrollTrigger: {\r\n        scrub: 0.1,\r\n      },\r\n      y: 1000,\r\n    });\r\n\r\n    gsap.to(\".projects\", {\r\n      scrollTrigger: {\r\n        scrub: 1,\r\n      },\r\n      y: -200,\r\n    });\r\n  },\r\n});\r\n\n\n//# sourceURL=webpack://gulp_start/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;