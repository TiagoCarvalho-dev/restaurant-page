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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
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
  --background-main: rgb(13, 18, 41);
  --text-main: rgb(189, 189, 189);
  --text-secondary: rgb(80, 165, 54);
}

body {
  background-color: var(--background-main);
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
  border-bottom: solid 2px white;
  width: 100%;
}

header > button {
  background-color: var(--background-main);
  color: var(--text-main);
  border: none;
  cursor: pointer;
  font-family: 'PicturamaFounder';
  font-size: 6rem;
}

nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
}

nav > button {
  font-family: 'Coolvetica';
  font-size: 1.2rem;
  background-color: var(--background-main);
  color: var(--text-main);
  cursor: pointer;
  border: none;
  border-bottom: solid 2px white;
  width: 100px;
  padding: 0.5rem;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  margin: 30px;
}

.reviews-container {
  text-align: center;
  margin: 15px;
}

.main p {
  font-size: 1.4rem;
  font-style: italic;
  color: var(--text-main);
}

.main > img {
  border-radius: 100%;
}

.main > h2 {
  font-size: 2rem;
  font-weight: 100;
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

.breakfast1,
.breakfast2,
.lunch1,
.lunch2,
.dinner1,
.dinner2 {
  display: grid;
  grid-template-columns: 160px 5fr 1fr;
  grid-template-rows: repeat(2, 1fr);
}

.breakfast-container,
.lunch-container,
.dinner-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 2;
  border-radius: 100%;
  justify-self: center;
  align-self: center;
}

.breakfast-container h4,
.lunch-container h4,
.dinner-container h4 {
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 2;
  grid-column-end: 3;
  justify-self: start;
  align-self: end;
  font-size: 1.6rem;
  font-weight: 200;
  margin: 0;
  padding: 0;
}

.breakfast-container p:nth-child(3),
.lunch-container p:nth-child(3),
.dinner-container p:nth-child(3) {
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
  justify-self: start;
  align-self: start;
  font-size: 1.2rem;
  font-weight: 200;
  margin: 0;
  padding: 0;
}

.breakfast-container p:last-child,
.lunch-container p:last-child,
.dinner-container p:last-child {
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 3;
  grid-column-end: 4;
  justify-self: center;
  align-self: end;
  margin: 0;
  padding: 0;
}

.footer {
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
}

.active-tab {
  border-bottom: solid 2px red;
}

/* * {
  border: solid 1px red;
} */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,+BAA+B;EAC/B,4CAAwC;AAC1C;;AAEA;EACE,yBAAyB;EACzB,4CAAkC;AACpC;;AAEA;EACE,yBAAyB;EACzB,kCAAkC;EAClC,+BAA+B;EAC/B,kCAAkC;AACpC;;AAEA;EACE,wCAAwC;EACxC,uBAAuB;EACvB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,iBAAiB;EACjB,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,wCAAwC;EACxC,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,+BAA+B;EAC/B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,wCAAwC;EACxC,uBAAuB;EACvB,eAAe;EACf,YAAY;EACZ,8BAA8B;EAC9B,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;;;EAGE,kBAAkB;AACpB;;AAEA;;;;;;EAME,aAAa;EACb,oCAAoC;EACpC,kCAAkC;AACpC;;AAEA;;;EAGE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;;;EAGE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;;;EAGE,iBAAiB;EACjB,eAAe;EACf,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;;;EAGE,iBAAiB;EACjB,eAAe;EACf,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA;;;EAGE,iBAAiB;EACjB,eAAe;EACf,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA;;;EAGE,iBAAiB;EACjB,eAAe;EACf,oBAAoB;EACpB,kBAAkB;EAClB,oBAAoB;EACpB,eAAe;EACf,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,gBAAgB;AAClB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;;GAEG","sourcesContent":["@font-face {\n  font-family: 'PicturamaFounder';\n  src: url('./fonts/picturamafounder.otf');\n}\n\n@font-face {\n  font-family: 'Coolvetica';\n  src: url('./fonts/coolvetica.otf');\n}\n\n:root {\n  font-family: 'Coolvetica';\n  --background-main: rgb(13, 18, 41);\n  --text-main: rgb(189, 189, 189);\n  --text-secondary: rgb(80, 165, 54);\n}\n\nbody {\n  background-color: var(--background-main);\n  color: var(--text-main);\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 100vh;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  padding-top: 7rem;\n  border-bottom: solid 2px white;\n  width: 100%;\n}\n\nheader > button {\n  background-color: var(--background-main);\n  color: var(--text-main);\n  border: none;\n  cursor: pointer;\n  font-family: 'PicturamaFounder';\n  font-size: 6rem;\n}\n\nnav {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 2rem;\n  padding: 1rem;\n}\n\nnav > button {\n  font-family: 'Coolvetica';\n  font-size: 1.2rem;\n  background-color: var(--background-main);\n  color: var(--text-main);\n  cursor: pointer;\n  border: none;\n  border-bottom: solid 2px white;\n  width: 100px;\n  padding: 0.5rem;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 35px;\n  margin: 30px;\n}\n\n.reviews-container {\n  text-align: center;\n  margin: 15px;\n}\n\n.main p {\n  font-size: 1.4rem;\n  font-style: italic;\n  color: var(--text-main);\n}\n\n.main > img {\n  border-radius: 100%;\n}\n\n.main > h2 {\n  font-size: 2rem;\n  font-weight: 100;\n}\n\n.schedule-container {\n  text-align: center;\n}\n\n.schedule-container > h3 {\n  font-size: 2rem;\n  font-weight: 200;\n  font-style: italic;\n  text-align: center;\n}\n\n.reservation-container,\n.suggestions-container,\n.address-container {\n  text-align: center;\n}\n\n.breakfast1,\n.breakfast2,\n.lunch1,\n.lunch2,\n.dinner1,\n.dinner2 {\n  display: grid;\n  grid-template-columns: 160px 5fr 1fr;\n  grid-template-rows: repeat(2, 1fr);\n}\n\n.breakfast-container,\n.lunch-container,\n.dinner-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.breakfast-container h3,\n.lunch-container h3,\n.dinner-container h3 {\n  text-align: center;\n  font-size: 1.5rem;\n}\n\n.breakfast-container img,\n.lunch-container img,\n.dinner-container img {\n  grid-row-start: 1;\n  grid-row-end: 3;\n  grid-column-start: 1;\n  grid-column-end: 2;\n  border-radius: 100%;\n  justify-self: center;\n  align-self: center;\n}\n\n.breakfast-container h4,\n.lunch-container h4,\n.dinner-container h4 {\n  grid-row-start: 1;\n  grid-row-end: 2;\n  grid-column-start: 2;\n  grid-column-end: 3;\n  justify-self: start;\n  align-self: end;\n  font-size: 1.6rem;\n  font-weight: 200;\n  margin: 0;\n  padding: 0;\n}\n\n.breakfast-container p:nth-child(3),\n.lunch-container p:nth-child(3),\n.dinner-container p:nth-child(3) {\n  grid-row-start: 2;\n  grid-row-end: 3;\n  grid-column-start: 2;\n  grid-column-end: 3;\n  justify-self: start;\n  align-self: start;\n  font-size: 1.2rem;\n  font-weight: 200;\n  margin: 0;\n  padding: 0;\n}\n\n.breakfast-container p:last-child,\n.lunch-container p:last-child,\n.dinner-container p:last-child {\n  grid-row-start: 1;\n  grid-row-end: 2;\n  grid-column-start: 3;\n  grid-column-end: 4;\n  justify-self: center;\n  align-self: end;\n  margin: 0;\n  padding: 0;\n}\n\n.footer {\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: auto;\n}\n\n.active-tab {\n  border-bottom: solid 2px red;\n}\n\n/* * {\n  border: solid 1px red;\n} */"],"sourceRoot":""}]);
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
/* harmony export */   "default": () => (/* binding */ buildAboutPage)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


