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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\n:root {\n\t--font-color-1: rgb(90, 90, 90);\n\t--bkg: rgba(197, 238, 245, 0.95);\n}\n\nhtml,\nbody {\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: var(--bkg);\n}\n\n/*\n*************HEADER************\n*/\n\n.height-1 {\n\theight: 70px;\n}\n\n/*\n*************CAROUSEL************\n*/\n\n.carousel{\n\twidth: 100%;\n\tposition: relative;\n}\n\n.carousel-container{\n\twidth: 100%;\n\tposition: relative;\n\tdisplay: flex;\n\tflex-wrap: nowrap;\n}\n\n.slide-single{\n\twidth: 100%;\n}\n\nimg.image-carousel{\n\twidth: 100%;\n}\n\n.carousel-mobile{\n\tdisplay: none;\n}\n\n.carousel-bullets{\n\tpadding: 5px 0;\n\twidth: 100%;\n\ttext-align: center;\n}\n\n.bullet{\n\twidth: 8px;\n\theight: 8px;\n\tbackground-color: rgb(185, 185, 185);\n\tborder-radius: 50%;\n\tdisplay: inline-block;\n\tmargin: 0 7px;\n\tcursor: pointer;\n}\n\n.active{\n\tbackground-color: black;\n}\n\n.arrows{\n\tfont-size: 40px;\n\tcursor: pointer;\n\tposition: absolute;\n\tcolor: var(--font-color-1);\n}\n\n#navnext {\n\tright: 10px;\n\ttop: 40%;\n}\n\n#navprev {\n\tleft: 10px;\n\ttop: 40%;\n}\n\n/*\n***************MEDIA QUERIES***************\n*/\n\n/*------------- width <= 800px --------------*/\n@media (max-width: 800px) {\n\t.setas {\n\t\tfont-size: 30px;\n\t}\n\n\t#navprev {\n\t\ttop: 38%;\n\t}\n\n\t#navnext {\n\t\ttop: 38%;\n\t}\n\t\n}\n\n/*------------- width <= 420px --------------*/\n@media (max-width: 420px) {\n\t.carousel-desktop {\n\t\tdisplay: none;\n\t}\n\n\t.carousel-mobile {\n\t\tdisplay: flex;\n\t}\n\n\t.setas{\n\t\tfont-size: 20px;\n\t}\n\n\t#navprev {\n\t\ttop: 42%;\n\t}\n\n\t#navnext {\n\t\ttop: 42%;\n\t}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_hcarrousel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/hcarrousel.js */ "./src/modules/hcarrousel.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_1__);



var onLoad = function onLoad() {
  //Reload if width has changed
  var initialWidth = window.innerWidth;

  var checkWidthChange = function checkWidthChange() {
    var actualWidth = window.innerWidth;
    actualWidth !== initialWidth ? setTimeout(function () {
      return location.reload();
    }, 0) : false;
  };

  window.addEventListener('resize', checkWidthChange); //Select proper carousel - desktop or mobile

  var loadCarousel = function loadCarousel() {
    return window.innerWidth >= 420 ? document.querySelector('.carousel-desktop') : document.querySelector('.carousel-mobile');
  };

  var choosedCarousel = loadCarousel(); //create carousel object

  var carousel = {
    slidesContainer: choosedCarousel,
    //container - all slides
    allSlides: choosedCarousel.querySelectorAll('.slide-single'),
    //DOM object w/ each single slide
    bulletsContainer: document.querySelector('.carousel-bullets'),
    //navigation bullets container
    arrowLeft: document.querySelector('#navprev'),
    arrowRight: document.querySelector('#navnext'),
    speed: 500,
    //speed of animation (ms)
    interval: 5000 //interval between slides (ms)

  }; //On load functions

  Object(_modules_hcarrousel_js__WEBPACK_IMPORTED_MODULE_0__["carouselBuilder"])(carousel);
};

onLoad();

/***/ }),

/***/ "./src/modules/hcarrousel.js":
/*!***********************************!*\
  !*** ./src/modules/hcarrousel.js ***!
  \***********************************/
