/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/picturamafounder.otf */ "./src/fonts/picturamafounder.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/coolvetica.otf */ "./src/fonts/coolvetica.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/restaurant.jpg */ "./src/images/restaurant.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'PicturamaFounder';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
  font-family: 'Coolvetica';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

:root {
  font-family: 'Coolvetica';
  --background-main: rgba(0, 0, 0, 0.850);
  --text-main: rgb(189, 189, 189);
  --text-secondary: rgba(223, 190, 0, 0.900);
  --plates-background: rgba(189, 189, 189, 0.240);
}

body {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-attachment: fixed;
  background-size: cover;
  color: var(--text-main);
  margin: 0;
  padding: 0;
}

#content {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

header {
  display: flex;
  justify-content: center;
  padding-top: 7rem;
  width: 100%;
  background-color: var(--background-main);
}

header > h1 {
  color: var(--text-main);
  font-family: 'PicturamaFounder';
  font-size: clamp(3rem, 5vw, 8rem);
  font-weight: 100;
  margin: 0;
  padding: 0;
}

nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding-bottom: 1rem;
  border-bottom: solid 2px var(--text-main);
  width: 100%;
  background-color: var(--background-main);
}

nav > button {
  font-family: 'Coolvetica';
  font-size: 1.2rem;
  background-color:transparent;
  color: var(--text-main);
  cursor: pointer;
  border: none;
  border-bottom: solid 2px white;
  width: 100px;
  padding: 0.5rem;
  transition: 0.1s;
}

nav > button:hover {
  transform: scale(1.05);
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  gap: 35px;
  margin: 30px;
  padding: 30px;
  width: 60%;
  background-color: var(--background-main);
}

.reviews-container {
  text-align: center;
  margin: 15px;
}

.main p {
  font-size: clamp(1.2rem, 1.4vw, 2.3rem);
  font-style: italic;
  color: var(--text-secondary);
}

.main > img {
  border-radius: 100%;
  width: clamp(200px, 25%, 40%);
  height: auto;
  margin-bottom: 30px;
}

.main > h2 {
  font-size: 2rem;
  font-weight: 100;
  text-align: center;
}

.schedule-container {
  text-align: center;
}

.schedule-container > h3 {
  font-size: 2rem;
  font-weight: 200;
  font-style: italic;
  text-align: center;
}

.reservation-container,
.suggestions-container,
.address-container {
  text-align: center;
}

.reservation-container > h2,
.suggestions-container > h2,
.address-container > h2{
  text-align: center;
  font-size: clamp(1.4rem, 1.4vw, 2.6rem);
}

.breakfast1,
.breakfast2,
.lunch1,
.lunch2,
.dinner1,
.dinner2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: clamp(130px, 20vw, 230px);
  gap: 1.2rem;
  border: solid 1px var(--text-main);
  padding: 1.7rem;
  background-color: var(--plates-background);
}

.breakfast-container,
.lunch-container,
.dinner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
}

.breakfast-plates,
.lunch-plates,
.dinner-plates {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
}

.breakfast-container h3,
.lunch-container h3,
.dinner-container h3 {
  text-align: center;
  font-size: 1.5rem;
}

.breakfast-container img,
.lunch-container img,
.dinner-container img {
  border-radius: 100%;
  width: 130px;
  height: 130px;
}

.breakfast-container h4,
.lunch-container h4,
.dinner-container h4 {
  font-size: 1.6rem;
  font-weight: 200;
  margin: 0;
  padding: 0;
}

.breakfast-container p,
.lunch-container p,
.dinner-container p {
  color: var(--text-secondary);
  margin: 0;
  padding: 0;
}

.footer {
  font-size: clamp(0.8rem, 1.4vw, 1.2rem);
  border-top: solid 2px var(--text-main);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: auto 0 0 0;
  padding: 0;
  background-color: var(--background-main);
  width: 100%;
}