function buildMainAbout() {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main');

  const h2 = document.createElement('h2');
  h2.textContent = 'SERVING GREAT FOOD, FOR GREAT PEOPLE, SINCE 2023.';
  mainDiv.appendChild(h2);

  const scheduleDiv = document.createElement('div');
  scheduleDiv.classList.add('schedule-container');

  const hoursH3 = document.createElement('h3');
  hoursH3.textContent = 'Hours';

  const breakfastP = document.createElement('p');
  breakfastP.textContent = 'Breakfast - from 6:00AM to 9:00AM.';
  const lunchP = document.createElement('p');
  lunchP.textContent = 'Lunch - from 10:30AM to 2:00PM.';
  const dinnerP = document.createElement('p');
  dinnerP.textContent = 'Dinner - from 7:00PM to 23:30PM.';
  const weekendsP = document.createElement('p');
  weekendsP.textContent = 'Weekends - from 6:00AM to 23:30PM.';

  scheduleDiv.appendChild(hoursH3);
  scheduleDiv.appendChild(breakfastP);
  scheduleDiv.appendChild(lunchP);
  scheduleDiv.appendChild(dinnerP);
  scheduleDiv.appendChild(weekendsP);

  mainDiv.appendChild(scheduleDiv);

  return mainDiv;
}

function buildAboutPage() {
  const content = document.querySelector('#content');
  content.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.buildHeader)());
  content.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.buildNav)());
  content.appendChild(buildMainAbout());
  content.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.buildFooter)());
}

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildContactPage)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


function buildMainContact() {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main');

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

function buildContactPage() {
  const content = document.querySelector('#content');
  content.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.buildHeader)());
  content.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.buildNav)());
  content.appendChild(buildMainContact());
  content.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.buildFooter)());
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildHomePage)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


function buildMainHome() {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main');

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
  HomeImg.setAttribute('src', '../src/images/restaurant.jpg');
  HomeImg.setAttribute('alt', 'Ursonesca Restaurant');
  HomeImg.setAttribute('width', '400px');
  HomeImg.setAttribute('height', 'auto');

  mainDiv.appendChild(reviewsDiv);
  mainDiv.appendChild(HomeImg);

  return mainDiv;
}

function buildHomePage() {
  const content = document.querySelector('#content');
  content.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.buildHeader)());
  content.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.buildNav)());
  content.appendChild(buildMainHome());
  content.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.buildFooter)());
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFooter: () => (/* binding */ buildFooter),
/* harmony export */   buildHeader: () => (/* binding */ buildHeader),
/* harmony export */   buildNav: () => (/* binding */ buildNav)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");






function buildHeader() {
  const header = document.createElement('header');
  const titleButton = document.createElement('button');
  titleButton.textContent = 'Ursonesca';
  header.appendChild(titleButton);

  titleButton.addEventListener('click', () => {
    clearDOM();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    document.querySelector('.about-button').classList.remove('active-tab');
    document.querySelector('.menu-button').classList.remove('active-tab');
    document.querySelector('.contact-button').classList.remove('active-tab');
  });

  return header;
}