/*! exports provided: carouselBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carouselBuilder", function() { return carouselBuilder; });
var carouselBuilder = function carouselBuilder(carousel) {
  //Global variables
  var slidesContainer = carousel.slidesContainer;
  var allSlides = carousel.allSlides; //Original slides

  var numOfSlides = allSlides.length;
  var allSlidesFull = slidesContainer.children; //Clones included - firsl - last

  var navNext = carousel.arrowRight;
  var navPrev = carousel.arrowLeft;
  var speed = carousel.speed;
  var timeToChange = carousel.interval;
  var swipeLimit = Math.floor(window.innerWidth * 0.4);
  var allBullets;
  var actualSlide = 0;
  var autoSlideOn = false;
  var autoSlideInterval;
  var clicked = false;
  var mouseTouchDown = false;
  var x1;
  var x2;

  var setTransition = function setTransition() {
    return slidesContainer.style.transition = "".concat(speed, "ms");
  };

  var removeTransition = function removeTransition() {
    return slidesContainer.style.transition = 'unset';
  }; //Calculate width and hide overflow


  var setWidthAndShow = function setWidthAndShow() {
    slidesContainer.style.width = "calc(100% * ".concat(numOfSlides + 2, ")");
    slidesContainer.parentElement.style.overflow = 'hidden';
  }; //Nav bullets - create and change--------------------


  var createBullets = function createBullets(numOfSlides) {
    var bulletsBox = carousel.bulletsContainer;

    for (var i = 0; i < numOfSlides; i++) {
      var span = document.createElement('span');
      var bullet = bulletsBox.appendChild(span);
      bullet.className = 'bullet';
    }

    document.querySelector('.bullet').classList.add('active');
  };

  var changeBullet = function changeBullet(nextSlide) {
    if (nextSlide === numOfSlides) nextSlide = 0;
    allBullets.forEach(function (each) {
      return each.classList.remove('active');
    });
    allBullets[nextSlide].classList.add('active');
  }; //Main slider functions - movement


  var moveCarousel = function moveCarousel(nextSlide) {
    var next;

    if (nextSlide != actualSlide) {
      next = allSlides[nextSlide].offsetLeft;
      setTransition();
      slidesContainer.style.transform = "translateX(-".concat(next, "px)");
      actualSlide = nextSlide;
      setTimeout(function () {
        return removeTransition();
      }, speed);
    }

    changeBullet(actualSlide);
  }; //Reset and repositioning - infinite


  var startPosition = function startPosition() {
    return slidesContainer.style.transform = "translateX(-".concat(allSlides[0].offsetLeft, "px)");
  };

  var endPosition = function endPosition() {
    return slidesContainer.style.transform = "translateX(-".concat(allSlides[numOfSlides - 1].offsetLeft, "px)");
  };

  var resetCarousel = function resetCarousel(nextSlide) {
    setTransition();

    if (nextSlide >= 0) {
      slidesContainer.style.transform = "translateX(-".concat(allSlidesFull[nextSlide + 1].offsetLeft, "px)");
      actualSlide = 0;
      setTimeout(function () {
        removeTransition();
        startPosition();
      }, speed);
    }

    if (nextSlide < 0) {
      slidesContainer.style.transform = "translateX(-".concat(allSlidesFull[nextSlide + 1].offsetLeft, "px)");
      actualSlide = numOfSlides - 1;
      setTimeout(function () {
        removeTransition();
        endPosition();
      }, speed);
    }

    changeBullet(actualSlide);
  }; //Create clones - 1st and last slides


  var duplicate = function duplicate() {
    var cloneFirst = allSlides[0].cloneNode(true);
    var cloneLast = allSlides[numOfSlides - 1].cloneNode(true);
    slidesContainer.appendChild(cloneFirst);
    slidesContainer.prepend(cloneLast);
    startPosition();
  }; //Auto-slide - no mouseover, no click


  var moveAutoSlide = function moveAutoSlide() {
    var nextSlide = actualSlide + 1;

    if (nextSlide === numOfSlides) {
      resetCarousel(nextSlide);
      nextSlide = 0;
    } else {
      moveCarousel(nextSlide);
    }
  };

  var startAutoSlide = function startAutoSlide() {
    if (!autoSlideOn) {
      autoSlideInterval = setInterval(moveAutoSlide, timeToChange);
      autoSlideOn = true;
    }

    return;
  };

  var stopAutoSlide = function stopAutoSlide() {
    if (autoSlideOn) {
      clearInterval(autoSlideInterval);
      autoSlideOn = false;
    }

    return;
  }; //Slide grab & swiper - mouse and touchscreen


  var defineX1 = function defineX1(e) {
    return navigator.maxTouchPoints != 0 && e.changedTouches ? x1 = e.changedTouches[0].pageX : x1 = e.pageX;
  };

  var defineX2 = function defineX2(e) {
    return navigator.maxTouchPoints != 0 && e.changedTouches ? x2 = e.changedTouches[0].pageX : x2 = e.pageX;
  };

  var initSlideSwipe = function initSlideSwipe() {
    if (x1 < x2 && x2 - x1 >= swipeLimit) {
      var nextSlide = actualSlide - 1;
      actualSlide > 0 ? moveCarousel(nextSlide) : resetCarousel(nextSlide);
      clicked = true; //avoid click while swiping

      setTimeout(function () {
        return clicked = false;
      }, speed);
    } else if (x1 > x2 && x1 - x2 >= swipeLimit) {
      var _nextSlide = actualSlide + 1;

      actualSlide < numOfSlides - 1 ? moveCarousel(_nextSlide) : resetCarousel(_nextSlide);
      clicked = true; //avoid click while swiping

      setTimeout(function () {
        return clicked = false;
      }, speed);
    } else return;
  };

  var drag = function drag(event) {
    return slidesContainer.style.transform += "translateX(".concat(event.movementX, "px)");
  };

  var grab = function grab() {
    return mouseTouchDown ? slidesContainer.addEventListener('mousemove', drag) : false;
  };

  var unGrab = function unGrab() {
    slidesContainer.removeEventListener('mousemove', drag);
    var prevPos = allSlides[actualSlide].offsetLeft;
    setTransition();
    !mouseTouchDown && Math.abs(x2 - x1) < swipeLimit ? slidesContainer.style.transform = "translateX(-".concat(prevPos, "px)") : false;
    setTimeout(function () {
      return removeTransition();
    }, speed);
  }; //Event listeners


  var listenNavArrows = function listenNavArrows() {
    allBullets = Array.from(document.querySelectorAll('.bullet'));
    allBullets.forEach(function (thisBullet) {
      thisBullet.addEventListener('click', function (event) {
        autoSlideOn ? stopAutoSlide() : false;
        var nextSlide = allBullets.indexOf(event.target);
        moveCarousel(nextSlide);
      });
    });
    navNext.addEventListener('click', function () {
      if (clicked) return;
      autoSlideOn ? stopAutoSlide() : false;
      var nextSlide = actualSlide + 1;
      actualSlide < numOfSlides - 1 ? moveCarousel(nextSlide) : resetCarousel(nextSlide);
      clicked = true;
      setTimeout(function () {
        return clicked = false;
      }, speed);
    });
    navPrev.addEventListener('click', function () {
      if (clicked) return;
      autoSlideOn ? stopAutoSlide() : false;
      var nextSlide = actualSlide - 1;
      actualSlide > 0 ? moveCarousel(nextSlide) : resetCarousel(nextSlide);
      clicked = true;
      setTimeout(function () {
        return clicked = false;
      }, speed);
    });
  };

  if (navigator.maxTouchPoints === 0) {
    slidesContainer.addEventListener('mouseenter', stopAutoSlide);
    slidesContainer.addEventListener('mouseleave', startAutoSlide);
    carousel.bulletsContainer.addEventListener('mouseenter', stopAutoSlide);
    carousel.bulletsContainer.addEventListener('mouseleave', startAutoSlide);
    slidesContainer.addEventListener('mousedown', function (e) {
      mouseTouchDown = true;
      defineX1(e);
      grab();
    });
    slidesContainer.addEventListener('mouseup', function (e) {
      defineX2(e);
      initSlideSwipe();
      mouseTouchDown = false;
      unGrab();
    });
  } else {
    slidesContainer.addEventListener('touchstart', function (e) {
      stopAutoSlide();
      mouseTouchDown = true;
      defineX1(e);
      grab();
    });
    slidesContainer.addEventListener('touchend', function (e) {
      defineX2(e);
      initSlideSwipe();
      mouseTouchDown = false;
      unGrab();
      startAutoSlide();
    });
  } //Starting main functions


  setWidthAndShow();
  createBullets(numOfSlides);
  listenNavArrows();
  duplicate();
  startAutoSlide();
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map