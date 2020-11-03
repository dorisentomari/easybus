'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// 前端分页
function frontEndSwitchPage(list, pageNumber, pageSize) {
    if (pageNumber === void 0) { pageNumber = 1; }
    if (pageSize === void 0) { pageSize = 10; }
    return list.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

/* 基础数据类型 */
function isBoolean(value) {
    return Object.prototype.toString.call(value) === '[object Boolean]';
}
function isNumber(value) {
    return Object.prototype.toString.call(value) === '[object Number]';
}
function isString(value) {
    return Object.prototype.toString.call(value) === '[object String]';
}
function isUndefined(value) {
    return Object.prototype.toString.call(value) === '[object Undefined]';
}
function isNull(value) {
    return Object.prototype.toString.call(value) === '[object Null]';
}
function isSymbol(value) {
    return Object.prototype.toString.call(value) === '[object Symbol]';
}
function isNaN(value) {
    return isNumber(value) && value !== +value;
}
function isInt(value) {
    return isNumber(value) && value % 1 === 0;
}
// 偶数
function isEven(value) {
    return isNumber(value) && value % 2 === 0;
}
// 奇数
function isOdd(value) {
    return isNumber(value) && value % 2 === 1;
}
function isPositiveNumber(value) {
    return isNumber(value) && value > 0;
}
function isNegativeNumber(value) {
    return isNumber(value) && value < 0;
}
function isBaseType(value) {
    var methods = [isNumber, isString, isBoolean, isUndefined, isNull, isSymbol];
    for (var i = 0; i < methods.length; i++) {
        var method = methods[i];
        if (method(value)) {
            return true;
        }
    }
    return false;
}
/* 其他数据类型 */
function isMap(value) {
    return Object.prototype.toString.call(value) === '[object Map]';
}
function isWeakMap(value) {
    return Object.prototype.toString.call(value) === '[object WeakMap]';
}
function isSet(value) {
    return Object.prototype.toString.call(value) === '[object Set]';
}
function isWeakSet(value) {
    return Object.prototype.toString.call(value) === '[object WeakSet]';
}
function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
}
function isEmptyArray(value) {
    return isArray(value) && value.length === 0;
}
function isPlainObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
}
function isEmptyObject(value) {
    return isPlainObject(value) && Object.keys(value).length === 0;
}
// 包含文件、日期、函数、正则等对象
function isObject(value) {
    return typeof value === 'object';
}
function isDate(value) {
    return Object.prototype.toString.call(value) === '[object Date]';
}
function isFunction(value) {
    return Object.prototype.toString.call(value) === '[object Function]';
}
function isValidDate(value) {
    try {
        return new Date(value).toString() !== 'Invalid Date';
    }
    catch (err) {
        return false;
    }
}
function isError(value) {
    return Object.prototype.toString.call(value) === '[object Error]';
}
function isHTMLElement(element) {
    var div = document.createElement('div');
    try {
        div.appendChild(element.cloneNode(true));
        return element.nodeType === 1;
    }
    catch (e) {
        return false;
    }
}
function isBrowser() {
    try {
        return typeof window === 'object' && typeof document === 'object' && document.nodeType === 9;
    }
    catch (err) {
        return false;
    }
}
function isNode() {
    return (Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) ===
        '[object process]');
}
function isLeapYear(year) {
    if (!isNumber(year)) {
        return false;
    }
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

function pipeAsyncFunctions(fns) {
    return function (arg) {
        return fns.reduce(function (prev, curr) {
            return prev.then(curr);
        }, Promise.resolve(arg));
    };
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

function promisify(func) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            func.apply(void 0, __spreadArrays(args, [function (err, result) {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(result);
                }]));
        });
    };
}

function arrayElementsTimes(arr) {
    var map = {};
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (!isBaseType(item)) {
            item = JSON.stringify(item);
        }
        if (map[item]) {
            map[item] = map[item] + 1;
        }
        else {
            map[item] = 1;
        }
    }
    return map;
}

function arrayElementsMaxTimes(arr, onlyOne) {
    if (onlyOne === void 0) { onlyOne = false; }
    var map = arrayElementsTimes(arr);
    var keys = Object.keys(map);
    var length = keys.length;
    var result = [];
    var maxTimes = 0;
    for (var i = 0; i < length; i++) {
        var key = keys[i];
        var times = map[key];
        if (times > maxTimes) {
            maxTimes = times;
            result = [{ key: key, times: times }];
        }
        else if (times === maxTimes) {
            result.push({ key: key, times: times });
        }
    }
    return onlyOne ? result[0] : result;
}

