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

eval("\nfunction cell_info(cellID){\n\tlet owner = 'none';\n\tlet cell = document.getElementById(cellID);\n\tlet image = cell.querySelector('img');\n\tfunction add_image(name){\n\t\timage.setAttribute('src', `../src/images/${name}.${name == 'me'? 'png' : 'jpg'}`);\n\t\timage.setAttribute('alt', name);\n\t\timage.classList.toggle('seen');\n\t}\n\treturn {owner, cell, add_image};\n}\n\nfunction player_info(name){\n\tlet cells_owned = [];\n\treturn {name, cells_owned};\n}\n\nfunction getAvailableCells(cells){\n\tlet availableCells = [];\n\tcells.forEach((cell, index) => {\n\t\tif(cell.owner == 'none'){\n\t\t\tavailableCells.push(index);\n\t\t}\n\t});\n\treturn availableCells;\n}\n\nfunction isOver(cells){\n\tif(getAvailableCells(cells).length == 0) return true;\n\treturn false;\n}\n\nfunction checkWinner(cells){\n\n\tif(cells[0].owner != 'none' && cells[0].owner == cells[1].owner && cells[1].owner == cells[2].owner)\n\t\treturn cells[0].owner == 'me' ? 'me' : 'you';\n\tif(cells[3].owner != 'none' && cells[3].owner == cells[4].owner && cells[4].owner == cells[5].owner)\n\t\treturn cells[3].owner == 'me' ? 'me' : 'you';\n\tif(cells[6].owner != 'none' && cells[6].owner == cells[7].owner && cells[7].owner == cells[8].owner)\n\t\treturn cells[6].owner == 'me' ? 'me' : 'you';\n\n\tif(cells[0].owner != 'none' && cells[0].owner == cells[3].owner && cells[3].owner == cells[6].owner)\n\t\treturn cells[0].owner == 'me' ? 'me' : 'you';\n\tif(cells[1].owner != 'none' && cells[1].owner == cells[4].owner && cells[4].owner == cells[7].owner)\n\t\treturn cells[1].owner == 'me' ? 'me' : 'you';\n\tif(cells[2].owner != 'none' && cells[2].owner == cells[5].owner && cells[5].owner == cells[8].owner)\n\t\treturn cells[2].owner == 'me' ? 'me' : 'you';\n\n\tif(cells[0].owner != 'none' && cells[0].owner == cells[4].owner && cells[4].owner == cells[8].owner)\n\t\treturn cells[0].owner == 'me' ? 'me' : 'you';\n\tif(cells[2].owner != 'none' && cells[2].owner == cells[4].owner && cells[4].owner == cells[6].owner)\n\t\treturn cells[2].owner == 'me' ? 'me' : 'you';\n\n\tif(isOver(cells)) return 'draw';\n\treturn 'none';\n}\n\nfunction bestMove(myTurn, copyCells, depth){\n\n\tif(myTurn){\n\t\tlet best = -100;\n\t\tlet cell_no = -1;\n\t\tlet possible_values = [];\n\t\tfor(let cell_index of getAvailableCells(copyCells)){\n\t\t\tlet cell_value = {value: -100, index: cell_index};\n\t\t\tcopyCells[cell_index].owner = 'me';\n\t\t\tif(checkWinner(copyCells) == 'none'){\n\t\t\t\tlet copy = copyCells;\n\t\t\t\tpossible_values.push({value: bestMove(false, copy, depth+1).value, index: cell_index});\n\t\t\t\tcopyCells[cell_index].owner = 'none';\n\t\t\t}\n\t\t\telse if(checkWinner(copyCells) == 'me'){\n\t\t\t\tcopyCells[cell_index].owner = 'none';\n\t\t\t\tcell_value.value = 100;\n\t\t\t\treturn cell_value;\n\t\t\t}\n\t\t\telse {\n\t\t\t\tcopyCells[cell_index].owner = 'none';\n\t\t\t\tcell_value.value = 0;\n\t\t\t\treturn cell_value;\n\t\t\t}\n\t\t}\n\t\t\t\n\t\tfor(let move of possible_values){\n\t\t\tif(move.value > best){\n\t\t\t\tbest = move.value;\n\t\t\t\tcell_no = move.index\n\t\t\t}\n\t\t}\n\t\treturn {value: best, index: cell_no};\n\t}\n\telse{\n\t\tlet best = 100;\n\t\tlet cell_no = -1;\n\t\tlet possible_values = [];\n\t\tfor(let cell_index of getAvailableCells(copyCells)){\n\t\t\tlet cell_value = {value: 100, index: cell_index};\n\t\t\tcopyCells[cell_index].owner = 'you';\n\t\t\tif(checkWinner(copyCells) == 'none'){\n\t\t\t\tlet copy = copyCells;\n\t\t\t\tpossible_values.push({value: bestMove(true, copy, depth+1).value, index: cell_index});\n\t\t\t\tcopyCells[cell_index].owner = 'none';\n\t\t\t}\n\t\t\telse if(checkWinner(copyCells) == 'you'){\n\t\t\t\tcopyCells[cell_index].owner = 'none';\n\t\t\t\tcell_value.value = -100;\n\t\t\t\treturn cell_value;\n\t\t\t}\n\t\t\telse {\n\t\t\t\tcopyCells[cell_index].owner = 'none';\n\t\t\t\tcell_value.value = 0;\n\t\t\t\treturn cell_value;\n\t\t\t}\n\n\t\t}\n\t\tfor(let move of possible_values){\n\t\t\tif(move.value < best){\n\t\t\t\tbest = move.value;\n\t\t\t\tcell_no = move.index\n\t\t\t}\n\t\t}\n\t\treturn {value: best, index: cell_no};\n\t}\n\t\n}\n\n\nmodule.exports = {bestMove, cell_info, player_info, getAvailableCells, isOver, checkWinner};\n\n//# sourceURL=webpack:///./src/script/ttt-3-modules.js?");

