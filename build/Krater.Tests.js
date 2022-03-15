/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ArrayAssert/AllItemsAreUnique.js":
/*!**********************************************!*\
  !*** ./src/ArrayAssert/AllItemsAreUnique.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет являются ли все элементы массива уникальными.\r\n * Если любые два элемента массива равны, то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.ArrayAssert.AllItemsAreUnique\r\n * \r\n * @param {Array} expected - Проверяемый массив.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction AllItemsAreUnique(expected, message) {\r\n    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');\r\n\r\n    let buf = [];\r\n    let result = true;\r\n    for (const el of expected) {\r\n        if (buf.indexOf(el) < 0) {\r\n            buf.push(el);\r\n        } else {\r\n            result = false;\r\n            break;\r\n        }\r\n    }\r\n    if (result) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + `Не все элементы массива являются уникальными!`\r\n    );\r\n}\r\n\r\nmodule.exports = AllItemsAreUnique;\n\n//# sourceURL=webpack://krater.tests/./src/ArrayAssert/AllItemsAreUnique.js?");

/***/ }),

/***/ "./src/ArrayAssert/AllItemsInstenceOf.js":
/*!***********************************************!*\
  !*** ./src/ArrayAssert/AllItemsInstenceOf.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет являются ли все элементы массива объектами указанного типа.\r\n * Если не все элементы массива являются объектами указанного типа, \r\n * то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.ArrayAssert.AllItemsInstenceOf\r\n * \r\n * @param {Array} expected - Проверяемый массив.\r\n * @param {*} type - Тип.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction AllItemsInstenceOf(expected, type, message) {\r\n    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');\r\n\r\n    let result = true;\r\n    for (const el of expected) {\r\n        if (typeof el != 'object' || !(el instanceof type)) {\r\n            result = false;\r\n            break;\r\n        }\r\n    }\r\n    if (result) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + `Не все элементы массива являются объектами типа '${type.name}'!`\r\n    );\r\n}\r\n\r\nmodule.exports = AllItemsInstenceOf;\n\n//# sourceURL=webpack://krater.tests/./src/ArrayAssert/AllItemsInstenceOf.js?");

/***/ }),

/***/ "./src/ArrayAssert/AllItemsIsNotNull.js":
/*!**********************************************!*\
  !*** ./src/ArrayAssert/AllItemsIsNotNull.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет не содержит ли массив элемент, являющийся null.\r\n * Если массив содержит элемент, являющийся null, \r\n * то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.ArrayAssert.AllItemsIsNotNull\r\n * \r\n * @param {Array} expected - Проверяемый массив.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction AllItemsIsNotNull(expected, message) {\r\n    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');\r\n\r\n    let result = true;\r\n    for (const el of expected) {\r\n        if (el === null) {\r\n            result = false;\r\n            break;\r\n        }\r\n    }\r\n    if (result) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + `Массив содержит элемент, являющийся null!`\r\n    );\r\n}\r\n\r\nmodule.exports = AllItemsIsNotNull;\n\n//# sourceURL=webpack://krater.tests/./src/ArrayAssert/AllItemsIsNotNull.js?");

/***/ }),

/***/ "./src/ArrayAssert/AllItemsIsNotNullOrUndefined.js":
/*!*********************************************************!*\
  !*** ./src/ArrayAssert/AllItemsIsNotNullOrUndefined.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет не содержит ли массив элемент, являющийся null или undefined.\r\n * Если массив содержит элемент, являющийся null или undefined, \r\n * то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.ArrayAssert.AllItemsIsNotNullOrUndefined\r\n * \r\n * @param {Array} expected - Проверяемый массив.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction AllItemsIsNotNullOrUndefined(expected, message) {\r\n    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');\r\n\r\n    let result = true;\r\n    let type = null;\r\n    for (const el of expected) {\r\n        if (el === null) type = 'null';\r\n        else if (el === undefined) type = 'undefined';\r\n        if (type) {\r\n            result = false;\r\n            break;\r\n        }\r\n    }\r\n    if (result) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + `Массив содержит элемент, являющийся ${type}!`\r\n    );\r\n}\r\n\r\nmodule.exports = AllItemsIsNotNullOrUndefined;\n\n//# sourceURL=webpack://krater.tests/./src/ArrayAssert/AllItemsIsNotNullOrUndefined.js?");

/***/ }),

/***/ "./src/ArrayAssert/AllItemsIsNotUndefined.js":
/*!***************************************************!*\
  !*** ./src/ArrayAssert/AllItemsIsNotUndefined.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет не содержит ли массив элемент, являющийся undefined.\r\n * Если массив содержит элемент, являющийся undefined, \r\n * то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.ArrayAssert.AllItemsIsNotUndefined\r\n * \r\n * @param {Array} expected - Проверяемый массив.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction AllItemsIsNotUndefined(expected, message) {\r\n    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');\r\n\r\n    let result = true;\r\n    for (const el of expected) {\r\n        if (el === undefined) {\r\n            result = false;\r\n            break;\r\n        }\r\n    }\r\n    if (result) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + `Массив содержит элемент, являющийся undefined!`\r\n    );\r\n}\r\n\r\nmodule.exports = AllItemsIsNotUndefined;\n\n//# sourceURL=webpack://krater.tests/./src/ArrayAssert/AllItemsIsNotUndefined.js?");

/***/ }),

/***/ "./src/ArrayAssert/AllItemsTypeOf.js":
/*!*******************************************!*\
  !*** ./src/ArrayAssert/AllItemsTypeOf.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет являются ли все элементы массива значениями указанного типа.\r\n * Если не все элементы массива являются значениями указанного типа, \r\n * то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.ArrayAssert.AllItemsTypeOf\r\n * \r\n * @param {Array} expected - Проверяемый массив.\r\n * @param {string} type - Тип.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction AllItemsTypeOf(expected, type, message) {\r\n    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');\r\n    if (typeof type != 'string') throw new TypeError('type: Параметр не является строкой');\r\n\r\n    let result = true;\r\n    for (const el of expected) {\r\n        if (typeof el != type) {\r\n            result = false;\r\n            break;\r\n        }\r\n    }\r\n    if (result) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + `Не все элементы массива являются значениями типа '${type}'!`\r\n    );\r\n}\r\n\r\nmodule.exports = AllItemsTypeOf;\n\n//# sourceURL=webpack://krater.tests/./src/ArrayAssert/AllItemsTypeOf.js?");

/***/ }),

/***/ "./src/ArrayAssert/AreEqual.js":
/*!*************************************!*\
  !*** ./src/ArrayAssert/AreEqual.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет равенство двух массивов.\r\n * Если массивы не равны, то генерируется ошибка AssertFailedError.\r\n * Равенство определяется как наличие одних и тех же (равных) элементов \r\n * в обоих массивах в одном и том же порядке и количестве.\r\n * \r\n * @function Krater.Tests.ArrayAssert.AreEqual\r\n * \r\n * @param {Array} expected - Проверяемый массив.\r\n * @param {Array} actual - Контрольный массив.\r\n * @param {function} [comparer=(a,b)=>a==b] - Функция, которая будет савнивать элементы массивов.\r\n * Функция должна иметь вид (a, b) => result, где a и b - элементы массивов, \r\n * result - результат сравнения типа boolean.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction AreEqual(expected, actual, comparer, message) {\r\n    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');\r\n    if (!Array.isArray(actual)) throw new TypeError('actual: Параметр не является массивом');\r\n    if (comparer == null) comparer = (a, b) => a == b;\r\n    if (typeof comparer !== 'function') throw new TypeError('comparer: Параметр не является функцией');\r\n\r\n    let result = expected.length == actual.length;\r\n    if (result) {\r\n        for (let i = 0; i < expected.length; i++) {\r\n            if (!comparer(expected[i], actual[i])) {\r\n                result = false;\r\n                break;\r\n            }\r\n        }\r\n    }\r\n    if (result) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + 'Массивы не равны!'\r\n    );\r\n}\r\n\r\nmodule.exports = AreEqual;\n\n//# sourceURL=webpack://krater.tests/./src/ArrayAssert/AreEqual.js?");

/***/ }),