function buildNav() {
  const nav = document.createElement('nav');

  const aboutButton = document.createElement('button');
  aboutButton.classList.add('about-button');
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
    clearDOM();
    (0,_about_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    document.querySelector('.about-button').classList.add('active-tab');
    document.querySelector('.menu-button').classList.remove('active-tab');
    document.querySelector('.contact-button').classList.remove('active-tab');
  });

  menuButton.addEventListener('click', () => {
    clearDOM();
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    document.querySelector('.about-button').classList.remove('active-tab');
    document.querySelector('.menu-button').classList.add('active-tab');
    document.querySelector('.contact-button').classList.remove('active-tab');
  });

  contactButton.addEventListener('click', () => {
    clearDOM();
    (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
    document.querySelector('.about-button').classList.remove('active-tab');
    document.querySelector('.menu-button').classList.remove('active-tab');
    document.querySelector('.contact-button').classList.add('active-tab');
  });

  return nav;
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
  img.setAttribute('src', '../src/images/github.svg');
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

function clearDOM() {
  const content = document.querySelector('#content');
  while(content.firstChild) {
    content.removeChild(content.lastChild);
  }
}

(0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMenuPage)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


function buildMainMenu() {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main');

  const titleH2 = document.createElement('h2');
  titleH2.textContent = 'MENU';
  mainDiv.appendChild(titleH2);

  const breakfastDiv = document.createElement('div');
  breakfastDiv.classList.add('breakfast-container');

  const breakfastH3 = document.createElement('h3');
  breakfastH3.textContent = 'BREAKFAST';
  breakfastDiv.appendChild(breakfastH3);

  const breakfast1Div = document.createElement('div');
  breakfast1Div.classList.add('breakfast1');

  const breakfast1Img = document.createElement('img');
  breakfast1Img.setAttribute('src', '../src/images/waffles.jpg');
  breakfast1Img.setAttribute('alt', 'Waffles');
  breakfast1Img.setAttribute('width', '130px');
  breakfast1Img.setAttribute('height', '130px');

  const breakfast1H4 = document.createElement('h4');
  breakfast1H4.textContent = 'Waffles';

  const breakfast1PIng = document.createElement('p');
  breakfast1PIng.textContent = 'These waffles are lovely and crispy. Perfect for any day of the week!';
  
  const breakfast1PPrice = document.createElement('p');
  breakfast1PPrice.textContent = '$5.00';

  breakfast1Div.appendChild(breakfast1Img);
  breakfast1Div.appendChild(breakfast1H4);
  breakfast1Div.appendChild(breakfast1PIng);
  breakfast1Div.appendChild(breakfast1PPrice);

  const breakfast2Div = document.createElement('div');
  breakfast2Div.classList.add('breakfast2');

  const breakfast2Img = document.createElement('img');
  breakfast2Img.setAttribute('src', '../src/images/pancakes.jpg');
  breakfast2Img.setAttribute('alt', 'Pancakes');
  breakfast2Img.setAttribute('width', '130px');
  breakfast2Img.setAttribute('height', '130px');

  const breakfast2H4 = document.createElement('h4');
  breakfast2H4.textContent = 'Pancakes';

  const breakfast2PIng = document.createElement('p');
  breakfast2PIng.textContent = 'Served with butter and syrup for a perfect breakfast.';
  
  const breakfast2PPrice = document.createElement('p');
  breakfast2PPrice.textContent = '$7.00';

  breakfast2Div.appendChild(breakfast2Img);
  breakfast2Div.appendChild(breakfast2H4);
  breakfast2Div.appendChild(breakfast2PIng);
  breakfast2Div.appendChild(breakfast2PPrice);
  
  breakfastDiv.appendChild(breakfast1Div);
  breakfastDiv.appendChild(breakfast2Div);

  const lunchDiv = document.createElement('div');
  lunchDiv.classList.add('lunch-container');

  const lunchH3 = document.createElement('h3');
  lunchH3.textContent = 'LUNCH';
  lunchDiv.appendChild(lunchH3);

  const lunch1Div = document.createElement('div');
  lunch1Div.classList.add('lunch1');

  const lunch1Img = document.createElement('img');
  lunch1Img.setAttribute('src', '../src/images/hotdog.jpg');
  lunch1Img.setAttribute('alt', 'Hot-Dog');
  lunch1Img.setAttribute('width', '130px');
  lunch1Img.setAttribute('height', '130px');

  const lunch1H4 = document.createElement('h4');
  lunch1H4.textContent = 'Hot-Dog';

  const lunch1PIng = document.createElement('p');
  lunch1PIng.textContent = 'Two simple yet delicious, mashed potato free, hot-dog. Just as it was meant to be.';
  
  const lunch1PPrice = document.createElement('p');
  lunch1PPrice.textContent = '$15.00';

  lunch1Div.appendChild(lunch1Img);
  lunch1Div.appendChild(lunch1H4);
  lunch1Div.appendChild(lunch1PIng);
  lunch1Div.appendChild(lunch1PPrice);

  const lunch2Div = document.createElement('div');
  lunch2Div.classList.add('lunch2');

  const lunch2Img = document.createElement('img');
  lunch2Img.setAttribute('src', '../src/images/pasta.jpg');
  lunch2Img.setAttribute('alt', 'Pasta');
  lunch2Img.setAttribute('width', '130px');
  lunch2Img.setAttribute('height', '130px');

  const lunch2H4 = document.createElement('h4');
  lunch2H4.textContent = 'Pasta';

  const lunch2PIng = document.createElement('p');
  lunch2PIng.textContent = 'Shrimp scampi with linguine is the ultimate seafood pasta dish.';
  
  const lunch2PPrice = document.createElement('p');
  lunch2PPrice.textContent = '$Price';

  lunch2Div.appendChild(lunch2Img);
  lunch2Div.appendChild(lunch2H4);
  lunch2Div.appendChild(lunch2PIng);
  lunch2Div.appendChild(lunch2PPrice);

  lunchDiv.appendChild(lunch1Div);
  lunchDiv.appendChild(lunch2Div);

  const dinnerDiv = document.createElement('div');
  dinnerDiv.classList.add('dinner-container');

  const dinnerH3 = document.createElement('h3');
  dinnerH3.textContent = 'DINNER';
  dinnerDiv.appendChild(dinnerH3);

  const dinner1Div = document.createElement('div');
  dinner1Div.classList.add('dinner1');

  const dinner1Img = document.createElement('img');
  dinner1Img.setAttribute('src', '../src/images/pizza.jpg');
  dinner1Img.setAttribute('alt', 'Pizza');
  dinner1Img.setAttribute('width', '130px');
  dinner1Img.setAttribute('height', '130px');

  const dinner1H4 = document.createElement('h4');
  dinner1H4.textContent = 'Pizza';

  const dinner1PIng = document.createElement('p');
  dinner1PIng.textContent = 'The Ursonesca\'s signature pizza that gave us the michelin star.';
  
  const dinner1PPrice = document.createElement('p');
  dinner1PPrice.textContent = '$25.00';

  dinner1Div.appendChild(dinner1Img);
  dinner1Div.appendChild(dinner1H4);
  dinner1Div.appendChild(dinner1PIng);
  dinner1Div.appendChild(dinner1PPrice);

  const dinner2Div = document.createElement('div');
  dinner2Div.classList.add('dinner2');

  const dinner2Img = document.createElement('img');
  dinner2Img.setAttribute('src', '../src/images/sandwich.jpg');
  dinner2Img.setAttribute('alt', 'Sandwich');
  dinner2Img.setAttribute('width', '130px');
  dinner2Img.setAttribute('height', '130px');

  const dinner2H4 = document.createElement('h4');
  dinner2H4.textContent = 'Sandwich';

  const dinner2PIng = document.createElement('p');
  dinner2PIng.textContent = 'An Indiana pork tenderloin sandwich consists of bread, fried pork, lettuce, tomatoes, and basic condiments.';
  
  const dinner2PPrice = document.createElement('p');
  dinner2PPrice.textContent = '$24.00';

  dinner2Div.appendChild(dinner2Img);
  dinner2Div.appendChild(dinner2H4);
  dinner2Div.appendChild(dinner2PIng);
  dinner2Div.appendChild(dinner2PPrice);

  dinnerDiv.appendChild(dinner1Div);
  dinnerDiv.appendChild(dinner2Div);
  
  mainDiv.appendChild(breakfastDiv);
  mainDiv.appendChild(lunchDiv);
  mainDiv.appendChild(dinnerDiv);

  return mainDiv;
}

function buildMenuPage() {
  const content = document.querySelector('#content');
  content.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.buildHeader)());
  content.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.buildNav)());
  content.appendChild(buildMainMenu());
  content.appendChild((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.buildFooter)());
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFJQUErQztBQUMzRiw0Q0FBNEMseUhBQXlDO0FBQ3JGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLFNBQVMsZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxXQUFXLE1BQU0sT0FBTyxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFX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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL3BpY3R1cmFtYWZvdW5kZXIub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9jb29sdmV0aWNhLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1BpY3R1cmFtYUZvdW5kZXInO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29vbHZldGljYSc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG46cm9vdCB7XG4gIGZvbnQtZmFtaWx5OiAnQ29vbHZldGljYSc7XG4gIC0tYmFja2dyb3VuZC1tYWluOiByZ2IoMTMsIDE4LCA0MSk7XG4gIC0tdGV4dC1tYWluOiByZ2IoMTg5LCAxODksIDE4OSk7XG4gIC0tdGV4dC1zZWNvbmRhcnk6IHJnYig4MCwgMTY1LCA1NCk7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLW1haW4pO1xuICBjb2xvcjogdmFyKC0tdGV4dC1tYWluKTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4jY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDdyZW07XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmhlYWRlciA+IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbWFpbik7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW1haW4pO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdQaWN0dXJhbWFGb3VuZGVyJztcbiAgZm9udC1zaXplOiA2cmVtO1xufVxuXG5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDJyZW07XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbm5hdiA+IGJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiAnQ29vbHZldGljYSc7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLW1haW4pO1xuICBjb2xvcjogdmFyKC0tdGV4dC1tYWluKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB3aGl0ZTtcbiAgd2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAzNXB4O1xuICBtYXJnaW46IDMwcHg7XG59XG5cbi5yZXZpZXdzLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG4ubWFpbiBwIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6IHZhcigtLXRleHQtbWFpbik7XG59XG5cbi5tYWluID4gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuLm1haW4gPiBoMiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLnNjaGVkdWxlLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNjaGVkdWxlLWNvbnRhaW5lciA+IGgzIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogMjAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlc2VydmF0aW9uLWNvbnRhaW5lcixcbi5zdWdnZXN0aW9ucy1jb250YWluZXIsXG4uYWRkcmVzcy1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5icmVha2Zhc3QxLFxuLmJyZWFrZmFzdDIsXG4ubHVuY2gxLFxuLmx1bmNoMixcbi5kaW5uZXIxLFxuLmRpbm5lcjIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE2MHB4IDVmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XG59XG5cbi5icmVha2Zhc3QtY29udGFpbmVyLFxuLmx1bmNoLWNvbnRhaW5lcixcbi5kaW5uZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycmVtO1xufVxuXG4uYnJlYWtmYXN0LWNvbnRhaW5lciBoMyxcbi5sdW5jaC1jb250YWluZXIgaDMsXG4uZGlubmVyLWNvbnRhaW5lciBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5icmVha2Zhc3QtY29udGFpbmVyIGltZyxcbi5sdW5jaC1jb250YWluZXIgaW1nLFxuLmRpbm5lci1jb250YWluZXIgaW1nIHtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gIGdyaWQtcm93LWVuZDogMztcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmJyZWFrZmFzdC1jb250YWluZXIgaDQsXG4ubHVuY2gtY29udGFpbmVyIGg0LFxuLmRpbm5lci1jb250YWluZXIgaDQge1xuICBncmlkLXJvdy1zdGFydDogMTtcbiAgZ3JpZC1yb3ctZW5kOiAyO1xuICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICBhbGlnbi1zZWxmOiBlbmQ7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogMjAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5icmVha2Zhc3QtY29udGFpbmVyIHA6bnRoLWNoaWxkKDMpLFxuLmx1bmNoLWNvbnRhaW5lciBwOm50aC1jaGlsZCgzKSxcbi5kaW5uZXItY29udGFpbmVyIHA6bnRoLWNoaWxkKDMpIHtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gIGdyaWQtcm93LWVuZDogMztcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gIGdyaWQtY29sdW1uLWVuZDogMztcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogMjAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5icmVha2Zhc3QtY29udGFpbmVyIHA6bGFzdC1jaGlsZCxcbi5sdW5jaC1jb250YWluZXIgcDpsYXN0LWNoaWxkLFxuLmRpbm5lci1jb250YWluZXIgcDpsYXN0LWNoaWxkIHtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gIGdyaWQtcm93LWVuZDogMjtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XG4gIGdyaWQtY29sdW1uLWVuZDogNDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGVuZDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZm9vdGVyIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuXG4uYWN0aXZlLXRhYiB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCByZWQ7XG59XG5cbi8qICoge1xuICBib3JkZXI6IHNvbGlkIDFweCByZWQ7XG59ICovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsK0JBQStCO0VBQy9CLDRDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw0Q0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0NBQWtDO0VBQ2xDLCtCQUErQjtFQUMvQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsV0FBVztBQUNiOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtFQUNmLCtCQUErQjtFQUMvQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsd0NBQXdDO0VBQ3hDLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBOzs7RUFHRSxrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7OztFQU1FLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsa0NBQWtDO0FBQ3BDOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTs7O0VBR0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBOzs7RUFHRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7OztFQUdFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTs7O0VBR0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7O0dBRUdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1BpY3R1cmFtYUZvdW5kZXInO1xcbiAgc3JjOiB1cmwoJy4vZm9udHMvcGljdHVyYW1hZm91bmRlci5vdGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0Nvb2x2ZXRpY2EnO1xcbiAgc3JjOiB1cmwoJy4vZm9udHMvY29vbHZldGljYS5vdGYnKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6ICdDb29sdmV0aWNhJztcXG4gIC0tYmFja2dyb3VuZC1tYWluOiByZ2IoMTMsIDE4LCA0MSk7XFxuICAtLXRleHQtbWFpbjogcmdiKDE4OSwgMTg5LCAxODkpO1xcbiAgLS10ZXh0LXNlY29uZGFyeTogcmdiKDgwLCAxNjUsIDU0KTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLW1haW4pO1xcbiAgY29sb3I6IHZhcigtLXRleHQtbWFpbik7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiA3cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHdoaXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmhlYWRlciA+IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLW1haW4pO1xcbiAgY29sb3I6IHZhcigtLXRleHQtbWFpbik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogJ1BpY3R1cmFtYUZvdW5kZXInO1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxubmF2ID4gYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ29vbHZldGljYSc7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbWFpbik7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1tYWluKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB3aGl0ZTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzNXB4O1xcbiAgbWFyZ2luOiAzMHB4O1xcbn1cXG5cXG4ucmV2aWV3cy1jb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAxNXB4O1xcbn1cXG5cXG4ubWFpbiBwIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6IHZhcigtLXRleHQtbWFpbik7XFxufVxcblxcbi5tYWluID4gaW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcblxcbi5tYWluID4gaDIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuLnNjaGVkdWxlLWNvbnRhaW5lciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zY2hlZHVsZS1jb250YWluZXIgPiBoMyB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucmVzZXJ2YXRpb24tY29udGFpbmVyLFxcbi5zdWdnZXN0aW9ucy1jb250YWluZXIsXFxuLmFkZHJlc3MtY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJyZWFrZmFzdDEsXFxuLmJyZWFrZmFzdDIsXFxuLmx1bmNoMSxcXG4ubHVuY2gyLFxcbi5kaW5uZXIxLFxcbi5kaW5uZXIyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE2MHB4IDVmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbn1cXG5cXG4uYnJlYWtmYXN0LWNvbnRhaW5lcixcXG4ubHVuY2gtY29udGFpbmVyLFxcbi5kaW5uZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uYnJlYWtmYXN0LWNvbnRhaW5lciBoMyxcXG4ubHVuY2gtY29udGFpbmVyIGgzLFxcbi5kaW5uZXItY29udGFpbmVyIGgzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uYnJlYWtmYXN0LWNvbnRhaW5lciBpbWcsXFxuLmx1bmNoLWNvbnRhaW5lciBpbWcsXFxuLmRpbm5lci1jb250YWluZXIgaW1nIHtcXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5icmVha2Zhc3QtY29udGFpbmVyIGg0LFxcbi5sdW5jaC1jb250YWluZXIgaDQsXFxuLmRpbm5lci1jb250YWluZXIgaDQge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICBncmlkLXJvdy1lbmQ6IDI7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gIGdyaWQtY29sdW1uLWVuZDogMztcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYnJlYWtmYXN0LWNvbnRhaW5lciBwOm50aC1jaGlsZCgzKSxcXG4ubHVuY2gtY29udGFpbmVyIHA6bnRoLWNoaWxkKDMpLFxcbi5kaW5uZXItY29udGFpbmVyIHA6bnRoLWNoaWxkKDMpIHtcXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYnJlYWtmYXN0LWNvbnRhaW5lciBwOmxhc3QtY2hpbGQsXFxuLmx1bmNoLWNvbnRhaW5lciBwOmxhc3QtY2hpbGQsXFxuLmRpbm5lci1jb250YWluZXIgcDpsYXN0LWNoaWxkIHtcXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgZ3JpZC1yb3ctZW5kOiAyO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuLmFjdGl2ZS10YWIge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHJlZDtcXG59XFxuXFxuLyogKiB7XFxuICBib3JkZXI6IHNvbGlkIDFweCByZWQ7XFxufSAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYnVpbGRIZWFkZXIsIGJ1aWxkTmF2LCBidWlsZEZvb3RlciB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmZ1bmN0aW9uIGJ1aWxkTWFpbkFib3V0KCkge1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5EaXYuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaDIudGV4dENvbnRlbnQgPSAnU0VSVklORyBHUkVBVCBGT09ELCBGT1IgR1JFQVQgUEVPUExFLCBTSU5DRSAyMDIzLic7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQoaDIpO1xuXG4gIGNvbnN0IHNjaGVkdWxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNjaGVkdWxlRGl2LmNsYXNzTGlzdC5hZGQoJ3NjaGVkdWxlLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGhvdXJzSDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBob3Vyc0gzLnRleHRDb250ZW50ID0gJ0hvdXJzJztcblxuICBjb25zdCBicmVha2Zhc3RQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBicmVha2Zhc3RQLnRleHRDb250ZW50ID0gJ0JyZWFrZmFzdCAtIGZyb20gNjowMEFNIHRvIDk6MDBBTS4nO1xuICBjb25zdCBsdW5jaFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGx1bmNoUC50ZXh0Q29udGVudCA9ICdMdW5jaCAtIGZyb20gMTA6MzBBTSB0byAyOjAwUE0uJztcbiAgY29uc3QgZGlubmVyUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGlubmVyUC50ZXh0Q29udGVudCA9ICdEaW5uZXIgLSBmcm9tIDc6MDBQTSB0byAyMzozMFBNLic7XG4gIGNvbnN0IHdlZWtlbmRzUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgd2Vla2VuZHNQLnRleHRDb250ZW50ID0gJ1dlZWtlbmRzIC0gZnJvbSA2OjAwQU0gdG8gMjM6MzBQTS4nO1xuXG4gIHNjaGVkdWxlRGl2LmFwcGVuZENoaWxkKGhvdXJzSDMpO1xuICBzY2hlZHVsZURpdi5hcHBlbmRDaGlsZChicmVha2Zhc3RQKTtcbiAgc2NoZWR1bGVEaXYuYXBwZW5kQ2hpbGQobHVuY2hQKTtcbiAgc2NoZWR1bGVEaXYuYXBwZW5kQ2hpbGQoZGlubmVyUCk7XG4gIHNjaGVkdWxlRGl2LmFwcGVuZENoaWxkKHdlZWtlbmRzUCk7XG5cbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChzY2hlZHVsZURpdik7XG5cbiAgcmV0dXJuIG1haW5EaXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkQWJvdXRQYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZEhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZE5hdigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZE1haW5BYm91dCgpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZEZvb3RlcigpKTtcbn0iLCJpbXBvcnQgeyBidWlsZEhlYWRlciwgYnVpbGROYXYsIGJ1aWxkRm9vdGVyIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZnVuY3Rpb24gYnVpbGRNYWluQ29udGFjdCgpIHtcbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICBjb25zdCByZXNlcnZhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByZXNlcnZhdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdyZXNlcnZhdGlvbi1jb250YWluZXInKTtcblxuICBjb25zdCByZXNlcnZhdGlvbkgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgcmVzZXJ2YXRpb25IMi50ZXh0Q29udGVudCA9ICdSRVNFUlZBVElPTlMnO1xuXG4gIGNvbnN0IHJlc2VydmF0aW9uUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcmVzZXJ2YXRpb25QLnRleHRDb250ZW50ID0gJys1NSAoMTkpMTIzNDUtNjc4OSAtIEpvc2gnO1xuXG4gIHJlc2VydmF0aW9uRGl2LmFwcGVuZENoaWxkKHJlc2VydmF0aW9uSDIpO1xuICByZXNlcnZhdGlvbkRpdi5hcHBlbmRDaGlsZChyZXNlcnZhdGlvblApO1xuXG4gIGNvbnN0IHN1Z2dlc3Rpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHN1Z2dlc3Rpb25zRGl2LmNsYXNzTGlzdC5hZGQoJ3N1Z2dlc3Rpb25zLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHN1Z2dlc3Rpb25zSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBzdWdnZXN0aW9uc0gyLnRleHRDb250ZW50ID0gJ1NVR0dFU1RJT05TJztcblxuICBjb25zdCBzdWdnZXN0aW9uc1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHN1Z2dlc3Rpb25zUC50ZXh0Q29udGVudCA9ICd1cnNvbmVzY2FAc29tZXdoZXJlLmNvbSAtIFZlcm9uaWNhJztcblxuICBzdWdnZXN0aW9uc0Rpdi5hcHBlbmRDaGlsZChzdWdnZXN0aW9uc0gyKTtcbiAgc3VnZ2VzdGlvbnNEaXYuYXBwZW5kQ2hpbGQoc3VnZ2VzdGlvbnNQKTtcblxuICBjb25zdCBhZGRyZXNzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFkZHJlc3NEaXYuY2xhc3NMaXN0LmFkZCgnYWRkcmVzcy1jb250YWluZXInKTtcblxuICBjb25zdCBhZGRyZXNzSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBhZGRyZXNzSDIudGV4dENvbnRlbnQgPSAnQUREUkVTUyc7XG5cbiAgY29uc3QgYWRkcmVzc1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFkZHJlc3NQLnRleHRDb250ZW50ID0gJzUzMzEgUmV4Zm9yZCBDb3VydCwgTW9udGdvbWVyeSBBTCAzNjExNidcblxuICBhZGRyZXNzRGl2LmFwcGVuZENoaWxkKGFkZHJlc3NIMik7XG4gIGFkZHJlc3NEaXYuYXBwZW5kQ2hpbGQoYWRkcmVzc1ApO1xuXG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25EaXYpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKHN1Z2dlc3Rpb25zRGl2KTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChhZGRyZXNzRGl2KTtcblxuICByZXR1cm4gbWFpbkRpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRDb250YWN0UGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRIZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGROYXYoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRNYWluQ29udGFjdCgpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZEZvb3RlcigpKTtcbn0iLCJpbXBvcnQgeyBidWlsZEhlYWRlciwgYnVpbGROYXYsIGJ1aWxkRm9vdGVyIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZnVuY3Rpb24gYnVpbGRNYWluSG9tZSgpIHtcbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICBjb25zdCByZXZpZXdzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJldmlld3NEaXYuY2xhc3NMaXN0LmFkZCgncmV2aWV3cy1jb250YWluZXInKTtcblxuICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDEudGV4dENvbnRlbnQgPSAnQmVzdCByZXN0YXVyYW50IGluIHRvd24gLSBGb29kIEFkdmlzb3InO1xuICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDIudGV4dENvbnRlbnQgPSAnVGhlIGJlc3QgZnVja2luZyBwaXp6YSBJXFwndmUgZXZlciBoYWQgLSBHb3Jkb24gUmFtc2V5JztcbiAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAzLnRleHRDb250ZW50ID0gJ0NhblxcJ3Qgd2FpdCB0byBoYXZlIGx1bmNoIHRoZXJlIGFnYWluIC0gUmFuZG9tIEpvdXJuYWxpc3QnO1xuXG4gIHJldmlld3NEaXYuYXBwZW5kQ2hpbGQocDEpO1xuICByZXZpZXdzRGl2LmFwcGVuZENoaWxkKHAyKTtcbiAgcmV2aWV3c0Rpdi5hcHBlbmRDaGlsZChwMyk7XG5cbiAgY29uc3QgSG9tZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBIb21lSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWFnZXMvcmVzdGF1cmFudC5qcGcnKTtcbiAgSG9tZUltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdVcnNvbmVzY2EgUmVzdGF1cmFudCcpO1xuICBIb21lSW1nLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnNDAwcHgnKTtcbiAgSG9tZUltZy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICdhdXRvJyk7XG5cbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChyZXZpZXdzRGl2KTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChIb21lSW1nKTtcblxuICByZXR1cm4gbWFpbkRpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRIb21lUGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRIZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGROYXYoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRNYWluSG9tZSgpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZEZvb3RlcigpKTtcbn0iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGJ1aWxkSG9tZVBhZ2UgZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IGJ1aWxkQWJvdXRQYWdlIGZyb20gXCIuL2Fib3V0LmpzXCI7XG5pbXBvcnQgYnVpbGRNZW51UGFnZSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgYnVpbGRDb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGNvbnN0IHRpdGxlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHRpdGxlQnV0dG9uLnRleHRDb250ZW50ID0gJ1Vyc29uZXNjYSc7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZUJ1dHRvbik7XG5cbiAgdGl0bGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJET00oKTtcbiAgICBidWlsZEhvbWVQYWdlKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LWJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS10YWInKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1idXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtdGFiJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXRhYicpO1xuICB9KTtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGROYXYoKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuXG4gIGNvbnN0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFib3V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWJ1dHRvbicpO1xuICBhYm91dEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBQk9VVCc7XG5cbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnV0dG9uJyk7XG4gIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSAnTUVOVSc7XG5cbiAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtYnV0dG9uJyk7XG4gIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQ09OVEFDVCc7XG5cbiAgbmF2LmFwcGVuZENoaWxkKGFib3V0QnV0dG9uKTtcbiAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG5cbiAgYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJET00oKTtcbiAgICBidWlsZEFib3V0UGFnZSgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dC1idXR0b24nKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtdGFiJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXRhYicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LWJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS10YWInKTtcbiAgfSk7XG5cbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhckRPTSgpO1xuICAgIGJ1aWxkTWVudVBhZ2UoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQtYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXRhYicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ1dHRvbicpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS10YWInKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1idXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtdGFiJyk7XG4gIH0pO1xuXG4gIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJET00oKTtcbiAgICBidWlsZENvbnRhY3RQYWdlKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LWJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS10YWInKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1idXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtdGFiJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtYnV0dG9uJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXRhYicpO1xuICB9KTtcblxuICByZXR1cm4gbmF2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgY29uc3QgY29weXJpZ2h0UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29weXJpZ2h0UC50ZXh0Q29udGVudCA9ICdDb3B5cmlnaHQgwqknO1xuXG4gIGNvbnN0IHllYXJQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB5ZWFyUC50ZXh0Q29udGVudCA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBnaXRIdWJQYWdlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZ2l0SHViUGFnZVAudGV4dENvbnRlbnQgPSAnVGlhZ29DYXJ2YWxoby1kZXYnO1xuXG4gIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGEuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9UaWFnb0NhcnZhbGhvLWRldicpO1xuXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltYWdlcy9naXRodWIuc3ZnJyk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdHaXRodWIgTG9nbycpO1xuICBpbWcuc2V0QXR0cmlidXRlKCd3aWR0aCcsICczMHB4Jyk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICdhdXRvJyk7XG5cbiAgYS5hcHBlbmRDaGlsZChpbWcpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0UCk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZCh5ZWFyUCk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRIdWJQYWdlUCk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChhKTtcblxuICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBjbGVhckRPTSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIHdoaWxlKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICB9XG59XG5cbmJ1aWxkTWVudVBhZ2UoKTsiLCJpbXBvcnQgeyBidWlsZEhlYWRlciwgYnVpbGROYXYsIGJ1aWxkRm9vdGVyIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZnVuY3Rpb24gYnVpbGRNYWluTWVudSgpIHtcbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICBjb25zdCB0aXRsZUgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgdGl0bGVIMi50ZXh0Q29udGVudCA9ICdNRU5VJztcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0aXRsZUgyKTtcblxuICBjb25zdCBicmVha2Zhc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnJlYWtmYXN0RGl2LmNsYXNzTGlzdC5hZGQoJ2JyZWFrZmFzdC1jb250YWluZXInKTtcblxuICBjb25zdCBicmVha2Zhc3RIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGJyZWFrZmFzdEgzLnRleHRDb250ZW50ID0gJ0JSRUFLRkFTVCc7XG4gIGJyZWFrZmFzdERpdi5hcHBlbmRDaGlsZChicmVha2Zhc3RIMyk7XG5cbiAgY29uc3QgYnJlYWtmYXN0MURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBicmVha2Zhc3QxRGl2LmNsYXNzTGlzdC5hZGQoJ2JyZWFrZmFzdDEnKTtcblxuICBjb25zdCBicmVha2Zhc3QxSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGJyZWFrZmFzdDFJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltYWdlcy93YWZmbGVzLmpwZycpO1xuICBicmVha2Zhc3QxSW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ1dhZmZsZXMnKTtcbiAgYnJlYWtmYXN0MUltZy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzEzMHB4Jyk7XG4gIGJyZWFrZmFzdDFJbWcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMTMwcHgnKTtcblxuICBjb25zdCBicmVha2Zhc3QxSDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBicmVha2Zhc3QxSDQudGV4dENvbnRlbnQgPSAnV2FmZmxlcyc7XG5cbiAgY29uc3QgYnJlYWtmYXN0MVBJbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGJyZWFrZmFzdDFQSW5nLnRleHRDb250ZW50ID0gJ1RoZXNlIHdhZmZsZXMgYXJlIGxvdmVseSBhbmQgY3Jpc3B5LiBQZXJmZWN0IGZvciBhbnkgZGF5IG9mIHRoZSB3ZWVrISc7XG4gIFxuICBjb25zdCBicmVha2Zhc3QxUFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBicmVha2Zhc3QxUFByaWNlLnRleHRDb250ZW50ID0gJyQ1LjAwJztcblxuICBicmVha2Zhc3QxRGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdDFJbWcpO1xuICBicmVha2Zhc3QxRGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdDFINCk7XG4gIGJyZWFrZmFzdDFEaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0MVBJbmcpO1xuICBicmVha2Zhc3QxRGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdDFQUHJpY2UpO1xuXG4gIGNvbnN0IGJyZWFrZmFzdDJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnJlYWtmYXN0MkRpdi5jbGFzc0xpc3QuYWRkKCdicmVha2Zhc3QyJyk7XG5cbiAgY29uc3QgYnJlYWtmYXN0MkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBicmVha2Zhc3QySW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWFnZXMvcGFuY2FrZXMuanBnJyk7XG4gIGJyZWFrZmFzdDJJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnUGFuY2FrZXMnKTtcbiAgYnJlYWtmYXN0MkltZy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzEzMHB4Jyk7XG4gIGJyZWFrZmFzdDJJbWcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMTMwcHgnKTtcblxuICBjb25zdCBicmVha2Zhc3QySDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBicmVha2Zhc3QySDQudGV4dENvbnRlbnQgPSAnUGFuY2FrZXMnO1xuXG4gIGNvbnN0IGJyZWFrZmFzdDJQSW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBicmVha2Zhc3QyUEluZy50ZXh0Q29udGVudCA9ICdTZXJ2ZWQgd2l0aCBidXR0ZXIgYW5kIHN5cnVwIGZvciBhIHBlcmZlY3QgYnJlYWtmYXN0Lic7XG4gIFxuICBjb25zdCBicmVha2Zhc3QyUFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBicmVha2Zhc3QyUFByaWNlLnRleHRDb250ZW50ID0gJyQ3LjAwJztcblxuICBicmVha2Zhc3QyRGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdDJJbWcpO1xuICBicmVha2Zhc3QyRGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdDJINCk7XG4gIGJyZWFrZmFzdDJEaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0MlBJbmcpO1xuICBicmVha2Zhc3QyRGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdDJQUHJpY2UpO1xuICBcbiAgYnJlYWtmYXN0RGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdDFEaXYpO1xuICBicmVha2Zhc3REaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0MkRpdik7XG5cbiAgY29uc3QgbHVuY2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbHVuY2hEaXYuY2xhc3NMaXN0LmFkZCgnbHVuY2gtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgbHVuY2hIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGx1bmNoSDMudGV4dENvbnRlbnQgPSAnTFVOQ0gnO1xuICBsdW5jaERpdi5hcHBlbmRDaGlsZChsdW5jaEgzKTtcblxuICBjb25zdCBsdW5jaDFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbHVuY2gxRGl2LmNsYXNzTGlzdC5hZGQoJ2x1bmNoMScpO1xuXG4gIGNvbnN0IGx1bmNoMUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBsdW5jaDFJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltYWdlcy9ob3Rkb2cuanBnJyk7XG4gIGx1bmNoMUltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdIb3QtRG9nJyk7XG4gIGx1bmNoMUltZy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzEzMHB4Jyk7XG4gIGx1bmNoMUltZy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcxMzBweCcpO1xuXG4gIGNvbnN0IGx1bmNoMUg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgbHVuY2gxSDQudGV4dENvbnRlbnQgPSAnSG90LURvZyc7XG5cbiAgY29uc3QgbHVuY2gxUEluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbHVuY2gxUEluZy50ZXh0Q29udGVudCA9ICdUd28gc2ltcGxlIHlldCBkZWxpY2lvdXMsIG1hc2hlZCBwb3RhdG8gZnJlZSwgaG90LWRvZy4gSnVzdCBhcyBpdCB3YXMgbWVhbnQgdG8gYmUuJztcbiAgXG4gIGNvbnN0IGx1bmNoMVBQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbHVuY2gxUFByaWNlLnRleHRDb250ZW50ID0gJyQxNS4wMCc7XG5cbiAgbHVuY2gxRGl2LmFwcGVuZENoaWxkKGx1bmNoMUltZyk7XG4gIGx1bmNoMURpdi5hcHBlbmRDaGlsZChsdW5jaDFINCk7XG4gIGx1bmNoMURpdi5hcHBlbmRDaGlsZChsdW5jaDFQSW5nKTtcbiAgbHVuY2gxRGl2LmFwcGVuZENoaWxkKGx1bmNoMVBQcmljZSk7XG5cbiAgY29uc3QgbHVuY2gyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGx1bmNoMkRpdi5jbGFzc0xpc3QuYWRkKCdsdW5jaDInKTtcblxuICBjb25zdCBsdW5jaDJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbHVuY2gySW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWFnZXMvcGFzdGEuanBnJyk7XG4gIGx1bmNoMkltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdQYXN0YScpO1xuICBsdW5jaDJJbWcuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcxMzBweCcpO1xuICBsdW5jaDJJbWcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMTMwcHgnKTtcblxuICBjb25zdCBsdW5jaDJINCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGx1bmNoMkg0LnRleHRDb250ZW50ID0gJ1Bhc3RhJztcblxuICBjb25zdCBsdW5jaDJQSW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsdW5jaDJQSW5nLnRleHRDb250ZW50ID0gJ1NocmltcCBzY2FtcGkgd2l0aCBsaW5ndWluZSBpcyB0aGUgdWx0aW1hdGUgc2VhZm9vZCBwYXN0YSBkaXNoLic7XG4gIFxuICBjb25zdCBsdW5jaDJQUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGx1bmNoMlBQcmljZS50ZXh0Q29udGVudCA9ICckUHJpY2UnO1xuXG4gIGx1bmNoMkRpdi5hcHBlbmRDaGlsZChsdW5jaDJJbWcpO1xuICBsdW5jaDJEaXYuYXBwZW5kQ2hpbGQobHVuY2gySDQpO1xuICBsdW5jaDJEaXYuYXBwZW5kQ2hpbGQobHVuY2gyUEluZyk7XG4gIGx1bmNoMkRpdi5hcHBlbmRDaGlsZChsdW5jaDJQUHJpY2UpO1xuXG4gIGx1bmNoRGl2LmFwcGVuZENoaWxkKGx1bmNoMURpdik7XG4gIGx1bmNoRGl2LmFwcGVuZENoaWxkKGx1bmNoMkRpdik7XG5cbiAgY29uc3QgZGlubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpbm5lckRpdi5jbGFzc0xpc3QuYWRkKCdkaW5uZXItY29udGFpbmVyJyk7XG5cbiAgY29uc3QgZGlubmVySDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBkaW5uZXJIMy50ZXh0Q29udGVudCA9ICdESU5ORVInO1xuICBkaW5uZXJEaXYuYXBwZW5kQ2hpbGQoZGlubmVySDMpO1xuXG4gIGNvbnN0IGRpbm5lcjFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGlubmVyMURpdi5jbGFzc0xpc3QuYWRkKCdkaW5uZXIxJyk7XG5cbiAgY29uc3QgZGlubmVyMUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBkaW5uZXIxSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWFnZXMvcGl6emEuanBnJyk7XG4gIGRpbm5lcjFJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnUGl6emEnKTtcbiAgZGlubmVyMUltZy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzEzMHB4Jyk7XG4gIGRpbm5lcjFJbWcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMTMwcHgnKTtcblxuICBjb25zdCBkaW5uZXIxSDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBkaW5uZXIxSDQudGV4dENvbnRlbnQgPSAnUGl6emEnO1xuXG4gIGNvbnN0IGRpbm5lcjFQSW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkaW5uZXIxUEluZy50ZXh0Q29udGVudCA9ICdUaGUgVXJzb25lc2NhXFwncyBzaWduYXR1cmUgcGl6emEgdGhhdCBnYXZlIHVzIHRoZSBtaWNoZWxpbiBzdGFyLic7XG4gIFxuICBjb25zdCBkaW5uZXIxUFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkaW5uZXIxUFByaWNlLnRleHRDb250ZW50ID0gJyQyNS4wMCc7XG5cbiAgZGlubmVyMURpdi5hcHBlbmRDaGlsZChkaW5uZXIxSW1nKTtcbiAgZGlubmVyMURpdi5hcHBlbmRDaGlsZChkaW5uZXIxSDQpO1xuICBkaW5uZXIxRGl2LmFwcGVuZENoaWxkKGRpbm5lcjFQSW5nKTtcbiAgZGlubmVyMURpdi5hcHBlbmRDaGlsZChkaW5uZXIxUFByaWNlKTtcblxuICBjb25zdCBkaW5uZXIyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpbm5lcjJEaXYuY2xhc3NMaXN0LmFkZCgnZGlubmVyMicpO1xuXG4gIGNvbnN0IGRpbm5lcjJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZGlubmVyMkltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvaW1hZ2VzL3NhbmR3aWNoLmpwZycpO1xuICBkaW5uZXIySW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ1NhbmR3aWNoJyk7XG4gIGRpbm5lcjJJbWcuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcxMzBweCcpO1xuICBkaW5uZXIySW1nLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzEzMHB4Jyk7XG5cbiAgY29uc3QgZGlubmVyMkg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgZGlubmVyMkg0LnRleHRDb250ZW50ID0gJ1NhbmR3aWNoJztcblxuICBjb25zdCBkaW5uZXIyUEluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGlubmVyMlBJbmcudGV4dENvbnRlbnQgPSAnQW4gSW5kaWFuYSBwb3JrIHRlbmRlcmxvaW4gc2FuZHdpY2ggY29uc2lzdHMgb2YgYnJlYWQsIGZyaWVkIHBvcmssIGxldHR1Y2UsIHRvbWF0b2VzLCBhbmQgYmFzaWMgY29uZGltZW50cy4nO1xuICBcbiAgY29uc3QgZGlubmVyMlBQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGlubmVyMlBQcmljZS50ZXh0Q29udGVudCA9ICckMjQuMDAnO1xuXG4gIGRpbm5lcjJEaXYuYXBwZW5kQ2hpbGQoZGlubmVyMkltZyk7XG4gIGRpbm5lcjJEaXYuYXBwZW5kQ2hpbGQoZGlubmVyMkg0KTtcbiAgZGlubmVyMkRpdi5hcHBlbmRDaGlsZChkaW5uZXIyUEluZyk7XG4gIGRpbm5lcjJEaXYuYXBwZW5kQ2hpbGQoZGlubmVyMlBQcmljZSk7XG5cbiAgZGlubmVyRGl2LmFwcGVuZENoaWxkKGRpbm5lcjFEaXYpO1xuICBkaW5uZXJEaXYuYXBwZW5kQ2hpbGQoZGlubmVyMkRpdik7XG4gIFxuICBtYWluRGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdERpdik7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQobHVuY2hEaXYpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKGRpbm5lckRpdik7XG5cbiAgcmV0dXJuIG1haW5EaXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWVudVBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkTmF2KCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkTWFpbk1lbnUoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRGb290ZXIoKSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==