/**
 * arrayify value, if value is array, return `value`. if value is not array, return `[value]`;
 *
 * ```typescript
 * // eg. 1
 * let value = 1;
 * value = arrayify(value);
 * // now value is `[1]`;
 *
 * // eg. 2
 * let value = [1];
 * value = arrayify(value);
 * // now value is `[1]`;
 * ```
 *
 * @param {Array|any} value
 * @returns  {Array}
 * */
function arrayify(value) {
    if (isArray(value)) {
        return value;
    }
    return [value];
}

/**
 * calculate number array average;
 *
 * @remark arr element must be number type, not allow string number like '3';
 *
 *
 * ```typescript
 * // eg. 1
 * let average = calculateArrayAverage([]);
 * // now average is `0`;
 *
 * // eg. 2
 * let average = calculateArrayAverage([1, 2, 3, 4, 5]);
 * // now average is `3`;
 *
 * // eg. 3
 * let average = calculateArrayAverage([1, 2, 3, 4, 5, '6', null, undefined, 'a', [], {}]);
 * // now average is `3`;
 * ```
 *
 * @param {Array<number>} arr
 * @param {string} field
 * @returns {number}
 * */
function calculateArrayAverage(arr, field) {
    var len = arr.length;
    if (len === 0) {
        return 0;
    }
    var sum = arr.reduce(function (prev, curr) {
        if (isNumber(curr)) {
            prev += curr;
        }
        else if (isPlainObject(curr) && field) {
            var value = curr[field];
            if (isNumber(value)) {
                prev += value;
            }
        }
        return prev;
    }, 0);
    return sum / len;
}

/**
 * calculate array element max value element;
 *
 * @remark use JavaScript's `Math.max` method; if one element is string number like `'44'`, it regard `'44'` as number 44 and work; But if one element is `'a'` or `undefined` or `object`, you will get `NaN`;
 *
 *
 * ```typescript
 * // eg. 1
 * let maxValue = calculateArrayMaxValue([]);
 * // now maxValue is `0`;
 *
 * // eg. 2
 * let maxValue = calculateArrayMaxValue([1, 2, 3, 4, 5]);
 * // now maxValue is `5`;
 *
 * // eg. 3
 * let maxValue = calculateArrayMaxValue([1, 2, 3, 4, 5, '8', 10]);
 * // now maxValue is `10`;
 *
 * // eg. 4
 * let maxValue = calculateArrayMaxValue([1, 2, 3, 4, 5, 'a', 10]);
 * // now maxValue is `NaN`;
 * ```
 *
 * @param {Array<number>} arr
 * @returns {number}
 * */
function calculateArrayMaxValue(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return Math.max.apply(Math, arr);
}

/**
 * calculate array element min value element;
 *
 * @remark use JavaScript's `Math.min` method; it's like method `calculateArrayMaxValue` @{link};
 *
 *
 * ```typescript
 * // eg. 1
 * let minValue = calculateArrayMinValue([]);
 * // now minValue is `0`;
 *
 * // eg. 2
 * let minValue = calculateArrayMinValue([1, 2, 3, 4, 5]);
 * // now minValue is `1`;
 *
 * // eg. 3
 * let minValue = calculateArrayMinValue([1, 2, 3, 4, 5, '8', 10]);
 * // now minValue is `1`;
 *
 * // eg. 4
 * let minValue = calculateArrayMinValue([1, 2, 3, 4, 5, 'a', 10]);
 * // now minValue is `NaN`;
 * ```
 *
 * @param {Array<number>} arr
 * @returns {number}
 * */
function calculateArrayMinValue(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return Math.min.apply(Math, arr);
}

// 计算差集
function differenceSet(arr1, arr2) {
    var set2 = new Set(arr2);
    var diff = new Set(arr1.filter(function (k) { return !set2.has(k); }));
    return Array.from(diff);
}

function findDuplicateElements(arr) {
    var result = [];
    if (arr.length === 0) {
        return result;
    }
    var map = {};
    var repeatSet = new Set();
    for (var i = 0; i < arr.length; i++) {
        var item = String(arr[i]);
        if (map[item]) {
            repeatSet.add(arr[i]);
        }
        else {
            map[item] = true;
        }
    }
    return Array.from(repeatSet);
}

// 计算交集
function intersection(arr1, arr2) {
    var set2 = new Set(arr2);
    var result = arr1.filter(function (k) { return set2.has(k); });
    return Array.from(result);
}

