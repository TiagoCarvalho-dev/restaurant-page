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
  --text-secondary: rgba(223, 190, 0, 0.911);
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
  max-width: 900px;
}

.reviews-container {
  text-align: center;
  margin: 15px;
}

.main p {
  font-size: 1.4rem;
  font-style: italic;
  color: var(--text-secondary);
}

.main > img {
  border-radius: 100%;
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
  width: 100%;
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
  color: var(--text-main);
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
  border-bottom: solid 2px var(--text-secondary);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,+BAA+B;EAC/B,4CAAwC;AAC1C;;AAEA;EACE,yBAAyB;EACzB,4CAAkC;AACpC;;AAEA;EACE,yBAAyB;EACzB,kCAAkC;EAClC,+BAA+B;EAC/B,0CAA0C;AAC5C;;AAEA;EACE,wCAAwC;EACxC,uBAAuB;EACvB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,iBAAiB;EACjB,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,wCAAwC;EACxC,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,+BAA+B;EAC/B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,wCAAwC;EACxC,uBAAuB;EACvB,eAAe;EACf,YAAY;EACZ,8BAA8B;EAC9B,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;;;EAGE,kBAAkB;AACpB;;AAEA;;;;;;EAME,aAAa;EACb,oCAAoC;EACpC,kCAAkC;AACpC;;AAEA;;;EAGE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,WAAW;AACb;;AAEA;;;EAGE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;;;EAGE,iBAAiB;EACjB,eAAe;EACf,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;;;EAGE,iBAAiB;EACjB,eAAe;EACf,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA;;;EAGE,iBAAiB;EACjB,eAAe;EACf,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA;;;EAGE,iBAAiB;EACjB,eAAe;EACf,oBAAoB;EACpB,kBAAkB;EAClB,oBAAoB;EACpB,eAAe;EACf,uBAAuB;EACvB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,gBAAgB;AAClB;;AAEA;EACE,8CAA8C;AAChD","sourcesContent":["@font-face {\n  font-family: 'PicturamaFounder';\n  src: url('./fonts/picturamafounder.otf');\n}\n\n@font-face {\n  font-family: 'Coolvetica';\n  src: url('./fonts/coolvetica.otf');\n}\n\n:root {\n  font-family: 'Coolvetica';\n  --background-main: rgb(13, 18, 41);\n  --text-main: rgb(189, 189, 189);\n  --text-secondary: rgba(223, 190, 0, 0.911);\n}\n\nbody {\n  background-color: var(--background-main);\n  color: var(--text-main);\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 100vh;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  padding-top: 7rem;\n  border-bottom: solid 2px white;\n  width: 100%;\n}\n\nheader > button {\n  background-color: var(--background-main);\n  color: var(--text-main);\n  border: none;\n  cursor: pointer;\n  font-family: 'PicturamaFounder';\n  font-size: 6rem;\n}\n\nnav {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 2rem;\n  padding: 1rem;\n}\n\nnav > button {\n  font-family: 'Coolvetica';\n  font-size: 1.2rem;\n  background-color: var(--background-main);\n  color: var(--text-main);\n  cursor: pointer;\n  border: none;\n  border-bottom: solid 2px white;\n  width: 100px;\n  padding: 0.5rem;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 35px;\n  margin: 30px;\n  max-width: 900px;\n}\n\n.reviews-container {\n  text-align: center;\n  margin: 15px;\n}\n\n.main p {\n  font-size: 1.4rem;\n  font-style: italic;\n  color: var(--text-secondary);\n}\n\n.main > img {\n  border-radius: 100%;\n}\n\n.main > h2 {\n  font-size: 2rem;\n  font-weight: 100;\n  text-align: center;\n}\n\n.schedule-container {\n  text-align: center;\n}\n\n.schedule-container > h3 {\n  font-size: 2rem;\n  font-weight: 200;\n  font-style: italic;\n  text-align: center;\n}\n\n.reservation-container,\n.suggestions-container,\n.address-container {\n  text-align: center;\n}\n\n.breakfast1,\n.breakfast2,\n.lunch1,\n.lunch2,\n.dinner1,\n.dinner2 {\n  display: grid;\n  grid-template-columns: 160px 5fr 1fr;\n  grid-template-rows: repeat(2, 1fr);\n}\n\n.breakfast-container,\n.lunch-container,\n.dinner-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  width: 100%;\n}\n\n.breakfast-container h3,\n.lunch-container h3,\n.dinner-container h3 {\n  text-align: center;\n  font-size: 1.5rem;\n}\n\n.breakfast-container img,\n.lunch-container img,\n.dinner-container img {\n  grid-row-start: 1;\n  grid-row-end: 3;\n  grid-column-start: 1;\n  grid-column-end: 2;\n  border-radius: 100%;\n  justify-self: center;\n  align-self: center;\n}\n\n.breakfast-container h4,\n.lunch-container h4,\n.dinner-container h4 {\n  grid-row-start: 1;\n  grid-row-end: 2;\n  grid-column-start: 2;\n  grid-column-end: 3;\n  justify-self: start;\n  align-self: end;\n  font-size: 1.6rem;\n  font-weight: 200;\n  margin: 0;\n  padding: 0;\n}\n\n.breakfast-container p:nth-child(3),\n.lunch-container p:nth-child(3),\n.dinner-container p:nth-child(3) {\n  grid-row-start: 2;\n  grid-row-end: 3;\n  grid-column-start: 2;\n  grid-column-end: 3;\n  justify-self: start;\n  align-self: start;\n  font-size: 1.2rem;\n  font-weight: 200;\n  margin: 0;\n  padding: 0;\n}\n\n.breakfast-container p:last-child,\n.lunch-container p:last-child,\n.dinner-container p:last-child {\n  grid-row-start: 1;\n  grid-row-end: 2;\n  grid-column-start: 3;\n  grid-column-end: 4;\n  justify-self: center;\n  align-self: end;\n  color: var(--text-main);\n  margin: 0;\n  padding: 0;\n}\n\n.footer {\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: auto;\n}\n\n.active-tab {\n  border-bottom: solid 2px var(--text-secondary);\n}"],"sourceRoot":""}]);
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