/***/ "./src/ArrayAssert/AreEquivalent.js":
/*!******************************************!*\
  !*** ./src/ArrayAssert/AreEquivalent.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет равенство двух массивов.\r\n * Если массивы не равны, то генерируется ошибка AssertFailedError.\r\n * Равенство определяется как наличие одних и тех же (равных) элементов \r\n * в обоих массивах в одном и том же количестве, их порядок не важен.\r\n * \r\n * @function Krater.Tests.ArrayAssert.AreEquivalent\r\n * \r\n * @param {Array} expected - Проверяемый массив.\r\n * @param {Array} actual - Контрольный массив.\r\n * @param {function} [comparer=(a,b)=>a==b] - Функция, которая будет савнивать элементы массивов.\r\n * Функция должна иметь вид (a, b) => result, где a и b - элементы массивов, \r\n * result - результат сравнения типа boolean.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction AreEquivalent(expected, actual, comparer, message) {\r\n    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');\r\n    if (!Array.isArray(actual)) throw new TypeError('actual: Параметр не является массивом');\r\n    if (comparer == null) comparer = (a, b) => a == b;\r\n    if (typeof comparer !== 'function') throw new TypeError('comparer: Параметр не является функцией');\r\n\r\n    let result = expected.length == actual.length;\r\n    if (result) {\r\n        for (let i = 0; i < expected.length; i++) {\r\n            if (actual.find(e => comparer(e, expected[i])) === undefined) {\r\n                result = false;\r\n                break;\r\n            }\r\n        }\r\n    }\r\n    if (result) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + 'Массивы не равны!'\r\n    );\r\n}\r\n\r\nmodule.exports = AreEquivalent;\n\n//# sourceURL=webpack://krater.tests/./src/ArrayAssert/AreEquivalent.js?");

/***/ }),

/***/ "./src/ArrayAssert/AreIdenty.js":
/*!**************************************!*\
  !*** ./src/ArrayAssert/AreIdenty.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет эквивалентность двух массивов.\r\n * Если массивы не эквивалентны, то генерируется ошибка AssertFailedError.\r\n * Эквивалентность определяется как наличие одних и тех же (эквивалентных) элементов \r\n * в обоих массивах в одном и том же порядке и количестве.\r\n * \r\n * @function Krater.Tests.ArrayAssert.AreIdenty\r\n * \r\n * @param {Array} expected - Проверяемый массив.\r\n * @param {Array} actual - Контрольный массив.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction AreIdenty(expected, actual, message) {\r\n    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');\r\n    if (!Array.isArray(actual)) throw new TypeError('actual: Параметр не является массивом');\r\n\r\n    let result = expected.length == actual.length;\r\n    if (result) {\r\n        for (let i = 0; i < expected.length; i++) {\r\n            if (!(expected[i] === actual[i])) {\r\n                result = false;\r\n                break;\r\n            }\r\n        }\r\n    }\r\n    if (result) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + 'Массивы не эквивалентны!'\r\n    );\r\n}\r\n\r\nmodule.exports = AreIdenty;\n\n//# sourceURL=webpack://krater.tests/./src/ArrayAssert/AreIdenty.js?");

/***/ }),

/***/ "./src/ArrayAssert/AreNotEqual.js":
/*!****************************************!*\
  !*** ./src/ArrayAssert/AreNotEqual.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет неравенство двух массивов.\r\n * Если массивы равны, то генерируется ошибка AssertFailedError.\r\n * Равенство определяется как наличие одних и тех же (равных) элементов \r\n * в обоих массивах в одном и том же порядке и количестве.\r\n * \r\n * @function Krater.Tests.ArrayAssert.AreNotEqual\r\n * \r\n * @param {Array} expected - Проверяемый массив.\r\n * @param {Array} actual - Контрольный массив.\r\n * @param {function} [comparer=(a,b)=>a==b] - Функция, которая будет савнивать элементы массивов.\r\n * Функция должна иметь вид (a, b) => result, где a и b - элементы массивов, \r\n * result - результат сравнения типа boolean.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction AreNotEqual(expected, actual, comparer, message) {\r\n    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');\r\n    if (!Array.isArray(actual)) throw new TypeError('actual: Параметр не является массивом');\r\n    if (comparer == null) comparer = (a, b) => a == b;\r\n    if (typeof comparer !== 'function') throw new TypeError('comparer: Параметр не является функцией');\r\n\r\n    let result = expected.length == actual.length;\r\n    if (result) {\r\n        for (let i = 0; i < expected.length; i++) {\r\n            if (!comparer(expected[i], actual[i])) {\r\n                result = false;\r\n                break;\r\n            }\r\n        }\r\n    }\r\n    if (!result) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + 'Массивы равны!'\r\n    );\r\n}\r\n\r\nmodule.exports = AreNotEqual;\n\n//# sourceURL=webpack://krater.tests/./src/ArrayAssert/AreNotEqual.js?");

/***/ }),

/***/ "./src/ArrayAssert/AreNotEquivalent.js":
/*!*********************************************!*\
  !*** ./src/ArrayAssert/AreNotEquivalent.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет неравенство двух массивов.\r\n * Если массивы равны, то генерируется ошибка AssertFailedError.\r\n * Равенство определяется как наличие одних и тех же (равных) элементов \r\n * в обоих массивах в одном и том же количестве, их порядок не важен.\r\n * \r\n * @function Krater.Tests.ArrayAssert.AreNotEquivalent\r\n * \r\n * @param {Array} expected - Проверяемый массив.\r\n * @param {Array} actual - Контрольный массив.\r\n * @param {function} [comparer=(a,b)=>a==b] - Функция, которая будет савнивать элементы массивов.\r\n * Функция должна иметь вид (a, b) => result, где a и b - элементы массивов, \r\n * result - результат сравнения типа boolean.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction AreNotEquivalent(expected, actual, comparer, message) {\r\n    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');\r\n    if (!Array.isArray(actual)) throw new TypeError('actual: Параметр не является массивом');\r\n    if (comparer == null) comparer = (a, b) => a == b;\r\n    if (typeof comparer !== 'function') throw new TypeError('comparer: Параметр не является функцией');\r\n\r\n    let result = expected.length == actual.length;\r\n    if (result) {\r\n        for (let i = 0; i < expected.length; i++) {\r\n            if (actual.find(e => comparer(e, expected[i])) === undefined) {\r\n                result = false;\r\n                break;\r\n            }\r\n        }\r\n    }\r\n    if (!result) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + 'Массивы равны!'\r\n    );\r\n}\r\n\r\nmodule.exports = AreNotEquivalent;\n\n//# sourceURL=webpack://krater.tests/./src/ArrayAssert/AreNotEquivalent.js?");

/***/ }),

/***/ "./src/ArrayAssert/AreNotIdenty.js":
/*!*****************************************!*\
  !*** ./src/ArrayAssert/AreNotIdenty.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет неэквивалентность двух массивов.\r\n * Если массивы эквивалентны, то генерируется ошибка AssertFailedError.\r\n * Эквивалентность определяется как наличие одних и тех же (эквивалентных) элементов \r\n * в обоих массивах в одном и том же порядке и количестве.\r\n * \r\n * @function Krater.Tests.ArrayAssert.AreNotIdenty\r\n * \r\n * @param {Array} expected - Проверяемый массив.\r\n * @param {Array} actual - Контрольный массив.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction AreNotIdenty(expected, actual, message) {\r\n    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');\r\n    if (!Array.isArray(actual)) throw new TypeError('actual: Параметр не является массивом');\r\n\r\n    let result = expected.length == actual.length;\r\n    if (result) {\r\n        for (let i = 0; i < expected.length; i++) {\r\n            if (!(expected[i] === actual[i])) {\r\n                result = false;\r\n                break;\r\n            }\r\n        }\r\n    }\r\n    if (!result) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + 'Массивы эквивалентны!'\r\n    );\r\n}\r\n\r\nmodule.exports = AreNotIdenty;\n\n//# sourceURL=webpack://krater.tests/./src/ArrayAssert/AreNotIdenty.js?");

/***/ }),