function matchFieldsByIndex(fields, dataList, key) {
    var result = {};
    for (var i = 0; i < dataList.length; i++) {
        var data = dataList[i];
        var obj = {};
        for (var j = 0; j < fields.length; j++) {
            var field = fields[j];
            obj[field] = data[j];
            if (field === key) {
                result[data[j]] = obj;
            }
        }
    }
    return result;
}

function mergeTwoArray(arr1, arr2, removeRepetition) {
    if (removeRepetition === void 0) { removeRepetition = false; }
    if (removeRepetition) {
        return Array.from(new Set(__spreadArrays(arr1, arr2)));
    }
    return __spreadArrays(arr1, arr2);
}

// 计算并集
function union(arr1, arr2) {
    return Array.from(new Set(__spreadArrays(arr1, arr2)));
}

function hasClassName(elem, className) {
    if (elem) {
        return elem.className.trim().indexOf(className) > -1;
    }
    throw new Error("cannot find " + elem + " element");
}

function addClassName(elem, name) {
    if (!hasClassName(elem, name)) {
        var className = elem.className.trim();
        if (className) {
            elem.className += " " + name;
        }
        else {
            elem.className += name;
        }
    }
}

var AjaxError = /** @class */ (function (_super) {
    __extends(AjaxError, _super);
    function AjaxError(message, config, code, request, response) {
        var _this = _super.call(this, message) || this;
        _this.config = config;
        _this.code = code;
        _this.request = request;
        _this.response = response;
        Object.setPrototypeOf(_this, AjaxError.prototype);
        return _this;
    }
    return AjaxError;
}(Error));
function createError(message, config, code, request, response) {
    return new AjaxError(message, config, code, request, response);
}

function replaceWords(str, key, value, leftMark, rightMark) {
    if (key === void 0) { key = ''; }
    if (leftMark === void 0) { leftMark = '\\{'; }
    if (rightMark === void 0) { rightMark = '\\}'; }
    return str.replace(new RegExp(leftMark + key + rightMark, 'gm'), value);
}

function encodeUrl(value) {
    return encodeURIComponent(value)
        .replace(/%40/g, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%2B/g, '+')
        .replace(/%5B/gi, '(')
        .replace(/%5D/gi, ')');
}

function convertObjToURLString(obj) {
    var str = '';
    if (Object.keys(obj).length === 0) {
        return str;
    }
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            var value = obj[key];
            if (value) {
                str += encodeUrl(key) + "=" + encodeUrl(value) + "&";
            }
        }
    }
    return str.slice(0, str.length - 1);
}

function formatURLPathParam(url, obj) {
    if (obj === void 0) { obj = {}; }
    if (Object.keys(obj).length === 0) {
        return url;
    }
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            var value = obj[key];
            url = replaceWords(url, key, value);
        }
    }
    return url;
}
function buildURL(url, queryParams, pathParams) {
    if (!queryParams) {
        return url;
    }
    url = formatURLPathParam(url, pathParams);
    var queryUrl = convertObjToURLString(queryParams);
    var markIndex = url.indexOf('#');
    if (markIndex !== -1) {
        url = url.slice(0, markIndex);
    }
    if (queryUrl.length > 0) {
        url += (url.indexOf('?') === -1 ? '?' : '') + queryUrl;
    }
    return url;
}

function capitalize(word) {
    if (word) {
        return word.charAt(0).toUpperCase() + word.substr(1);
    }
    return word;
}

function paddingEnd(value, width, padding) {
    if (padding === void 0) { padding = ' '; }
    value = String(value);
    if (padding.length > 1) {
        padding = padding[0];
    }
    return value.length >= width ? value : value + new Array(width - value.length + 1).join(padding);
}

function paddingStart(value, width, padding) {
    if (padding === void 0) { padding = ' '; }
    value = String(value);
    if (padding.length > 1) {
        padding = padding[0];
    }
    return value.length >= width ? value : new Array(width - value.length + 1).join(padding) + value;
}

function parseURLParameter(url) {
    var regexp = /([^&?=]+)=([^&?=]+)/g;
    var obj = {};
    // @ts-ignore
    url.replace(regexp, function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        obj[arg[1]] = arg[2];
    });
    return obj;
}

function trimLeft(val) {
    return val.replace(/^\s*/gi, '');
}

function trimRight(val) {
    return val.replace(/(\s*$)/gi, '');
}

function trim(val, isTrimLeft, isTrimRight) {
    if (isTrimLeft === void 0) { isTrimLeft = true; }
    if (isTrimRight === void 0) { isTrimRight = true; }
    if (isTrimLeft) {
        val = trimLeft(val);
    }
    if (isTrimRight) {
        val = trimRight(val);
    }
    return val;
}