(0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

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
  lunch2PPrice.textContent = '$18.00';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFJQUErQztBQUMzRiw0Q0FBNEMseUhBQXlDO0FBQ3JGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLE9BQU8sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLE9BQU8sWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLFdBQVcs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OztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL3BpY3R1cmFtYWZvdW5kZXIub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9jb29sdmV0aWNhLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1BpY3R1cmFtYUZvdW5kZXInO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29vbHZldGljYSc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG46cm9vdCB7XG4gIGZvbnQtZmFtaWx5OiAnQ29vbHZldGljYSc7XG4gIC0tYmFja2dyb3VuZC1tYWluOiByZ2IoMTMsIDE4LCA0MSk7XG4gIC0tdGV4dC1tYWluOiByZ2IoMTg5LCAxODksIDE4OSk7XG4gIC0tdGV4dC1zZWNvbmRhcnk6IHJnYmEoMjIzLCAxOTAsIDAsIDAuOTExKTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbWFpbik7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW1haW4pO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbiNjb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogN3JlbTtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaGVhZGVyID4gYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1tYWluKTtcbiAgY29sb3I6IHZhcigtLXRleHQtbWFpbik7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogJ1BpY3R1cmFtYUZvdW5kZXInO1xuICBmb250LXNpemU6IDZyZW07XG59XG5cbm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMnJlbTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxubmF2ID4gYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6ICdDb29sdmV0aWNhJztcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbWFpbik7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW1haW4pO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHdoaXRlO1xuICB3aWR0aDogMTAwcHg7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuLm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDM1cHg7XG4gIG1hcmdpbjogMzBweDtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbn1cblxuLnJldmlld3MtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDE1cHg7XG59XG5cbi5tYWluIHAge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4ubWFpbiA+IGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi5tYWluID4gaDIge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNjaGVkdWxlLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNjaGVkdWxlLWNvbnRhaW5lciA+IGgzIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogMjAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlc2VydmF0aW9uLWNvbnRhaW5lcixcbi5zdWdnZXN0aW9ucy1jb250YWluZXIsXG4uYWRkcmVzcy1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5icmVha2Zhc3QxLFxuLmJyZWFrZmFzdDIsXG4ubHVuY2gxLFxuLmx1bmNoMixcbi5kaW5uZXIxLFxuLmRpbm5lcjIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE2MHB4IDVmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XG59XG5cbi5icmVha2Zhc3QtY29udGFpbmVyLFxuLmx1bmNoLWNvbnRhaW5lcixcbi5kaW5uZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJyZWFrZmFzdC1jb250YWluZXIgaDMsXG4ubHVuY2gtY29udGFpbmVyIGgzLFxuLmRpbm5lci1jb250YWluZXIgaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uYnJlYWtmYXN0LWNvbnRhaW5lciBpbWcsXG4ubHVuY2gtY29udGFpbmVyIGltZyxcbi5kaW5uZXItY29udGFpbmVyIGltZyB7XG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xuICBncmlkLXJvdy1lbmQ6IDM7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICBncmlkLWNvbHVtbi1lbmQ6IDI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5icmVha2Zhc3QtY29udGFpbmVyIGg0LFxuLmx1bmNoLWNvbnRhaW5lciBoNCxcbi5kaW5uZXItY29udGFpbmVyIGg0IHtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gIGdyaWQtcm93LWVuZDogMjtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gIGdyaWQtY29sdW1uLWVuZDogMztcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgYWxpZ24tc2VsZjogZW5kO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYnJlYWtmYXN0LWNvbnRhaW5lciBwOm50aC1jaGlsZCgzKSxcbi5sdW5jaC1jb250YWluZXIgcDpudGgtY2hpbGQoMyksXG4uZGlubmVyLWNvbnRhaW5lciBwOm50aC1jaGlsZCgzKSB7XG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xuICBncmlkLXJvdy1lbmQ6IDM7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYnJlYWtmYXN0LWNvbnRhaW5lciBwOmxhc3QtY2hpbGQsXG4ubHVuY2gtY29udGFpbmVyIHA6bGFzdC1jaGlsZCxcbi5kaW5uZXItY29udGFpbmVyIHA6bGFzdC1jaGlsZCB7XG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xuICBncmlkLXJvdy1lbmQ6IDI7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xuICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBlbmQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW1haW4pO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5mb290ZXIge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG5cbi5hY3RpdmUtdGFiIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwrQkFBK0I7RUFDL0IsNENBQXdDO0FBQzFDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDRDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQ0FBa0M7RUFDbEMsK0JBQStCO0VBQy9CLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLHdDQUF3QztFQUN4Qyx1QkFBdUI7RUFDdkIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQix3Q0FBd0M7RUFDeEMsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTs7O0VBR0Usa0JBQWtCO0FBQ3BCOztBQUVBOzs7Ozs7RUFNRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGtDQUFrQztBQUNwQzs7QUFFQTs7O0VBR0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBOzs7RUFHRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTs7O0VBR0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBOzs7RUFHRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw4Q0FBOEM7QUFDaERcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1BpY3R1cmFtYUZvdW5kZXInO1xcbiAgc3JjOiB1cmwoJy4vZm9udHMvcGljdHVyYW1hZm91bmRlci5vdGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0Nvb2x2ZXRpY2EnO1xcbiAgc3JjOiB1cmwoJy4vZm9udHMvY29vbHZldGljYS5vdGYnKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6ICdDb29sdmV0aWNhJztcXG4gIC0tYmFja2dyb3VuZC1tYWluOiByZ2IoMTMsIDE4LCA0MSk7XFxuICAtLXRleHQtbWFpbjogcmdiKDE4OSwgMTg5LCAxODkpO1xcbiAgLS10ZXh0LXNlY29uZGFyeTogcmdiYSgyMjMsIDE5MCwgMCwgMC45MTEpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbWFpbik7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1tYWluKTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDdyZW07XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggd2hpdGU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuaGVhZGVyID4gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbWFpbik7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1tYWluKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnUGljdHVyYW1hRm91bmRlcic7XFxuICBmb250LXNpemU6IDZyZW07XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG5uYXYgPiBidXR0b24ge1xcbiAgZm9udC1mYW1pbHk6ICdDb29sdmV0aWNhJztcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1tYWluKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LW1haW4pO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHdoaXRlO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDM1cHg7XFxuICBtYXJnaW46IDMwcHg7XFxuICBtYXgtd2lkdGg6IDkwMHB4O1xcbn1cXG5cXG4ucmV2aWV3cy1jb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAxNXB4O1xcbn1cXG5cXG4ubWFpbiBwIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcXG59XFxuXFxuLm1haW4gPiBpbWcge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG59XFxuXFxuLm1haW4gPiBoMiB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2NoZWR1bGUtY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNjaGVkdWxlLWNvbnRhaW5lciA+IGgzIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5yZXNlcnZhdGlvbi1jb250YWluZXIsXFxuLnN1Z2dlc3Rpb25zLWNvbnRhaW5lcixcXG4uYWRkcmVzcy1jb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYnJlYWtmYXN0MSxcXG4uYnJlYWtmYXN0MixcXG4ubHVuY2gxLFxcbi5sdW5jaDIsXFxuLmRpbm5lcjEsXFxuLmRpbm5lcjIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTYwcHggNWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxufVxcblxcbi5icmVha2Zhc3QtY29udGFpbmVyLFxcbi5sdW5jaC1jb250YWluZXIsXFxuLmRpbm5lci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmJyZWFrZmFzdC1jb250YWluZXIgaDMsXFxuLmx1bmNoLWNvbnRhaW5lciBoMyxcXG4uZGlubmVyLWNvbnRhaW5lciBoMyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmJyZWFrZmFzdC1jb250YWluZXIgaW1nLFxcbi5sdW5jaC1jb250YWluZXIgaW1nLFxcbi5kaW5uZXItY29udGFpbmVyIGltZyB7XFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGdyaWQtcm93LWVuZDogMztcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYnJlYWtmYXN0LWNvbnRhaW5lciBoNCxcXG4ubHVuY2gtY29udGFpbmVyIGg0LFxcbi5kaW5uZXItY29udGFpbmVyIGg0IHtcXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgZ3JpZC1yb3ctZW5kOiAyO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmJyZWFrZmFzdC1jb250YWluZXIgcDpudGgtY2hpbGQoMyksXFxuLmx1bmNoLWNvbnRhaW5lciBwOm50aC1jaGlsZCgzKSxcXG4uZGlubmVyLWNvbnRhaW5lciBwOm50aC1jaGlsZCgzKSB7XFxuICBncmlkLXJvdy1zdGFydDogMjtcXG4gIGdyaWQtcm93LWVuZDogMztcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmJyZWFrZmFzdC1jb250YWluZXIgcDpsYXN0LWNoaWxkLFxcbi5sdW5jaC1jb250YWluZXIgcDpsYXN0LWNoaWxkLFxcbi5kaW5uZXItY29udGFpbmVyIHA6bGFzdC1jaGlsZCB7XFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGdyaWQtcm93LWVuZDogMjtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1tYWluKTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuLmFjdGl2ZS10YWIge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBidWlsZEhlYWRlciwgYnVpbGROYXYsIGJ1aWxkRm9vdGVyIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZnVuY3Rpb24gYnVpbGRNYWluQWJvdXQoKSB7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG5cbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoMi50ZXh0Q29udGVudCA9ICdTRVJWSU5HIEdSRUFUIEZPT0QsIEZPUiBHUkVBVCBQRU9QTEUsIFNJTkNFIDIwMjMuJztcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChoMik7XG5cbiAgY29uc3Qgc2NoZWR1bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2NoZWR1bGVEaXYuY2xhc3NMaXN0LmFkZCgnc2NoZWR1bGUtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgaG91cnNIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGhvdXJzSDMudGV4dENvbnRlbnQgPSAnSG91cnMnO1xuXG4gIGNvbnN0IGJyZWFrZmFzdFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGJyZWFrZmFzdFAudGV4dENvbnRlbnQgPSAnQnJlYWtmYXN0IC0gZnJvbSA2OjAwQU0gdG8gOTowMEFNLic7XG4gIGNvbnN0IGx1bmNoUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbHVuY2hQLnRleHRDb250ZW50ID0gJ0x1bmNoIC0gZnJvbSAxMDozMEFNIHRvIDI6MDBQTS4nO1xuICBjb25zdCBkaW5uZXJQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkaW5uZXJQLnRleHRDb250ZW50ID0gJ0Rpbm5lciAtIGZyb20gNzowMFBNIHRvIDIzOjMwUE0uJztcbiAgY29uc3Qgd2Vla2VuZHNQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB3ZWVrZW5kc1AudGV4dENvbnRlbnQgPSAnV2Vla2VuZHMgLSBmcm9tIDY6MDBBTSB0byAyMzozMFBNLic7XG5cbiAgc2NoZWR1bGVEaXYuYXBwZW5kQ2hpbGQoaG91cnNIMyk7XG4gIHNjaGVkdWxlRGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdFApO1xuICBzY2hlZHVsZURpdi5hcHBlbmRDaGlsZChsdW5jaFApO1xuICBzY2hlZHVsZURpdi5hcHBlbmRDaGlsZChkaW5uZXJQKTtcbiAgc2NoZWR1bGVEaXYuYXBwZW5kQ2hpbGQod2Vla2VuZHNQKTtcblxuICBtYWluRGl2LmFwcGVuZENoaWxkKHNjaGVkdWxlRGl2KTtcblxuICByZXR1cm4gbWFpbkRpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRBYm91dFBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkTmF2KCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkTWFpbkFib3V0KCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkRm9vdGVyKCkpO1xufSIsImltcG9ydCB7IGJ1aWxkSGVhZGVyLCBidWlsZE5hdiwgYnVpbGRGb290ZXIgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5mdW5jdGlvbiBidWlsZE1haW5Db250YWN0KCkge1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5EaXYuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXG4gIGNvbnN0IHJlc2VydmF0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJlc2VydmF0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ3Jlc2VydmF0aW9uLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHJlc2VydmF0aW9uSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICByZXNlcnZhdGlvbkgyLnRleHRDb250ZW50ID0gJ1JFU0VSVkFUSU9OUyc7XG5cbiAgY29uc3QgcmVzZXJ2YXRpb25QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICByZXNlcnZhdGlvblAudGV4dENvbnRlbnQgPSAnKzU1ICgxOSkxMjM0NS02Nzg5IC0gSm9zaCc7XG5cbiAgcmVzZXJ2YXRpb25EaXYuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25IMik7XG4gIHJlc2VydmF0aW9uRGl2LmFwcGVuZENoaWxkKHJlc2VydmF0aW9uUCk7XG5cbiAgY29uc3Qgc3VnZ2VzdGlvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3VnZ2VzdGlvbnNEaXYuY2xhc3NMaXN0LmFkZCgnc3VnZ2VzdGlvbnMtY29udGFpbmVyJyk7XG5cbiAgY29uc3Qgc3VnZ2VzdGlvbnNIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHN1Z2dlc3Rpb25zSDIudGV4dENvbnRlbnQgPSAnU1VHR0VTVElPTlMnO1xuXG4gIGNvbnN0IHN1Z2dlc3Rpb25zUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgc3VnZ2VzdGlvbnNQLnRleHRDb250ZW50ID0gJ3Vyc29uZXNjYUBzb21ld2hlcmUuY29tIC0gVmVyb25pY2EnO1xuXG4gIHN1Z2dlc3Rpb25zRGl2LmFwcGVuZENoaWxkKHN1Z2dlc3Rpb25zSDIpO1xuICBzdWdnZXN0aW9uc0Rpdi5hcHBlbmRDaGlsZChzdWdnZXN0aW9uc1ApO1xuXG4gIGNvbnN0IGFkZHJlc3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWRkcmVzc0Rpdi5jbGFzc0xpc3QuYWRkKCdhZGRyZXNzLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGFkZHJlc3NIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGFkZHJlc3NIMi50ZXh0Q29udGVudCA9ICdBRERSRVNTJztcblxuICBjb25zdCBhZGRyZXNzUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYWRkcmVzc1AudGV4dENvbnRlbnQgPSAnNTMzMSBSZXhmb3JkIENvdXJ0LCBNb250Z29tZXJ5IEFMIDM2MTE2J1xuXG4gIGFkZHJlc3NEaXYuYXBwZW5kQ2hpbGQoYWRkcmVzc0gyKTtcbiAgYWRkcmVzc0Rpdi5hcHBlbmRDaGlsZChhZGRyZXNzUCk7XG5cbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbkRpdik7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQoc3VnZ2VzdGlvbnNEaXYpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKGFkZHJlc3NEaXYpO1xuXG4gIHJldHVybiBtYWluRGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZENvbnRhY3RQYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZEhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZE5hdigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZE1haW5Db250YWN0KCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkRm9vdGVyKCkpO1xufSIsImltcG9ydCB7IGJ1aWxkSGVhZGVyLCBidWlsZE5hdiwgYnVpbGRGb290ZXIgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5mdW5jdGlvbiBidWlsZE1haW5Ib21lKCkge1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5EaXYuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXG4gIGNvbnN0IHJldmlld3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmV2aWV3c0Rpdi5jbGFzc0xpc3QuYWRkKCdyZXZpZXdzLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMS50ZXh0Q29udGVudCA9ICdCZXN0IHJlc3RhdXJhbnQgaW4gdG93biAtIEZvb2QgQWR2aXNvcic7XG4gIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwMi50ZXh0Q29udGVudCA9ICdUaGUgYmVzdCBmdWNraW5nIHBpenphIElcXCd2ZSBldmVyIGhhZCAtIEdvcmRvbiBSYW1zZXknO1xuICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcDMudGV4dENvbnRlbnQgPSAnQ2FuXFwndCB3YWl0IHRvIGhhdmUgbHVuY2ggdGhlcmUgYWdhaW4gLSBSYW5kb20gSm91cm5hbGlzdCc7XG5cbiAgcmV2aWV3c0Rpdi5hcHBlbmRDaGlsZChwMSk7XG4gIHJldmlld3NEaXYuYXBwZW5kQ2hpbGQocDIpO1xuICByZXZpZXdzRGl2LmFwcGVuZENoaWxkKHAzKTtcblxuICBjb25zdCBIb21lSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIEhvbWVJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltYWdlcy9yZXN0YXVyYW50LmpwZycpO1xuICBIb21lSW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ1Vyc29uZXNjYSBSZXN0YXVyYW50Jyk7XG4gIEhvbWVJbWcuc2V0QXR0cmlidXRlKCd3aWR0aCcsICc0MDBweCcpO1xuICBIb21lSW1nLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJ2F1dG8nKTtcblxuICBtYWluRGl2LmFwcGVuZENoaWxkKHJldmlld3NEaXYpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKEhvbWVJbWcpO1xuXG4gIHJldHVybiBtYWluRGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEhvbWVQYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZEhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZE5hdigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZE1haW5Ib21lKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkRm9vdGVyKCkpO1xufSIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgYnVpbGRIb21lUGFnZSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgYnVpbGRBYm91dFBhZ2UgZnJvbSBcIi4vYWJvdXQuanNcIjtcbmltcG9ydCBidWlsZE1lbnVQYWdlIGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCBidWlsZENvbnRhY3RQYWdlIGZyb20gXCIuL2NvbnRhY3QuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgY29uc3QgdGl0bGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgdGl0bGVCdXR0b24udGV4dENvbnRlbnQgPSAnVXJzb25lc2NhJztcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlQnV0dG9uKTtcblxuICB0aXRsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhckRPTSgpO1xuICAgIGJ1aWxkSG9tZVBhZ2UoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQtYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXRhYicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS10YWInKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1idXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtdGFiJyk7XG4gIH0pO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZE5hdigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbiAgY29uc3QgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWJvdXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWJvdXQtYnV0dG9uJyk7XG4gIGFib3V0QnV0dG9uLnRleHRDb250ZW50ID0gJ0FCT1VUJztcblxuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWVudS1idXR0b24nKTtcbiAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNRU5VJztcblxuICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1idXR0b24nKTtcbiAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDT05UQUNUJztcblxuICBuYXYuYXBwZW5kQ2hpbGQoYWJvdXRCdXR0b24pO1xuICBuYXYuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gIG5hdi5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcblxuICBhYm91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhckRPTSgpO1xuICAgIGJ1aWxkQWJvdXRQYWdlKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LWJ1dHRvbicpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS10YWInKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1idXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtdGFiJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXRhYicpO1xuICB9KTtcblxuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFyRE9NKCk7XG4gICAgYnVpbGRNZW51UGFnZSgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dC1idXR0b24nKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtdGFiJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYnV0dG9uJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXRhYicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LWJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS10YWInKTtcbiAgfSk7XG5cbiAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhckRPTSgpO1xuICAgIGJ1aWxkQ29udGFjdFBhZ2UoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQtYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXRhYicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS10YWInKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1idXR0b24nKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtdGFiJyk7XG4gIH0pO1xuXG4gIHJldHVybiBuYXY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICBjb25zdCBjb3B5cmlnaHRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb3B5cmlnaHRQLnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCDCqSc7XG5cbiAgY29uc3QgeWVhclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHllYXJQLnRleHRDb250ZW50ID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXG4gIGNvbnN0IGdpdEh1YlBhZ2VQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBnaXRIdWJQYWdlUC50ZXh0Q29udGVudCA9ICdUaWFnb0NhcnZhbGhvLWRldic7XG5cbiAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL1RpYWdvQ2FydmFsaG8tZGV2Jyk7XG5cbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvaW1hZ2VzL2dpdGh1Yi5zdmcnKTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ0dpdGh1YiBMb2dvJyk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzMwcHgnKTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJ2F1dG8nKTtcblxuICBhLmFwcGVuZENoaWxkKGltZyk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHRQKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKHllYXJQKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdEh1YlBhZ2VQKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGEpO1xuXG4gIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRE9NKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgd2hpbGUoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuYnVpbGRIb21lUGFnZSgpOyIsImltcG9ydCB7IGJ1aWxkSGVhZGVyLCBidWlsZE5hdiwgYnVpbGRGb290ZXIgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5mdW5jdGlvbiBidWlsZE1haW5NZW51KCkge1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5EaXYuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXG4gIGNvbnN0IGJyZWFrZmFzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBicmVha2Zhc3REaXYuY2xhc3NMaXN0LmFkZCgnYnJlYWtmYXN0LWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGJyZWFrZmFzdEgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgYnJlYWtmYXN0SDMudGV4dENvbnRlbnQgPSAnQlJFQUtGQVNUJztcbiAgYnJlYWtmYXN0RGl2LmFwcGVuZENoaWxkKGJyZWFrZmFzdEgzKTtcblxuICBjb25zdCBicmVha2Zhc3QxRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJyZWFrZmFzdDFEaXYuY2xhc3NMaXN0LmFkZCgnYnJlYWtmYXN0MScpO1xuXG4gIGNvbnN0IGJyZWFrZmFzdDFJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgYnJlYWtmYXN0MUltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvaW1hZ2VzL3dhZmZsZXMuanBnJyk7XG4gIGJyZWFrZmFzdDFJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnV2FmZmxlcycpO1xuICBicmVha2Zhc3QxSW1nLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMTMwcHgnKTtcbiAgYnJlYWtmYXN0MUltZy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcxMzBweCcpO1xuXG4gIGNvbnN0IGJyZWFrZmFzdDFINCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGJyZWFrZmFzdDFINC50ZXh0Q29udGVudCA9ICdXYWZmbGVzJztcblxuICBjb25zdCBicmVha2Zhc3QxUEluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYnJlYWtmYXN0MVBJbmcudGV4dENvbnRlbnQgPSAnVGhlc2Ugd2FmZmxlcyBhcmUgbG92ZWx5IGFuZCBjcmlzcHkuIFBlcmZlY3QgZm9yIGFueSBkYXkgb2YgdGhlIHdlZWshJztcbiAgXG4gIGNvbnN0IGJyZWFrZmFzdDFQUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGJyZWFrZmFzdDFQUHJpY2UudGV4dENvbnRlbnQgPSAnJDUuMDAnO1xuXG4gIGJyZWFrZmFzdDFEaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0MUltZyk7XG4gIGJyZWFrZmFzdDFEaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0MUg0KTtcbiAgYnJlYWtmYXN0MURpdi5hcHBlbmRDaGlsZChicmVha2Zhc3QxUEluZyk7XG4gIGJyZWFrZmFzdDFEaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0MVBQcmljZSk7XG5cbiAgY29uc3QgYnJlYWtmYXN0MkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBicmVha2Zhc3QyRGl2LmNsYXNzTGlzdC5hZGQoJ2JyZWFrZmFzdDInKTtcblxuICBjb25zdCBicmVha2Zhc3QySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGJyZWFrZmFzdDJJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltYWdlcy9wYW5jYWtlcy5qcGcnKTtcbiAgYnJlYWtmYXN0MkltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdQYW5jYWtlcycpO1xuICBicmVha2Zhc3QySW1nLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMTMwcHgnKTtcbiAgYnJlYWtmYXN0MkltZy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcxMzBweCcpO1xuXG4gIGNvbnN0IGJyZWFrZmFzdDJINCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGJyZWFrZmFzdDJINC50ZXh0Q29udGVudCA9ICdQYW5jYWtlcyc7XG5cbiAgY29uc3QgYnJlYWtmYXN0MlBJbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGJyZWFrZmFzdDJQSW5nLnRleHRDb250ZW50ID0gJ1NlcnZlZCB3aXRoIGJ1dHRlciBhbmQgc3lydXAgZm9yIGEgcGVyZmVjdCBicmVha2Zhc3QuJztcbiAgXG4gIGNvbnN0IGJyZWFrZmFzdDJQUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGJyZWFrZmFzdDJQUHJpY2UudGV4dENvbnRlbnQgPSAnJDcuMDAnO1xuXG4gIGJyZWFrZmFzdDJEaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0MkltZyk7XG4gIGJyZWFrZmFzdDJEaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0Mkg0KTtcbiAgYnJlYWtmYXN0MkRpdi5hcHBlbmRDaGlsZChicmVha2Zhc3QyUEluZyk7XG4gIGJyZWFrZmFzdDJEaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0MlBQcmljZSk7XG4gIFxuICBicmVha2Zhc3REaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0MURpdik7XG4gIGJyZWFrZmFzdERpdi5hcHBlbmRDaGlsZChicmVha2Zhc3QyRGl2KTtcblxuICBjb25zdCBsdW5jaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsdW5jaERpdi5jbGFzc0xpc3QuYWRkKCdsdW5jaC1jb250YWluZXInKTtcblxuICBjb25zdCBsdW5jaEgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgbHVuY2hIMy50ZXh0Q29udGVudCA9ICdMVU5DSCc7XG4gIGx1bmNoRGl2LmFwcGVuZENoaWxkKGx1bmNoSDMpO1xuXG4gIGNvbnN0IGx1bmNoMURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsdW5jaDFEaXYuY2xhc3NMaXN0LmFkZCgnbHVuY2gxJyk7XG5cbiAgY29uc3QgbHVuY2gxSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGx1bmNoMUltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvaW1hZ2VzL2hvdGRvZy5qcGcnKTtcbiAgbHVuY2gxSW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ0hvdC1Eb2cnKTtcbiAgbHVuY2gxSW1nLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMTMwcHgnKTtcbiAgbHVuY2gxSW1nLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzEzMHB4Jyk7XG5cbiAgY29uc3QgbHVuY2gxSDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBsdW5jaDFINC50ZXh0Q29udGVudCA9ICdIb3QtRG9nJztcblxuICBjb25zdCBsdW5jaDFQSW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsdW5jaDFQSW5nLnRleHRDb250ZW50ID0gJ1R3byBzaW1wbGUgeWV0IGRlbGljaW91cywgbWFzaGVkIHBvdGF0byBmcmVlLCBob3QtZG9nLiBKdXN0IGFzIGl0IHdhcyBtZWFudCB0byBiZS4nO1xuICBcbiAgY29uc3QgbHVuY2gxUFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsdW5jaDFQUHJpY2UudGV4dENvbnRlbnQgPSAnJDE1LjAwJztcblxuICBsdW5jaDFEaXYuYXBwZW5kQ2hpbGQobHVuY2gxSW1nKTtcbiAgbHVuY2gxRGl2LmFwcGVuZENoaWxkKGx1bmNoMUg0KTtcbiAgbHVuY2gxRGl2LmFwcGVuZENoaWxkKGx1bmNoMVBJbmcpO1xuICBsdW5jaDFEaXYuYXBwZW5kQ2hpbGQobHVuY2gxUFByaWNlKTtcblxuICBjb25zdCBsdW5jaDJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbHVuY2gyRGl2LmNsYXNzTGlzdC5hZGQoJ2x1bmNoMicpO1xuXG4gIGNvbnN0IGx1bmNoMkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBsdW5jaDJJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltYWdlcy9wYXN0YS5qcGcnKTtcbiAgbHVuY2gySW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ1Bhc3RhJyk7XG4gIGx1bmNoMkltZy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzEzMHB4Jyk7XG4gIGx1bmNoMkltZy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcxMzBweCcpO1xuXG4gIGNvbnN0IGx1bmNoMkg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgbHVuY2gySDQudGV4dENvbnRlbnQgPSAnUGFzdGEnO1xuXG4gIGNvbnN0IGx1bmNoMlBJbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGx1bmNoMlBJbmcudGV4dENvbnRlbnQgPSAnU2hyaW1wIHNjYW1waSB3aXRoIGxpbmd1aW5lIGlzIHRoZSB1bHRpbWF0ZSBzZWFmb29kIHBhc3RhIGRpc2guJztcbiAgXG4gIGNvbnN0IGx1bmNoMlBQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbHVuY2gyUFByaWNlLnRleHRDb250ZW50ID0gJyQxOC4wMCc7XG5cbiAgbHVuY2gyRGl2LmFwcGVuZENoaWxkKGx1bmNoMkltZyk7XG4gIGx1bmNoMkRpdi5hcHBlbmRDaGlsZChsdW5jaDJINCk7XG4gIGx1bmNoMkRpdi5hcHBlbmRDaGlsZChsdW5jaDJQSW5nKTtcbiAgbHVuY2gyRGl2LmFwcGVuZENoaWxkKGx1bmNoMlBQcmljZSk7XG5cbiAgbHVuY2hEaXYuYXBwZW5kQ2hpbGQobHVuY2gxRGl2KTtcbiAgbHVuY2hEaXYuYXBwZW5kQ2hpbGQobHVuY2gyRGl2KTtcblxuICBjb25zdCBkaW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGlubmVyRGl2LmNsYXNzTGlzdC5hZGQoJ2Rpbm5lci1jb250YWluZXInKTtcblxuICBjb25zdCBkaW5uZXJIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGRpbm5lckgzLnRleHRDb250ZW50ID0gJ0RJTk5FUic7XG4gIGRpbm5lckRpdi5hcHBlbmRDaGlsZChkaW5uZXJIMyk7XG5cbiAgY29uc3QgZGlubmVyMURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaW5uZXIxRGl2LmNsYXNzTGlzdC5hZGQoJ2Rpbm5lcjEnKTtcblxuICBjb25zdCBkaW5uZXIxSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGRpbm5lcjFJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltYWdlcy9waXp6YS5qcGcnKTtcbiAgZGlubmVyMUltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdQaXp6YScpO1xuICBkaW5uZXIxSW1nLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMTMwcHgnKTtcbiAgZGlubmVyMUltZy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcxMzBweCcpO1xuXG4gIGNvbnN0IGRpbm5lcjFINCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGRpbm5lcjFINC50ZXh0Q29udGVudCA9ICdQaXp6YSc7XG5cbiAgY29uc3QgZGlubmVyMVBJbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRpbm5lcjFQSW5nLnRleHRDb250ZW50ID0gJ1RoZSBVcnNvbmVzY2FcXCdzIHNpZ25hdHVyZSBwaXp6YSB0aGF0IGdhdmUgdXMgdGhlIG1pY2hlbGluIHN0YXIuJztcbiAgXG4gIGNvbnN0IGRpbm5lcjFQUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRpbm5lcjFQUHJpY2UudGV4dENvbnRlbnQgPSAnJDI1LjAwJztcblxuICBkaW5uZXIxRGl2LmFwcGVuZENoaWxkKGRpbm5lcjFJbWcpO1xuICBkaW5uZXIxRGl2LmFwcGVuZENoaWxkKGRpbm5lcjFINCk7XG4gIGRpbm5lcjFEaXYuYXBwZW5kQ2hpbGQoZGlubmVyMVBJbmcpO1xuICBkaW5uZXIxRGl2LmFwcGVuZENoaWxkKGRpbm5lcjFQUHJpY2UpO1xuXG4gIGNvbnN0IGRpbm5lcjJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGlubmVyMkRpdi5jbGFzc0xpc3QuYWRkKCdkaW5uZXIyJyk7XG5cbiAgY29uc3QgZGlubmVyMkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBkaW5uZXIySW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWFnZXMvc2FuZHdpY2guanBnJyk7XG4gIGRpbm5lcjJJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnU2FuZHdpY2gnKTtcbiAgZGlubmVyMkltZy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzEzMHB4Jyk7XG4gIGRpbm5lcjJJbWcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMTMwcHgnKTtcblxuICBjb25zdCBkaW5uZXIySDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBkaW5uZXIySDQudGV4dENvbnRlbnQgPSAnU2FuZHdpY2gnO1xuXG4gIGNvbnN0IGRpbm5lcjJQSW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkaW5uZXIyUEluZy50ZXh0Q29udGVudCA9ICdBbiBJbmRpYW5hIHBvcmsgdGVuZGVybG9pbiBzYW5kd2ljaCBjb25zaXN0cyBvZiBicmVhZCwgZnJpZWQgcG9yaywgbGV0dHVjZSwgdG9tYXRvZXMsIGFuZCBiYXNpYyBjb25kaW1lbnRzLic7XG4gIFxuICBjb25zdCBkaW5uZXIyUFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkaW5uZXIyUFByaWNlLnRleHRDb250ZW50ID0gJyQyNC4wMCc7XG5cbiAgZGlubmVyMkRpdi5hcHBlbmRDaGlsZChkaW5uZXIySW1nKTtcbiAgZGlubmVyMkRpdi5hcHBlbmRDaGlsZChkaW5uZXIySDQpO1xuICBkaW5uZXIyRGl2LmFwcGVuZENoaWxkKGRpbm5lcjJQSW5nKTtcbiAgZGlubmVyMkRpdi5hcHBlbmRDaGlsZChkaW5uZXIyUFByaWNlKTtcblxuICBkaW5uZXJEaXYuYXBwZW5kQ2hpbGQoZGlubmVyMURpdik7XG4gIGRpbm5lckRpdi5hcHBlbmRDaGlsZChkaW5uZXIyRGl2KTtcbiAgXG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQoYnJlYWtmYXN0RGl2KTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChsdW5jaERpdik7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQoZGlubmVyRGl2KTtcblxuICByZXR1cm4gbWFpbkRpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNZW51UGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRIZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGROYXYoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRNYWluTWVudSgpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZEZvb3RlcigpKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9