/***/ "./src/ArrayAssert/Contains.js":
/*!*************************************!*\
  !*** ./src/ArrayAssert/Contains.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет содержит ли массив указанный элемент.\r\n * Если массив не содержит указанный элемент, то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.ArrayAssert.Contains\r\n * \r\n * @param {Array} expected - Проверяемый массив.\r\n * @param {*} element - Элемент.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction Contains(expected, element, message) {\r\n    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');\r\n\r\n    if (expected.indexOf(element) >= 0) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + `Массив не содержит указанный элемент!`\r\n    );\r\n}\r\n\r\nmodule.exports = Contains;\n\n//# sourceURL=webpack://krater.tests/./src/ArrayAssert/Contains.js?");

/***/ }),

/***/ "./src/ArrayAssert/IsNotSubsetOf.js":
/*!******************************************!*\
  !*** ./src/ArrayAssert/IsNotSubsetOf.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет не является ли массив подмножеством указанного множества.\r\n * Если массив является подмножеством указанного множества, \r\n * то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.ArrayAssert.IsNotSubsetOf\r\n * \r\n * @param {Array} expected - Проверяемый массив.\r\n * @param {Array} superset - Контрольное множество.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction IsNotSubsetOf(expected, superset, message) {\r\n    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');\r\n    if (!Array.isArray(superset)) throw new TypeError('superset: Параметр не является массивом');\r\n\r\n    let result = true;\r\n    if (result) {\r\n        for (let i = 0; i < expected.length; i++) {\r\n            if (superset.indexOf(expected[i]) < 0) {\r\n                result = false;\r\n                break;\r\n            }\r\n        }\r\n    }\r\n    if (!result) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + 'Массив является подмножеством указанного множества!'\r\n    );\r\n}\r\n\r\nmodule.exports = IsNotSubsetOf;\n\n//# sourceURL=webpack://krater.tests/./src/ArrayAssert/IsNotSubsetOf.js?");

/***/ }),

/***/ "./src/ArrayAssert/IsSubsetOf.js":
/*!***************************************!*\
  !*** ./src/ArrayAssert/IsSubsetOf.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет является ли массив подмножеством указанного множества.\r\n * Если массив не является подмножеством указанного множества, \r\n * то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.ArrayAssert.IsSubsetOf\r\n * \r\n * @param {Array} expected - Проверяемый массив.\r\n * @param {Array} superset - Контрольное множество.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction IsSubsetOf(expected, superset, message) {\r\n    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');\r\n    if (!Array.isArray(superset)) throw new TypeError('superset: Параметр не является массивом');\r\n\r\n    let result = true;\r\n    if (result) {\r\n        for (let i = 0; i < expected.length; i++) {\r\n            if (superset.indexOf(expected[i]) < 0) {\r\n                result = false;\r\n                break;\r\n            }\r\n        }\r\n    }\r\n    if (result) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + 'Массив не является подмножеством указанного множества!'\r\n    );\r\n}\r\n\r\nmodule.exports = IsSubsetOf;\n\n//# sourceURL=webpack://krater.tests/./src/ArrayAssert/IsSubsetOf.js?");

/***/ }),

/***/ "./src/ArrayAssert/NotContains.js":
/*!****************************************!*\
  !*** ./src/ArrayAssert/NotContains.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет не содержит ли массив указанный элемент.\r\n * Если массив содержит указанный элемент, то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.ArrayAssert.NotContains\r\n * \r\n * @param {Array} expected - Проверяемый массив.\r\n * @param {*} element - Элемент.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction NotContains(expected, element, message) {\r\n    if (!Array.isArray(expected)) throw new TypeError('expected: Параметр не является массивом');\r\n\r\n    if (expected.indexOf(element) < 0) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + `Массив содержит указанный элемент!`\r\n    );\r\n}\r\n\r\nmodule.exports = NotContains;\n\n//# sourceURL=webpack://krater.tests/./src/ArrayAssert/NotContains.js?");

/***/ }),

/***/ "./src/ArrayAssert/index.js":
/*!**********************************!*\
  !*** ./src/ArrayAssert/index.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\r\n * @namespace Krater.Tests.ArrayAssert\r\n */\r\n\r\nvar ArrayAssert = {\r\n    AllItemsInstenceOf: __webpack_require__(/*! ./AllItemsInstenceOf */ \"./src/ArrayAssert/AllItemsInstenceOf.js\"),\r\n    AllItemsTypeOf: __webpack_require__(/*! ./AllItemsTypeOf */ \"./src/ArrayAssert/AllItemsTypeOf.js\"),\r\n    AllItemsIsNotNull: __webpack_require__(/*! ./AllItemsIsNotNull */ \"./src/ArrayAssert/AllItemsIsNotNull.js\"),\r\n    AllItemsIsNotUndefined: __webpack_require__(/*! ./AllItemsIsNotUndefined */ \"./src/ArrayAssert/AllItemsIsNotUndefined.js\"),\r\n    AllItemsIsNotNullOrUndefined: __webpack_require__(/*! ./AllItemsIsNotNullOrUndefined */ \"./src/ArrayAssert/AllItemsIsNotNullOrUndefined.js\"),\r\n    AllItemsAreUnique: __webpack_require__(/*! ./AllItemsAreUnique */ \"./src/ArrayAssert/AllItemsAreUnique.js\"),\r\n    AreIdenty: __webpack_require__(/*! ./AreIdenty */ \"./src/ArrayAssert/AreIdenty.js\"),\r\n    AreNotIdenty: __webpack_require__(/*! ./AreNotIdenty */ \"./src/ArrayAssert/AreNotIdenty.js\"),\r\n    AreEqual: __webpack_require__(/*! ./AreEqual */ \"./src/ArrayAssert/AreEqual.js\"),\r\n    AreNotEqual: __webpack_require__(/*! ./AreNotEqual */ \"./src/ArrayAssert/AreNotEqual.js\"),\r\n    AreEquivalent: __webpack_require__(/*! ./AreEquivalent */ \"./src/ArrayAssert/AreEquivalent.js\"),\r\n    AreNotEquivalent: __webpack_require__(/*! ./AreNotEquivalent */ \"./src/ArrayAssert/AreNotEquivalent.js\"),\r\n    Contains: __webpack_require__(/*! ./Contains */ \"./src/ArrayAssert/Contains.js\"),\r\n    NotContains: __webpack_require__(/*! ./NotContains */ \"./src/ArrayAssert/NotContains.js\"),\r\n    IsSubsetOf: __webpack_require__(/*! ./IsSubsetOf */ \"./src/ArrayAssert/IsSubsetOf.js\"),\r\n    IsNotSubsetOf: __webpack_require__(/*! ./IsNotSubsetOf */ \"./src/ArrayAssert/IsNotSubsetOf.js\"),\r\n}\r\n\r\nmodule.exports = ArrayAssert;\n\n//# sourceURL=webpack://krater.tests/./src/ArrayAssert/index.js?");

/***/ }),

/***/ "./src/AssertFailedError.js":
/*!**********************************!*\
  !*** ./src/AssertFailedError.js ***!
  \**********************************/
/***/ ((module) => {

eval("/**\r\n * Ошибка тестирования.\r\n */\r\nclass AssertFailedError extends Error {\r\n\r\n    /**\r\n     * Создаёт новую ошибку тестирования.\r\n     * @param {*} message - Сообщение.\r\n     */\r\n    constructor(message) {\r\n        super(message);\r\n        this.name = \"AssertFailedError\";\r\n    }\r\n}\r\n\r\nmodule.exports = AssertFailedError;\n\n//# sourceURL=webpack://krater.tests/./src/AssertFailedError.js?");

/***/ }),

/***/ "./src/Assert/AreEqual.js":
/*!********************************!*\
  !*** ./src/Assert/AreEqual.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет равенство двух значений (значение1 == значение2). \r\n * Если значения не равны, то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.Assert.AreEqual\r\n * \r\n * @param {*} expected - Проверяемое значение.\r\n * @param {*} actual - Необходимое значение.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction AreEqual(expected, actual, message) {\r\n    if (expected == actual) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + 'Значения не равны! '\r\n        + `Проверяемое значение: ${expected}. `\r\n        + `Необходимое значение: ${actual}.`\r\n    );\r\n}\r\n\r\nmodule.exports = AreEqual;\n\n//# sourceURL=webpack://krater.tests/./src/Assert/AreEqual.js?");

/***/ }),