function parseStringToJSON(data) {
    if (isString(data)) {
        try {
            data = JSON.parse(data);
        }
        catch (e) { }
    }
    return data;
}

// 把列表通过某个 key 转换成 object
function transformListToObject(list, key) {
    var map = {};
    for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var newKey = map[key];
        if (!newKey) {
            // @ts-ignore
            map[item[key]] = item;
        }
    }
    return map;
}

var CONTENT_TYPE = 'Content-Type';
function xhr(config) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        var data = config.data, url = config.url, _a = config.method, method = _a === void 0 ? 'get' : _a, _b = config.headers, headers = _b === void 0 ? {} : _b, _c = config.timeout, timeout = _c === void 0 ? 0 : _c, responseType = config.responseType;
        request.responseType = responseType ? responseType : 'json';
        request.timeout = timeout;
        request.open(method.toUpperCase(), url, true);
        Object.keys(headers).forEach(function (name) {
            if (data === null && name.toLowerCase() === CONTENT_TYPE.toLowerCase()) {
                delete headers[name];
            }
            else {
                request.setRequestHeader(name, headers[name]);
            }
        });
        request.onreadystatechange = function () {
            if (request.readyState !== 4) {
                return;
            }
            if (request.status === 0) {
                return;
            }
            var responseHeaders = parseHttpHeaders(request.getAllResponseHeaders());
            var responseData = responseType === 'text' ? request.responseText : request.response;
            var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                request: request,
                config: config,
            };
            handleResponse(response);
        };
        request.onerror = function () {
            reject(createError('Network Error', config, null, request));
        };
        request.ontimeout = function () {
            reject(createError("Timeout of " + timeout + "ms", config, 'ECONNABORTED', request));
        };
        request.send(data);
        function handleResponse(response) {
            var status = response.status;
            if (status >= 200 && status < 400) {
                response.data = parseStringToJSON(response.data);
                return resolve(response);
            }
            else {
                return reject(createError("Request failed with status code " + status, config, 'ECONNABORTED', request, response));
            }
        }
    });
}
function ajax(config) {
    config.url = processRequestUrl(config);
    config.data = processRequestData(config);
    config.headers = processRequestHeaders(config);
    return xhr(config);
}
function processRequestUrl(config) {
    var url = config.url, params = config.params;
    return buildURL(url, params);
}
function processRequestData(config) {
    if (isPlainObject(config.data)) {
        config.data = JSON.stringify(config.data);
    }
    return config.data;
}
function processRequestHeaders(config) {
    var _a = config.headers, headers = _a === void 0 ? {} : _a, data = config.data;
    if (isPlainObject(data)) {
        if (headers && !headers[CONTENT_TYPE]) {
            headers[CONTENT_TYPE] = 'application/json;charset=utf-8';
        }
    }
    return headers;
}
function parseHttpHeaders(headers) {
    var parsed = Object.create(null);
    if (!headers) {
        return parsed;
    }
    headers.split('\r\n').forEach(function (line) {
        var _a = line.split(':'), key = _a[0], value = _a[1];
        key = key.trim().toLowerCase();
        if (!key) {
            return;
        }
        if (value) {
            value = value.trim();
        }
        parsed[key] = value;
    });
    return parsed;
}

function copyToClipboard(str) {
    if (!isBaseType(str)) {
        str = JSON.stringify(str);
    }
    var el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    return true;
}

function deleteClassName(elem, name) {
    if (hasClassName(elem, name)) {
        var reg = new RegExp('(\\s|^)' + name + '(\\s|$)');
        elem.className = elem.className.replace(reg, ' ').trim();
    }
}

function downloadText(filename, text) {
    var el = document.createElement('a');
    el.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    el.setAttribute('download', filename);
    el.style.display = 'none';
    document.body.appendChild(el);
    el.click();
    document.body.removeChild(el);
}

function generateImageDom(file, attributes) {
    if (attributes === void 0) { attributes = {}; }
    var url = window.URL.createObjectURL(file);
    var otherAttributes = '';
    for (var key in attributes) {
        if (attributes.hasOwnProperty(key)) {
            otherAttributes += key + "=" + attributes[key] + " ";
        }
    }
    return "<img src=\"" + url + "\" " + otherAttributes.trim() + " >";
}