.active-tab {
  border-bottom: solid 2px var(--text-secondary);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,+BAA+B;EAC/B,4CAAwC;AAC1C;;AAEA;EACE,yBAAyB;EACzB,4CAAkC;AACpC;;AAEA;EACE,yBAAyB;EACzB,uCAAuC;EACvC,+BAA+B;EAC/B,0CAA0C;EAC1C,+CAA+C;AACjD;;AAEA;EACE,yDAAgD;EAChD,4BAA4B;EAC5B,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,iBAAiB;EACjB,WAAW;EACX,wCAAwC;AAC1C;;AAEA;EACE,uBAAuB;EACvB,+BAA+B;EAC/B,iCAAiC;EACjC,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,SAAS;EACT,oBAAoB;EACpB,yCAAyC;EACzC,WAAW;EACX,wCAAwC;AAC1C;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,4BAA4B;EAC5B,uBAAuB;EACvB,eAAe;EACf,YAAY;EACZ,8BAA8B;EAC9B,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,SAAS;EACT,YAAY;EACZ,aAAa;EACb,UAAU;EACV,wCAAwC;AAC1C;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,uCAAuC;EACvC,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,mBAAmB;EACnB,6BAA6B;EAC7B,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;;;EAGE,kBAAkB;AACpB;;AAEA;;;EAGE,kBAAkB;EAClB,uCAAuC;AACzC;;AAEA;;;;;;EAME,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,gCAAgC;EAChC,WAAW;EACX,kCAAkC;EAClC,eAAe;EACf,0CAA0C;AAC5C;;AAEA;;;EAGE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,WAAW;AACb;;AAEA;;;EAGE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,SAAS;AACX;;AAEA;;;EAGE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;;;EAGE,mBAAmB;EACnB,YAAY;EACZ,aAAa;AACf;;AAEA;;;EAGE,iBAAiB;EACjB,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA;;;EAGE,4BAA4B;EAC5B,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,uCAAuC;EACvC,sCAAsC;EACtC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;EACR,kBAAkB;EAClB,UAAU;EACV,wCAAwC;EACxC,WAAW;AACb;;AAEA;EACE,8CAA8C;AAChD","sourcesContent":["@font-face {\n  font-family: 'PicturamaFounder';\n  src: url('./fonts/picturamafounder.otf');\n}\n\n@font-face {\n  font-family: 'Coolvetica';\n  src: url('./fonts/coolvetica.otf');\n}\n\n:root {\n  font-family: 'Coolvetica';\n  --background-main: rgba(0, 0, 0, 0.850);\n  --text-main: rgb(189, 189, 189);\n  --text-secondary: rgba(223, 190, 0, 0.900);\n  --plates-background: rgba(189, 189, 189, 0.240);\n}\n\nbody {\n  background-image: url('./images/restaurant.jpg');\n  background-attachment: fixed;\n  background-size: cover;\n  color: var(--text-main);\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 100vh;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  padding-top: 7rem;\n  width: 100%;\n  background-color: var(--background-main);\n}\n\nheader > h1 {\n  color: var(--text-main);\n  font-family: 'PicturamaFounder';\n  font-size: clamp(3rem, 5vw, 8rem);\n  font-weight: 100;\n  margin: 0;\n  padding: 0;\n}\n\nnav {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: solid 2px var(--text-main);\n  width: 100%;\n  background-color: var(--background-main);\n}\n\nnav > button {\n  font-family: 'Coolvetica';\n  font-size: 1.2rem;\n  background-color:transparent;\n  color: var(--text-main);\n  cursor: pointer;\n  border: none;\n  border-bottom: solid 2px white;\n  width: 100px;\n  padding: 0.5rem;\n  transition: 0.1s;\n}\n\nnav > button:hover {\n  transform: scale(1.05);\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-grow: 1;\n  gap: 35px;\n  margin: 30px;\n  padding: 30px;\n  width: 60%;\n  background-color: var(--background-main);\n}\n\n.reviews-container {\n  text-align: center;\n  margin: 15px;\n}\n\n.main p {\n  font-size: clamp(1.2rem, 1.4vw, 2.3rem);\n  font-style: italic;\n  color: var(--text-secondary);\n}\n\n.main > img {\n  border-radius: 100%;\n  width: clamp(200px, 25%, 40%);\n  height: auto;\n  margin-bottom: 30px;\n}\n\n.main > h2 {\n  font-size: 2rem;\n  font-weight: 100;\n  text-align: center;\n}\n\n.schedule-container {\n  text-align: center;\n}\n\n.schedule-container > h3 {\n  font-size: 2rem;\n  font-weight: 200;\n  font-style: italic;\n  text-align: center;\n}\n\n.reservation-container,\n.suggestions-container,\n.address-container {\n  text-align: center;\n}\n\n.reservation-container > h2,\n.suggestions-container > h2,\n.address-container > h2{\n  text-align: center;\n  font-size: clamp(1.4rem, 1.4vw, 2.6rem);\n}\n\n.breakfast1,\n.breakfast2,\n.lunch1,\n.lunch2,\n.dinner1,\n.dinner2 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: clamp(130px, 20vw, 230px);\n  gap: 1.2rem;\n  border: solid 1px var(--text-main);\n  padding: 1.7rem;\n  background-color: var(--plates-background);\n}\n\n.breakfast-container,\n.lunch-container,\n.dinner-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n  width: 100%;\n}\n\n.breakfast-plates,\n.lunch-plates,\n.dinner-plates {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 5rem;\n}\n\n.breakfast-container h3,\n.lunch-container h3,\n.dinner-container h3 {\n  text-align: center;\n  font-size: 1.5rem;\n}\n\n.breakfast-container img,\n.lunch-container img,\n.dinner-container img {\n  border-radius: 100%;\n  width: 130px;\n  height: 130px;\n}\n\n.breakfast-container h4,\n.lunch-container h4,\n.dinner-container h4 {\n  font-size: 1.6rem;\n  font-weight: 200;\n  margin: 0;\n  padding: 0;\n}\n\n.breakfast-container p,\n.lunch-container p,\n.dinner-container p {\n  color: var(--text-secondary);\n  margin: 0;\n  padding: 0;\n}\n\n.footer {\n  font-size: clamp(0.8rem, 1.4vw, 1.2rem);\n  border-top: solid 2px var(--text-main);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin: auto 0 0 0;\n  padding: 0;\n  background-color: var(--background-main);\n  width: 100%;\n}\n\n.active-tab {\n  border-bottom: solid 2px var(--text-secondary);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMainAbout)
/* harmony export */ });
/* harmony import */ var _src_images_plates_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/images/plates.jpg */ "./src/images/plates.jpg");


function buildMainAbout() {
  const mainDiv = document.querySelector('.main');

  const reviewsDiv = document.createElement('div');
  reviewsDiv.classList.add('reviews-container');

  const p1 = document.createElement('p');
  p1.textContent = 'Best restaurant in town - Food Advisor';
  const p2 = document.createElement('p');
  p2.textContent = 'The best fucking pizza I\'ve ever had - Gordon Ramsey';
  const p3 = document.createElement('p');
  p3.textContent = 'Can\'t wait to have lunch there again - Random Journalist';

  reviewsDiv.appendChild(p1);
  reviewsDiv.appendChild(p2);
  reviewsDiv.appendChild(p3);

  const HomeImg = document.createElement('img');
  HomeImg.setAttribute('src', _src_images_plates_jpg__WEBPACK_IMPORTED_MODULE_0__);
  HomeImg.setAttribute('alt', 'Ursonesca Restaurant');

  mainDiv.appendChild(reviewsDiv);
  mainDiv.appendChild(HomeImg);

  return mainDiv;
}

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMainContact)
/* harmony export */ });
function buildMainContact() {
  const mainDiv = document.querySelector('.main');

  const reservationDiv = document.createElement('div');
  reservationDiv.classList.add('reservation-container');

  const reservationH2 = document.createElement('h2');
  reservationH2.textContent = 'RESERVATIONS';

  const reservationP = document.createElement('p');
  reservationP.textContent = '+55 (19)12345-6789 - Josh';

  reservationDiv.appendChild(reservationH2);
  reservationDiv.appendChild(reservationP);

  const suggestionsDiv = document.createElement('div');
  suggestionsDiv.classList.add('suggestions-container');

  const suggestionsH2 = document.createElement('h2');
  suggestionsH2.textContent = 'SUGGESTIONS';

  const suggestionsP = document.createElement('p');
  suggestionsP.textContent = 'ursonesca@somewhere.com - Veronica';

  suggestionsDiv.appendChild(suggestionsH2);
  suggestionsDiv.appendChild(suggestionsP);

  const addressDiv = document.createElement('div');
  addressDiv.classList.add('address-container');

  const addressH2 = document.createElement('h2');
  addressH2.textContent = 'ADDRESS';

  const addressP = document.createElement('p');
  addressP.textContent = '5331 Rexford Court, Montgomery AL 36116'

  addressDiv.appendChild(addressH2);
  addressDiv.appendChild(addressP);

  mainDiv.appendChild(reservationDiv);
  mainDiv.appendChild(suggestionsDiv);
  mainDiv.appendChild(addressDiv);

  return mainDiv;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMainMenu)
/* harmony export */ });
/* harmony import */ var _src_images_waffles_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/images/waffles.jpg */ "./src/images/waffles.jpg");
/* harmony import */ var _src_images_pancakes_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/images/pancakes.jpg */ "./src/images/pancakes.jpg");
/* harmony import */ var _src_images_hotdog_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/images/hotdog.jpg */ "./src/images/hotdog.jpg");
/* harmony import */ var _src_images_pasta_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/images/pasta.jpg */ "./src/images/pasta.jpg");
/* harmony import */ var _src_images_pizza_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/images/pizza.jpg */ "./src/images/pizza.jpg");
/* harmony import */ var _src_images_sandwich_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/images/sandwich.jpg */ "./src/images/sandwich.jpg");