/***/ "./src/Assert/AreIdenty.js":
/*!*********************************!*\
  !*** ./src/Assert/AreIdenty.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет эквивалентность двух значений (значение1 === значение2). \r\n * Если значения не эквивалентны, то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.Assert.AreIdenty\r\n * \r\n * @param {*} expected - Проверяемое значение.\r\n * @param {*} actual - Необходимое значение.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction AreIdenty(expected, actual, message) {\r\n    if (expected === actual) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + 'Значения не эквивалентны! '\r\n        + `Проверяемое значение: ${expected}. `\r\n        + `Необходимое значение: ${actual}.`\r\n    );\r\n}\r\n\r\nmodule.exports = AreIdenty;\n\n//# sourceURL=webpack://krater.tests/./src/Assert/AreIdenty.js?");

/***/ }),

/***/ "./src/Assert/AreInstenceOf.js":
/*!*************************************!*\
  !*** ./src/Assert/AreInstenceOf.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет соответствие типа объекта и указанного типа (<значение> instanceof <тип>). \r\n * Если тип объекта не соответствует указанному типу, то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.Assert.AreInstenceOf\r\n * \r\n * @param {object} expected - Проверяемый объект.\r\n * @param {*} type - Необходимый тип.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction AreInstenceOf(expected, type, message) {\r\n    if (typeof expected != 'object') throw TypeError('expected: Параметр не является объектом');\r\n\r\n    if (expected instanceof type) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + `Тип объекта не соответствует '${type.name}'! `\r\n        + `Проверяемое значение: ${expected}. `\r\n        + `Необходимый тип: ${type.name}.`\r\n    );\r\n}\r\n\r\nmodule.exports = AreInstenceOf;\n\n//# sourceURL=webpack://krater.tests/./src/Assert/AreInstenceOf.js?");

/***/ }),

/***/ "./src/Assert/AreNotEqual.js":
/*!***********************************!*\
  !*** ./src/Assert/AreNotEqual.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет неравенство двух значений (значение1 != значение2). \r\n * Если значения равны, то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.Assert.AreNotEqual\r\n * \r\n * @param {*} expected - Проверяемое значение.\r\n * @param {*} actual - Необходимое значение.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction AreNotEqual(expected, actual, message) {\r\n    if (expected != actual) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + 'Значения равны! '\r\n        + `Проверяемое значение: ${expected}. `\r\n        + `Необходимое значение: ${actual}.`\r\n    );\r\n}\r\n\r\nmodule.exports = AreNotEqual;\n\n//# sourceURL=webpack://krater.tests/./src/Assert/AreNotEqual.js?");

/***/ }),

/***/ "./src/Assert/AreNotIdenty.js":
/*!************************************!*\
  !*** ./src/Assert/AreNotIdenty.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет неэквивалентность двух значений (значение1 !== значение2). \r\n * Если значения эквивалентны, то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.Assert.AreNotIdenty\r\n * \r\n * @param {*} expected - Проверяемое значение.\r\n * @param {*} actual - Необходимое значение.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction AreNotIdenty(expected, actual, message) {\r\n    if (expected !== actual) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + 'Значения эквивалентны! '\r\n        + `Проверяемое значение: ${expected}. `\r\n        + `Необходимое значение: ${actual}.`\r\n    );\r\n}\r\n\r\nmodule.exports = AreNotIdenty;\n\n//# sourceURL=webpack://krater.tests/./src/Assert/AreNotIdenty.js?");

/***/ }),

/***/ "./src/Assert/AreNotInstenceOf.js":
/*!****************************************!*\
  !*** ./src/Assert/AreNotInstenceOf.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет соответствие типа объекта и указанного типа (!(<значение> instanceof <тип>)). \r\n * Если тип объекта соответствует указанному типу, то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.Assert.AreNotInstenceOf\r\n * \r\n * @param {object} expected - Проверяемый объект.\r\n * @param {*} type - Необходимый тип.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction AreNotInstenceOf(expected, type, message) {\r\n    if (typeof expected != 'object') throw TypeError('expected: Параметр не является объектом');\r\n    \r\n    if (!(expected instanceof type)) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + `Тип объекта соответствует '${type.name}'! `\r\n        + `Проверяемое значение: ${expected}. `\r\n        + `Необходимый тип: ${type.name}.`\r\n    );\r\n}\r\n\r\nmodule.exports = AreNotInstenceOf;\n\n//# sourceURL=webpack://krater.tests/./src/Assert/AreNotInstenceOf.js?");

/***/ }),

/***/ "./src/Assert/AreNotTypeOf.js":
/*!************************************!*\
  !*** ./src/Assert/AreNotTypeOf.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет несоответствие типа значения и указанного типа (typeof <значение> !== <тип>). \r\n * Если тип значения соответствует указанному типу, то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.Assert.AreNotTypeOf\r\n * \r\n * @param {*} expected - Проверяемое значение.\r\n * @param {string} type - Необходимый тип.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction AreNotTypeOf(expected, type, message) {\r\n    if (typeof type != 'string') throw TypeError('type: Параметр не является строкой');\r\n    \r\n    if (typeof expected !== type) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + `Тип значения соответствует' ${type}'! `\r\n        + `Проверяемое значение: ${expected}. `\r\n        + `Необходимый тип: ${type}.`\r\n    );\r\n}\r\n\r\nmodule.exports = AreNotTypeOf;\n\n//# sourceURL=webpack://krater.tests/./src/Assert/AreNotTypeOf.js?");

/***/ }),

/***/ "./src/Assert/AreTypeOf.js":
/*!*********************************!*\
  !*** ./src/Assert/AreTypeOf.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет соответствие типа значения и  указанного типа (typeof <значение> === <тип>). \r\n * Если тип значения не соответствует указанному типу, то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.Assert.AreTypeOf\r\n * \r\n * @param {*} expected - Проверяемое значение.\r\n * @param {string} type - Необходимый тип.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction AreTypeOf(expected, type, message) {\r\n    if (typeof type != 'string') throw TypeError('type: Параметр не является строкой');\r\n    \r\n    if (typeof expected === type) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + `Тип значения не соответствует '${type}'! `\r\n        + `Проверяемое значение: ${expected}. `\r\n        + `Необходимый тип: ${type}.`\r\n    );\r\n}\r\n\r\nmodule.exports = AreTypeOf;\n\n//# sourceURL=webpack://krater.tests/./src/Assert/AreTypeOf.js?");

/***/ }),

/***/ "./src/Assert/Fail.js":
/*!****************************!*\
  !*** ./src/Assert/Fail.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Генерирует ошибку AssertFailedError.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n * \r\n * @function Krater.Tests.Assert.Fail\r\n * \r\n */\r\n function Fail( message) {\r\n    throw new AssertFailedError('Ошибка!' + ((message == null) ? '' : ` ${String(message)}.`));\r\n}\r\n\r\nmodule.exports = Fail;\n\n//# sourceURL=webpack://krater.tests/./src/Assert/Fail.js?");

/***/ }),

/***/ "./src/Assert/IsFalse.js":
/*!*******************************!*\
  !*** ./src/Assert/IsFalse.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет равенство указанного значения и false (значение == false).\r\n * Если значение не равно false, то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.Assert.IsFalse\r\n * \r\n * @param {*} expected - Проверяемое значение.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction IsFalse(expected, message) {\r\n    if (Boolean(expected) == false) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + 'Значение не равно false! '\r\n        + `Проверяемое значение: ${expected}.`\r\n    );\r\n}\r\n\r\nmodule.exports = IsFalse;\n\n//# sourceURL=webpack://krater.tests/./src/Assert/IsFalse.js?");

/***/ }),

/***/ "./src/Assert/IsNotNull.js":
/*!*********************************!*\
  !*** ./src/Assert/IsNotNull.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет неэквивалентность указанного значения и null (значение !== null). \r\n * Если значение эквивалентно null, то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.Assert.IsNotNull\r\n * \r\n * @param {*} expected - Проверяемое значение.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction IsNotNull(expected, message) {\r\n    if (expected !== null) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + 'Значение эквивалентно null! '\r\n        + `Проверяемое значение: ${expected}.`\r\n    );\r\n}\r\n\r\nmodule.exports = IsNotNull;\n\n//# sourceURL=webpack://krater.tests/./src/Assert/IsNotNull.js?");

/***/ }),