function jsonp(options) {
    return new Promise(function (resolve, reject) {
        var _a = options.url, url = _a === void 0 ? '' : _a, callback = options.callback, _b = options.params, params = _b === void 0 ? {} : _b;
        var body = document.querySelector('body');
        var script = document.createElement('script');
        if (body) {
            // @ts-ignore
            window[callback] = function (json) {
                try {
                    resolve(JSON.parse(json));
                }
                catch (e) {
                    resolve(json);
                }
                body.removeChild(script);
                // @ts-ignore
                window[callback] = null;
            };
            params = __assign(__assign({}, params), { callback: callback });
            var str = '';
            for (var key in params) {
                str += key + "=" + params[key] + "&";
            }
            script.src = (url + "?" + str).slice(0, -1);
            body.appendChild(script);
            script.onerror = function (e) {
                return reject(e);
            };
        }
    });
}

function lazyLoadImage(images, defaultSrc, dataSrc) {
    var len = images.length;
    var n = 0;
    return function () {
        var seeHeight = document.documentElement.clientHeight;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        for (var i = n; i < len; i++) {
            if (images[i].offsetTop < seeHeight + scrollTop) {
                if (images[i].getAttribute('src') === defaultSrc) {
                    var _dataSrc = images[i].getAttribute(dataSrc);
                    if (_dataSrc) {
                        images[i].src = _dataSrc;
                    }
                }
            }
        }
    };
}

function replaceClassName(elem, newClassName, oldClassName) {
    deleteClassName(elem, oldClassName);
    addClassName(elem, newClassName);
}

function $selector(selector) {
    if (!selector) {
        return null;
    }
    var type = selector.substring(0, 1);
    if (type === '#') {
        if (document.querySelector) {
            return document.querySelector(selector);
        }
    }
    else if (type === '.') {
        if (document.querySelectorAll) {
            return document.querySelectorAll(selector);
        }
        return document.getElementsByClassName(selector.substring(1));
    }
    else {
        if (document.querySelectorAll) {
            return document.querySelectorAll(selector);
        }
        return document.getElementsByTagName(selector);
    }
}

(function (DateTypeEnum) {
    DateTypeEnum[DateTypeEnum["YEARS"] = 0] = "YEARS";
    DateTypeEnum[DateTypeEnum["MONTHS"] = 1] = "MONTHS";
    DateTypeEnum[DateTypeEnum["DAYS"] = 2] = "DAYS";
    DateTypeEnum[DateTypeEnum["HOURS"] = 3] = "HOURS";
    DateTypeEnum[DateTypeEnum["MINUTES"] = 4] = "MINUTES";
    DateTypeEnum[DateTypeEnum["SECONDS"] = 5] = "SECONDS";
    DateTypeEnum[DateTypeEnum["MILLISECONDS"] = 6] = "MILLISECONDS";
    DateTypeEnum[DateTypeEnum["WEEK"] = 7] = "WEEK";
})(exports.DateTypeEnum || (exports.DateTypeEnum = {}));
(function (MonthEngToNum) {
    MonthEngToNum[MonthEngToNum["Jan"] = 1] = "Jan";
    MonthEngToNum[MonthEngToNum["Feb"] = 2] = "Feb";
    MonthEngToNum[MonthEngToNum["Mar"] = 3] = "Mar";
    MonthEngToNum[MonthEngToNum["Apr"] = 4] = "Apr";
    MonthEngToNum[MonthEngToNum["May"] = 5] = "May";
    MonthEngToNum[MonthEngToNum["Jun"] = 6] = "Jun";
    MonthEngToNum[MonthEngToNum["Jul"] = 7] = "Jul";
    MonthEngToNum[MonthEngToNum["Aug"] = 8] = "Aug";
    MonthEngToNum[MonthEngToNum["Sep"] = 9] = "Sep";
    MonthEngToNum[MonthEngToNum["Oct"] = 10] = "Oct";
    MonthEngToNum[MonthEngToNum["Nov"] = 11] = "Nov";
    MonthEngToNum[MonthEngToNum["Dec"] = 12] = "Dec";
    MonthEngToNum[MonthEngToNum["JAN"] = 1] = "JAN";
    MonthEngToNum[MonthEngToNum["FEB"] = 2] = "FEB";
    MonthEngToNum[MonthEngToNum["MAR"] = 3] = "MAR";
    MonthEngToNum[MonthEngToNum["APR"] = 4] = "APR";
    MonthEngToNum[MonthEngToNum["MAY"] = 5] = "MAY";
    MonthEngToNum[MonthEngToNum["JUN"] = 6] = "JUN";
    MonthEngToNum[MonthEngToNum["JUL"] = 7] = "JUL";
    MonthEngToNum[MonthEngToNum["AUG"] = 8] = "AUG";
    MonthEngToNum[MonthEngToNum["SEP"] = 9] = "SEP";
    MonthEngToNum[MonthEngToNum["OCT"] = 10] = "OCT";
    MonthEngToNum[MonthEngToNum["NOV"] = 11] = "NOV";
    MonthEngToNum[MonthEngToNum["DEC"] = 12] = "DEC";
})(exports.MonthEngToNum || (exports.MonthEngToNum = {}));
(function (WeekEngToNum) {
    WeekEngToNum[WeekEngToNum["Mon"] = 1] = "Mon";
    WeekEngToNum[WeekEngToNum["Tue"] = 2] = "Tue";
    WeekEngToNum[WeekEngToNum["Wen"] = 3] = "Wen";
    WeekEngToNum[WeekEngToNum["Thu"] = 4] = "Thu";
    WeekEngToNum[WeekEngToNum["Fri"] = 5] = "Fri";
    WeekEngToNum[WeekEngToNum["Sat"] = 6] = "Sat";
    WeekEngToNum[WeekEngToNum["Sun"] = 7] = "Sun";
    WeekEngToNum[WeekEngToNum["MON"] = 1] = "MON";
    WeekEngToNum[WeekEngToNum["TUE"] = 2] = "TUE";
    WeekEngToNum[WeekEngToNum["WEN"] = 3] = "WEN";
    WeekEngToNum[WeekEngToNum["THU"] = 4] = "THU";
    WeekEngToNum[WeekEngToNum["FRI"] = 5] = "FRI";
    WeekEngToNum[WeekEngToNum["SAT"] = 6] = "SAT";
    WeekEngToNum[WeekEngToNum["SUN"] = 7] = "SUN";
})(exports.WeekEngToNum || (exports.WeekEngToNum = {}));
var MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 29];
var MONTH_NUMBER = 12;

