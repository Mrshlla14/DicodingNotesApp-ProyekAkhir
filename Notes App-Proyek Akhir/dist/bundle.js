/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n    --primary-color: #fc99f2;\r\n    --secondary-color: #2c3e50;\r\n    --accent-color: #e74c3c;\r\n    --light-color: #ecf0f1;\r\n    --dark-color: #2c3e50;\r\n    --success-color: #2ecc71;\r\n    --warning-color: #f39c12;\r\n    --error-color: #e74c3c;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\nbody {\r\n    background-color: #f5f5f5;\r\n    color: var(--dark-color);\r\n}\r\n\r\n.container {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 0 20px;\r\n}\r\n\r\n.search-filter-bar {\r\n    margin-top: 20px;\r\n    display: flex;\r\n    gap: 10px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n#searchInput {\r\n    flex: 1;\r\n    padding: 10px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 6px;\r\n    font-size: 16px;\r\n}\r\n\r\n#filterSelect {\r\n    padding: 10px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 6px;\r\n    font-size: 16px;\r\n}\r\n\r\n/* App Header */\r\n.app-header {\r\n    background-color: var(--primary-color);\r\n    color: white;\r\n    padding: 20px 0;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.app-title {\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n}\r\n\r\n/* Main Content */\r\n.main-content {\r\n    display: grid;\r\n    grid-template-columns: 1fr 400px;\r\n    gap: 25px;\r\n    margin-top: 25px;\r\n}\r\n\r\n/* Notes List */\r\n.notes-container {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\r\n    gap: 15px;\r\n}\r\n\r\n.note-card {\r\n    background-color: white;\r\n    border-radius: 8px;\r\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\r\n    padding: 15px;\r\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n}\r\n\r\n.note-card:hover {\r\n    transform: translateY(-5px);\r\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.note-title {\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    margin-bottom: 10px;\r\n    color: var(--dark-color);\r\n}\r\n\r\n.note-body {\r\n    font-size: 14px;\r\n    line-height: 1.5;\r\n    color: #555;\r\n    max-height: 150px;\r\n    overflow: hidden;\r\n}\r\n\r\n.note-date {\r\n    font-size: 12px;\r\n    color: #999;\r\n    margin-top: 15px;\r\n    text-align: right;\r\n}\r\n\r\n/* Note Form */\r\n.note-form-container {\r\n    background-color: white;\r\n    border-radius: 8px;\r\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\r\n    padding: 15px;\r\n}\r\n\r\n.form-title {\r\n    font-size: 18px;\r\n    margin-bottom: 18px;\r\n    color: var(--primary-color);\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-group label {\r\n    display: block;\r\n    margin-bottom: 5px;\r\n    font-weight: 500;\r\n}\r\n\r\n.form-control {\r\n    width: 100%;\r\n    padding: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\r\n    font-size: 14px;\r\n}\r\n\r\n.form-control:focus {\r\n    outline: none;\r\n    border-color: var(--primary-color);\r\n    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);\r\n}\r\n\r\n.form-control.error {\r\n    border-color: var(--error-color);\r\n}\r\n\r\n.error-message {\r\n    color: var(--error-color);\r\n    font-size: 12px;\r\n    margin-top: 5px;\r\n    display: none;\r\n}\r\n\r\ntextarea.form-control {\r\n    min-height: 150px;\r\n    resize: vertical;\r\n}\r\n\r\n.btn {\r\n    display: inline-block;\r\n    padding: 10px 20px;\r\n    background-color: var(--primary-color);\r\n    color: white;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    font-size: 16px;\r\n    transition: background-color 0.3s;\r\n}\r\n\r\n.btn:hover {\r\n    background-color: #f974bf;\r\n}\r\n\r\n.btn-block {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n/* Responsive Design */\r\n@media (max-width: 700px) {\r\n    .main-content {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .app-title {\r\n        font-size: 20px;\r\n    }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Notes_App-Proyek_Akhir/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://Notes_App-Proyek_Akhir/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Notes_App-Proyek_Akhir/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Notes_App-Proyek_Akhir/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Notes_App-Proyek_Akhir/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Notes_App-Proyek_Akhir/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Notes_App-Proyek_Akhir/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Notes_App-Proyek_Akhir/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Notes_App-Proyek_Akhir/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\nlet notes = [];\r\nconst BASE_URL = 'https://notes-api.dicoding.dev/v2';\r\n\r\nfunction dispatchNotesUpdated() {\r\n    document.dispatchEvent(new CustomEvent('notes-updated', { detail: notes }));\r\n}\r\n\r\nasync function fetchNotes() {\r\n    showLoading(true);\r\n    try {\r\n        const response = await fetch(`${BASE_URL}/notes`);\r\n        const result = await response.json();\r\n        if (result.status === 'success') {\r\n            notes = result.data.filter(note => !note.archived);\r\n            dispatchNotesUpdated();\r\n        }\r\n    } catch (error) {\r\n        console.error('Gagal mengambil data dari API:', error);\r\n    } finally {\r\n        showLoading(false);\r\n    }\r\n}\r\n\r\nasync function saveNoteToAPI(note) {\r\n    showLoading(true);\r\n    try {\r\n        const response = await fetch(`${BASE_URL}/notes`, {\r\n            method: 'POST',\r\n            headers: {\r\n                'Content-Type': 'application/json',\r\n            },\r\n            body: JSON.stringify({\r\n                title: note.title,\r\n                body: note.body,\r\n            }),\r\n        });\r\n\r\n        const result = await response.json();\r\n        if (result.status === 'success') {\r\n            fetchNotes();\r\n        } else {\r\n            console.error('Gagal menambahkan catatan:', result.message);\r\n        }\r\n    } catch (error) {\r\n        console.error('Kesalahan saat menyimpan catatan:', error);\r\n    } finally {\r\n        showLoading(false);\r\n    }\r\n}\r\n\r\nasync function deleteNote(id) {\r\n    showLoading(true);\r\n    try {\r\n        const response = await fetch(`${BASE_URL}/notes/${id}`, {\r\n            method: 'DELETE'\r\n        });\r\n        const result = await response.json();\r\n        if (result.status === 'success') {\r\n            fetchNotes();\r\n        }\r\n    } catch (err) {\r\n        console.error('Gagal menghapus catatan:', err);\r\n    } finally {\r\n        showLoading(false);\r\n    }\r\n}\r\n\r\nasync function archiveNote(id) {\r\n    showLoading(true);\r\n    try {\r\n        const response = await fetch(`${BASE_URL}/notes/${id}/archive`, {\r\n            method: 'POST'\r\n        });\r\n        const result = await response.json();\r\n        if (result.status === 'success') {\r\n            fetchNotes();\r\n        }\r\n    } catch (err) {\r\n        console.error('Gagal mengarsipkan catatan:', err);\r\n    } finally {\r\n        showLoading(false);\r\n    }\r\n}\r\n\r\nfunction showLoading(state) {\r\n    const loader = document.getElementById('loader');\r\n    if (loader) loader.style.display = state ? 'block' : 'none';\r\n}\r\n\r\nconst loadingElement = document.createElement('div');\r\nloadingElement.id = 'loader';\r\nloadingElement.textContent = 'Memuat catatan...';\r\nloadingElement.style.cssText = 'text-align:center; padding:1rem; color:#3498db;';\r\ndocument.body.prepend(loadingElement);\r\n\r\nclass NoteCard extends HTMLElement {\r\n    constructor() {\r\n        super();\r\n        this.attachShadow({ mode: 'open' });\r\n    }\r\n\r\n    static get observedAttributes() {\r\n        return ['data-id', 'data-title', 'data-body', 'data-date'];\r\n    }\r\n\r\n    attributeChangedCallback() {\r\n        this.render();\r\n    }\r\n\r\n    connectedCallback() {\r\n        this.render();\r\n    }\r\n\r\n    formatDate(dateStr) {\r\n        const date = new Date(dateStr);\r\n        return new Intl.DateTimeFormat('id-ID', {\r\n            year: 'numeric',\r\n            month: 'long',\r\n            day: 'numeric'\r\n        }).format(date);\r\n    }\r\n\r\n    render() {\r\n        const id = this.getAttribute('data-id');\r\n        const title = this.getAttribute('data-title');\r\n        const body = this.getAttribute('data-body');\r\n        const date = this.getAttribute('data-date');\r\n\r\n        this.shadowRoot.innerHTML = `\r\n            <style>\r\n                .note-card {\r\n                    background-color: white;\r\n                    border-radius: 8px;\r\n                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\r\n                    padding: 20px;\r\n                    transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n                }\r\n                .note-card:hover {\r\n                    transform: translateY(-5px);\r\n                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\r\n                }\r\n                .note-title {\r\n                    font-size: 18px;\r\n                    font-weight: bold;\r\n                    margin-bottom: 10px;\r\n                    color: #2c3e50;\r\n                }\r\n                .note-body {\r\n                    font-size: 14px;\r\n                    line-height: 1.5;\r\n                    color: #555;\r\n                }\r\n                .note-date {\r\n                    font-size: 12px;\r\n                    color: #999;\r\n                    margin-top: 15px;\r\n                    text-align: right;\r\n                }\r\n                .note-actions {\r\n                    margin-top: 15px;\r\n                    display: flex;\r\n                    justify-content: flex-end;\r\n                    gap: 10px;\r\n                }\r\n                .btn {\r\n                    padding: 6px 12px;\r\n                    font-size: 12px;\r\n                    border: none;\r\n                    border-radius: 4px;\r\n                    cursor: pointer;\r\n                    color: white;\r\n                }\r\n                .archive {\r\n                    background-color: #f39c12;\r\n                }\r\n                .delete {\r\n                    background-color: #e74c3c;\r\n                }\r\n            </style>\r\n            <div class=\"note-card\">\r\n                <div class=\"note-title\">${title}</div>\r\n                <div class=\"note-body\">${body}</div>\r\n                <div class=\"note-date\">${this.formatDate(date)}</div>\r\n                <div class=\"note-actions\">\r\n                    <button class=\"btn archive\">Arsipkan</button>\r\n                    <button class=\"btn delete\">Hapus</button>\r\n                </div>\r\n            </div>\r\n        `;\r\n\r\n        this.shadowRoot.querySelector('.archive')?.addEventListener('click', () => {\r\n            archiveNote(this.getAttribute('data-id'));\r\n        });\r\n        this.shadowRoot.querySelector('.delete')?.addEventListener('click', () => {\r\n            deleteNote(this.getAttribute('data-id'));\r\n        });\r\n    }\r\n}\r\n\r\n// Komponen lainnya tetap\r\ncustomElements.define('note-card', NoteCard);\r\ndocument.addEventListener('DOMContentLoaded', fetchNotes);\r\n\n\n//# sourceURL=webpack://Notes_App-Proyek_Akhir/./src/app.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Notes_App-Proyek_Akhir/./src/style.css?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;