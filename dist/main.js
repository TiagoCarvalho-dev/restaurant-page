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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,+BAA+B;EAC/B,4CAAwC;AAC1C;;AAEA;EACE,yBAAyB;EACzB,4CAAkC;AACpC;;AAEA;EACE,yBAAyB;EACzB,uCAAuC;EACvC,+BAA+B;EAC/B,0CAA0C;EAC1C,+CAA+C;AACjD;;AAEA;EACE,yDAAgD;EAChD,4BAA4B;EAC5B,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,iBAAiB;EACjB,WAAW;EACX,wCAAwC;AAC1C;;AAEA;EACE,uBAAuB;EACvB,+BAA+B;EAC/B,iCAAiC;EACjC,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,SAAS;EACT,oBAAoB;EACpB,yCAAyC;EACzC,WAAW;EACX,wCAAwC;AAC1C;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,4BAA4B;EAC5B,uBAAuB;EACvB,eAAe;EACf,YAAY;EACZ,8BAA8B;EAC9B,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,aAAa;EACb,UAAU;EACV,wCAAwC;AAC1C;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,uCAAuC;EACvC,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,mBAAmB;EACnB,6BAA6B;EAC7B,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;;;EAGE,kBAAkB;AACpB;;AAEA;;;EAGE,kBAAkB;EAClB,uCAAuC;AACzC;;AAEA;;;;;;EAME,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,gCAAgC;EAChC,WAAW;EACX,kCAAkC;EAClC,eAAe;EACf,0CAA0C;AAC5C;;AAEA;;;EAGE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,WAAW;AACb;;AAEA;;;EAGE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,SAAS;AACX;;AAEA;;;EAGE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;;;EAGE,mBAAmB;EACnB,YAAY;EACZ,aAAa;AACf;;AAEA;;;EAGE,iBAAiB;EACjB,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA;;;EAGE,4BAA4B;EAC5B,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,uCAAuC;EACvC,sCAAsC;EACtC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;EACR,kBAAkB;EAClB,UAAU;EACV,wCAAwC;EACxC,WAAW;AACb;;AAEA;EACE,8CAA8C;AAChD","sourcesContent":["@font-face {\n  font-family: 'PicturamaFounder';\n  src: url('./fonts/picturamafounder.otf');\n}\n\n@font-face {\n  font-family: 'Coolvetica';\n  src: url('./fonts/coolvetica.otf');\n}\n\n:root {\n  font-family: 'Coolvetica';\n  --background-main: rgba(0, 0, 0, 0.850);\n  --text-main: rgb(189, 189, 189);\n  --text-secondary: rgba(223, 190, 0, 0.900);\n  --plates-background: rgba(189, 189, 189, 0.240);\n}\n\nbody {\n  background-image: url('./images/restaurant.jpg');\n  background-attachment: fixed;\n  background-size: cover;\n  color: var(--text-main);\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 100vh;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  padding-top: 7rem;\n  width: 100%;\n  background-color: var(--background-main);\n}\n\nheader > h1 {\n  color: var(--text-main);\n  font-family: 'PicturamaFounder';\n  font-size: clamp(3rem, 5vw, 8rem);\n  font-weight: 100;\n  margin: 0;\n  padding: 0;\n}\n\nnav {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: solid 2px var(--text-main);\n  width: 100%;\n  background-color: var(--background-main);\n}\n\nnav > button {\n  font-family: 'Coolvetica';\n  font-size: 1.2rem;\n  background-color:transparent;\n  color: var(--text-main);\n  cursor: pointer;\n  border: none;\n  border-bottom: solid 2px white;\n  width: 100px;\n  padding: 0.5rem;\n  transition: 0.1s;\n}\n\nnav > button:hover {\n  transform: scale(1.05);\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 35px;\n  margin: 30px;\n  padding: 30px;\n  width: 60%;\n  background-color: var(--background-main);\n}\n\n.reviews-container {\n  text-align: center;\n  margin: 15px;\n}\n\n.main p {\n  font-size: clamp(1.2rem, 1.4vw, 2.3rem);\n  font-style: italic;\n  color: var(--text-secondary);\n}\n\n.main > img {\n  border-radius: 100%;\n  width: clamp(200px, 25%, 40%);\n  height: auto;\n  margin-bottom: 30px;\n}\n\n.main > h2 {\n  font-size: 2rem;\n  font-weight: 100;\n  text-align: center;\n}\n\n.schedule-container {\n  text-align: center;\n}\n\n.schedule-container > h3 {\n  font-size: 2rem;\n  font-weight: 200;\n  font-style: italic;\n  text-align: center;\n}\n\n.reservation-container,\n.suggestions-container,\n.address-container {\n  text-align: center;\n}\n\n.reservation-container > h2,\n.suggestions-container > h2,\n.address-container > h2{\n  text-align: center;\n  font-size: clamp(1.4rem, 1.4vw, 2.6rem);\n}\n\n.breakfast1,\n.breakfast2,\n.lunch1,\n.lunch2,\n.dinner1,\n.dinner2 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: clamp(130px, 20vw, 230px);\n  gap: 1.2rem;\n  border: solid 1px var(--text-main);\n  padding: 1.7rem;\n  background-color: var(--plates-background);\n}\n\n.breakfast-container,\n.lunch-container,\n.dinner-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n  width: 100%;\n}\n\n.breakfast-plates,\n.lunch-plates,\n.dinner-plates {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 5rem;\n}\n\n.breakfast-container h3,\n.lunch-container h3,\n.dinner-container h3 {\n  text-align: center;\n  font-size: 1.5rem;\n}\n\n.breakfast-container img,\n.lunch-container img,\n.dinner-container img {\n  border-radius: 100%;\n  width: 130px;\n  height: 130px;\n}\n\n.breakfast-container h4,\n.lunch-container h4,\n.dinner-container h4 {\n  font-size: 1.6rem;\n  font-weight: 200;\n  margin: 0;\n  padding: 0;\n}\n\n.breakfast-container p,\n.lunch-container p,\n.dinner-container p {\n  color: var(--text-secondary);\n  margin: 0;\n  padding: 0;\n}\n\n.footer {\n  font-size: clamp(0.8rem, 1.4vw, 1.2rem);\n  border-top: solid 2px var(--text-main);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin: auto 0 0 0;\n  padding: 0;\n  background-color: var(--background-main);\n  width: 100%;\n}\n\n.active-tab {\n  border-bottom: solid 2px var(--text-secondary);\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFJQUErQztBQUMzRiw0Q0FBNEMseUhBQXlDO0FBQ3JGLDRDQUE0QywySEFBMEM7QUFDdEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FB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QUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNtQjtBQUNGO0FBQ007QUFDTTs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHFEQUFjO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUksb0RBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBSSx1REFBZ0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1EQUFVO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscURBQWM7QUFDcEM7QUFDQTs7QUFFQSxtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9waWN0dXJhbWFmb3VuZGVyLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvY29vbHZldGljYS5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9yZXN0YXVyYW50LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdQaWN0dXJhbWFGb3VuZGVyJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0Nvb2x2ZXRpY2EnO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuOnJvb3Qge1xuICBmb250LWZhbWlseTogJ0Nvb2x2ZXRpY2EnO1xuICAtLWJhY2tncm91bmQtbWFpbjogcmdiYSgwLCAwLCAwLCAwLjg1MCk7XG4gIC0tdGV4dC1tYWluOiByZ2IoMTg5LCAxODksIDE4OSk7XG4gIC0tdGV4dC1zZWNvbmRhcnk6IHJnYmEoMjIzLCAxOTAsIDAsIDAuOTAwKTtcbiAgLS1wbGF0ZXMtYmFja2dyb3VuZDogcmdiYSgxODksIDE4OSwgMTg5LCAwLjI0MCk7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW1haW4pO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbiNjb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogN3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbWFpbik7XG59XG5cbmhlYWRlciA+IGgxIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbWFpbik7XG4gIGZvbnQtZmFtaWx5OiAnUGljdHVyYW1hRm91bmRlcic7XG4gIGZvbnQtc2l6ZTogY2xhbXAoM3JlbSwgNXZ3LCA4cmVtKTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDJyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tdGV4dC1tYWluKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbWFpbik7XG59XG5cbm5hdiA+IGJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiAnQ29vbHZldGljYSc7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tdGV4dC1tYWluKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB3aGl0ZTtcbiAgd2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIHRyYW5zaXRpb246IDAuMXM7XG59XG5cbm5hdiA+IGJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAzNXB4O1xuICBtYXJnaW46IDMwcHg7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHdpZHRoOiA2MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbWFpbik7XG59XG5cbi5yZXZpZXdzLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG4ubWFpbiBwIHtcbiAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDEuNHZ3LCAyLjNyZW0pO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi5tYWluID4gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgd2lkdGg6IGNsYW1wKDIwMHB4LCAyNSUsIDQwJSk7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLm1haW4gPiBoMiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2NoZWR1bGUtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2NoZWR1bGUtY29udGFpbmVyID4gaDMge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmVzZXJ2YXRpb24tY29udGFpbmVyLFxuLnN1Z2dlc3Rpb25zLWNvbnRhaW5lcixcbi5hZGRyZXNzLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlc2VydmF0aW9uLWNvbnRhaW5lciA+IGgyLFxuLnN1Z2dlc3Rpb25zLWNvbnRhaW5lciA+IGgyLFxuLmFkZHJlc3MtY29udGFpbmVyID4gaDJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiBjbGFtcCgxLjRyZW0sIDEuNHZ3LCAyLjZyZW0pO1xufVxuXG4uYnJlYWtmYXN0MSxcbi5icmVha2Zhc3QyLFxuLmx1bmNoMSxcbi5sdW5jaDIsXG4uZGlubmVyMSxcbi5kaW5uZXIyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IGNsYW1wKDEzMHB4LCAyMHZ3LCAyMzBweCk7XG4gIGdhcDogMS4ycmVtO1xuICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS10ZXh0LW1haW4pO1xuICBwYWRkaW5nOiAxLjdyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBsYXRlcy1iYWNrZ3JvdW5kKTtcbn1cblxuLmJyZWFrZmFzdC1jb250YWluZXIsXG4ubHVuY2gtY29udGFpbmVyLFxuLmRpbm5lci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnJlYWtmYXN0LXBsYXRlcyxcbi5sdW5jaC1wbGF0ZXMsXG4uZGlubmVyLXBsYXRlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNXJlbTtcbn1cblxuLmJyZWFrZmFzdC1jb250YWluZXIgaDMsXG4ubHVuY2gtY29udGFpbmVyIGgzLFxuLmRpbm5lci1jb250YWluZXIgaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uYnJlYWtmYXN0LWNvbnRhaW5lciBpbWcsXG4ubHVuY2gtY29udGFpbmVyIGltZyxcbi5kaW5uZXItY29udGFpbmVyIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbn1cblxuLmJyZWFrZmFzdC1jb250YWluZXIgaDQsXG4ubHVuY2gtY29udGFpbmVyIGg0LFxuLmRpbm5lci1jb250YWluZXIgaDQge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYnJlYWtmYXN0LWNvbnRhaW5lciBwLFxuLmx1bmNoLWNvbnRhaW5lciBwLFxuLmRpbm5lci1jb250YWluZXIgcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmZvb3RlciB7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMC44cmVtLCAxLjR2dywgMS4ycmVtKTtcbiAgYm9yZGVyLXRvcDogc29saWQgMnB4IHZhcigtLXRleHQtbWFpbik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luOiBhdXRvIDAgMCAwO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLW1haW4pO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFjdGl2ZS10YWIge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLCtCQUErQjtFQUMvQiw0Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNENBQWtDO0FBQ3BDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVDQUF1QztFQUN2QywrQkFBK0I7RUFDL0IsMENBQTBDO0VBQzFDLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLHlEQUFnRDtFQUNoRCw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsV0FBVztFQUNYLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QiwrQkFBK0I7RUFDL0IsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsU0FBUztFQUNULG9CQUFvQjtFQUNwQix5Q0FBeUM7RUFDekMsV0FBVztFQUNYLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLFVBQVU7RUFDVix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTs7O0VBR0Usa0JBQWtCO0FBQ3BCOztBQUVBOzs7RUFHRSxrQkFBa0I7RUFDbEIsdUNBQXVDO0FBQ3pDOztBQUVBOzs7Ozs7RUFNRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsMENBQTBDO0FBQzVDOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7OztFQUdFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBOzs7RUFHRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7OztFQUdFLDRCQUE0QjtFQUM1QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLHNDQUFzQztFQUN0QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix3Q0FBd0M7RUFDeEMsV0FBVztBQUNiOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdQaWN0dXJhbWFGb3VuZGVyJztcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL3BpY3R1cmFtYWZvdW5kZXIub3RmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdDb29sdmV0aWNhJztcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL2Nvb2x2ZXRpY2Eub3RmJyk7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiAnQ29vbHZldGljYSc7XFxuICAtLWJhY2tncm91bmQtbWFpbjogcmdiYSgwLCAwLCAwLCAwLjg1MCk7XFxuICAtLXRleHQtbWFpbjogcmdiKDE4OSwgMTg5LCAxODkpO1xcbiAgLS10ZXh0LXNlY29uZGFyeTogcmdiYSgyMjMsIDE5MCwgMCwgMC45MDApO1xcbiAgLS1wbGF0ZXMtYmFja2dyb3VuZDogcmdiYSgxODksIDE4OSwgMTg5LCAwLjI0MCk7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9yZXN0YXVyYW50LmpwZycpO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1tYWluKTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDdyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbWFpbik7XFxufVxcblxcbmhlYWRlciA+IGgxIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LW1haW4pO1xcbiAgZm9udC1mYW1pbHk6ICdQaWN0dXJhbWFGb3VuZGVyJztcXG4gIGZvbnQtc2l6ZTogY2xhbXAoM3JlbSwgNXZ3LCA4cmVtKTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tdGV4dC1tYWluKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1tYWluKTtcXG59XFxuXFxubmF2ID4gYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ29vbHZldGljYSc7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1tYWluKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB3aGl0ZTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxufVxcblxcbm5hdiA+IGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDM1cHg7XFxuICBtYXJnaW46IDMwcHg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgd2lkdGg6IDYwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbWFpbik7XFxufVxcblxcbi5yZXZpZXdzLWNvbnRhaW5lciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDE1cHg7XFxufVxcblxcbi5tYWluIHAge1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDEuNHZ3LCAyLjNyZW0pO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcXG59XFxuXFxuLm1haW4gPiBpbWcge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIHdpZHRoOiBjbGFtcCgyMDBweCwgMjUlLCA0MCUpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLm1haW4gPiBoMiB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2NoZWR1bGUtY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNjaGVkdWxlLWNvbnRhaW5lciA+IGgzIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5yZXNlcnZhdGlvbi1jb250YWluZXIsXFxuLnN1Z2dlc3Rpb25zLWNvbnRhaW5lcixcXG4uYWRkcmVzcy1jb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucmVzZXJ2YXRpb24tY29udGFpbmVyID4gaDIsXFxuLnN1Z2dlc3Rpb25zLWNvbnRhaW5lciA+IGgyLFxcbi5hZGRyZXNzLWNvbnRhaW5lciA+IGgye1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjRyZW0sIDEuNHZ3LCAyLjZyZW0pO1xcbn1cXG5cXG4uYnJlYWtmYXN0MSxcXG4uYnJlYWtmYXN0MixcXG4ubHVuY2gxLFxcbi5sdW5jaDIsXFxuLmRpbm5lcjEsXFxuLmRpbm5lcjIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IGNsYW1wKDEzMHB4LCAyMHZ3LCAyMzBweCk7XFxuICBnYXA6IDEuMnJlbTtcXG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLXRleHQtbWFpbik7XFxuICBwYWRkaW5nOiAxLjdyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wbGF0ZXMtYmFja2dyb3VuZCk7XFxufVxcblxcbi5icmVha2Zhc3QtY29udGFpbmVyLFxcbi5sdW5jaC1jb250YWluZXIsXFxuLmRpbm5lci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5icmVha2Zhc3QtcGxhdGVzLFxcbi5sdW5jaC1wbGF0ZXMsXFxuLmRpbm5lci1wbGF0ZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cmVtO1xcbn1cXG5cXG4uYnJlYWtmYXN0LWNvbnRhaW5lciBoMyxcXG4ubHVuY2gtY29udGFpbmVyIGgzLFxcbi5kaW5uZXItY29udGFpbmVyIGgzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uYnJlYWtmYXN0LWNvbnRhaW5lciBpbWcsXFxuLmx1bmNoLWNvbnRhaW5lciBpbWcsXFxuLmRpbm5lci1jb250YWluZXIgaW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICB3aWR0aDogMTMwcHg7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbn1cXG5cXG4uYnJlYWtmYXN0LWNvbnRhaW5lciBoNCxcXG4ubHVuY2gtY29udGFpbmVyIGg0LFxcbi5kaW5uZXItY29udGFpbmVyIGg0IHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5icmVha2Zhc3QtY29udGFpbmVyIHAsXFxuLmx1bmNoLWNvbnRhaW5lciBwLFxcbi5kaW5uZXItY29udGFpbmVyIHAge1xcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZm9udC1zaXplOiBjbGFtcCgwLjhyZW0sIDEuNHZ3LCAxLjJyZW0pO1xcbiAgYm9yZGVyLXRvcDogc29saWQgMnB4IHZhcigtLXRleHQtbWFpbik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuICBtYXJnaW46IGF1dG8gMCAwIDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1tYWluKTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWN0aXZlLXRhYiB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwbGF0ZXNJbWFnZSBmcm9tIFwiLi4vc3JjL2ltYWdlcy9wbGF0ZXMuanBnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWFpbkFib3V0KCkge1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcblxuICBjb25zdCByZXZpZXdzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJldmlld3NEaXYuY2xhc3NMaXN0LmFkZCgncmV2aWV3cy1jb250YWluZXInKTtcblxuICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDEudGV4dENvbnRlbnQgPSAnQmVzdCByZXN0YXVyYW50IGluIHRvd24gLSBGb29kIEFkdmlzb3InO1xuICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDIudGV4dENvbnRlbnQgPSAnVGhlIGJlc3QgZnVja2luZyBwaXp6YSBJXFwndmUgZXZlciBoYWQgLSBHb3Jkb24gUmFtc2V5JztcbiAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAzLnRleHRDb250ZW50ID0gJ0NhblxcJ3Qgd2FpdCB0byBoYXZlIGx1bmNoIHRoZXJlIGFnYWluIC0gUmFuZG9tIEpvdXJuYWxpc3QnO1xuXG4gIHJldmlld3NEaXYuYXBwZW5kQ2hpbGQocDEpO1xuICByZXZpZXdzRGl2LmFwcGVuZENoaWxkKHAyKTtcbiAgcmV2aWV3c0Rpdi5hcHBlbmRDaGlsZChwMyk7XG5cbiAgY29uc3QgSG9tZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBIb21lSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgcGxhdGVzSW1hZ2UpO1xuICBIb21lSW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ1Vyc29uZXNjYSBSZXN0YXVyYW50Jyk7XG5cbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChyZXZpZXdzRGl2KTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChIb21lSW1nKTtcblxuICByZXR1cm4gbWFpbkRpdjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1haW5Db250YWN0KCkge1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcblxuICBjb25zdCByZXNlcnZhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByZXNlcnZhdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdyZXNlcnZhdGlvbi1jb250YWluZXInKTtcblxuICBjb25zdCByZXNlcnZhdGlvbkgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgcmVzZXJ2YXRpb25IMi50ZXh0Q29udGVudCA9ICdSRVNFUlZBVElPTlMnO1xuXG4gIGNvbnN0IHJlc2VydmF0aW9uUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcmVzZXJ2YXRpb25QLnRleHRDb250ZW50ID0gJys1NSAoMTkpMTIzNDUtNjc4OSAtIEpvc2gnO1xuXG4gIHJlc2VydmF0aW9uRGl2LmFwcGVuZENoaWxkKHJlc2VydmF0aW9uSDIpO1xuICByZXNlcnZhdGlvbkRpdi5hcHBlbmRDaGlsZChyZXNlcnZhdGlvblApO1xuXG4gIGNvbnN0IHN1Z2dlc3Rpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHN1Z2dlc3Rpb25zRGl2LmNsYXNzTGlzdC5hZGQoJ3N1Z2dlc3Rpb25zLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHN1Z2dlc3Rpb25zSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBzdWdnZXN0aW9uc0gyLnRleHRDb250ZW50ID0gJ1NVR0dFU1RJT05TJztcblxuICBjb25zdCBzdWdnZXN0aW9uc1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHN1Z2dlc3Rpb25zUC50ZXh0Q29udGVudCA9ICd1cnNvbmVzY2FAc29tZXdoZXJlLmNvbSAtIFZlcm9uaWNhJztcblxuICBzdWdnZXN0aW9uc0Rpdi5hcHBlbmRDaGlsZChzdWdnZXN0aW9uc0gyKTtcbiAgc3VnZ2VzdGlvbnNEaXYuYXBwZW5kQ2hpbGQoc3VnZ2VzdGlvbnNQKTtcblxuICBjb25zdCBhZGRyZXNzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFkZHJlc3NEaXYuY2xhc3NMaXN0LmFkZCgnYWRkcmVzcy1jb250YWluZXInKTtcblxuICBjb25zdCBhZGRyZXNzSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBhZGRyZXNzSDIudGV4dENvbnRlbnQgPSAnQUREUkVTUyc7XG5cbiAgY29uc3QgYWRkcmVzc1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFkZHJlc3NQLnRleHRDb250ZW50ID0gJzUzMzEgUmV4Zm9yZCBDb3VydCwgTW9udGdvbWVyeSBBTCAzNjExNidcblxuICBhZGRyZXNzRGl2LmFwcGVuZENoaWxkKGFkZHJlc3NIMik7XG4gIGFkZHJlc3NEaXYuYXBwZW5kQ2hpbGQoYWRkcmVzc1ApO1xuXG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25EaXYpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKHN1Z2dlc3Rpb25zRGl2KTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChhZGRyZXNzRGl2KTtcblxuICByZXR1cm4gbWFpbkRpdjtcbn0iLCJpbXBvcnQgd2FmZmxlcyBmcm9tIFwiLi4vc3JjL2ltYWdlcy93YWZmbGVzLmpwZ1wiO1xuaW1wb3J0IHBhbmNha2VzIGZyb20gXCIuLi9zcmMvaW1hZ2VzL3BhbmNha2VzLmpwZ1wiO1xuaW1wb3J0IGhvdGRvZyBmcm9tIFwiLi4vc3JjL2ltYWdlcy9ob3Rkb2cuanBnXCI7XG5pbXBvcnQgcGFzdGEgZnJvbSBcIi4uL3NyYy9pbWFnZXMvcGFzdGEuanBnXCI7XG5pbXBvcnQgcGl6emEgZnJvbSBcIi4uL3NyYy9pbWFnZXMvcGl6emEuanBnXCI7XG5pbXBvcnQgc2FuZHdpY2ggZnJvbSBcIi4uL3NyYy9pbWFnZXMvc2FuZHdpY2guanBnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWFpbk1lbnUoKSB7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuXG4gIGNvbnN0IGJyZWFrZmFzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBicmVha2Zhc3REaXYuY2xhc3NMaXN0LmFkZCgnYnJlYWtmYXN0LWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGJyZWFrZmFzdEgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgYnJlYWtmYXN0SDMudGV4dENvbnRlbnQgPSAnQlJFQUtGQVNUJztcbiAgYnJlYWtmYXN0RGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdEgzKTtcblxuICBjb25zdCBicmVha2Zhc3QxRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJyZWFrZmFzdDFEaXYuY2xhc3NMaXN0LmFkZCgnYnJlYWtmYXN0MScpO1xuXG4gIGNvbnN0IGJyZWFrZmFzdDFJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgYnJlYWtmYXN0MUltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHdhZmZsZXMpO1xuICBicmVha2Zhc3QxSW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ1dhZmZsZXMnKTtcblxuICBjb25zdCBicmVha2Zhc3QxSDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBicmVha2Zhc3QxSDQudGV4dENvbnRlbnQgPSAnV2FmZmxlcyc7XG4gIFxuICBjb25zdCBicmVha2Zhc3QxUFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBicmVha2Zhc3QxUFByaWNlLnRleHRDb250ZW50ID0gJyQ1LjAwJztcblxuICBicmVha2Zhc3QxRGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdDFJbWcpO1xuICBicmVha2Zhc3QxRGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdDFINCk7XG4gIGJyZWFrZmFzdDFEaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0MVBQcmljZSk7XG5cbiAgY29uc3QgYnJlYWtmYXN0MkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBicmVha2Zhc3QyRGl2LmNsYXNzTGlzdC5hZGQoJ2JyZWFrZmFzdDInKTtcblxuICBjb25zdCBicmVha2Zhc3QySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGJyZWFrZmFzdDJJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBwYW5jYWtlcyk7XG4gIGJyZWFrZmFzdDJJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnUGFuY2FrZXMnKTtcblxuICBjb25zdCBicmVha2Zhc3QySDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBicmVha2Zhc3QySDQudGV4dENvbnRlbnQgPSAnUGFuY2FrZXMnO1xuICBcbiAgY29uc3QgYnJlYWtmYXN0MlBQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYnJlYWtmYXN0MlBQcmljZS50ZXh0Q29udGVudCA9ICckNy4wMCc7XG5cbiAgYnJlYWtmYXN0MkRpdi5hcHBlbmRDaGlsZChicmVha2Zhc3QySW1nKTtcbiAgYnJlYWtmYXN0MkRpdi5hcHBlbmRDaGlsZChicmVha2Zhc3QySDQpO1xuICBicmVha2Zhc3QyRGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdDJQUHJpY2UpO1xuICBcbiAgY29uc3QgYnJlYWtmYXN0UGxhdGVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJyZWFrZmFzdFBsYXRlc0Rpdi5jbGFzc0xpc3QuYWRkKCdicmVha2Zhc3QtcGxhdGVzJyk7XG5cbiAgYnJlYWtmYXN0UGxhdGVzRGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdDFEaXYpO1xuICBicmVha2Zhc3RQbGF0ZXNEaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0MkRpdik7XG5cbiAgYnJlYWtmYXN0RGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdFBsYXRlc0Rpdik7XG5cbiAgY29uc3QgbHVuY2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbHVuY2hEaXYuY2xhc3NMaXN0LmFkZCgnbHVuY2gtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgbHVuY2hIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGx1bmNoSDMudGV4dENvbnRlbnQgPSAnTFVOQ0gnO1xuICBsdW5jaERpdi5hcHBlbmRDaGlsZChsdW5jaEgzKTtcblxuICBjb25zdCBsdW5jaDFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbHVuY2gxRGl2LmNsYXNzTGlzdC5hZGQoJ2x1bmNoMScpO1xuXG4gIGNvbnN0IGx1bmNoMUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBsdW5jaDFJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBob3Rkb2cpO1xuICBsdW5jaDFJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnSG90LURvZycpO1xuXG4gIGNvbnN0IGx1bmNoMUg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgbHVuY2gxSDQudGV4dENvbnRlbnQgPSAnSG90LURvZyc7XG4gIFxuICBjb25zdCBsdW5jaDFQUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGx1bmNoMVBQcmljZS50ZXh0Q29udGVudCA9ICckMTUuMDAnO1xuXG4gIGx1bmNoMURpdi5hcHBlbmRDaGlsZChsdW5jaDFJbWcpO1xuICBsdW5jaDFEaXYuYXBwZW5kQ2hpbGQobHVuY2gxSDQpO1xuICBsdW5jaDFEaXYuYXBwZW5kQ2hpbGQobHVuY2gxUFByaWNlKTtcblxuICBjb25zdCBsdW5jaDJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbHVuY2gyRGl2LmNsYXNzTGlzdC5hZGQoJ2x1bmNoMicpO1xuXG4gIGNvbnN0IGx1bmNoMkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBsdW5jaDJJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBwYXN0YSk7XG4gIGx1bmNoMkltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdQYXN0YScpO1xuXG4gIGNvbnN0IGx1bmNoMkg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgbHVuY2gySDQudGV4dENvbnRlbnQgPSAnUGFzdGEnO1xuICBcbiAgY29uc3QgbHVuY2gyUFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsdW5jaDJQUHJpY2UudGV4dENvbnRlbnQgPSAnJDE4LjAwJztcblxuICBsdW5jaDJEaXYuYXBwZW5kQ2hpbGQobHVuY2gySW1nKTtcbiAgbHVuY2gyRGl2LmFwcGVuZENoaWxkKGx1bmNoMkg0KTtcbiAgbHVuY2gyRGl2LmFwcGVuZENoaWxkKGx1bmNoMlBQcmljZSk7XG5cbiAgY29uc3QgbHVuY2hQbGF0ZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbHVuY2hQbGF0ZXNEaXYuY2xhc3NMaXN0LmFkZCgnbHVuY2gtcGxhdGVzJyk7XG5cbiAgbHVuY2hQbGF0ZXNEaXYuYXBwZW5kQ2hpbGQobHVuY2gxRGl2KTtcbiAgbHVuY2hQbGF0ZXNEaXYuYXBwZW5kQ2hpbGQobHVuY2gyRGl2KTtcblxuICBsdW5jaERpdi5hcHBlbmRDaGlsZChsdW5jaFBsYXRlc0Rpdik7XG5cbiAgY29uc3QgZGlubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpbm5lckRpdi5jbGFzc0xpc3QuYWRkKCdkaW5uZXItY29udGFpbmVyJyk7XG5cbiAgY29uc3QgZGlubmVySDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBkaW5uZXJIMy50ZXh0Q29udGVudCA9ICdESU5ORVInO1xuICBkaW5uZXJEaXYuYXBwZW5kQ2hpbGQoZGlubmVySDMpO1xuXG4gIGNvbnN0IGRpbm5lcjFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGlubmVyMURpdi5jbGFzc0xpc3QuYWRkKCdkaW5uZXIxJyk7XG5cbiAgY29uc3QgZGlubmVyMUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBkaW5uZXIxSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgcGl6emEpO1xuICBkaW5uZXIxSW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ1BpenphJyk7XG5cbiAgY29uc3QgZGlubmVyMUg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgZGlubmVyMUg0LnRleHRDb250ZW50ID0gJ1BpenphJztcbiAgXG4gIGNvbnN0IGRpbm5lcjFQUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRpbm5lcjFQUHJpY2UudGV4dENvbnRlbnQgPSAnJDI1LjAwJztcblxuICBkaW5uZXIxRGl2LmFwcGVuZENoaWxkKGRpbm5lcjFJbWcpO1xuICBkaW5uZXIxRGl2LmFwcGVuZENoaWxkKGRpbm5lcjFINCk7XG4gIGRpbm5lcjFEaXYuYXBwZW5kQ2hpbGQoZGlubmVyMVBQcmljZSk7XG5cbiAgY29uc3QgZGlubmVyMkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaW5uZXIyRGl2LmNsYXNzTGlzdC5hZGQoJ2Rpbm5lcjInKTtcblxuICBjb25zdCBkaW5uZXIySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGRpbm5lcjJJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBzYW5kd2ljaCk7XG4gIGRpbm5lcjJJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnU2FuZHdpY2gnKTtcblxuICBjb25zdCBkaW5uZXIySDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBkaW5uZXIySDQudGV4dENvbnRlbnQgPSAnU2FuZHdpY2gnO1xuICBcbiAgY29uc3QgZGlubmVyMlBQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGlubmVyMlBQcmljZS50ZXh0Q29udGVudCA9ICckMjQuMDAnO1xuXG4gIGRpbm5lcjJEaXYuYXBwZW5kQ2hpbGQoZGlubmVyMkltZyk7XG4gIGRpbm5lcjJEaXYuYXBwZW5kQ2hpbGQoZGlubmVyMkg0KTtcbiAgZGlubmVyMkRpdi5hcHBlbmRDaGlsZChkaW5uZXIyUFByaWNlKTtcblxuICBjb25zdCBkaW5uZXJQbGF0ZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGlubmVyUGxhdGVzRGl2LmNsYXNzTGlzdC5hZGQoJ2Rpbm5lci1wbGF0ZXMnKTtcblxuICBkaW5uZXJQbGF0ZXNEaXYuYXBwZW5kQ2hpbGQoZGlubmVyMURpdik7XG4gIGRpbm5lclBsYXRlc0Rpdi5hcHBlbmRDaGlsZChkaW5uZXIyRGl2KTtcblxuICBkaW5uZXJEaXYuYXBwZW5kQ2hpbGQoZGlubmVyUGxhdGVzRGl2KTtcbiAgXG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0RGl2KTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChsdW5jaERpdik7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQoZGlubmVyRGl2KTtcblxuICByZXR1cm4gbWFpbkRpdjtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgYnVpbGRNYWluQWJvdXQgZnJvbSBcIi4vYWJvdXQuanNcIjtcbmltcG9ydCBidWlsZE1haW5NZW51IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCBidWlsZE1haW5Db250YWN0IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcbmltcG9ydCBnaXRIdWJMb2dvIGZyb20gXCIuLi9zcmMvaW1hZ2VzL2dpdGh1Yi5zdmdcIjtcblxuZnVuY3Rpb24gYnVpbGRIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBjb25zdCB0aXRsZUgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgdGl0bGVIMS50ZXh0Q29udGVudCA9ICdVcnNvbmVzY2EnO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVIMSk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gYnVpbGROYXYoKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuXG4gIGNvbnN0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFib3V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWJ1dHRvbicsICdhY3RpdmUtdGFiJyk7XG4gIGFib3V0QnV0dG9uLnRleHRDb250ZW50ID0gJ0FCT1VUJztcblxuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWVudS1idXR0b24nKTtcbiAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNRU5VJztcblxuICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1idXR0b24nKTtcbiAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDT05UQUNUJztcblxuICBuYXYuYXBwZW5kQ2hpbGQoYWJvdXRCdXR0b24pO1xuICBuYXYuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gIG5hdi5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcblxuICBhYm91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhck1haW5EaXYoKTtcbiAgICBidWlsZE1haW5BYm91dCgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dC1idXR0b24nKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtdGFiJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXRhYicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LWJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS10YWInKTtcbiAgfSk7XG5cbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhck1haW5EaXYoKTtcbiAgICBidWlsZE1haW5NZW51KCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LWJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS10YWInKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1idXR0b24nKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtdGFiJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXRhYicpO1xuICB9KTtcblxuICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFyTWFpbkRpdigpO1xuICAgIGJ1aWxkTWFpbkNvbnRhY3QoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQtYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXRhYicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS10YWInKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1idXR0b24nKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtdGFiJyk7XG4gIH0pO1xuXG4gIHJldHVybiBuYXY7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTWFpbigpIHtcbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICByZXR1cm4gbWFpbkRpdjtcbn1cblxuZnVuY3Rpb24gYnVpbGRGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgY29uc3QgY29weXJpZ2h0UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29weXJpZ2h0UC50ZXh0Q29udGVudCA9ICdDb3B5cmlnaHQgwqknO1xuXG4gIGNvbnN0IHllYXJQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB5ZWFyUC50ZXh0Q29udGVudCA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBnaXRIdWJQYWdlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZ2l0SHViUGFnZVAudGV4dENvbnRlbnQgPSAnVGlhZ29DYXJ2YWxoby1kZXYnO1xuXG4gIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGEuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9UaWFnb0NhcnZhbGhvLWRldicpO1xuXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBnaXRIdWJMb2dvKTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ0dpdGh1YiBMb2dvJyk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzMwcHgnKTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJ2F1dG8nKTtcblxuICBhLmFwcGVuZENoaWxkKGltZyk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHRQKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHllYXJQKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdEh1YlBhZ2VQKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGEpO1xuXG4gIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIGNsZWFyTWFpbkRpdigpIHtcbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gIHdoaWxlKG1haW5EaXYuZmlyc3RDaGlsZCkge1xuICAgIG1haW5EaXYucmVtb3ZlQ2hpbGQobWFpbkRpdi5sYXN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJ1aWxkT3BlbmluZ1BhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkTmF2KCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkTWFpbigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZE1haW5BYm91dCgpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZEZvb3RlcigpKTtcbn1cblxuYnVpbGRPcGVuaW5nUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==