// 注意，返回的 month，0 是 1 月。
function breakDateTime(date) {
    if (date === void 0) { date = new Date(); }
    date = new Date(date);
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var milliseconds = date.getMilliseconds();
    var weekday = date.getDay();
    return { year: year, month: month, day: day, hour: hour, minute: minute, second: second, milliseconds: milliseconds, weekday: weekday };
}

function formatTimeToArray(date) {
    if (date === void 0) { date = new Date(); }
    var _a = breakDateTime(date), hour = _a.hour, minute = _a.minute, second = _a.second;
    var newHour = paddingStart(hour, 2, '0');
    var newMinute = paddingStart(minute, 2, '0');
    var newSecond = paddingStart(second, 2, '0');
    return [newHour, newMinute, newSecond];
}

function formatTime(date, dateTimeOptions) {
    if (date === void 0) { date = new Date(); }
    if (dateTimeOptions === void 0) { dateTimeOptions = {}; }
    var _a = dateTimeOptions.timeMark, timeMark = _a === void 0 ? ':' : _a;
    return formatTimeToArray(date).join(timeMark);
}

function formatDateToArray(date) {
    if (date === void 0) { date = new Date(); }
    var _a = breakDateTime(date), year = _a.year, month = _a.month, day = _a.day;
    var newYear = String(year);
    var newMonth = paddingStart(month + 1, 2, '0');
    var newDay = paddingStart(day, 2, '0');
    var shortYear = newYear.slice(2);
    return [newYear, newMonth, newDay, shortYear];
}

function formatDate(date, dateTimeOptions) {
    if (date === void 0) { date = new Date(); }
    if (dateTimeOptions === void 0) { dateTimeOptions = {}; }
    var _a = dateTimeOptions.dateMark, dateMark = _a === void 0 ? '-' : _a;
    return formatDateToArray(date).slice(0, 3).join(dateMark);
}

function formatDateToCn(date, options) {
    if (date === void 0) { date = new Date(); }
    if (options === void 0) { options = {}; }
    var _a = options.yearCn, yearCn = _a === void 0 ? '年' : _a, _b = options.monthCn, monthCn = _b === void 0 ? '月' : _b, _c = options.dayCn, dayCn = _c === void 0 ? '日' : _c;
    var arr = formatDateToArray(date);
    return "" + arr[0] + yearCn + arr[1] + monthCn + arr[2] + dayCn;
}

function formatTimeToCn(date, options) {
    if (date === void 0) { date = new Date(); }
    if (options === void 0) { options = {}; }
    var _a = options.hourCn, hourCn = _a === void 0 ? '时' : _a, _b = options.minuteCn, minuteCn = _b === void 0 ? '分' : _b, _c = options.secondCn, secondCn = _c === void 0 ? '秒' : _c;
    var arr = formatTimeToArray(date);
    return "" + arr[0] + hourCn + arr[1] + minuteCn + arr[2] + secondCn;
}

