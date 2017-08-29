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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _render = __webpack_require__(3);

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function IIFE() {

	var pixels = [{ x: -3, y: 0 }, { x: 2, y: 3 }, { x: 15, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }];

	var renderer = (0, _render2.default)(pixels, 5);

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = renderer.pixels[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var v = _step.value;

			console.log(v);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
})(); /**
       * @Author: Lars Hisken
       * @Date:   2017-08-29T13:23:23+02:00
       * @Email:  larshisken@protonmail.com
       * @Last modified by:   Lars Hisken
       * @Last modified time: 2017-08-29T22:55:31+02:00
       */

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @Author: Lars Hisken
 * @Date:   2017-08-29T13:23:23+02:00
 * @Email:  larshisken@protonmail.com
 * @Last modified by:   Lars Hisken
 * @Last modified time: 2017-08-29T22:55:47+02:00
 */

module.exports = function () {
	var pixels = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var maxDistanceToCenter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 25;


	var pixelSet = new Set(pixels);

	var pixelSetIterator = function pixelSetIterator() {

		// Iterator index
		var idx = 0;

		// Iterator next function
		var nextFunc = function nextFunc() {
			var pixel = pixels[idx++];
			var done = typeof pixel === 'undefined';

			if (pixel === undefined) {
				return {
					done: true
				};
			} else {
				var distanceToCenter = Math.hypot(pixel.x - 0, pixel.y - 0);
				var value = Object.assign(pixel, {
					distanceToCenter: distanceToCenter,
					visible: distanceToCenter <= maxDistanceToCenter
				});

				return {
					value: value,
					done: false
				};
			}
		};

		// Iterator return value
		return {
			next: nextFunc
		};
	};

	Object.defineProperty(pixelSet, Symbol.iterator, {
		enumerable: false,
		writable: false,
		configurable: true,
		value: pixelSetIterator
	});

	return {
		pixels: pixelSet
	};
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map