/***/ }),

/***/ "./src/script/ttt-3.js":
/*!*****************************!*\
  !*** ./src/script/ttt-3.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let m = __webpack_require__(/*! ./ttt-3-modules.js */ \"./src/script/ttt-3-modules.js\");\n\nlet data = window.location.hash.substring(1).split(\"#\");\nlet turn;\n\n(document.querySelector(`.opp-card`)).querySelector(`img`).setAttribute(`src`, `../src/images/${data[0]}.jpg`);\n(document.querySelector(`.opp-card`)).querySelector(`img`).setAttribute(`alt`, data[0]);\n\nlet cells = [];\nfor(let i = 0; i<9; i++){\n\tcells[i] = m.cell_info(`cell${i}`);\n\n}\n\nlet you = m.player_info(data[0]);\nlet me = m.player_info('me');\n\nif(data[1] == 'true'){\n\tturn = 'me';\n\tcells[4].owner = 'me';\n\tcells[4].add_image(me.name);\n\tturn = 'you';\n}\nelse turn = 'you';\n\ncells.forEach(box => {\n\tbox.cell.addEventListener('click', ()=>{\n\t\tif(box.owner == 'none' && turn == 'you'){\n\t\t\tbox.owner = 'you';\n\t\t\tturn = 'me';\n\t\t\tbox.add_image(you.name);\n\t\t\tlet copyCells = cells;\n\t\t\tif(m.checkWinner(cells) == 'none') makeMove(m.bestMove(true, copyCells, 0));\n\t\t\telse console.log(m.checkWinner(cells));\n\t\t}\n\t});\n});\n\nfunction makeMove(move){\n\tcells[move.index].owner = 'me';\n\tcells[move.index].add_image(me.name);\n\tif(m.checkWinner(cells) == 'none') turn = 'you';\n\telse console.log(m.checkWinner(cells));\n}\n\n//# sourceURL=webpack:///./src/script/ttt-3.js?");

/***/ })

/******/ });