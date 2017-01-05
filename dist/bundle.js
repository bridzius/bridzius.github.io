/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _color = __webpack_require__(1);

	var randomRed = Math.ceil(Math.random() * 255);
	var randomGreen = Math.ceil(Math.random() * 255);
	var randomBlue = Math.ceil(Math.random() * 255);
	var color = new _color.Color(randomRed, randomGreen, randomBlue);
	document.body.style.color = color.hex;
	document.body.style.backgroundColor = color.changeHue(Math.random() < 0.5 ? 100 : -100);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Color = exports.Color = function Color(red, green, blue) {
	    _classCallCheck(this, Color);

	    this.rgb = [red, green, blue];
	    this.red = red;
	    this.green = green;
	    this.blue = blue;
	    this.contrast = (this.red + this.green + this.blue) / 3;
	    this.hex = rgbToHex(this.red, this.green, this.blue);
	    this.changeHue = changeHue;

	    function changeHue(degree) {
	        var hsl = rgbToHSL(this.hex);
	        hsl.h += degree;
	        if (hsl.h > 360) {
	            hsl.h -= 360;
	        } else if (hsl.h < 0) {
	            hsl.h += 360;
	        }
	        return hslToRGB(hsl);
	    }

	    function rgbToHSL(rgb) {
	        // strip the leading # if it's there
	        rgb = rgb.replace(/^\s*#|\s*$/g, '');

	        // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
	        if (rgb.length == 3) {
	            rgb = rgb.replace(/(.)/g, '$1$1');
	        }

	        var r = parseInt(rgb.substr(0, 2), 16) / 255,
	            g = parseInt(rgb.substr(2, 2), 16) / 255,
	            b = parseInt(rgb.substr(4, 2), 16) / 255,
	            cMax = Math.max(r, g, b),
	            cMin = Math.min(r, g, b),
	            delta = cMax - cMin,
	            l = (cMax + cMin) / 2,
	            h = 0,
	            s = 0;

	        if (delta == 0) {
	            h = 0;
	        } else if (cMax == r) {
	            h = 60 * ((g - b) / delta % 6);
	        } else if (cMax == g) {
	            h = 60 * ((b - r) / delta + 2);
	        } else {
	            h = 60 * ((r - g) / delta + 4);
	        }

	        if (delta == 0) {
	            s = 0;
	        } else {
	            s = delta / (1 - Math.abs(2 * l - 1));
	        }

	        return {
	            h: h,
	            s: s,
	            l: l
	        };
	    }

	    // expects an object and returns a string
	    function hslToRGB(hsl) {
	        var h = hsl.h,
	            s = hsl.s,
	            l = hsl.l,
	            c = (1 - Math.abs(2 * l - 1)) * s,
	            x = c * (1 - Math.abs(h / 60 % 2 - 1)),
	            m = l - c / 2,
	            r = void 0,
	            g = void 0,
	            b = void 0;

	        if (h < 60) {
	            r = c;
	            g = x;
	            b = 0;
	        } else if (h < 120) {
	            r = x;
	            g = c;
	            b = 0;
	        } else if (h < 180) {
	            r = 0;
	            g = c;
	            b = x;
	        } else if (h < 240) {
	            r = 0;
	            g = x;
	            b = c;
	        } else if (h < 300) {
	            r = x;
	            g = 0;
	            b = c;
	        } else {
	            r = c;
	            g = 0;
	            b = x;
	        }

	        r = normalize_rgb_value(r, m);
	        g = normalize_rgb_value(g, m);
	        b = normalize_rgb_value(b, m);

	        return rgbToHex(r, g, b);
	    }

	    function normalize_rgb_value(color, m) {
	        color = Math.floor((color + m) * 255);
	        if (color < 0) {
	            color = 0;
	        }
	        return color;
	    }

	    function rgbToHex(r, g, b) {
	        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	    }
	};

/***/ }
/******/ ]);