/***/ "./src/Assert/IsNotUndefined.js":
/*!**************************************!*\
  !*** ./src/Assert/IsNotUndefined.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет неэквивалентность указанного значения и undefined (значение !== undefined). \r\n * Если значение эквивалентно undefined, то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.Assert.IsNotUndefined\r\n * \r\n * @param {*} expected - Проверяемое значение.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction IsNotUndefined(expected, message) {\r\n    if (expected !== undefined) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + 'Значение эквивалентно undefined! '\r\n        + `Проверяемое значение: ${expected}.`\r\n    );\r\n}\r\n\r\nmodule.exports = IsNotUndefined;\n\n//# sourceURL=webpack://krater.tests/./src/Assert/IsNotUndefined.js?");

/***/ }),

/***/ "./src/Assert/IsNull.js":
/*!******************************!*\
  !*** ./src/Assert/IsNull.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет эквивалентность указанного значения и null (значение === null). \r\n * Если значение не эквивалентно null, то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.Assert.IsNull\r\n * \r\n * @param {*} expected - Проверяемое значение.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction IsNull(expected, message) {\r\n    if (expected === null) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + 'Значение не эквивалентно null! '\r\n        + `Проверяемое значение: ${expected}.`\r\n    );\r\n}\r\n\r\nmodule.exports = IsNull;\n\n//# sourceURL=webpack://krater.tests/./src/Assert/IsNull.js?");

/***/ }),

/***/ "./src/Assert/IsTrue.js":
/*!******************************!*\
  !*** ./src/Assert/IsTrue.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет равенство указанного значения и true (значение == true).\r\n * Если значение не равно true, то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.Assert.IsTrue\r\n * \r\n * @param {*} expected - Проверяемое значение.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction IsTrue(expected, message) {\r\n    if (Boolean(expected) == true) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + 'Значение не равно true! '\r\n        + `Проверяемое значение: ${expected}.`\r\n    );\r\n}\r\n\r\nmodule.exports = IsTrue;\n\n//# sourceURL=webpack://krater.tests/./src/Assert/IsTrue.js?");

/***/ }),

/***/ "./src/Assert/IsUndefined.js":
/*!***********************************!*\
  !*** ./src/Assert/IsUndefined.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет эквивалентность указанного значения и undefined (значение === undefined). \r\n * Если значение не эквивалентно undefined, то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.Assert.IsUndefined\r\n * \r\n * @param {*} expected - Проверяемое значение.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction IsUndefined(expected, message) {\r\n    if (expected === undefined) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + 'Значение не эквивалентно undefined! '\r\n        + `Проверяемое значение: ${expected}.`\r\n    );\r\n}\r\n\r\nmodule.exports = IsUndefined;\n\n//# sourceURL=webpack://krater.tests/./src/Assert/IsUndefined.js?");

/***/ }),

/***/ "./src/Assert/ThrowError.js":
/*!**********************************!*\
  !*** ./src/Assert/ThrowError.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет генерирует ли указанная функция при выполнении ошибку.\r\n * Если функция при выполнении не генерирует ошибку, то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.Assert.ThrowError\r\n * \r\n * @param {*} func - Выполняемая функция.\r\n * @param {*|*[]} [args] - Параметры, передаваемые в функцию при её выполнении.\r\n * @param {*} [thisArg] - Контекст выполнения функции.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction ThrowError(func, args, thisArg, message) {\r\n    if (typeof func != 'function') throw TypeError('func: Параметр не является функцией');\r\n    if (!Array.isArray(args)) args = [args];\r\n\r\n    try {\r\n        func.call(thisArg, ...args);\r\n    } catch (e) {\r\n        return;\r\n    }\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + 'Функция выполняется без ошибок! '\r\n        + `Функция: ${func.name || \"''\"}. `\r\n        + `Аргументы: ${args}. `\r\n        + `Контекст: ${thisArg}.`\r\n    );\r\n}\r\n\r\nmodule.exports = ThrowError;\n\n//# sourceURL=webpack://krater.tests/./src/Assert/ThrowError.js?");

/***/ }),

/***/ "./src/Assert/ThrowErrorIsType.js":
/*!****************************************!*\
  !*** ./src/Assert/ThrowErrorIsType.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет генерирует ли указанная функция при выполнении ошибку указанного типа.\r\n * Если функция при выполнении не генерирует ошибку указанного типа, то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.Assert.ThrowErrorIsType\r\n * \r\n * @param {*} func - Выполняемая функция.\r\n * @param {*|*[]} [args] - Параметры, передаваемые в функцию при её выполнении.\r\n * @param {*} [thisArg] - Контекст выполнения функции.\r\n * @param {*} [errorType] - Тип ошибки.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction ThrowErrorIsType(func, args, thisArg, errorType, message) {\r\n    if (typeof func != 'function') throw TypeError('func: Параметр не является функцией');\r\n    if (!Array.isArray(args)) args = [args];\r\n    errorType = errorType || Error; \r\n\r\n    try {\r\n        func.call(thisArg, ...args);\r\n    } catch (e) {\r\n        if (e.name === errorType.name) return;\r\n    }\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + `Функция не генерирует ошибку ${errorType.name}! `\r\n        + `Функция: ${func.name || \"''\"}. `\r\n        + `Аргументы: ${args}. `\r\n        + `Контекст: ${thisArg}. `\r\n        + `Тип ошибки: ${errorType.name}.`\r\n    );\r\n}\r\n\r\nmodule.exports = ThrowErrorIsType;\n\n//# sourceURL=webpack://krater.tests/./src/Assert/ThrowErrorIsType.js?");

/***/ }),

/***/ "./src/Assert/index.js":
/*!*****************************!*\
  !*** ./src/Assert/index.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\r\n * @namespace Krater.Tests.Assert\r\n */\r\n\r\nvar Assert = {\r\n    AreEqual: __webpack_require__(/*! ./AreEqual */ \"./src/Assert/AreEqual.js\"),\r\n    AreNotEqual: __webpack_require__(/*! ./AreNotEqual */ \"./src/Assert/AreNotEqual.js\"),\r\n    AreIdenty: __webpack_require__(/*! ./AreIdenty */ \"./src/Assert/AreIdenty.js\"),\r\n    AreNotIdenty: __webpack_require__(/*! ./AreNotIdenty */ \"./src/Assert/AreNotIdenty.js\"),\r\n    Fail: __webpack_require__(/*! ./Fail */ \"./src/Assert/Fail.js\"),\r\n    IsTrue: __webpack_require__(/*! ./IsTrue */ \"./src/Assert/IsTrue.js\"),\r\n    IsFalse: __webpack_require__(/*! ./IsFalse */ \"./src/Assert/IsFalse.js\"),\r\n    IsNull: __webpack_require__(/*! ./IsNull */ \"./src/Assert/IsNull.js\"),\r\n    IsNotNull: __webpack_require__(/*! ./IsNotNull */ \"./src/Assert/IsNotNull.js\"),\r\n    IsUndefined: __webpack_require__(/*! ./IsUndefined */ \"./src/Assert/IsUndefined.js\"),\r\n    IsNotUndefined: __webpack_require__(/*! ./IsNotUndefined */ \"./src/Assert/IsNotUndefined.js\"),\r\n    AreTypeOf: __webpack_require__(/*! ./AreTypeOf */ \"./src/Assert/AreTypeOf.js\"),\r\n    AreNotTypeOf: __webpack_require__(/*! ./AreNotTypeOf */ \"./src/Assert/AreNotTypeOf.js\"),\r\n    AreInstenceOf: __webpack_require__(/*! ./AreInstenceOf */ \"./src/Assert/AreInstenceOf.js\"),\r\n    AreNotInstenceOf: __webpack_require__(/*! ./AreNotInstenceOf */ \"./src/Assert/AreNotInstenceOf.js\"),\r\n    ThrowError: __webpack_require__(/*! ./ThrowError */ \"./src/Assert/ThrowError.js\"),\r\n    ThrowErrorIsType: __webpack_require__(/*! ./ThrowErrorIsType */ \"./src/Assert/ThrowErrorIsType.js\"),\r\n}\r\n\r\nmodule.exports = Assert;\n\n//# sourceURL=webpack://krater.tests/./src/Assert/index.js?");

/***/ }),