function formatDateTime(date, dateTimeOptions) {
    if (date === void 0) { date = new Date(); }
    if (dateTimeOptions === void 0) { dateTimeOptions = {}; }
    var needCn = dateTimeOptions.needCn;
    if (needCn) {
        return formatDateToCn(date, dateTimeOptions) + " " + formatTimeToCn(date);
    }
    return formatDate(date, dateTimeOptions) + " " + formatTime(date);
}

function addDateTime(startDate, unit, value) {
    if (startDate === void 0) { startDate = new Date(); }
    if (unit === void 0) { unit = exports.DateTypeEnum.DAYS; }
    if (value === void 0) { value = 0; }
    var _a = breakDateTime(new Date(startDate)), year = _a.year, month = _a.month, day = _a.day, hour = _a.hour, minute = _a.minute, second = _a.second, milliseconds = _a.milliseconds;
    if (!isNumber(value)) {
        throw new TypeError("addDateTime: expect `value` " + value + " is number, but got " + typeof value);
    }
    switch (unit) {
        case exports.DateTypeEnum.YEARS:
            return formatDateTime(new Date(year + value, month, day, hour, minute, second, milliseconds));
        case exports.DateTypeEnum.MONTHS:
            return formatDateTime(new Date(year, month + value, day, hour, minute, second, milliseconds));
        case exports.DateTypeEnum.DAYS:
            return formatDateTime(new Date(year, month, day + value, hour, minute, second, milliseconds));
        case exports.DateTypeEnum.HOURS:
            return formatDateTime(new Date(year, month, day, hour + value, minute, second, milliseconds));
        case exports.DateTypeEnum.MINUTES:
            return formatDateTime(new Date(year, month, day, hour, minute + value, second, milliseconds));
        case exports.DateTypeEnum.SECONDS:
            return formatDateTime(new Date(year, month, day, hour, minute, second + value, milliseconds));
    }
}

function intDivCeil(a, b) {
    return Math.ceil(a / b);
}

function intDiv(a, b) {
    return Math.floor(a / b);
}

var phoneRegexp = /^1\d{10}$/g;
function isPhone(phone) {
    return phoneRegexp.test(phone);
}
var emailRegexp = /^[0-9a-zA-Z]+@[0-9a-zA-Z\-]+\.[0-9a-zA-Z]+/;
function isEmail(email) {
    return emailRegexp.test(email);
}
var stringNumberRegexp = /^\d+$/;

function isStringNumber(value) {
    return stringNumberRegexp.test(value);
}

function parseToNumber(value) {
    return parseInt(value, 10);
}

function diffDateTime(startDate, endDate, mode) {
    if (mode === void 0) { mode = exports.DateTypeEnum.DAYS; }
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    var diff = +endDate - +startDate;
    var startYear = startDate.getFullYear();
    var endYear = endDate.getFullYear();
    var diffYears = endYear - startYear;
    switch (mode) {
        case exports.DateTypeEnum.YEARS:
            return diffYears;
        case exports.DateTypeEnum.MONTHS:
            return diffYears * 12 - startDate.getMonth() + endDate.getMonth();
        case exports.DateTypeEnum.DAYS:
            return intDiv(diff, 1000 * 60 * 60 * 24);
        case exports.DateTypeEnum.HOURS:
            return intDiv(diff, 1000 * 60 * 60);
        case exports.DateTypeEnum.MINUTES:
            return intDiv(diff, 1000 * 60);
        case exports.DateTypeEnum.SECONDS:
            return intDiv(diff, 1000);
    }
}

// 转换时间 18:25:30 为当天的秒数
function timeToSeconds(time, mark) {
    if (mark === void 0) { mark = ':'; }
    var timeArray = time.split(mark);
    var hoursSeconds = parseToNumber(timeArray[0]) * 60 * 60;
    var minutesSeconds = parseToNumber(timeArray[1]) * 60;
    var seconds = parseInt(timeArray[2], 10);
    return hoursSeconds + minutesSeconds + seconds;
}

var index = {};

// 随机颜色 16 进制
function randomColor(needUpper) {
    if (needUpper === void 0) { needUpper = true; }
    var str = '#' + Math.random().toString(16).slice(2, 8);
    if (needUpper) {
        return str.toUpperCase();
    }
    return str;
}

// 随机区间数字
function randomNumber(minNumber, maxNumber, needInt) {
    if (minNumber === void 0) { minNumber = 0; }
    if (maxNumber === void 0) { maxNumber = 10000; }
    if (needInt === void 0) { needInt = true; }
    var res = Math.random() * (maxNumber - minNumber + 1) + minNumber;
    return needInt ? parseInt(res.toString(), 10) : res;
}