function buildMainMenu() {
  const mainDiv = document.querySelector('.main');

  const breakfastDiv = document.createElement('div');
  breakfastDiv.classList.add('breakfast-container');

  const breakfastH3 = document.createElement('h3');
  breakfastH3.textContent = 'BREAKFAST';
  breakfastDiv.appendChild(breakfastH3);

  const breakfast1Div = document.createElement('div');
  breakfast1Div.classList.add('breakfast1');

  const breakfast1Img = document.createElement('img');
  breakfast1Img.setAttribute('src', _src_images_waffles_jpg__WEBPACK_IMPORTED_MODULE_0__);
  breakfast1Img.setAttribute('alt', 'Waffles');

  const breakfast1H4 = document.createElement('h4');
  breakfast1H4.textContent = 'Waffles';
  
  const breakfast1PPrice = document.createElement('p');
  breakfast1PPrice.textContent = '$5.00';

  breakfast1Div.appendChild(breakfast1Img);
  breakfast1Div.appendChild(breakfast1H4);
  breakfast1Div.appendChild(breakfast1PPrice);

  const breakfast2Div = document.createElement('div');
  breakfast2Div.classList.add('breakfast2');

  const breakfast2Img = document.createElement('img');
  breakfast2Img.setAttribute('src', _src_images_pancakes_jpg__WEBPACK_IMPORTED_MODULE_1__);
  breakfast2Img.setAttribute('alt', 'Pancakes');

  const breakfast2H4 = document.createElement('h4');
  breakfast2H4.textContent = 'Pancakes';
  
  const breakfast2PPrice = document.createElement('p');
  breakfast2PPrice.textContent = '$7.00';

  breakfast2Div.appendChild(breakfast2Img);
  breakfast2Div.appendChild(breakfast2H4);
  breakfast2Div.appendChild(breakfast2PPrice);
  
  const breakfastPlatesDiv = document.createElement('div');
  breakfastPlatesDiv.classList.add('breakfast-plates');

  breakfastPlatesDiv.appendChild(breakfast1Div);
  breakfastPlatesDiv.appendChild(breakfast2Div);

  breakfastDiv.appendChild(breakfastPlatesDiv);

  const lunchDiv = document.createElement('div');
  lunchDiv.classList.add('lunch-container');

  const lunchH3 = document.createElement('h3');
  lunchH3.textContent = 'LUNCH';
  lunchDiv.appendChild(lunchH3);

  const lunch1Div = document.createElement('div');
  lunch1Div.classList.add('lunch1');

  const lunch1Img = document.createElement('img');
  lunch1Img.setAttribute('src', _src_images_hotdog_jpg__WEBPACK_IMPORTED_MODULE_2__);
  lunch1Img.setAttribute('alt', 'Hot-Dog');

  const lunch1H4 = document.createElement('h4');
  lunch1H4.textContent = 'Hot-Dog';
  
  const lunch1PPrice = document.createElement('p');
  lunch1PPrice.textContent = '$15.00';

  lunch1Div.appendChild(lunch1Img);
  lunch1Div.appendChild(lunch1H4);
  lunch1Div.appendChild(lunch1PPrice);

  const lunch2Div = document.createElement('div');
  lunch2Div.classList.add('lunch2');

  const lunch2Img = document.createElement('img');
  lunch2Img.setAttribute('src', _src_images_pasta_jpg__WEBPACK_IMPORTED_MODULE_3__);
  lunch2Img.setAttribute('alt', 'Pasta');

  const lunch2H4 = document.createElement('h4');
  lunch2H4.textContent = 'Pasta';
  
  const lunch2PPrice = document.createElement('p');
  lunch2PPrice.textContent = '$18.00';

  lunch2Div.appendChild(lunch2Img);
  lunch2Div.appendChild(lunch2H4);
  lunch2Div.appendChild(lunch2PPrice);

  const lunchPlatesDiv = document.createElement('div');
  lunchPlatesDiv.classList.add('lunch-plates');

  lunchPlatesDiv.appendChild(lunch1Div);
  lunchPlatesDiv.appendChild(lunch2Div);

  lunchDiv.appendChild(lunchPlatesDiv);

  const dinnerDiv = document.createElement('div');
  dinnerDiv.classList.add('dinner-container');

  const dinnerH3 = document.createElement('h3');
  dinnerH3.textContent = 'DINNER';
  dinnerDiv.appendChild(dinnerH3);

  const dinner1Div = document.createElement('div');
  dinner1Div.classList.add('dinner1');

  const dinner1Img = document.createElement('img');
  dinner1Img.setAttribute('src', _src_images_pizza_jpg__WEBPACK_IMPORTED_MODULE_4__);
  dinner1Img.setAttribute('alt', 'Pizza');

  const dinner1H4 = document.createElement('h4');
  dinner1H4.textContent = 'Pizza';
  
  const dinner1PPrice = document.createElement('p');
  dinner1PPrice.textContent = '$25.00';

  dinner1Div.appendChild(dinner1Img);
  dinner1Div.appendChild(dinner1H4);
  dinner1Div.appendChild(dinner1PPrice);

  const dinner2Div = document.createElement('div');
  dinner2Div.classList.add('dinner2');

  const dinner2Img = document.createElement('img');
  dinner2Img.setAttribute('src', _src_images_sandwich_jpg__WEBPACK_IMPORTED_MODULE_5__);
  dinner2Img.setAttribute('alt', 'Sandwich');

  const dinner2H4 = document.createElement('h4');
  dinner2H4.textContent = 'Sandwich';
  
  const dinner2PPrice = document.createElement('p');
  dinner2PPrice.textContent = '$24.00';

  dinner2Div.appendChild(dinner2Img);
  dinner2Div.appendChild(dinner2H4);
  dinner2Div.appendChild(dinner2PPrice);

  const dinnerPlatesDiv = document.createElement('div');
  dinnerPlatesDiv.classList.add('dinner-plates');

  dinnerPlatesDiv.appendChild(dinner1Div);
  dinnerPlatesDiv.appendChild(dinner2Div);

  dinnerDiv.appendChild(dinnerPlatesDiv);
  
  mainDiv.appendChild(breakfastDiv);
  mainDiv.appendChild(lunchDiv);
  mainDiv.appendChild(dinnerDiv);

  return mainDiv;
}

/***/ }),

/***/ "./src/fonts/coolvetica.otf":
/*!**********************************!*\
  !*** ./src/fonts/coolvetica.otf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d81d0e1fdbd5f69b232.otf";

/***/ }),

/***/ "./src/fonts/picturamafounder.otf":
/*!****************************************!*\
  !*** ./src/fonts/picturamafounder.otf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b4b70abbf577befefa9.otf";

/***/ }),

/***/ "./src/images/github.svg":
/*!*******************************!*\
  !*** ./src/images/github.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "228a8670f581bff42200.svg";

/***/ }),

/***/ "./src/images/hotdog.jpg":
/*!*******************************!*\
  !*** ./src/images/hotdog.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa3b0028ecbb531ab59b.jpg";

/***/ }),

