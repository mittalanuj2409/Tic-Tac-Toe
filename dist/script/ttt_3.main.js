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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script/ttt-3.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/script/ttt-3-modules.js":
/*!*************************************!*\
  !*** ./src/script/ttt-3-modules.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction cell_info(cellID) {\n  var owner = 'none';\n  var cell = document.getElementById(cellID);\n  var image = cell.querySelector('img');\n\n  function add_image(name) {\n    image.setAttribute('src', \"../images/\".concat(name, \".\").concat(name == 'me' ? 'png' : 'jpg'));\n    image.setAttribute('alt', name);\n    image.classList.toggle('seen');\n  }\n\n  return {\n    owner: owner,\n    cell: cell,\n    add_image: add_image,\n    image: image\n  };\n}\n\nfunction player_info(name) {\n  var cells_owned = [];\n  return {\n    name: name,\n    cells_owned: cells_owned\n  };\n}\n\nfunction getAvailableCells(cells) {\n  var availableCells = [];\n  cells.forEach(function (cell, index) {\n    if (cell.owner == 'none') {\n      availableCells.push(index);\n    }\n  });\n  return availableCells;\n}\n\nfunction isOver(cells) {\n  if (getAvailableCells(cells).length == 0) return true;\n  return false;\n}\n\nfunction checkWinner(cells) {\n  if (cells[0].owner != 'none' && cells[0].owner == cells[1].owner && cells[1].owner == cells[2].owner) {\n    return cells[0].owner == 'me' ? 'me' : 'you';\n  }\n\n  if (cells[3].owner != 'none' && cells[3].owner == cells[4].owner && cells[4].owner == cells[5].owner) {\n    return cells[3].owner == 'me' ? 'me' : 'you';\n  }\n\n  if (cells[6].owner != 'none' && cells[6].owner == cells[7].owner && cells[7].owner == cells[8].owner) {\n    return cells[6].owner == 'me' ? 'me' : 'you';\n  }\n\n  if (cells[0].owner != 'none' && cells[0].owner == cells[3].owner && cells[3].owner == cells[6].owner) {\n    return cells[0].owner == 'me' ? 'me' : 'you';\n  }\n\n  if (cells[1].owner != 'none' && cells[1].owner == cells[4].owner && cells[4].owner == cells[7].owner) {\n    return cells[1].owner == 'me' ? 'me' : 'you';\n  }\n\n  if (cells[2].owner != 'none' && cells[2].owner == cells[5].owner && cells[5].owner == cells[8].owner) {\n    return cells[2].owner == 'me' ? 'me' : 'you';\n  }\n\n  if (cells[0].owner != 'none' && cells[0].owner == cells[4].owner && cells[4].owner == cells[8].owner) {\n    return cells[0].owner == 'me' ? 'me' : 'you';\n  }\n\n  if (cells[2].owner != 'none' && cells[2].owner == cells[4].owner && cells[4].owner == cells[6].owner) {\n    return cells[2].owner == 'me' ? 'me' : 'you';\n  }\n\n  if (isOver(cells)) return 'draw';\n  return 'none';\n}\n\nfunction bestMove(myTurn, copyCells, depth) {\n  if (myTurn) {\n    var best = -100;\n    var cell_no = -1;\n    var possible_values = [];\n\n    var _iterator = _createForOfIteratorHelper(getAvailableCells(copyCells)),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var cell_index = _step.value;\n        var cell_value = {\n          value: -100,\n          index: cell_index\n        };\n        copyCells[cell_index].owner = 'me';\n\n        if (checkWinner(copyCells) == 'none') {\n          var copy = copyCells;\n          possible_values.push({\n            value: bestMove(false, copy, depth + 1).value,\n            index: cell_index\n          });\n          copyCells[cell_index].owner = 'none';\n        } else if (checkWinner(copyCells) == 'me') {\n          copyCells[cell_index].owner = 'none';\n          cell_value.value = 100;\n          return cell_value;\n        } else {\n          copyCells[cell_index].owner = 'none';\n          cell_value.value = 0;\n          return cell_value;\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    for (var _i = 0, _possible_values = possible_values; _i < _possible_values.length; _i++) {\n      var move = _possible_values[_i];\n\n      if (move.value > best) {\n        best = move.value;\n        cell_no = move.index;\n      }\n    }\n\n    return {\n      value: best,\n      index: cell_no\n    };\n  } else {\n    var _best = 100;\n\n    var _cell_no = -1;\n\n    var _possible_values2 = [];\n\n    var _iterator2 = _createForOfIteratorHelper(getAvailableCells(copyCells)),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var _cell_index = _step2.value;\n        var _cell_value = {\n          value: 100,\n          index: _cell_index\n        };\n        copyCells[_cell_index].owner = 'you';\n\n        if (checkWinner(copyCells) == 'none') {\n          var _copy = copyCells;\n\n          _possible_values2.push({\n            value: bestMove(true, _copy, depth + 1).value,\n            index: _cell_index\n          });\n\n          copyCells[_cell_index].owner = 'none';\n        } else if (checkWinner(copyCells) == 'you') {\n          copyCells[_cell_index].owner = 'none';\n          _cell_value.value = -100;\n          return _cell_value;\n        } else {\n          copyCells[_cell_index].owner = 'none';\n          _cell_value.value = 0;\n          return _cell_value;\n        }\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n\n    for (var _i2 = 0, _possible_values3 = _possible_values2; _i2 < _possible_values3.length; _i2++) {\n      var _move = _possible_values3[_i2];\n\n      if (_move.value < _best) {\n        _best = _move.value;\n        _cell_no = _move.index;\n      }\n    }\n\n    return {\n      value: _best,\n      index: _cell_no\n    };\n  }\n}\n\nmodule.exports = {\n  bestMove: bestMove,\n  cell_info: cell_info,\n  player_info: player_info,\n  getAvailableCells: getAvailableCells,\n  isOver: isOver,\n  checkWinner: checkWinner\n};\n\n//# sourceURL=webpack:///./src/script/ttt-3-modules.js?");

/***/ }),