/***/ "./src/Krater.Tests.js":
/*!*****************************!*\
  !*** ./src/Krater.Tests.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\r\n * @namespace Krater.Tests\r\n */\r\n\r\n Tests = {\r\n    ArrayAssert: __webpack_require__(/*! ./ArrayAssert */ \"./src/ArrayAssert/index.js\"),\r\n    Assert: __webpack_require__(/*! ./Assert */ \"./src/Assert/index.js\"),\r\n    AssertFailedError: __webpack_require__(/*! ./AssertFailedError */ \"./src/AssertFailedError.js\"),\r\n    StringAssert: __webpack_require__(/*! ./StringAssert */ \"./src/StringAssert/index.js\"),\r\n    Test: __webpack_require__(/*! ./Test */ \"./src/Test.js\"),\r\n    UnitTest: __webpack_require__(/*! ./UnitTest */ \"./src/UnitTest.js\"),\r\n};\r\n\r\nObject.defineProperty(Tests, 'VERSION', {\r\n    value: '1.0.0',\r\n    writable: false\r\n});\r\n\r\nmodule.exports = Tests;\r\n\r\nif (!__webpack_require__.g.Krater) __webpack_require__.g.Krater = {};\r\n__webpack_require__.g.Krater.Tests = Tests;\n\n//# sourceURL=webpack://krater.tests/./src/Krater.Tests.js?");

/***/ }),

/***/ "./src/StringAssert/Contains.js":
/*!**************************************!*\
  !*** ./src/StringAssert/Contains.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет (с учетом регистра) содержит ли строка указанную подстроку. \r\n * Если строка не содержит указанную подстроку, то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.StringAssert.Contains\r\n * \r\n * @param {string} expected - Проверяемая строка.\r\n * @param {string} substring - Подстрока.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction Contains(expected, substring, message) {\r\n    if (typeof expected !== 'string') throw new TypeError('expected: Параметр не является строкой');\r\n    if (typeof substring !== 'string') throw new TypeError('substring: Параметр не является строкой');\r\n\r\n    if (expected.indexOf(substring) >= 0) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + 'Строка не содержит указанную подстроку! '\r\n        + `Проверяемая строка: ${expected}. `\r\n        + `Подстрока: ${substring}.`\r\n    );\r\n}\r\n\r\nmodule.exports = Contains;\n\n//# sourceURL=webpack://krater.tests/./src/StringAssert/Contains.js?");

/***/ }),

/***/ "./src/StringAssert/EndsWith.js":
/*!**************************************!*\
  !*** ./src/StringAssert/EndsWith.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет (с учетом регистра) заканчивается ли строка указанной подстрокой. \r\n * Если строка не заканчивается указанной подстрокой, то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.StringAssert.EndsWith\r\n * \r\n * @param {string} expected - Проверяемая строка.\r\n * @param {string} substring - Подстрока.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction EndsWith(expected, substring, message) {\r\n    if (typeof expected !== 'string') throw new TypeError('expected: Параметр не является строкой');\r\n    if (typeof substring !== 'string') throw new TypeError('substring: Параметр не является строкой');\r\n    \r\n    if (expected.endsWith(substring)) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + 'Строка не заканчивается указанной подстрокой! '\r\n        + `Проверяемая строка: ${expected}. `\r\n        + `Подстрока: ${substring}.`\r\n    );\r\n}\r\n\r\nmodule.exports = EndsWith;\n\n//# sourceURL=webpack://krater.tests/./src/StringAssert/EndsWith.js?");

/***/ }),

/***/ "./src/StringAssert/Matches.js":
/*!*************************************!*\
  !*** ./src/StringAssert/Matches.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет соответствует ли строка регулярному выражению. \r\n * Если строка не соответствует регулярному выражению, то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.StringAssert.Matches\r\n * \r\n * @param {string} expected - Проверяемая строка.\r\n * @param {string} regexp - Регулярное выражение.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction Matches(expected, regexp, message) {\r\n    if (typeof expected !== 'string') throw new TypeError('expected: Параметр не является строкой');\r\n    // if (typeof regexp !== 'string') throw new TypeError('regexp: Параметр не является строкой');\r\n\r\n    if (regexp.test(expected)) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + 'Строка не соответствует регулярному выражению! '\r\n        + `Проверяемая строка: ${expected}. `\r\n        + `Регулярное выражение: ${regexp}.`\r\n    );\r\n}\r\n\r\nmodule.exports = Matches;\n\n//# sourceURL=webpack://krater.tests/./src/StringAssert/Matches.js?");

/***/ }),

/***/ "./src/StringAssert/NotContains.js":
/*!*****************************************!*\
  !*** ./src/StringAssert/NotContains.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет (с учетом регистра) не содержит ли строка указанную подстроку. \r\n * Если строка содержит указанную подстроку, то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.StringAssert.NotContains\r\n * \r\n * @param {string} expected - Проверяемая строка.\r\n * @param {string} substring - Подстрока.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction NotContains(expected, substring, message) {\r\n    if (typeof expected !== 'string') throw new TypeError('expected: Параметр не является строкой');\r\n    if (typeof substring !== 'string') throw new TypeError('substring: Параметр не является строкой');\r\n    \r\n    if (expected.indexOf(substring) < 0) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + 'Строка содержит указанную подстроку! '\r\n        + `Проверяемая строка: ${expected}. `\r\n        + `Подстрока: ${substring}.`\r\n    );\r\n}\r\n\r\nmodule.exports = NotContains;\n\n//# sourceURL=webpack://krater.tests/./src/StringAssert/NotContains.js?");

/***/ }),

/***/ "./src/StringAssert/NotEndsWith.js":
/*!*****************************************!*\
  !*** ./src/StringAssert/NotEndsWith.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет (с учетом регистра) не заканчивается ли строка указанной подстрокой. \r\n * Если строка заканчивается указанной подстрокой, то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.StringAssert.NotEndsWith\r\n * \r\n * @param {string} expected - Проверяемая строка.\r\n * @param {string} substring - Подстрока.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction NotEndsWith(expected, substring, message) {\r\n    if (typeof expected !== 'string') throw new TypeError('expected: Параметр не является строкой');\r\n    if (typeof substring !== 'string') throw new TypeError('substring: Параметр не является строкой');\r\n    \r\n    if (!expected.endsWith(substring)) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + 'Строка заканчивается указанной подстрокой! '\r\n        + `Проверяемая строка: ${expected}. `\r\n        + `Подстрока: ${substring}.`\r\n    );\r\n}\r\n\r\nmodule.exports = NotEndsWith;\n\n//# sourceURL=webpack://krater.tests/./src/StringAssert/NotEndsWith.js?");

/***/ }),

/***/ "./src/StringAssert/NotMatches.js":
/*!****************************************!*\
  !*** ./src/StringAssert/NotMatches.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет не соответствует ли строка регулярному выражению. \r\n * Если строка соответствует регулярному выражению, то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.StringAssert.NotMatches\r\n * \r\n * @param {string} expected - Проверяемая строка.\r\n * @param {string} regexp - Регулярное выражение.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction NotMatches(expected, regexp, message) {\r\n    if (typeof expected !== 'string') throw new TypeError('expected: Параметр не является строкой');\r\n    // if (typeof regexp !== 'string') throw new TypeError('regexp: Параметр не является строкой');\r\n\r\n    if (!regexp.test(expected)) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + 'Строка соответствует регулярному выражению! '\r\n        + `Проверяемая строка: ${expected}. `\r\n        + `Регулярное выражение: ${regexp}.`\r\n    );\r\n}\r\n\r\nmodule.exports = NotMatches;\n\n//# sourceURL=webpack://krater.tests/./src/StringAssert/NotMatches.js?");

/***/ }),