// 随机字符串
function randomString(maxLength) {
    if (maxLength === void 0) { maxLength = 16; }
    var str = '';
    while (str.length <= maxLength) {
        str += Math.random().toString(32).substr(2).toUpperCase();
    }
    return str;
}

var fields = ['name', 'age', 'home'];
var dataList = [
    ['jack', 18, 'shanghai'],
    ['mark', 19, 'beijing'],
    ['tom', 20, 'hongkong'],
];
console.log(matchFieldsByIndex(fields, dataList, 'name'));

exports.$selector = $selector;
exports.AjaxError = AjaxError;
exports.MONTH_DAYS = MONTH_DAYS;
exports.MONTH_NUMBER = MONTH_NUMBER;
exports.addClassName = addClassName;
exports.addDateTime = addDateTime;
exports.ajax = ajax;
exports.arrayElementsMaxTimes = arrayElementsMaxTimes;
exports.arrayElementsTimes = arrayElementsTimes;
exports.arrayify = arrayify;
exports.breakDateTime = breakDateTime;
exports.buildURL = buildURL;
exports.calculateArrayAverage = calculateArrayAverage;
exports.calculateArrayMaxValue = calculateArrayMaxValue;
exports.calculateArrayMinValue = calculateArrayMinValue;
exports.capitalize = capitalize;
exports.convertObjToURLString = convertObjToURLString;
exports.copyToClipboard = copyToClipboard;
exports.createError = createError;
exports.deleteClassName = deleteClassName;
exports.diffDateTime = diffDateTime;
exports.differenceSet = differenceSet;
exports.downloadText = downloadText;
exports.emailRegexp = emailRegexp;
exports.encodeUrl = encodeUrl;
exports.findDuplicateElements = findDuplicateElements;
exports.formatDate = formatDate;
exports.formatDateTime = formatDateTime;
exports.formatDateToArray = formatDateToArray;
exports.formatDateToCn = formatDateToCn;
exports.formatTime = formatTime;
exports.formatTimeToArray = formatTimeToArray;
exports.formatTimeToCn = formatTimeToCn;
exports.frontEndSwitchPage = frontEndSwitchPage;
exports.generateImageDom = generateImageDom;
exports.hasClassName = hasClassName;
exports.intDiv = intDiv;
exports.intDivCeil = intDivCeil;
exports.intersection = intersection;
exports.isArray = isArray;
exports.isBaseType = isBaseType;
exports.isBoolean = isBoolean;
exports.isBrowser = isBrowser;
exports.isDate = isDate;
exports.isEmail = isEmail;
exports.isEmptyArray = isEmptyArray;
exports.isEmptyObject = isEmptyObject;
exports.isError = isError;
exports.isEven = isEven;
exports.isFunction = isFunction;
exports.isHTMLElement = isHTMLElement;
exports.isInt = isInt;
exports.isLeapYear = isLeapYear;
exports.isMap = isMap;
exports.isNaN = isNaN;
exports.isNegativeNumber = isNegativeNumber;
exports.isNode = isNode;
exports.isNull = isNull;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isOdd = isOdd;
exports.isPhone = isPhone;
exports.isPlainObject = isPlainObject;
exports.isPositiveNumber = isPositiveNumber;
exports.isSet = isSet;
exports.isString = isString;
exports.isStringNumber = isStringNumber;
exports.isSymbol = isSymbol;
exports.isUndefined = isUndefined;
exports.isValidDate = isValidDate;
exports.isWeakMap = isWeakMap;
exports.isWeakSet = isWeakSet;
exports.jsonp = jsonp;
exports.lazyLoadImage = lazyLoadImage;
exports.matchFieldsByIndex = matchFieldsByIndex;
exports.mergeTwoArray = mergeTwoArray;
exports.paddingEnd = paddingEnd;
exports.paddingStart = paddingStart;
exports.parseStringToJSON = parseStringToJSON;
exports.parseToNumber = parseToNumber;
exports.parseURLParameter = parseURLParameter;
exports.phoneRegexp = phoneRegexp;
exports.pipeAsyncFunctions = pipeAsyncFunctions;
exports.promisify = promisify;
exports.randomColor = randomColor;
exports.randomNumber = randomNumber;
exports.randomString = randomString;
exports.replaceClassName = replaceClassName;
exports.replaceWords = replaceWords;
exports.stringNumberRegexp = stringNumberRegexp;
exports.timeToSeconds = timeToSeconds;
exports.transformListToObject = transformListToObject;
exports.trim = trim;
exports.trimLeft = trimLeft;
exports.trimRight = trimRight;
exports.union = union;