/***/ "./src/script/ttt-3.js":
/*!*****************************!*\
  !*** ./src/script/ttt-3.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var m = __webpack_require__(/*! ./ttt-3-modules.js */ \"./src/script/ttt-3-modules.js\");\n\nvar data = window.location.hash.substring(1).split(\"#\");\nvar turn;\ndocument.querySelector(\"#opp-marker\").querySelector(\"img\").setAttribute(\"src\", \"../images/\".concat(data[0], \".jpg\"));\ndocument.querySelector(\"#opp-marker\").querySelector(\"img\").setAttribute(\"alt\", data[0]);\ndocument.querySelector('.reset').addEventListener('click', function () {\n  location.reload(true);\n});\ndocument.querySelector('.restart').addEventListener('click', function () {\n  window.location.href = 'ttt-1.html';\n});\nvar cells = [];\n\nfor (var i = 0; i < 9; i++) {\n  cells[i] = m.cell_info(\"cell\".concat(i));\n}\n\nvar you = m.player_info(data[0]);\nvar me = m.player_info('me');\nvar oppCard = document.querySelector('#opp-card').querySelector('p');\nvar myCard = document.querySelector('#my-card').querySelector('p');\n\nif (data[1] == 'true') {\n  turn = 'me';\n  makeMove({\n    value: 100,\n    index: Math.floor(Math.random() * 9)\n  });\n} else {\n  oppCard.classList.toggle('seen');\n  turn = 'you';\n}\n\ncells.forEach(function (box) {\n  box.cell.addEventListener('click', function () {\n    if (box.owner == 'none' && turn == 'you') {\n      oppCard.classList.toggle('seen');\n      box.owner = 'you';\n      turn = 'me';\n      box.add_image(you.name);\n      var copyCells = cells;\n      if (m.checkWinner(cells) == 'none') makeMove(m.bestMove(true, copyCells, 0));else display(m.checkWinner(cells));\n    }\n  });\n});\n\nfunction makeMove(move) {\n  myCard.classList.toggle('seen');\n  window.setTimeout(function () {\n    cells[move.index].owner = 'me';\n    cells[move.index].add_image(me.name);\n\n    if (m.checkWinner(cells) == 'none') {\n      oppCard.classList.toggle('seen');\n      turn = 'you';\n    } else display(m.checkWinner(cells));\n\n    myCard.classList.toggle('seen');\n  }, Math.floor(Math.random() + 0.5));\n}\n\nfunction display(winner) {\n  var mr = document.querySelector(\"#my-result\").querySelector('p');\n  var yr = document.querySelector(\"#your-result\").querySelector('p');\n\n  if (winner == 'me') {\n    mr.innerHTML = 'I Won';\n    yr.innerHTML = 'You Lost';\n  } else if (winner == 'you') {\n    yr.innerHTML = 'You Won';\n    mr.innerHTML = 'I Lost';\n  } else {\n    yr.innerHTML = 'Match Draw';\n    mr.innerHTML = 'Match Draw';\n  }\n}\n\n//# sourceURL=webpack:///./src/script/ttt-3.js?");

/***/ })

/******/ });