/***/ "./src/StringAssert/NotStartsWith.js":
/*!*******************************************!*\
  !*** ./src/StringAssert/NotStartsWith.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет (с учетом регистра) не начинается ли строка с указанной подстроки. \r\n * Если строка начинается с указанной подстроки, то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.StringAssert.NotStartsWith\r\n * \r\n * @param {string} expected - Проверяемая строка.\r\n * @param {string} substring - Подстрока.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction NotStartsWith(expected, substring, message) {\r\n    if (typeof expected !== 'string') throw new TypeError('expected: Параметр не является строкой');\r\n    if (typeof substring !== 'string') throw new TypeError('substring: Параметр не является строкой');\r\n    \r\n    if (!expected.startsWith(substring)) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + 'Строка начинается с указанной подстроки! '\r\n        + `Проверяемая строка: ${expected}. `\r\n        + `Подстрока: ${substring}.`\r\n    );\r\n}\r\n\r\nmodule.exports = NotStartsWith;\n\n//# sourceURL=webpack://krater.tests/./src/StringAssert/NotStartsWith.js?");

/***/ }),

/***/ "./src/StringAssert/StartsWith.js":
/*!****************************************!*\
  !*** ./src/StringAssert/StartsWith.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var AssertFailedError = __webpack_require__(/*! ../AssertFailedError */ \"./src/AssertFailedError.js\");\r\n\r\n/**\r\n * Проверяет (с учетом регистра) начинается ли строка с указанной подстроки. \r\n * Если строка не начинается с указанной подстроки, то генерируется ошибка AssertFailedError.\r\n * \r\n * @function Krater.Tests.StringAssert.StartsWith\r\n * \r\n * @param {string} expected - Проверяемая строка.\r\n * @param {string} substring - Подстрока.\r\n * @param {string} [message] - Сообщение, которое будет показано при генерации ошибки `AssertFailedError`.\r\n */\r\nfunction StartsWith(expected, substring, message) {\r\n    if (typeof expected !== 'string') throw new TypeError('expected: Параметр не является строкой');\r\n    if (typeof substring !== 'string') throw new TypeError('substring: Параметр не является строкой');\r\n    \r\n    if (expected.startsWith(substring)) return;\r\n\r\n    throw new AssertFailedError(\r\n        ((message == null) ? '' : `${String(message)}. `)\r\n        + 'Строка не начинается с указанной подстроки! '\r\n        + `Проверяемая строка: ${expected}. `\r\n        + `Подстрока: ${substring}.`\r\n    );\r\n}\r\n\r\nmodule.exports = StartsWith;\n\n//# sourceURL=webpack://krater.tests/./src/StringAssert/StartsWith.js?");

/***/ }),

/***/ "./src/StringAssert/index.js":
/*!***********************************!*\
  !*** ./src/StringAssert/index.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\r\n * @namespace Krater.Tests.StringAssert\r\n */\r\n\r\nvar StringAssert = {\r\n    Contains: __webpack_require__(/*! ./Contains */ \"./src/StringAssert/Contains.js\"),\r\n    NotContains: __webpack_require__(/*! ./NotContains */ \"./src/StringAssert/NotContains.js\"),\r\n    StartsWith: __webpack_require__(/*! ./StartsWith */ \"./src/StringAssert/StartsWith.js\"),\r\n    NotStartsWith: __webpack_require__(/*! ./NotStartsWith */ \"./src/StringAssert/NotStartsWith.js\"),\r\n    EndsWith: __webpack_require__(/*! ./EndsWith */ \"./src/StringAssert/EndsWith.js\"),\r\n    NotEndsWith: __webpack_require__(/*! ./NotEndsWith */ \"./src/StringAssert/NotEndsWith.js\"),\r\n    Matches: __webpack_require__(/*! ./Matches */ \"./src/StringAssert/Matches.js\"),\r\n    NotMatches: __webpack_require__(/*! ./NotMatches */ \"./src/StringAssert/NotMatches.js\"),\r\n}\r\n\r\nmodule.exports = StringAssert;\n\n//# sourceURL=webpack://krater.tests/./src/StringAssert/index.js?");

/***/ }),