/***/ "./src/images/pancakes.jpg":
/*!*********************************!*\
  !*** ./src/images/pancakes.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "705d8b321186e6e9a244.jpg";

/***/ }),

/***/ "./src/images/pasta.jpg":
/*!******************************!*\
  !*** ./src/images/pasta.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "06256925975339befb84.jpg";

/***/ }),

/***/ "./src/images/pizza.jpg":
/*!******************************!*\
  !*** ./src/images/pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8a98ae821349bbca73e.jpg";

/***/ }),

/***/ "./src/images/plates.jpg":
/*!*******************************!*\
  !*** ./src/images/plates.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5116fc5aa900c5375553.jpg";

/***/ }),

/***/ "./src/images/restaurant.jpg":
/*!***********************************!*\
  !*** ./src/images/restaurant.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "90e4d7c656677fad9761.jpg";

/***/ }),

/***/ "./src/images/sandwich.jpg":
/*!*********************************!*\
  !*** ./src/images/sandwich.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d0cb8352edff764c33d.jpg";

/***/ }),

/***/ "./src/images/waffles.jpg":
/*!********************************!*\
  !*** ./src/images/waffles.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d5b7578a2344183006f.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
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
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _src_images_github_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/images/github.svg */ "./src/images/github.svg");






function buildHeader() {
  const header = document.createElement('header');
  const titleH1 = document.createElement('h1');
  titleH1.textContent = 'Ursonesca';
  header.appendChild(titleH1);

  return header;
}

