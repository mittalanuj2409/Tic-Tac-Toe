/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script/ttt-2.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/script/ttt-2.js":
/*!*****************************!*\
  !*** ./src/script/ttt-2.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("coin_div = document.querySelector(`.coin-div`);\ncoin_front = document.querySelector(`.coin-front`);\ncoin_back = document.querySelector(`.coin-back`);\nlet imgsrc = window.location.hash.substring(1);\ncoin_back.src = `../src/images/${imgsrc}.jpg`;\ncoin_back.alt=imgsrc;\nlet tossed = false;\nlet result;\nArray.from([coin_front, coin_back]).forEach(face => {\n\tface.addEventListener(`click`, () =>{\n\t\tif(!tossed){\n\t\t\ttossed = true;\n\t\t\tcoin_div.classList.toggle(`intro`);\n\t\t\tresult = Math.random();\n\t\t\tif(result > 0.5){\n\t\t\t\tcoin_div.classList.toggle(`me`);\n\t\t\t\twindow.setTimeout(function(){\n\t\t\t\t\tcoin_div.removeChild(coin_back);\n\t\t\t\t}, 4001);\n\t\t\t\twindow.setTimeout(game, 5000);\n\t\t\t}\n\t\t\telse {\n\t\t\t\tcoin_div.classList.toggle(`you`);\n\t\t\t\twindow.setTimeout(function(){\n\t\t\t\t\tcoin_div.removeChild(coin_front);\n\t\t\t\t}, 4001);\n\t\t\t\twindow.setTimeout(game, 5000);\n\t\t\t}\n\t\t\t\n\t\t}\n\t});\t\n});\n\nfunction game(){\n\twindow.location.href = `ttt-3.html` + `#` + imgsrc + `#` + (result>0.5);\n}\n\nwindow.addEventListener( \"pageshow\", function ( event ) {\n  let mode = event.persisted || \n  \t\t\t ( typeof window.performance != \"undefined\" && \n            window.performance.navigation.type === 2 );\n  if ( mode ) {\n    window.location=`ttt-2-back.html` + `#` + imgsrc + `#` + (result>0.5);\n  }\n});\n\n\n//# sourceURL=webpack:///./src/script/ttt-2.js?");

/***/ })

/******/ });