/***/ "./src/Test.js":
/*!*********************!*\
  !*** ./src/Test.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var UnitTest = __webpack_require__(/*! ./UnitTest */ \"./src/UnitTest.js\");\r\n\r\nconst COLOR_ACTION_TITLE = 'color: darkviolet';\r\nconst COLOR_ACTION_END = 'color: gray';\r\nconst COLOR_INFO = 'color: navy';\r\nconst COLOR_SUCESS = 'color: darkgreen';\r\nconst COLOR_WARN = 'color: orange';\r\nconst COLOR_ERROR = 'color: red';\r\n\r\n/**\r\n * @classdesc\r\n * Предоставляет методы управления юнит-тестами.\r\n * \r\n * @class Test\r\n * @memberof Krater.Tests\r\n */\r\nclass Test {\r\n    static #tests = []\r\n\r\n    /**\r\n     * Проверяет, является ли указанный ресурс тестом.\r\n     * \r\n     * @param {*} source - Ресурс.\r\n     * @return {boolean} true если указанный ресурс является тестом, иначе - false.\r\n     */\r\n    static IsTest(source) {\r\n        if (typeof source != 'function') return false;\r\n\r\n        let proto = source;\r\n        while (proto) {\r\n            if (proto === UnitTest) return true;\r\n            proto = proto.__proto__;\r\n        }\r\n        return false;\r\n    }\r\n\r\n    /**\r\n     * Добавляет указанные тесты в общую очередь тестирования.\r\n     * \r\n     * @param  {...any} tests - Классы тестов для добавления. \r\n     * Все указанные классы должны наследовать от класса `Test`.\r\n     * @return {number} Количество добавленных тестов.\r\n     */\r\n    static Add(...tests) {\r\n        let count = 0;\r\n        console.group(`%cДобавление тестов...`, COLOR_ACTION_TITLE);\r\n        for (const tst of tests) {\r\n            Test.#Validate(tst);\r\n            let testName = Test.#GetSourceName(tst);\r\n\r\n            if (Test.#tests.indexOf() < 0) {\r\n                Test.#tests.push(tst);\r\n                count++;\r\n                console.log(`${testName}... %cУспешно`, COLOR_SUCESS);\r\n            } else {\r\n                console.group(`${testName}... %cПопытка повторного добавления теста`, COLOR_WARN);\r\n                console.log(`${testName} будет добавлен только один раз`, COLOR_WARN);\r\n                console.groupEnd();\r\n            }\r\n        }\r\n        console.log(`%cВыполнено`, COLOR_ACTION_END);\r\n        console.groupEnd();\r\n        return count;\r\n    }\r\n\r\n    /**\r\n     * Запускает указанные тесты.\r\n     * @param {*|*[]} tests - Классы тестов для запуска. \r\n     * @param {*} [force=false] - Если true, тесты не прошедшие проверку будут проигнорированы, \r\n     * а всел остальные тесты запустятся в штатном режиме. \r\n     */\r\n    static Run(tests, force) {\r\n        force = force || false;\r\n        if (!Array.isArray(tests)) tests = [tests];\r\n        \r\n        console.log('%cЗапуск тестирования', COLOR_ACTION_TITLE);\r\n        console.group('%cПроверка...', COLOR_ACTION_TITLE);\r\n        if (force) console.log('%cВключен режим игнорирования ошибок', COLOR_INFO);\r\n        let runTestes = [];\r\n        for (const tst of tests) {\r\n            var tstName = Test.#GetSourceName(tst);\r\n            try {\r\n                Test.#Validate(tst);\r\n                if (runTestes.indexOf(tst) < 0) {\r\n                    console.log(`%c${tstName}... %cУспешно`, COLOR_INFO, COLOR_SUCESS);\r\n                    runTestes.push(tst);\r\n                } else {\r\n                    console.group(`%c${tstName}... %cПопытка повторного определения теста!`, COLOR_INFO, COLOR_WARN);\r\n                    console.log(`%c${tstName} будет выполнен только один раз`, COLOR_WARN);\r\n                    console.groupEnd();\r\n                }\r\n\r\n            } catch (e) {\r\n                if (force) {\r\n                    console.group(`%c${tstName}... %cОшибка! ${e}`, COLOR_INFO, COLOR_ERROR);\r\n                    console.log(`%c${tstName} будет проигнорирован!`, COLOR_WARN);\r\n                    console.groupEnd();\r\n                } else {\r\n                    console.log(`%c${tstName}... %cОшибка! ${e}`, COLOR_INFO, COLOR_ERROR);\r\n                    console.groupEnd();\r\n                    console.log('%cТестирование прервано!', COLOR_ERROR);\r\n                    return;\r\n                }\r\n            }\r\n        }\r\n        console.log('%cПроверка завершена', COLOR_ACTION_END);\r\n        console.groupEnd();\r\n        Test.#DoRun(runTestes);\r\n    }\r\n\r\n    /**\r\n     * Запускает все тесты из общей очереди тестирования.\r\n     */\r\n    static RunAll() {\r\n        console.log('%cЗапуск тестирования', COLOR_ACTION_TITLE);\r\n        console.group('%cПроверка...', COLOR_ACTION_TITLE);\r\n        for (const tst of Test.#tests) {\r\n            console.log(`%c${tst.name}... %cУспешно`, COLOR_INFO, COLOR_SUCESS);\r\n        }\r\n        console.log('%Проверка завершена', COLOR_ACTION_END);\r\n        console.groupEnd();\r\n        Test.#DoRun(Test.#tests);\r\n    }\r\n\r\n    \r\n    static #DoRun = function(tests) {\r\n        if (tests.length == 0) {\r\n            console.log('%cОтсутсвуют тесты для запуска', COLOR_WARN);\r\n            console.log('%cТестирование завершено.', COLOR_ACTION_END);\r\n            return;\r\n        }\r\n\r\n        let statistic = {\r\n            all: 0,\r\n            success: 0,\r\n            errors: 0,\r\n        }\r\n        let testList = Test.#CreateTestList(tests);\r\n\r\n        if (!Test.#Init(testList)) return;\r\n        Test.#Testing(testList, statistic);\r\n        if (!Test.#Shutdown(testList, statistic)) return;\r\n    }\r\n    static #CreateTestList = function(tests) {\r\n        let result = [];\r\n        console.group('%cПостроение очереди тестирования...', COLOR_ACTION_TITLE);\r\n        for (const tst of tests) {\r\n            var t = new tst();\r\n            result.push(t);\r\n            console.log(`%c${tst.name} добавлен в очередь`, COLOR_SUCESS);\r\n        }\r\n        console.log('%cВыполнено', COLOR_ACTION_END);\r\n        console.groupEnd();\r\n        \r\n        return result;\r\n    }\r\n    static #Init = function(tests) {\r\n        try {\r\n            console.group('%cИнициализация...', COLOR_ACTION_TITLE);\r\n            for (const tst of tests) {\r\n                tst.OnInit();\r\n            }\r\n            console.log('%cВыполнено', COLOR_ACTION_END);\r\n            console.groupEnd();\r\n            return true;\r\n        } catch (e) {\r\n            console.log(`%cОшибка инициализации теста `, COLOR_ERROR);\r\n            console.error(' ' + e.stack);\r\n            console.groupEnd();\r\n            console.log('%cТестирование прервано!', COLOR_ERROR);\r\n            return false;\r\n        }\r\n    }\r\n    static #Testing = function(tests, statistic) {\r\n        console.group('%cТестирование...', COLOR_ACTION_TITLE);\r\n        for (const tst of tests) {\r\n            let tstName = tst.__proto__.constructor.name;\r\n            let success = 0;\r\n            let errors = 0;\r\n            try {\r\n                let testKeys = Object.keys(tst);\r\n                testKeys = testKeys.filter(t => typeof tst[t] == 'function' && t.startsWith('Test'));\r\n                statistic.all += testKeys.length;\r\n                console.group(`%c${tstName} Старт`, COLOR_INFO);\r\n                tst.OnTestStart();\r\n                for (const key of testKeys) {\r\n                    try {\r\n                        console.log(`%c${tstName}.${key}...`, COLOR_INFO);\r\n                        tst.OnTestMethodStart();\r\n                        tst[key]();\r\n                        tst.OnTestMethodEnd();\r\n                        success++;\r\n                        console.log(`%cУспешно`, COLOR_SUCESS);\r\n                    } catch (e) {\r\n                        errors++;\r\n                        console.error(e.stack);\r\n                        console.log(`%cПровален`, COLOR_ERROR);\r\n                    }\r\n                }\r\n                tst.OnTestEnd();\r\n                console.log(`%c${tstName} выполнен. %cУспешно ${success}. %cПровалено ${errors}.`, COLOR_ACTION_END, COLOR_SUCESS, COLOR_ERROR);\r\n                console.groupEnd();\r\n                \r\n                statistic.success += success;\r\n                statistic.errors += errors;\r\n            } catch (e) {\r\n                console.error(e.stack);\r\n                console.log(`%c${tstName} не выполнен!`, COLOR_ERROR);\r\n            }\r\n        }\r\n        console.log();\r\n        console.groupEnd();\r\n    }\r\n    static #Shutdown = function(tests, statistic) {\r\n        try {\r\n            console.group('%cЗавершение...', COLOR_ACTION_TITLE);\r\n            for (const tst of tests) {\r\n                tst.OnEnd();\r\n            }\r\n            console.log('%cВыполнено', COLOR_ACTION_END);\r\n            console.groupEnd();\r\n            console.log(`%cТестирование завершено. %cВсего ${statistic.all}. %cУспешно ${statistic.success}. `\r\n                      + `%cПровалено ${statistic.errors}.`, \r\n                      COLOR_ACTION_END, COLOR_INFO, COLOR_SUCESS, COLOR_ERROR);\r\n            return true;\r\n        } catch (e) {\r\n            console.log(`%cОшибка завершения теста `, COLOR_ERROR);\r\n            console.error(' ' + e.stack);\r\n            console.groupEnd();\r\n            console.log('%cТестирование прервано!', COLOR_ERROR);\r\n            return false;\r\n        }\r\n    }\r\n\r\n    static #GetSourceName = function(source) {\r\n        return (typeof source == 'function')\r\n            ? source.name || \"function ''\"\r\n            : source;\r\n    }\r\n    static #Validate = function(source) {\r\n        if (Test.#tests.indexOf(source) >= 0) return;\r\n        if (Test.IsTest(source)) return;\r\n\r\n        let name = Test.#GetSourceName(source);\r\n        throw new TypeError(name + ' не является тестом');\r\n    }\r\n}\r\n\r\nmodule.exports = Test;\n\n//# sourceURL=webpack://krater.tests/./src/Test.js?");

/***/ }),

/***/ "./src/UnitTest.js":
/*!*************************!*\
  !*** ./src/UnitTest.js ***!
  \*************************/
/***/ ((module) => {

eval("/**\r\n * @classdesc\r\n * Базовый класс Юнит-теста.\r\n * \r\n * @class UnitTest\r\n * @memberof Krater.Tests\r\n */\r\nclass UnitTest {\r\n\r\n    /**\r\n     * Создаёт новый Юнит-тест.\r\n     */\r\n    constructor() { }\r\n\r\n    /**\r\n     * Выполняется один раз перед запуском всех тестов текущей сборки.\r\n     */\r\n    OnInit() { }\r\n\r\n    /**\r\n     * Выполняется один раз после завершения всех тестов текущей сборки.\r\n     */\r\n    OnEnd() { }\r\n\r\n    /**\r\n     * Выполняется один раз перед началом выполнения всех тестов этого класса.\r\n     */\r\n    OnTestStart() { }\r\n\r\n    /**\r\n     * Выполняется один раз после завершения выполнения всех тестов этого класса.\r\n     */\r\n    OnTestEnd() { }\r\n\r\n    /**\r\n     * Выполняется каждый раз перед выполнением теста этого класса.\r\n     */\r\n    OnTestMethodStart() { }\r\n\r\n    /**\r\n     * Выполняется каждый раз после выполнения теста этого класса.\r\n     */\r\n    OnTestMethodEnd() { }\r\n}\r\n\r\nmodule.exports = UnitTest;\n\n//# sourceURL=webpack://krater.tests/./src/UnitTest.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Krater.Tests.js");
/******/ 	
/******/ })()
;