function buildNav() {
  const nav = document.createElement('nav');

  const aboutButton = document.createElement('button');
  aboutButton.classList.add('about-button', 'active-tab');
  aboutButton.textContent = 'ABOUT';

  const menuButton = document.createElement('button');
  menuButton.classList.add('menu-button');
  menuButton.textContent = 'MENU';

  const contactButton = document.createElement('button');
  contactButton.classList.add('contact-button');
  contactButton.textContent = 'CONTACT';

  nav.appendChild(aboutButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  aboutButton.addEventListener('click', () => {
    clearMainDiv();
    (0,_about_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    document.querySelector('.about-button').classList.add('active-tab');
    document.querySelector('.menu-button').classList.remove('active-tab');
    document.querySelector('.contact-button').classList.remove('active-tab');
  });

  menuButton.addEventListener('click', () => {
    clearMainDiv();
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    document.querySelector('.about-button').classList.remove('active-tab');
    document.querySelector('.menu-button').classList.add('active-tab');
    document.querySelector('.contact-button').classList.remove('active-tab');
  });

  contactButton.addEventListener('click', () => {
    clearMainDiv();
    (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    document.querySelector('.about-button').classList.remove('active-tab');
    document.querySelector('.menu-button').classList.remove('active-tab');
    document.querySelector('.contact-button').classList.add('active-tab');
  });

  return nav;
}

function buildMain() {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main');

  return mainDiv;
}

function buildFooter() {
  const footer = document.createElement('div');
  footer.classList.add('footer');

  const copyrightP = document.createElement('p');
  copyrightP.textContent = 'Copyright ©';

  const yearP = document.createElement('p');
  yearP.textContent = new Date().getFullYear();

  const gitHubPageP = document.createElement('p');
  gitHubPageP.textContent = 'TiagoCarvalho-dev';

  const a = document.createElement('a');
  a.setAttribute('href', 'https://github.com/TiagoCarvalho-dev');

  const img = document.createElement('img');
  img.setAttribute('src', _src_images_github_svg__WEBPACK_IMPORTED_MODULE_4__);
  img.setAttribute('alt', 'Github Logo');
  img.setAttribute('width', '30px');
  img.setAttribute('height', 'auto');

  a.appendChild(img);
  footer.appendChild(copyrightP);
  footer.appendChild(yearP);
  footer.appendChild(gitHubPageP);
  footer.appendChild(a);

  return footer;
}

function clearMainDiv() {
  const mainDiv = document.querySelector('.main');
  while(mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.lastChild);
  }
}

function buildOpeningPage() {
  const content = document.querySelector('#content');
  content.appendChild(buildHeader());
  content.appendChild(buildNav());
  content.appendChild(buildMain());
  content.appendChild((0,_about_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
  content.appendChild(buildFooter());
}

buildOpeningPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFJQUErQztBQUMzRiw0Q0FBNEMseUhBQXlDO0FBQ3JGLDRDQUE0QywySEFBMEM7QUFDdEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFB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bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvcGljdHVyYW1hZm91bmRlci5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL2Nvb2x2ZXRpY2Eub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvcmVzdGF1cmFudC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUGljdHVyYW1hRm91bmRlcic7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb29sdmV0aWNhJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbjpyb290IHtcbiAgZm9udC1mYW1pbHk6ICdDb29sdmV0aWNhJztcbiAgLS1iYWNrZ3JvdW5kLW1haW46IHJnYmEoMCwgMCwgMCwgMC44NTApO1xuICAtLXRleHQtbWFpbjogcmdiKDE4OSwgMTg5LCAxODkpO1xuICAtLXRleHQtc2Vjb25kYXJ5OiByZ2JhKDIyMywgMTkwLCAwLCAwLjkwMCk7XG4gIC0tcGxhdGVzLWJhY2tncm91bmQ6IHJnYmEoMTg5LCAxODksIDE4OSwgMC4yNDApO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjb2xvcjogdmFyKC0tdGV4dC1tYWluKTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4jY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDdyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLW1haW4pO1xufVxuXG5oZWFkZXIgPiBoMSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW1haW4pO1xuICBmb250LWZhbWlseTogJ1BpY3R1cmFtYUZvdW5kZXInO1xuICBmb250LXNpemU6IGNsYW1wKDNyZW0sIDV2dywgOHJlbSk7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAycmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLXRleHQtbWFpbik7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLW1haW4pO1xufVxuXG5uYXYgPiBidXR0b24ge1xuICBmb250LWZhbWlseTogJ0Nvb2x2ZXRpY2EnO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXRleHQtbWFpbik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggd2hpdGU7XG4gIHdpZHRoOiAxMDBweDtcbiAgcGFkZGluZzogMC41cmVtO1xuICB0cmFuc2l0aW9uOiAwLjFzO1xufVxuXG5uYXYgPiBidXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4ubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWdyb3c6IDE7XG4gIGdhcDogMzVweDtcbiAgbWFyZ2luOiAzMHB4O1xuICBwYWRkaW5nOiAzMHB4O1xuICB3aWR0aDogNjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLW1haW4pO1xufVxuXG4ucmV2aWV3cy1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuLm1haW4gcCB7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAxLjR2dywgMi4zcmVtKTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4ubWFpbiA+IGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHdpZHRoOiBjbGFtcCgyMDBweCwgMjUlLCA0MCUpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5tYWluID4gaDIge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNjaGVkdWxlLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNjaGVkdWxlLWNvbnRhaW5lciA+IGgzIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogMjAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlc2VydmF0aW9uLWNvbnRhaW5lcixcbi5zdWdnZXN0aW9ucy1jb250YWluZXIsXG4uYWRkcmVzcy1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZXNlcnZhdGlvbi1jb250YWluZXIgPiBoMixcbi5zdWdnZXN0aW9ucy1jb250YWluZXIgPiBoMixcbi5hZGRyZXNzLWNvbnRhaW5lciA+IGgye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMS40cmVtLCAxLjR2dywgMi42cmVtKTtcbn1cblxuLmJyZWFrZmFzdDEsXG4uYnJlYWtmYXN0Mixcbi5sdW5jaDEsXG4ubHVuY2gyLFxuLmRpbm5lcjEsXG4uZGlubmVyMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiBjbGFtcCgxMzBweCwgMjB2dywgMjMwcHgpO1xuICBnYXA6IDEuMnJlbTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tdGV4dC1tYWluKTtcbiAgcGFkZGluZzogMS43cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wbGF0ZXMtYmFja2dyb3VuZCk7XG59XG5cbi5icmVha2Zhc3QtY29udGFpbmVyLFxuLmx1bmNoLWNvbnRhaW5lcixcbi5kaW5uZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAycmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJyZWFrZmFzdC1wbGF0ZXMsXG4ubHVuY2gtcGxhdGVzLFxuLmRpbm5lci1wbGF0ZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDVyZW07XG59XG5cbi5icmVha2Zhc3QtY29udGFpbmVyIGgzLFxuLmx1bmNoLWNvbnRhaW5lciBoMyxcbi5kaW5uZXItY29udGFpbmVyIGgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmJyZWFrZmFzdC1jb250YWluZXIgaW1nLFxuLmx1bmNoLWNvbnRhaW5lciBpbWcsXG4uZGlubmVyLWNvbnRhaW5lciBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTMwcHg7XG59XG5cbi5icmVha2Zhc3QtY29udGFpbmVyIGg0LFxuLmx1bmNoLWNvbnRhaW5lciBoNCxcbi5kaW5uZXItY29udGFpbmVyIGg0IHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJyZWFrZmFzdC1jb250YWluZXIgcCxcbi5sdW5jaC1jb250YWluZXIgcCxcbi5kaW5uZXItY29udGFpbmVyIHAge1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5mb290ZXIge1xuICBmb250LXNpemU6IGNsYW1wKDAuOHJlbSwgMS40dncsIDEuMnJlbSk7XG4gIGJvcmRlci10b3A6IHNvbGlkIDJweCB2YXIoLS10ZXh0LW1haW4pO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIG1hcmdpbjogYXV0byAwIDAgMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1tYWluKTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hY3RpdmUtdGFiIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwrQkFBK0I7RUFDL0IsNENBQXdDO0FBQzFDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDRDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1Q0FBdUM7RUFDdkMsK0JBQStCO0VBQy9CLDBDQUEwQztFQUMxQywrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSx5REFBZ0Q7RUFDaEQsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsK0JBQStCO0VBQy9CLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIseUNBQXlDO0VBQ3pDLFdBQVc7RUFDWCx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLFVBQVU7RUFDVix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTs7O0VBR0Usa0JBQWtCO0FBQ3BCOztBQUVBOzs7RUFHRSxrQkFBa0I7RUFDbEIsdUNBQXVDO0FBQ3pDOztBQUVBOzs7Ozs7RUFNRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsMENBQTBDO0FBQzVDOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7OztFQUdFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBOzs7RUFHRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7OztFQUdFLDRCQUE0QjtFQUM1QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLHNDQUFzQztFQUN0QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix3Q0FBd0M7RUFDeEMsV0FBVztBQUNiOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdQaWN0dXJhbWFGb3VuZGVyJztcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL3BpY3R1cmFtYWZvdW5kZXIub3RmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdDb29sdmV0aWNhJztcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL2Nvb2x2ZXRpY2Eub3RmJyk7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiAnQ29vbHZldGljYSc7XFxuICAtLWJhY2tncm91bmQtbWFpbjogcmdiYSgwLCAwLCAwLCAwLjg1MCk7XFxuICAtLXRleHQtbWFpbjogcmdiKDE4OSwgMTg5LCAxODkpO1xcbiAgLS10ZXh0LXNlY29uZGFyeTogcmdiYSgyMjMsIDE5MCwgMCwgMC45MDApO1xcbiAgLS1wbGF0ZXMtYmFja2dyb3VuZDogcmdiYSgxODksIDE4OSwgMTg5LCAwLjI0MCk7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9yZXN0YXVyYW50LmpwZycpO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1tYWluKTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDdyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbWFpbik7XFxufVxcblxcbmhlYWRlciA+IGgxIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LW1haW4pO1xcbiAgZm9udC1mYW1pbHk6ICdQaWN0dXJhbWFGb3VuZGVyJztcXG4gIGZvbnQtc2l6ZTogY2xhbXAoM3JlbSwgNXZ3LCA4cmVtKTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tdGV4dC1tYWluKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1tYWluKTtcXG59XFxuXFxubmF2ID4gYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ29vbHZldGljYSc7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1tYWluKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB3aGl0ZTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxufVxcblxcbm5hdiA+IGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGdhcDogMzVweDtcXG4gIG1hcmdpbjogMzBweDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICB3aWR0aDogNjAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1tYWluKTtcXG59XFxuXFxuLnJldmlld3MtY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMTVweDtcXG59XFxuXFxuLm1haW4gcCB7XFxuICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMS40dncsIDIuM3JlbSk7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xcbn1cXG5cXG4ubWFpbiA+IGltZyB7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgd2lkdGg6IGNsYW1wKDIwMHB4LCAyNSUsIDQwJSk7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4ubWFpbiA+IGgyIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zY2hlZHVsZS1jb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2NoZWR1bGUtY29udGFpbmVyID4gaDMge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnJlc2VydmF0aW9uLWNvbnRhaW5lcixcXG4uc3VnZ2VzdGlvbnMtY29udGFpbmVyLFxcbi5hZGRyZXNzLWNvbnRhaW5lciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5yZXNlcnZhdGlvbi1jb250YWluZXIgPiBoMixcXG4uc3VnZ2VzdGlvbnMtY29udGFpbmVyID4gaDIsXFxuLmFkZHJlc3MtY29udGFpbmVyID4gaDJ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNsYW1wKDEuNHJlbSwgMS40dncsIDIuNnJlbSk7XFxufVxcblxcbi5icmVha2Zhc3QxLFxcbi5icmVha2Zhc3QyLFxcbi5sdW5jaDEsXFxuLmx1bmNoMixcXG4uZGlubmVyMSxcXG4uZGlubmVyMiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogY2xhbXAoMTMwcHgsIDIwdncsIDIzMHB4KTtcXG4gIGdhcDogMS4ycmVtO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tdGV4dC1tYWluKTtcXG4gIHBhZGRpbmc6IDEuN3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBsYXRlcy1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmJyZWFrZmFzdC1jb250YWluZXIsXFxuLmx1bmNoLWNvbnRhaW5lcixcXG4uZGlubmVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmJyZWFrZmFzdC1wbGF0ZXMsXFxuLmx1bmNoLXBsYXRlcyxcXG4uZGlubmVyLXBsYXRlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDVyZW07XFxufVxcblxcbi5icmVha2Zhc3QtY29udGFpbmVyIGgzLFxcbi5sdW5jaC1jb250YWluZXIgaDMsXFxuLmRpbm5lci1jb250YWluZXIgaDMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5icmVha2Zhc3QtY29udGFpbmVyIGltZyxcXG4ubHVuY2gtY29udGFpbmVyIGltZyxcXG4uZGlubmVyLWNvbnRhaW5lciBpbWcge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIHdpZHRoOiAxMzBweDtcXG4gIGhlaWdodDogMTMwcHg7XFxufVxcblxcbi5icmVha2Zhc3QtY29udGFpbmVyIGg0LFxcbi5sdW5jaC1jb250YWluZXIgaDQsXFxuLmRpbm5lci1jb250YWluZXIgaDQge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmJyZWFrZmFzdC1jb250YWluZXIgcCxcXG4ubHVuY2gtY29udGFpbmVyIHAsXFxuLmRpbm5lci1jb250YWluZXIgcCB7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBmb250LXNpemU6IGNsYW1wKDAuOHJlbSwgMS40dncsIDEuMnJlbSk7XFxuICBib3JkZXItdG9wOiBzb2xpZCAycHggdmFyKC0tdGV4dC1tYWluKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG4gIG1hcmdpbjogYXV0byAwIDAgMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLW1haW4pO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hY3RpdmUtdGFiIHtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHBsYXRlc0ltYWdlIGZyb20gXCIuLi9zcmMvaW1hZ2VzL3BsYXRlcy5qcGdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYWluQWJvdXQoKSB7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuXG4gIGNvbnN0IHJldmlld3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmV2aWV3c0Rpdi5jbGFzc0xpc3QuYWRkKCdyZXZpZXdzLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMS50ZXh0Q29udGVudCA9ICdCZXN0IHJlc3RhdXJhbnQgaW4gdG93biAtIEZvb2QgQWR2aXNvcic7XG4gIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMi50ZXh0Q29udGVudCA9ICdUaGUgYmVzdCBmdWNraW5nIHBpenphIElcXCd2ZSBldmVyIGhhZCAtIEdvcmRvbiBSYW1zZXknO1xuICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDMudGV4dENvbnRlbnQgPSAnQ2FuXFwndCB3YWl0IHRvIGhhdmUgbHVuY2ggdGhlcmUgYWdhaW4gLSBSYW5kb20gSm91cm5hbGlzdCc7XG5cbiAgcmV2aWV3c0Rpdi5hcHBlbmRDaGlsZChwMSk7XG4gIHJldmlld3NEaXYuYXBwZW5kQ2hpbGQocDIpO1xuICByZXZpZXdzRGl2LmFwcGVuZENoaWxkKHAzKTtcblxuICBjb25zdCBIb21lSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIEhvbWVJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBwbGF0ZXNJbWFnZSk7XG4gIEhvbWVJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnVXJzb25lc2NhIFJlc3RhdXJhbnQnKTtcblxuICBtYWluRGl2LmFwcGVuZENoaWxkKHJldmlld3NEaXYpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKEhvbWVJbWcpO1xuXG4gIHJldHVybiBtYWluRGl2O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWFpbkNvbnRhY3QoKSB7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuXG4gIGNvbnN0IHJlc2VydmF0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJlc2VydmF0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ3Jlc2VydmF0aW9uLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHJlc2VydmF0aW9uSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICByZXNlcnZhdGlvbkgyLnRleHRDb250ZW50ID0gJ1JFU0VSVkFUSU9OUyc7XG5cbiAgY29uc3QgcmVzZXJ2YXRpb25QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICByZXNlcnZhdGlvblAudGV4dENvbnRlbnQgPSAnKzU1ICgxOSkxMjM0NS02Nzg5IC0gSm9zaCc7XG5cbiAgcmVzZXJ2YXRpb25EaXYuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25IMik7XG4gIHJlc2VydmF0aW9uRGl2LmFwcGVuZENoaWxkKHJlc2VydmF0aW9uUCk7XG5cbiAgY29uc3Qgc3VnZ2VzdGlvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3VnZ2VzdGlvbnNEaXYuY2xhc3NMaXN0LmFkZCgnc3VnZ2VzdGlvbnMtY29udGFpbmVyJyk7XG5cbiAgY29uc3Qgc3VnZ2VzdGlvbnNIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHN1Z2dlc3Rpb25zSDIudGV4dENvbnRlbnQgPSAnU1VHR0VTVElPTlMnO1xuXG4gIGNvbnN0IHN1Z2dlc3Rpb25zUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgc3VnZ2VzdGlvbnNQLnRleHRDb250ZW50ID0gJ3Vyc29uZXNjYUBzb21ld2hlcmUuY29tIC0gVmVyb25pY2EnO1xuXG4gIHN1Z2dlc3Rpb25zRGl2LmFwcGVuZENoaWxkKHN1Z2dlc3Rpb25zSDIpO1xuICBzdWdnZXN0aW9uc0Rpdi5hcHBlbmRDaGlsZChzdWdnZXN0aW9uc1ApO1xuXG4gIGNvbnN0IGFkZHJlc3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWRkcmVzc0Rpdi5jbGFzc0xpc3QuYWRkKCdhZGRyZXNzLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGFkZHJlc3NIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGFkZHJlc3NIMi50ZXh0Q29udGVudCA9ICdBRERSRVNTJztcblxuICBjb25zdCBhZGRyZXNzUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYWRkcmVzc1AudGV4dENvbnRlbnQgPSAnNTMzMSBSZXhmb3JkIENvdXJ0LCBNb250Z29tZXJ5IEFMIDM2MTE2J1xuXG4gIGFkZHJlc3NEaXYuYXBwZW5kQ2hpbGQoYWRkcmVzc0gyKTtcbiAgYWRkcmVzc0Rpdi5hcHBlbmRDaGlsZChhZGRyZXNzUCk7XG5cbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbkRpdik7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQoc3VnZ2VzdGlvbnNEaXYpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKGFkZHJlc3NEaXYpO1xuXG4gIHJldHVybiBtYWluRGl2O1xufSIsImltcG9ydCB3YWZmbGVzIGZyb20gXCIuLi9zcmMvaW1hZ2VzL3dhZmZsZXMuanBnXCI7XG5pbXBvcnQgcGFuY2FrZXMgZnJvbSBcIi4uL3NyYy9pbWFnZXMvcGFuY2FrZXMuanBnXCI7XG5pbXBvcnQgaG90ZG9nIGZyb20gXCIuLi9zcmMvaW1hZ2VzL2hvdGRvZy5qcGdcIjtcbmltcG9ydCBwYXN0YSBmcm9tIFwiLi4vc3JjL2ltYWdlcy9wYXN0YS5qcGdcIjtcbmltcG9ydCBwaXp6YSBmcm9tIFwiLi4vc3JjL2ltYWdlcy9waXp6YS5qcGdcIjtcbmltcG9ydCBzYW5kd2ljaCBmcm9tIFwiLi4vc3JjL2ltYWdlcy9zYW5kd2ljaC5qcGdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYWluTWVudSgpIHtcbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG5cbiAgY29uc3QgYnJlYWtmYXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJyZWFrZmFzdERpdi5jbGFzc0xpc3QuYWRkKCdicmVha2Zhc3QtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgYnJlYWtmYXN0SDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBicmVha2Zhc3RIMy50ZXh0Q29udGVudCA9ICdCUkVBS0ZBU1QnO1xuICBicmVha2Zhc3REaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0SDMpO1xuXG4gIGNvbnN0IGJyZWFrZmFzdDFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnJlYWtmYXN0MURpdi5jbGFzc0xpc3QuYWRkKCdicmVha2Zhc3QxJyk7XG5cbiAgY29uc3QgYnJlYWtmYXN0MUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBicmVha2Zhc3QxSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgd2FmZmxlcyk7XG4gIGJyZWFrZmFzdDFJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnV2FmZmxlcycpO1xuXG4gIGNvbnN0IGJyZWFrZmFzdDFINCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGJyZWFrZmFzdDFINC50ZXh0Q29udGVudCA9ICdXYWZmbGVzJztcbiAgXG4gIGNvbnN0IGJyZWFrZmFzdDFQUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGJyZWFrZmFzdDFQUHJpY2UudGV4dENvbnRlbnQgPSAnJDUuMDAnO1xuXG4gIGJyZWFrZmFzdDFEaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0MUltZyk7XG4gIGJyZWFrZmFzdDFEaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0MUg0KTtcbiAgYnJlYWtmYXN0MURpdi5hcHBlbmRDaGlsZChicmVha2Zhc3QxUFByaWNlKTtcblxuICBjb25zdCBicmVha2Zhc3QyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJyZWFrZmFzdDJEaXYuY2xhc3NMaXN0LmFkZCgnYnJlYWtmYXN0MicpO1xuXG4gIGNvbnN0IGJyZWFrZmFzdDJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgYnJlYWtmYXN0MkltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBhbmNha2VzKTtcbiAgYnJlYWtmYXN0MkltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdQYW5jYWtlcycpO1xuXG4gIGNvbnN0IGJyZWFrZmFzdDJINCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGJyZWFrZmFzdDJINC50ZXh0Q29udGVudCA9ICdQYW5jYWtlcyc7XG4gIFxuICBjb25zdCBicmVha2Zhc3QyUFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBicmVha2Zhc3QyUFByaWNlLnRleHRDb250ZW50ID0gJyQ3LjAwJztcblxuICBicmVha2Zhc3QyRGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdDJJbWcpO1xuICBicmVha2Zhc3QyRGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdDJINCk7XG4gIGJyZWFrZmFzdDJEaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0MlBQcmljZSk7XG4gIFxuICBjb25zdCBicmVha2Zhc3RQbGF0ZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnJlYWtmYXN0UGxhdGVzRGl2LmNsYXNzTGlzdC5hZGQoJ2JyZWFrZmFzdC1wbGF0ZXMnKTtcblxuICBicmVha2Zhc3RQbGF0ZXNEaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0MURpdik7XG4gIGJyZWFrZmFzdFBsYXRlc0Rpdi5hcHBlbmRDaGlsZChicmVha2Zhc3QyRGl2KTtcblxuICBicmVha2Zhc3REaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0UGxhdGVzRGl2KTtcblxuICBjb25zdCBsdW5jaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsdW5jaERpdi5jbGFzc0xpc3QuYWRkKCdsdW5jaC1jb250YWluZXInKTtcblxuICBjb25zdCBsdW5jaEgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgbHVuY2hIMy50ZXh0Q29udGVudCA9ICdMVU5DSCc7XG4gIGx1bmNoRGl2LmFwcGVuZENoaWxkKGx1bmNoSDMpO1xuXG4gIGNvbnN0IGx1bmNoMURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsdW5jaDFEaXYuY2xhc3NMaXN0LmFkZCgnbHVuY2gxJyk7XG5cbiAgY29uc3QgbHVuY2gxSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGx1bmNoMUltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGhvdGRvZyk7XG4gIGx1bmNoMUltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdIb3QtRG9nJyk7XG5cbiAgY29uc3QgbHVuY2gxSDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBsdW5jaDFINC50ZXh0Q29udGVudCA9ICdIb3QtRG9nJztcbiAgXG4gIGNvbnN0IGx1bmNoMVBQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbHVuY2gxUFByaWNlLnRleHRDb250ZW50ID0gJyQxNS4wMCc7XG5cbiAgbHVuY2gxRGl2LmFwcGVuZENoaWxkKGx1bmNoMUltZyk7XG4gIGx1bmNoMURpdi5hcHBlbmRDaGlsZChsdW5jaDFINCk7XG4gIGx1bmNoMURpdi5hcHBlbmRDaGlsZChsdW5jaDFQUHJpY2UpO1xuXG4gIGNvbnN0IGx1bmNoMkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsdW5jaDJEaXYuY2xhc3NMaXN0LmFkZCgnbHVuY2gyJyk7XG5cbiAgY29uc3QgbHVuY2gySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGx1bmNoMkltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBhc3RhKTtcbiAgbHVuY2gySW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ1Bhc3RhJyk7XG5cbiAgY29uc3QgbHVuY2gySDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBsdW5jaDJINC50ZXh0Q29udGVudCA9ICdQYXN0YSc7XG4gIFxuICBjb25zdCBsdW5jaDJQUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGx1bmNoMlBQcmljZS50ZXh0Q29udGVudCA9ICckMTguMDAnO1xuXG4gIGx1bmNoMkRpdi5hcHBlbmRDaGlsZChsdW5jaDJJbWcpO1xuICBsdW5jaDJEaXYuYXBwZW5kQ2hpbGQobHVuY2gySDQpO1xuICBsdW5jaDJEaXYuYXBwZW5kQ2hpbGQobHVuY2gyUFByaWNlKTtcblxuICBjb25zdCBsdW5jaFBsYXRlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsdW5jaFBsYXRlc0Rpdi5jbGFzc0xpc3QuYWRkKCdsdW5jaC1wbGF0ZXMnKTtcblxuICBsdW5jaFBsYXRlc0Rpdi5hcHBlbmRDaGlsZChsdW5jaDFEaXYpO1xuICBsdW5jaFBsYXRlc0Rpdi5hcHBlbmRDaGlsZChsdW5jaDJEaXYpO1xuXG4gIGx1bmNoRGl2LmFwcGVuZENoaWxkKGx1bmNoUGxhdGVzRGl2KTtcblxuICBjb25zdCBkaW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGlubmVyRGl2LmNsYXNzTGlzdC5hZGQoJ2Rpbm5lci1jb250YWluZXInKTtcblxuICBjb25zdCBkaW5uZXJIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGRpbm5lckgzLnRleHRDb250ZW50ID0gJ0RJTk5FUic7XG4gIGRpbm5lckRpdi5hcHBlbmRDaGlsZChkaW5uZXJIMyk7XG5cbiAgY29uc3QgZGlubmVyMURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaW5uZXIxRGl2LmNsYXNzTGlzdC5hZGQoJ2Rpbm5lcjEnKTtcblxuICBjb25zdCBkaW5uZXIxSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGRpbm5lcjFJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBwaXp6YSk7XG4gIGRpbm5lcjFJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnUGl6emEnKTtcblxuICBjb25zdCBkaW5uZXIxSDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBkaW5uZXIxSDQudGV4dENvbnRlbnQgPSAnUGl6emEnO1xuICBcbiAgY29uc3QgZGlubmVyMVBQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGlubmVyMVBQcmljZS50ZXh0Q29udGVudCA9ICckMjUuMDAnO1xuXG4gIGRpbm5lcjFEaXYuYXBwZW5kQ2hpbGQoZGlubmVyMUltZyk7XG4gIGRpbm5lcjFEaXYuYXBwZW5kQ2hpbGQoZGlubmVyMUg0KTtcbiAgZGlubmVyMURpdi5hcHBlbmRDaGlsZChkaW5uZXIxUFByaWNlKTtcblxuICBjb25zdCBkaW5uZXIyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpbm5lcjJEaXYuY2xhc3NMaXN0LmFkZCgnZGlubmVyMicpO1xuXG4gIGNvbnN0IGRpbm5lcjJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZGlubmVyMkltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNhbmR3aWNoKTtcbiAgZGlubmVyMkltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdTYW5kd2ljaCcpO1xuXG4gIGNvbnN0IGRpbm5lcjJINCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGRpbm5lcjJINC50ZXh0Q29udGVudCA9ICdTYW5kd2ljaCc7XG4gIFxuICBjb25zdCBkaW5uZXIyUFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkaW5uZXIyUFByaWNlLnRleHRDb250ZW50ID0gJyQyNC4wMCc7XG5cbiAgZGlubmVyMkRpdi5hcHBlbmRDaGlsZChkaW5uZXIySW1nKTtcbiAgZGlubmVyMkRpdi5hcHBlbmRDaGlsZChkaW5uZXIySDQpO1xuICBkaW5uZXIyRGl2LmFwcGVuZENoaWxkKGRpbm5lcjJQUHJpY2UpO1xuXG4gIGNvbnN0IGRpbm5lclBsYXRlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaW5uZXJQbGF0ZXNEaXYuY2xhc3NMaXN0LmFkZCgnZGlubmVyLXBsYXRlcycpO1xuXG4gIGRpbm5lclBsYXRlc0Rpdi5hcHBlbmRDaGlsZChkaW5uZXIxRGl2KTtcbiAgZGlubmVyUGxhdGVzRGl2LmFwcGVuZENoaWxkKGRpbm5lcjJEaXYpO1xuXG4gIGRpbm5lckRpdi5hcHBlbmRDaGlsZChkaW5uZXJQbGF0ZXNEaXYpO1xuICBcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChicmVha2Zhc3REaXYpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKGx1bmNoRGl2KTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChkaW5uZXJEaXYpO1xuXG4gIHJldHVybiBtYWluRGl2O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBidWlsZE1haW5BYm91dCBmcm9tIFwiLi9hYm91dC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWFpbk1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IGJ1aWxkTWFpbkNvbnRhY3QgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuaW1wb3J0IGdpdEh1YkxvZ28gZnJvbSBcIi4uL3NyYy9pbWFnZXMvZ2l0aHViLnN2Z1wiO1xuXG5mdW5jdGlvbiBidWlsZEhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGNvbnN0IHRpdGxlSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZUgxLnRleHRDb250ZW50ID0gJ1Vyc29uZXNjYSc7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZUgxKTtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBidWlsZE5hdigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbiAgY29uc3QgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWJvdXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWJvdXQtYnV0dG9uJywgJ2FjdGl2ZS10YWInKTtcbiAgYWJvdXRCdXR0b24udGV4dENvbnRlbnQgPSAnQUJPVVQnO1xuXG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWJ1dHRvbicpO1xuICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gJ01FTlUnO1xuXG4gIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWJ1dHRvbicpO1xuICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NPTlRBQ1QnO1xuXG4gIG5hdi5hcHBlbmRDaGlsZChhYm91dEJ1dHRvbik7XG4gIG5hdi5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuXG4gIGFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFyTWFpbkRpdigpO1xuICAgIGJ1aWxkTWFpbkFib3V0KCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LWJ1dHRvbicpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS10YWInKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1idXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtdGFiJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXRhYicpO1xuICB9KTtcblxuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFyTWFpbkRpdigpO1xuICAgIGJ1aWxkTWFpbk1lbnUoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQtYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXRhYicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ1dHRvbicpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS10YWInKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1idXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtdGFiJyk7XG4gIH0pO1xuXG4gIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJNYWluRGl2KCk7XG4gICAgYnVpbGRNYWluQ29udGFjdCgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dC1idXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtdGFiJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXRhYicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LWJ1dHRvbicpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS10YWInKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG5hdjtcbn1cblxuZnVuY3Rpb24gYnVpbGRNYWluKCkge1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5EaXYuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXG4gIHJldHVybiBtYWluRGl2O1xufVxuXG5mdW5jdGlvbiBidWlsZEZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICBjb25zdCBjb3B5cmlnaHRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb3B5cmlnaHRQLnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCDCqSc7XG5cbiAgY29uc3QgeWVhclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHllYXJQLnRleHRDb250ZW50ID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXG4gIGNvbnN0IGdpdEh1YlBhZ2VQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBnaXRIdWJQYWdlUC50ZXh0Q29udGVudCA9ICdUaWFnb0NhcnZhbGhvLWRldic7XG5cbiAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL1RpYWdvQ2FydmFsaG8tZGV2Jyk7XG5cbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGdpdEh1YkxvZ28pO1xuICBpbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnR2l0aHViIExvZ28nKTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMzBweCcpO1xuICBpbWcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnYXV0bycpO1xuXG4gIGEuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodFApO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoeWVhclApO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0SHViUGFnZVApO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoYSk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gY2xlYXJNYWluRGl2KCkge1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgd2hpbGUobWFpbkRpdi5maXJzdENoaWxkKSB7XG4gICAgbWFpbkRpdi5yZW1vdmVDaGlsZChtYWluRGl2Lmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYnVpbGRPcGVuaW5nUGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRIZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGROYXYoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRNYWluKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkTWFpbkFib3V0KCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkRm9vdGVyKCkpO1xufVxuXG5idWlsZE9wZW5pbmdQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9