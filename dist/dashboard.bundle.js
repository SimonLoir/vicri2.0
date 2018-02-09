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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IndexOutOfArrayExecption = /** @class */ (function () {
    function IndexOutOfArrayExecption(message) {
        this.message = message;
        this.name = "IndexOutOfArrayException";
    }
    return IndexOutOfArrayExecption;
}());
exports.IndexOutOfArrayExecption = IndexOutOfArrayExecption;
var ExtJsObject = /** @class */ (function () {
    function ExtJsObject(element, e_index) {
        var re;
        if (typeof (element) === "string") {
            re = document.querySelectorAll(element);
            if (e_index != undefined) {
                re = [re[e_index]];
            }
        }
        else if (element == undefined || element == document) {
            /**
             * @param {Function} toDo function that is called when the document has been loaded
             */
            this.ready = function (toDo) {
                document.addEventListener("DOMContentLoaded", toDo);
            };
            return this;
        }
        else if (typeof (element) === "object") {
            if (element.length == undefined) {
                re = [element];
            }
            else if (e_index != undefined) {
                re = [element[e_index]];
            }
            else {
                re = element;
            }
        }
        else if (element.type == "ExtJsObject") {
            return element;
        }
        else {
            return;
        }
        this.type = "ExtJsObject";
        this.node = re;
    }
    /**
     * @param {String} html HTML to put inside the element or undefined or nothing
     * @return {String|Object} HTML that is inside the first element or the current instance.
     */
    ExtJsObject.prototype.html = function (html) {
        if (html != undefined) {
            for (var i = 0; i < this.node.length; i++) {
                var e = this.node[i];
                if (typeof (html) === "string" || typeof (html) === "number") {
                    e.innerHTML = html;
                }
            }
            return this;
        }
        else {
            return this.node[0].innerHTML;
        }
    };
    /**
     * @param {String} text text to put inside the element or undefined or nothing
     * @return {String|Object} text that is inside the first element or the current instance.
     */
    ExtJsObject.prototype.text = function (text) {
        if (text != undefined) {
            for (var i = 0; i < this.node.length; i++) {
                var e = this.node[i];
                if (typeof (text) === "string" || typeof (text) === "number") {
                    e.innerText = text;
                }
            }
            return this;
        }
        else {
            return this.node[0].innerText;
        }
    };
    /**
     * @param {Function|Undefined} toDo function that is called when somebody clicks on the element  or undefined or nothing
     * @param {String|Undefined} element specifies the element on which we are going to listen the click.
     */
    ExtJsObject.prototype.click = function (toDo, element) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (element === undefined) {
                if (toDo !== undefined) {
                    e.addEventListener("click", toDo);
                }
                else {
                    e.click();
                }
            }
            else if (toDo !== undefined) {
                var x = e;
                e.addEventListener("click", function (event) {
                    if (x.querySelector(element) == event.target) {
                        var xe = x.querySelector(element);
                        xe.prototype.toDo = toDo;
                        xe.toDo();
                    }
                });
            }
            else {
                var x = e;
                var xe = x.querySelector(element);
                xe.click();
            }
        }
        return this;
    };
    /**
     * @param index index of the element or undefined or nothing
     * @return {Object} a DOM element
     */
    ExtJsObject.prototype.get = function (index) {
        if (index != undefined) {
            if (this.node[index] == undefined)
                throw new IndexOutOfArrayExecption("ExtJsObject.get undefined index node[" + index + "]");
            return this.node[index];
        }
        else {
            if (this.node[0] == undefined)
                throw new IndexOutOfArrayExecption("ExtJsObject.get undefined index node[0]");
            return this.node[0];
        }
    };
    /**
     * @param value the height of the element (and units (em / px / cm, etc)) or undefined or nothing
     * @return {Object|Number} Object if value != undefined and Number if value == undefined
     */
    ExtJsObject.prototype.height = function (value) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (value !== undefined) {
                e.style.height = value;
            }
            else {
                return e.offsetHeight;
            }
        }
        return this;
    };
    /**
     * @param value the width of the element (and units (em / px / cm, etc)) or undefined or nothing
     * @return {Object|Number} Object if value != undefined and Number if value == undefined
     */
    ExtJsObject.prototype.width = function (value) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (value !== undefined) {
                e.style.width = value;
            }
            else {
                return e.offsetWidth;
            }
        }
        return this;
    };
    /**
     * @param classx class to add to the classlist of the element
     * @return {Object} the current instance of ExtJs
     */
    ExtJsObject.prototype.addClass = function (classx) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            e.classList.add(classx);
        }
        return this;
    };
    /**
     * @param classx class to remove from the classlist of the element
     * @return {Object} the current instance of ExtJs
     */
    ExtJsObject.prototype.removeClass = function (classx) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            e.classList.remove(classx);
        }
        return this;
    };
    /**
     * Delete the element(s)
     */
    ExtJsObject.prototype.remove = function () {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            e.parentElement.removeChild(e);
        }
    };
    /**
     * @param element_type element to createElement
     * @return {Array} element list in an ExtJsObject
     */
    ExtJsObject.prototype.child = function (element_type) {
        var e_list = [];
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            var elem = document.createElement(element_type);
            e.appendChild(elem);
            e_list.push(elem);
        }
        return $(e_list);
    };
    /**
     * @param prop The css proprety that we want to modify.
     * @param value The value that we want to assign to that property
     * @param i the index of the element (optional)
     */
    ExtJsObject.prototype.css = function (prop, value, i) {
        var y = i;
        if (i == undefined) {
            i = 0;
        }
        if (value == undefined) {
            return this.node[i].style[prop];
        }
        else if (y != undefined) {
            this.node[i].style[prop] = value;
            return this;
        }
        else {
            for (var i_1 = 0; i_1 < this.node.length; i_1++) {
                var e = this.node[i_1];
                e.style[prop] = value;
            }
            return this;
        }
    };
    /**
     * @param attr The attribute that we want to modify
     * @param value The value that we want to assign to that atribute
     * @param i the index of the element (optional)
     */
    ExtJsObject.prototype.attr = function (attr, value, i) {
        var y = i;
        if (i == undefined) {
            i = 0;
        }
        if (value == undefined) {
            return this.node[i].getAttribute(attr);
        }
        else if (y != undefined) {
            this.node[i].style[attr] = value;
            return this;
        }
        else {
            for (var i_2 = 0; i_2 < this.node.length; i_2++) {
                var e = this.node[i_2];
                e.setAttribute(attr, value);
            }
            return this;
        }
    };
    /**
     * Returns the nearest parent of the element's
     * @param selector The selector of the nearest parent
     */
    ExtJsObject.prototype.parent = function (selector) {
        var parents = [];
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (selector == undefined) {
                parents.push(e.parentElement);
            }
            else {
                parents.push(e.closest(selector));
            }
        }
        return $(parents);
    };
    /**
     * @param {String} html Text to put inside the element or undefined or nothing
     * @return {String|Object} Text that is inside the first element or the current instance.
     */
    ExtJsObject.prototype.value = function (text) {
        if (text != undefined) {
            for (var i = 0; i < this.node.length; i++) {
                var e = this.node[i];
                if (typeof (text) === "string" || typeof (text) === "number") {
                    e.value = text;
                }
            }
            return this;
        }
        else {
            var node = this.node[0];
            return this.node[0].value;
        }
    };
    /**
     * @param {Function|Undefined} toDo function that is called when somebody keypress on the element  or undefined or nothing
     * @param {String|Undefined} element specifies the element on which we are going to listen the keypress.
     */
    ExtJsObject.prototype.keypress = function (toDo, element) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (element === undefined) {
                if (toDo !== undefined) {
                    e.addEventListener("keypress", toDo);
                }
            }
            else if (toDo !== undefined) {
                var x = e;
                e.addEventListener("keypress", function (event) {
                    if (x.querySelector(element) == event.target) {
                        var xe = x.querySelector(element);
                        xe.prototype.toDo = toDo;
                        xe.toDo();
                    }
                });
            }
        }
        return this;
    };
    /**
     * @param {Function|Undefined} toDo function that is called when somebody input on the element  or undefined or nothing
     * @param {String|Undefined} element specifies the element on which we are going to listen the input.
     */
    ExtJsObject.prototype.input = function (toDo, element) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (element === undefined) {
                if (toDo !== undefined) {
                    e.addEventListener("input", toDo);
                }
            }
            else if (toDo !== undefined) {
                var x = e;
                e.addEventListener("input", function (event) {
                    if (x.querySelector(element) == event.target) {
                        var xe = x.querySelector(element);
                        xe.prototype.toDo = toDo;
                        xe.toDo();
                    }
                });
            }
        }
        return this;
    };
    /**
     * @param {Function|Undefined} toDo function that is called when somebody keydown on the element  or undefined or nothing
     * @param {String|Undefined} element specifies the element on which we are going to listen the keydown.
     */
    ExtJsObject.prototype.keydown = function (toDo, element) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (element === undefined) {
                if (toDo !== undefined) {
                    e.addEventListener("keydown", toDo);
                }
            }
            else if (toDo !== undefined) {
                var x = e;
                e.addEventListener("keydown", function (event) {
                    if (x.querySelector(element) == event.target) {
                        var xe = x.querySelector(element);
                        xe.prototype.toDo = toDo;
                        xe.toDo();
                    }
                });
            }
        }
        return this;
    };
    /**
     * @param {Function|Undefined} toDo function that is called when somebody change on the element  or undefined or nothing
     * @param {String|Undefined} element specifies the element on which we are going to listen the change.
     */
    ExtJsObject.prototype.change = function (toDo, element) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (element === undefined) {
                if (toDo !== undefined) {
                    e.addEventListener("change", toDo);
                }
            }
            else if (toDo !== undefined) {
                var x = e;
                e.addEventListener("change", function (event) {
                    if (x.querySelector(element) == event.target) {
                        var xe = x.querySelector(element);
                        xe.prototype.toDo = toDo;
                        xe.toDo();
                    }
                });
            }
        }
        return this;
    };
    /**
     * @param {Function|Undefined} toDo function that is called when somebody keyup on the element  or undefined or nothing
     * @param {String|Undefined} element specifies the element on which we are going to listen the keyup.
     */
    ExtJsObject.prototype.keyup = function (toDo, element) {
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            if (element === undefined) {
                if (toDo !== undefined) {
                    e.addEventListener("keyup", toDo);
                }
            }
            else if (toDo !== undefined) {
                var x = e;
                e.addEventListener("keyup", function (event) {
                    if (x.querySelector(element) == event.target) {
                        var xe = x.querySelector(element);
                        xe.prototype.toDo = toDo;
                        xe.toDo();
                    }
                });
            }
        }
        return this;
    };
    /**
     * Returns the previous sibling of an element or a set of elements
     */
    ExtJsObject.prototype.prevSibling = function () {
        var siblings = [];
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            siblings.push(e.previousSibling);
        }
        return $(siblings);
    };
    /**
     * Returns the next sibling of an element or a set of elements
     */
    ExtJsObject.prototype.nextSibling = function () {
        var siblings = [];
        for (var i = 0; i < this.node.length; i++) {
            var e = this.node[i];
            siblings.push(e.nextSibling);
        }
        return $(siblings);
    };
    /**
     * Calls a callback for each element
     */
    ExtJsObject.prototype.forEach = function (callback) {
        this.node.forEach(function (element) {
            callback.bind(element)();
        });
    };
    return ExtJsObject;
}());
exports.ExtJsObject = ExtJsObject;
var AjaxRequest = /** @class */ (function () {
    function AjaxRequest() {
    }
    /**
    * @param {String} url URL of the resource
    * @param {Function} callback function which is called when the request has been performed correctly
    * @param {Function} error_callback function which is called when the request has not been performed correctly
    */
    AjaxRequest.prototype.GET = function (url, callback, error_callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                callback(xhttp.responseText);
            }
            else if (xhttp.readyState == 4) {
                if (error_callback != undefined) {
                    try {
                        error_callback();
                    }
                    catch (e) {
                    }
                }
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    };
    /**
    * @param {String} url URL of the resource
    * @param {Function} callback function which is called when the request has been performed correctly
    * @param {Function} error_callback function which is called when the request has not been performed correctly
    */
    AjaxRequest.prototype.DELETE = function (url, callback, error_callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                callback(xhttp.responseText);
            }
            else if (xhttp.readyState == 4) {
                if (error_callback != undefined) {
                    try {
                        error_callback();
                    }
                    catch (e) {
                    }
                }
            }
        };
        xhttp.open("GET", url, true);
        xhttp.setRequestHeader("x-http-method-override", "DELETE");
        xhttp.send();
    };
    /**
    * @param {String} url URL of the resource
    * @param {Array} data assoc array with the data that will be sent
    * @param {Function} callback function which is called when the request has been performed correctly
    * @param {Function} error_callback function which is called when the request has not been performed correctly
    */
    AjaxRequest.prototype.POST = function (url, data, callback, error_callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                callback(xhttp.responseText);
            }
            else if (xhttp.readyState == 4) {
                if (error_callback != undefined) {
                    try {
                        error_callback();
                    }
                    catch (e) {
                    }
                }
            }
        };
        xhttp.open("POST", url, true);
        var keys = Object.keys(data);
        var d = "";
        for (var i = 0; i < keys.length; i++) {
            if (i !== 0) {
                d = d + "&";
            }
            d = d + keys[i] + "=" + data[keys[i]];
        }
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(d);
    };
    /**
    * @param {String} url URL of the resource
    * @param {Array} data assoc array with the data that will be sent
    * @param {Function} callback function which is called when the request has been performed correctly
    * @param {Function} error_callback function which is called when the request has not been performed correctly
    */
    AjaxRequest.prototype.PUT = function (url, data, callback, error_callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                callback(xhttp.responseText);
            }
            else if (xhttp.readyState == 4) {
                if (error_callback != undefined) {
                    try {
                        error_callback();
                    }
                    catch (e) {
                    }
                }
            }
        };
        xhttp.open("POST", url, true);
        var keys = Object.keys(data);
        var d = "";
        for (var i = 0; i < keys.length; i++) {
            if (i !== 0) {
                d = d + "&";
            }
            d = d + keys[i] + "=" + data[keys[i]];
        }
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.setRequestHeader("x-http-method-override", "PUT");
        xhttp.send(d);
    };
    return AjaxRequest;
}());
exports.AR = new AjaxRequest();
/**
 *
 * @param {String|Object|Array} e
 * @param {Number} index
 */
function $(e, index) {
    if (e != undefined) {
        return new ExtJsObject(e, index);
    }
    else {
        return this;
    }
}
exports.$ = $;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(2);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var extjs_1 = __webpack_require__(0);
var c_error = "Erreur de communication avec le serveur";
var SharedModel = /** @class */ (function () {
    function SharedModel() {
        this.api_url = "api";
    }
    /**
     * Logs the user out.
     */
    SharedModel.prototype.logout = function () {
        extjs_1.AR.GET(this.api_url + 'api?res=logout', function () { return window.location.href = "login"; }, function () { return alert(c_error); });
    };
    /**
     * Logs the user in or checks if the user is logged in.
     * @param credentials User's credentials
     * @param callback Success callback
     * @param error_callback Error callback
     */
    SharedModel.prototype.login = function (credentials, callback, error_callback) {
        if (credentials == undefined) {
            extjs_1.AR.GET(this.api_url + 'api?res=login', function (data) {
                var d;
                try {
                    d = JSON.parse(data);
                }
                catch (error) {
                    d = { isConnected: false };
                }
                if (d.isConnected == true) {
                    if (callback != undefined) {
                        callback(d);
                    }
                }
                else if (error_callback != undefined) {
                    error_callback(d);
                }
            });
        }
        else {
            var user_email = credentials.email;
            var user_password = credentials.password;
            var keep_connection = credentials.keep_connection;
            try {
                extjs_1.AR.POST(this.api_url + 'api/index.php?res=login&keep_connection=' + keep_connection, {
                    user_email: user_email, user_password: user_password
                }, function (data) {
                    var d;
                    try {
                        d = JSON.parse(data);
                    }
                    catch (error) {
                        d = { isConnected: false };
                    }
                    if (d.isConnected == true) {
                        if (callback != undefined) {
                            callback(d);
                        }
                    }
                    else if (error_callback != undefined) {
                        error_callback();
                    }
                }, function () {
                    alert(c_error);
                });
            }
            catch (error) {
            }
        }
    };
    return SharedModel;
}());
exports.SharedModel = SharedModel;
var P = /** @class */ (function () {
    function P() {
        this.isDb = false;
    }
    /**
     * Gets the value associated with a key (needle) in a query string
     * @param needle The key to which the value is associated
     */
    P.prototype.get = function (needle) {
        var url = this._hash;
        var informations = url.split(";");
        for (var i = 0; i < informations.length; i++) {
            var info = informations[i];
            var i_split = info.split('=');
            if (i_split[0] == needle) {
                return i_split[1];
            }
        }
        return "";
    };
    Object.defineProperty(P.prototype, "name", {
        /**
         * Gets the name of the current page
         */
        get: function () {
            var p = "";
            if (this.get('page') != "") {
                p = this.get('page');
            }
            else if (this.get('p') != "") {
                p = this.get('p');
            }
            if (p != "") {
                return p;
            }
            else {
                return "home";
            }
        },
        enumerable: true,
        configurable: true
    });
    P.prototype.changeUrl = function (page, url) {
        if (typeof (history.pushState) != "undefined") {
            var obj = { Page: page, Url: url };
            history.pushState(obj, obj.Page, obj.Url);
        }
        else {
            window.location.href = page;
        }
    };
    P.prototype.setHash = function (x_url) {
        if (this.isDb == true) {
            var split = x_url.split("/");
            x_url = split[split.length - 1];
            if (x_url == "dashboard.php") {
                x_url = "home";
            }
            x_url = x_url.replace('dashboard-', "");
            if (x_url.indexOf('manage-project-') >= 0) {
                return "p=manage-project;id=" + x_url.replace('manage-project-', "");
            }
            else if (x_url.indexOf('publish-project-') >= 0) {
                return "p=publish-project;id=" + x_url.replace('publish-project-', "");
            }
            else {
                return "p=" + x_url;
            }
        }
        else {
            var split = x_url.split("/");
            x_url = split[split.length - 1];
            if (x_url.indexOf('project-') == 0) {
                return "p=project;id=" + x_url.replace('project-', "");
            }
            return "p=" + x_url;
        }
    };
    P.prototype.addUrlSwitcher = function () {
        var _this = this;
        var all = document.querySelectorAll('[data-internal=true]');
        for (var i = 0; i < all.length; i++) {
            var element = all[i];
            element.onclick = function (e) {
                //@ts-ignore
                _this.hash = _this.setHash(e.target.href);
                //@ts-ignore
                _this.changeUrl("Groupe vicri", e.target.href);
                //@ts-ignore
                window.onhashchange();
                return false;
            };
        }
    };
    Object.defineProperty(P.prototype, "hash", {
        /**** Some getters and setters ****/
        set: function (hash) {
            this._hash = hash;
        },
        enumerable: true,
        configurable: true
    });
    return P;
}());
exports.P = P;


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(10);
var dashboard_view_1 = __webpack_require__(12);
var extjs_1 = __webpack_require__(0);
var dashboard_model_1 = __webpack_require__(15);
/**
 * The controller is the link between the view and the model
 */
var Controller = /** @class */ (function () {
    /**
     * Creates a new controller
     * @param page the page object
     * @param model the model used by the controller
     * @param view the view used by te controller
     */
    function Controller(page, model, view) {
        this._page = page;
        this._model = model;
        this._view = view;
    }
    /**
     * Loads the page from this._page.name
     */
    Controller.prototype.loadPage = function () {
        this._model.login(undefined, this.choosePage.bind(this), this.choosePage.bind(this));
        this._view.restoreMenu();
    };
    /**
     * Choose the right page
     * @param state the connection state of the user
     */
    Controller.prototype.choosePage = function (state) {
        this._view.clear();
        this._view.applyTheme();
        switch (this._page.name) {
            case "home":
                this._view.buildHomePage(this._model.getHistory.bind(this._model));
                break;
            case "dark":
                this._view.setDarkTheme();
                this._view.buildHomePage(this._model.getHistory.bind(this._model));
                break;
            case "light":
                this._view.setLightTheme();
                this._view.buildHomePage(this._model.getHistory.bind(this._model));
                break;
            case "my-projects":
                this._model.getUsersProject(this._view.buildMyProjectsPage.bind(this._view));
                break;
            case "manage-project":
                var project_id = this._page.get('id');
                this._model.getProjectById(project_id, this._view.buildManageProjectPage.bind(this._view), this._view.buildErrorPage.bind(this._view), this._model.getHistory.bind(this._model), this._model.updateProject.bind(this._model), [
                    this._model.getAllUsers.bind(this._model),
                    this._model.addUserToProject.bind(this._model),
                    this._model.removeUserFromProject.bind(this._model)
                ]);
                break;
            case "publish-project":
                var pid = this._page.get('id');
                this._model.getProjectById(pid, this._view.buildPublishProjectPage.bind(this._view), this._view.buildErrorPage.bind(this._view), {
                    video: this._model.uploadVideoProject.bind(this._model),
                    img_uploader: this._model.uploadImage.bind(this._model),
                    photo: this._model.uploadPhotoProject.bind(this._model)
                });
                break;
            case "admin":
                if (state.isAdmin == true) {
                }
                else {
                    alert('Vous ne possèdez pas les autorisations nécessaires');
                }
                break;
            case "new-project":
                this._view.buildNewProjectPage(this._model.createProject.bind(this._model));
                break;
            case "pv":
                this._model.getAllMeetingReports(this._view.buildPVPage.bind(this._view));
                break;
            default:
                this._view.buildErrorPage({
                    type: "error",
                    message: "Erreur 404 : cette page est introuvable"
                });
                break;
        }
    };
    Object.defineProperty(Controller.prototype, "page", {
        /**
         * @returns {Page} returns an instance of Page
         */
        get: function () {
            return this._page;
        },
        enumerable: true,
        configurable: true
    });
    return Controller;
}());
/**
 * When the document is ready;
 */
extjs_1.$(document).ready(function () {
    // Getting objects ready
    var page = new dashboard_model_1.Page();
    var model = new dashboard_model_1.Model();
    var view = new dashboard_view_1.View();
    // Getting workspace ready
    view.container = extjs_1.$('.body');
    // Getting the model ready by defining the api directory
    model.api_url = "";
    // Url system
    page.isDb = true;
    // Creating a new controller object
    var controller = new Controller(page, model, view);
    //@ts-ignore Getting the page ready
    controller.page.hash = window_hash; // This variable is defined via PHP
    // Loading the page
    controller.loadPage();
    // Setting page
    view.page = controller.page;
    // When the url changes without reloading the page
    window.onpopstate = function (event) {
        controller.page.hash = controller.page.setHash(document.location.href);
        //@ts-ignore
        window.onhashchange();
    };
    // When the part after the #changes
    window.onhashchange = function () {
        controller.loadPage();
    };
    // Hamburger menu system
    var menu = extjs_1.$('.left_panel');
    extjs_1.$('.hamburger').click(function () {
        if (this.classList.contains('clicked')) {
            extjs_1.$(this).removeClass('clicked');
            extjs_1.$(this).addClass('none');
            menu.removeClass('open');
        }
        else {
            extjs_1.$(this).removeClass('none');
            extjs_1.$(this).addClass('clicked');
            menu.addClass('open');
        }
        ;
    });
});


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./dashboard.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./dashboard.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Missing binding C:\\wamp64\\www\\vicri.website\\node_modules\\node-sass\\vendor\\win32-x64-57\\binding.node\nNode Sass could not find a binding for your current environment: Windows 64-bit with Node.js 8.x\n\nFound bindings for the following environments:\n  - Windows 64-bit with Node.js 9.x\n\nThis usually happens because your environment has changed since running `npm install`.\nRun `npm rebuild node-sass --force` to build the binding for your current environment.\n    at module.exports (C:\\wamp64\\www\\vicri.website\\node_modules\\node-sass\\lib\\binding.js:15:13)\n    at Object.<anonymous> (C:\\wamp64\\www\\vicri.website\\node_modules\\node-sass\\lib\\index.js:14:35)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)\n    at Function.Module._load (module.js:491:3)\n    at Module.require (module.js:587:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (C:\\wamp64\\www\\vicri.website\\node_modules\\sass-loader\\lib\\loader.js:3:14)\n    at Module._compile (module.js:643:30)\n    at Object.Module._extensions..js (module.js:654:10)\n    at Module.load (module.js:556:32)\n    at tryModuleLoad (module.js:499:12)\n    at Function.Module._load (module.js:491:3)\n    at Module.require (module.js:587:17)\n    at require (internal/module.js:11:18)\n    at loadLoader (C:\\wamp64\\www\\vicri.website\\node_modules\\loader-runner\\lib\\loadLoader.js:13:17)\n    at iteratePitchingLoaders (C:\\wamp64\\www\\vicri.website\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (C:\\wamp64\\www\\vicri.website\\node_modules\\loader-runner\\lib\\LoaderRunner.js:165:10)\n    at C:\\wamp64\\www\\vicri.website\\node_modules\\loader-runner\\lib\\LoaderRunner.js:173:18\n    at loadLoader (C:\\wamp64\\www\\vicri.website\\node_modules\\loader-runner\\lib\\loadLoader.js:36:3)\n    at iteratePitchingLoaders (C:\\wamp64\\www\\vicri.website\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at runLoaders (C:\\wamp64\\www\\vicri.website\\node_modules\\loader-runner\\lib\\LoaderRunner.js:362:2)\n    at NormalModule.doBuild (C:\\wamp64\\www\\vicri.website\\node_modules\\webpack\\lib\\NormalModule.js:182:3)\n    at NormalModule.build (C:\\wamp64\\www\\vicri.website\\node_modules\\webpack\\lib\\NormalModule.js:275:15)\n    at Compilation.buildModule (C:\\wamp64\\www\\vicri.website\\node_modules\\webpack\\lib\\Compilation.js:151:10)\n    at factoryCallback (C:\\wamp64\\www\\vicri.website\\node_modules\\webpack\\lib\\Compilation.js:344:12)\n    at factory (C:\\wamp64\\www\\vicri.website\\node_modules\\webpack\\lib\\NormalModuleFactory.js:241:5)\n    at applyPluginsAsyncWaterfall (C:\\wamp64\\www\\vicri.website\\node_modules\\webpack\\lib\\NormalModuleFactory.js:94:13)");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var extjs_1 = __webpack_require__(0);
//@ts-ignore
var Cookie = __webpack_require__(13);
//@ts-ignore
var getYouTubeID = __webpack_require__(14);
var View = /** @class */ (function () {
    function View() {
    }
    /**
     * Sets the menu to it's default state
     */
    View.prototype.restoreMenu = function () {
        if (document.querySelector('.hamburger').classList.contains('clicked')) {
            extjs_1.$('.hamburger').click();
        }
    };
    /**
     * Applies the theme to the website
     */
    View.prototype.applyTheme = function () {
        if (Cookie.get("theme") == "dark") {
            this.setDarkTheme();
        }
        else {
            this.setLightTheme();
        }
    };
    /**
     * Sets the global theme to dark
     */
    View.prototype.setDarkTheme = function () {
        extjs_1.$('body').addClass('dark');
        Cookie.set("theme", "dark", { expires: 60 });
        this.page.addUrlSwitcher();
    };
    /**
     * Sets the global theme to light
     */
    View.prototype.setLightTheme = function () {
        extjs_1.$('body').removeClass('dark');
        Cookie.set("theme", "light", { expires: 60 });
        this.page.addUrlSwitcher();
    };
    /**
     * Function called to clear the view
     */
    View.prototype.clear = function () { this.container.html(''); };
    /**
     * Builds the home page
     * @param getHistory Gets the history of teh website
     */
    View.prototype.buildHomePage = function (getHistory) {
        var _this = this;
        var e = this.container;
        extjs_1.$(".header .title").html("Home page");
        var welcome = e
            .child('div')
            .css('display', "inline-block")
            .css('vertical-align', "top")
            .addClass('panel')
            .addClass('padding')
            .addClass('col2')
            .addClass('left');
        welcome
            .child('div')
            .html('Bienvenue sur le dashboard vicri !')
            .addClass("title");
        welcome
            .child('p')
            .html('Bienvenue sur votre tableau de bord ;-). Ici, vous retrouverez toutes les fonctions présentes sur la version précédente du site et plus encore :-).');
        welcome
            .child('a')
            .addClass('button')
            .html('Découvrir les projets')
            .get(0).href = "projects";
        welcome
            .child('a')
            .addClass('button')
            .html('Créer un projet')
            .attr("data-internal", true).get(0).href = "dashboard-new-project";
        welcome
            .child('a')
            .addClass('button')
            .html('PV des réunions')
            .attr("data-internal", true).get(0).href = "dashboard-pv";
        var news = e
            .child('div')
            .css('display', "inline-block")
            .css('vertical-align', "top")
            .addClass('panel')
            .addClass('padding')
            .addClass('col2')
            .addClass('right');
        news
            .child('div')
            .html('Quoi de neuf ?')
            .addClass("title");
        getHistory("-1", function (data) {
            data.forEach(function (entry) {
                var container = news.child('p');
                _this.buildHistory(container, entry);
            });
        });
        this.page.addUrlSwitcher();
    };
    /**
     * Builds an history with an entry
     * @param container the element in which we want to build the history
     * @param entry the entry in question
     */
    View.prototype.buildHistory = function (container, entry) {
        container.child('i').html(entry.content.date + " - ");
        if (entry.type == "test") {
            container.child('b').html(entry.content.user + " ");
            container.child('span').html(" a créé une entrée dans l'historique du site vicri");
        }
        else if (entry.type == 'project_update') {
            container.child('b').html(entry.content.user + " ");
            container.child('span').html(" a mis à jour le(s) champ(s) " + entry.content.props.toString() + " de ce projet");
        }
        else if (entry.type == "project_created") {
            container.child('b').html(entry.content.user + " ");
            container.child('span').html(" a créé le projet " + entry.content.name);
        }
    };
    /**
     * Builds an error page from an error object
     * @param error.message the message of the error
     */
    View.prototype.buildErrorPage = function (error) {
        extjs_1.$(".header .title").html("Erreur");
        var error_page = this
            .container
            .addClass('panel')
            .addClass('padding')
            .child('div')
            .addClass('error_container');
        var error_zone = error_page
            .child('div')
            .addClass('error_zone');
        var error_svg = error_zone
            .child('img')
            .get(0).src = "res/error.svg";
        error_zone
            .child('h1')
            .html('Une erreur est survenue');
        error_zone
            .child('p')
            .html(error.message);
    };
    /**
     * Creates an input (material design)
     * @param parent the parent container
     * @param label_text the placeholder
     * @param type the type of the input
     * @param default_value the default value
     */
    View.prototype.buildInput = function (parent, label_text, type, default_value) {
        var input_types = ["text", "password", "number", "range"];
        var other_types = ["textarea", "select"];
        var div = parent
            .child('div')
            .addClass("field");
        var label = div
            .child('label')
            .addClass('top')
            .html(label_text);
        var input;
        if (input_types.indexOf(type) >= 0) {
            input = div
                .child('input')
                .addClass('input');
            input
                .get(0)
                .type = type;
        }
        else {
            input = div
                .child(type)
                .addClass('input')
                .addClass(type);
        }
        var i = input.get(0);
        i.onfocus = function () {
            this.parentElement.classList.add('focus');
            if (this.parentElement.classList.contains("notempty")) {
                this.parentElement.classList.remove('notempty');
            }
        };
        i.onblur = function () {
            this.parentElement.classList.remove('focus');
            if (this.value != "") {
                this.parentElement.classList.add('notempty');
            }
        };
        if (default_value)
            input.value(default_value);
        i.onfocus();
        i.onblur();
        return input;
    };
    View.prototype.createModalDialog = function (title) {
        var mask = extjs_1.$("body")
            .child('div')
            .addClass('mask');
        var modal = mask
            .child('div')
            .addClass('modal');
        var t = modal
            .child('span')
            .html(title)
            .addClass("title");
        var cross = modal
            .child('span')
            .addClass('cross')
            .html('×');
        mask.click(function (e) {
            if (e.target == mask.get(0) || e.target == null) {
                mask.addClass('hidden');
                setTimeout(function () {
                    mask.remove();
                }, 1000);
            }
        });
        cross.click(function () {
            mask.click();
        });
        return modal;
    };
    View.prototype.buildPublishProjectPage = function (project, upload) {
        if (project.isPublished == true) {
            this.buildErrorPage({
                type: "error",
                message: "Ce projet est déjà publié"
            });
            return;
        }
        extjs_1.$(".header .title").html("Publier un projet");
        var e = this.container;
        var project_infos = e
            .child('div')
            .css('display', "inline-block")
            .css('vertical-align', "top")
            .addClass('panel')
            .addClass('padding')
            .css('width', "calc(100% - 30px)")
            .addClass('left');
        project_infos
            .child('div')
            .html('Assistant de publication')
            .addClass("title");
        project_infos.child('b').html('<br />Type de projet : ' + project.type);
        if (project.type == "photo") {
            project_infos.child('p').html('Vous pourrez uploader toutes les photos sur la page suivante. Pour le moment, choisissez une photo de couverture.');
        }
        var title = this
            .buildInput(project_infos, "Titre", "text", project.name);
        var short_description = this
            .buildInput(project_infos, "Description résumée du projet", "textarea", project.shortDescription);
        var url;
        var publish;
        var image_link;
        switch (project.type) {
            case "video":
                url = this
                    .buildInput(project_infos, "URL de la vidéo sur YouTube", "text", "");
                url.input(function () {
                    if (!getYouTubeID(url.value())) {
                        url.css('color', "red");
                    }
                    else {
                        url.css('color', "");
                    }
                });
                publish = project_infos
                    .child('button')
                    .html('Publier la vidéo')
                    .click(function () {
                    project_infos.css('display', "none");
                    if (!getYouTubeID(url.value())) {
                        project_infos.css('display', "block");
                        alert("L'url fournie n'est pas valide");
                    }
                    else {
                        upload.video({
                            project_id: project.id,
                            title: title.value(),
                            description: short_description.value(),
                            url: getYouTubeID(url.value())
                        }, function (data) {
                            project_infos.css('display', "block");
                            if (data == "e:r") {
                                alert('Une erreur est survenue lors de la communication avec le serveur');
                            }
                            else if (data == "ok") {
                                //redirect
                            }
                            else {
                                alert(data);
                            }
                        });
                    }
                });
                break;
            default:
                var upload_result_1;
                var upload_cover_1 = project_infos
                    .child('input')
                    .attr('type', "file")
                    .addClass('button')
                    .change(function () {
                    publish
                        .attr("disabled", "true")
                        .css('opacity', "0.2");
                    upload.img_uploader(upload_cover_1.get(0).files[0], function (progress) {
                        upload_result_1.html("En cours : " + (100 * progress.loaded / progress.total) + "%");
                    }, function (link) {
                        if (link != undefined) {
                            upload_result_1.html("Upload\u00E9 ! <br /><img style=\"height:150px;\" src=\"" + link + "\"><br />");
                            image_link = link;
                            publish
                                .css('opacity', "1")
                                .get(0).disabled = false;
                        }
                        else {
                            upload_result_1.html('Erreur !');
                        }
                    });
                });
                upload_result_1 = project_infos.child('span').html('Uploadez une image de couverture');
                project_infos
                    .child('br');
                publish = project_infos
                    .child('button')
                    .html('Publier le projet')
                    .click(function () {
                    publish
                        .attr("disabled", "true")
                        .css('opacity', "0.2");
                    if (!image_link) {
                        alert('Uploadez une image de couverture pour illustrer le projet.');
                        return false;
                    }
                    if (project.type == "photo") {
                        upload.photo({
                            project_id: project.id,
                            title: title.value(),
                            description: short_description.value(),
                            cover: image_link
                        }, function (data) {
                            publish
                                .css('opacity', "1")
                                .get(0).disabled = false;
                            if (data == "e:r")
                                return alert('Une erreur est survenue lors de la communication avec le serveur');
                            if (data == "ok")
                                window.location.href = "dashboard-manage-images-" + project.id;
                            else
                                alert(data);
                        });
                    }
                    else {
                        upload.other({}, function () {
                        });
                    }
                });
                break;
        }
    };
    /**
     * Makes a project maangement page
     * @param project the informations of the project
     * @param getHistory gets the history of te project
     * @param updateProject upadtes te project
     */
    View.prototype.buildManageProjectPage = function (project, getHistory, updateProject, managers) {
        var _this = this;
        var e = this.container;
        extjs_1.$(".header .title").html("Gestion du projet");
        var project_infos = e
            .child('div')
            .css('display', "inline-block")
            .css('vertical-align', "top")
            .addClass('panel')
            .addClass('padding')
            .addClass('col2')
            .addClass('left');
        project_infos
            .child('div')
            .html('Gestion du projet')
            .addClass("title");
        var name = this
            .buildInput(project_infos, "Nom du projet", "text", project.name);
        var progression = this
            .buildInput(project_infos, "Progression du projet (en %)", "number", project.progression.toString());
        var p = progression.get(0);
        p.max = "100";
        p.min = "0";
        var type = this
            .buildInput(project_infos, "Type de projet", "select");
        var t = type.get(0);
        var description = this
            .buildInput(project_infos, "Description du projet", "textarea", project.description);
        var short_description = this
            .buildInput(project_infos, "Description résumée du projet", "textarea", project.shortDescription);
        var goals = this
            .buildInput(project_infos, "Objectifs du projet", "textarea", project.goals);
        var links = this
            .buildInput(project_infos, "Liens utiles (séparés par un retour à la ligne)", "textarea", project.links);
        var update = project_infos
            .child('button')
            .addClass('button')
            .html('Modifier');
        var misc = e
            .child('div')
            .css('display', "inline-block")
            .css('vertical-align', "top")
            .addClass('panel')
            .addClass('padding')
            .addClass('col2')
            .addClass('right');
        misc
            .child('div')
            .html('Divers')
            .addClass("title");
        var users = "";
        project.managers.forEach(function (manager, index) { return users += manager + ((index + 1 == project.managers.length) ? "" : ((index + 2 == project.managers.length) ? " et " : ", ")); });
        misc
            .child('p')
            .html('Managers : ' + users + "  ")
            .child("a")
            .html('[ + ]')
            .click(function (event) {
            event.preventDefault();
            managers[0](function (data) {
                var dialog = _this.createModalDialog("Gestion des managers");
                var input = dialog.child('input');
                var table = dialog.child('table');
                input.get(0).oninput = function () {
                    table.html('');
                    data.forEach(function (e) {
                        var real_name = e.firstname + " " + e.name;
                        if (real_name.toLowerCase().indexOf(input.get(0).value.toLowerCase()) < 0) {
                            return;
                        }
                        var row = table.child("tr");
                        row.child('td').html(real_name);
                        if (project.managers_id.indexOf(e.id) >= 0) {
                            var del_1 = row.child('td').child('button').html('Supprimer').addClass('button').addClass('danger');
                            del_1
                                .click(function () {
                                managers[2]({ user_id: e.id.toString(), project_id: project.id.toString() }, function (d) {
                                    if (d) {
                                        alert(d);
                                    }
                                    else {
                                        project.managers_id.push(e.id);
                                        var parent_1 = del_1.parent("td");
                                        parent_1.child('span').html('Supprimé !');
                                        del_1.remove();
                                    }
                                });
                            });
                        }
                        else {
                            var add_1 = row.child('td').child('button').html('Ajouter').addClass('button');
                            add_1
                                .click(function () {
                                managers[1]({ user_id: e.id.toString(), project_id: project.id.toString() }, function (d) {
                                    if (d) {
                                        alert(d);
                                    }
                                    else {
                                        project.managers_id.push(e.id);
                                        var parent_2 = add_1.parent("td");
                                        parent_2.child('span').html('Ajouté !');
                                        add_1.remove();
                                    }
                                });
                            });
                        }
                    });
                };
                input.get(0).oninput();
            });
        })
            .css('text-decoration', "none")
            .get(0).href = "#ee";
        if (project.isPublished == true) {
            misc
                .child('p')
                .html("Ce projet est publié !");
            if (project.video) {
                console.log("e");
            }
            else if (project.photo) {
                console.log("e1");
            }
            else if (project.other) {
                console.log("e2");
            }
        }
        else {
            misc
                .child('p')
                .html("Ce projet n'est pas publié ")
                .child('a')
                .attr('data-internal', true)
                .addClass('button')
                .html('publier').get(0).href = "dashboard-publish-project-" + project.id;
        }
        var more;
        getHistory(project.id, function (data) {
            data.forEach(function (entry, i) {
                var container;
                if (i == 6) {
                    var show_more_1 = misc
                        .child('div')
                        .css("text-align", "center")
                        .child('button')
                        .html('Afficher plus');
                    more = misc
                        .child('p')
                        .css('display', "none");
                    show_more_1.click(function () {
                        show_more_1
                            .remove();
                        more
                            .css('display', "block");
                    });
                }
                if (i < 6) {
                    container = misc.child('p');
                }
                else {
                    container = more.child('p');
                }
                _this.buildHistory(container, entry);
            });
        });
        var types = [project.type, "video", "photo", "code", "3d", "jeu"];
        types.forEach(function (type) {
            var option = document.createElement('option');
            option.value = type;
            option.text = type;
            t.add(option);
        });
        //@ts-ignore
        t.onblur();
        update.click(function () {
            updateProject({
                id: project.id,
                name: name.value(),
                progression: progression.value(),
                description: description.value(),
                shortDescription: short_description.value(),
                type: type.value(),
                goals: goals.value(),
                links: links.value()
            });
        });
        this.page.addUrlSwitcher();
    };
    /**
     * Builds a page that lists all the projects of an user
     * @param projects a list of projects
     */
    View.prototype.buildMyProjectsPage = function (projects) {
        var e = this.container;
        extjs_1.$(".header .title").html("Mes projets");
        var my_projects = e
            .child('div')
            .css('display', "inline-block")
            .css('vertical-align', "top")
            .addClass('panel')
            .addClass('padding')
            .css('max-width', "100%")
            .css('width', "calc(100% - 30px)");
        my_projects
            .child('div')
            .html('Mes projets')
            .addClass("title");
        var table = my_projects
            .child('p')
            .child('table')
            .css("width", "100%")
            .css("max-width", "100%");
        my_projects
            .child('a')
            .addClass('button')
            .html('Créer un projet')
            .attr("data-internal", true).get(0).href = "dashboard-new-project";
        var head = table
            .child('tr');
        head
            .child("th")
            .html('Nom du projet');
        head
            .child("th")
            .html('Managers');
        head
            .child('th')
            .html('Actions');
        projects.forEach(function (project) {
            var tr = table.child('tr');
            tr.child('td').html(project.name);
            var managers = tr
                .child('td');
            project.managers.forEach(function (manager) {
                managers
                    .child('span')
                    .html(manager + '<br />');
            });
            var tools = tr.child('td');
            tools
                .child('a')
                .addClass('button')
                .html('Modifier')
                .attr("data-internal", true).get(0).href = "dashboard-manage-project-" + project.id;
        });
        this.page.addUrlSwitcher();
    };
    /**
     * buildNewProjectPage
     * @param createProject the function to call in order to create the project
     */
    View.prototype.buildNewProjectPage = function (createProject) {
        var e = this.container;
        extjs_1.$(".header .title").html("Créer un projet");
        var project = e
            .child('div')
            .css('display', "inline-block")
            .css('vertical-align', "top")
            .addClass('panel')
            .addClass('padding')
            .css('max-width', "100%")
            .css('width', "calc(100% - 30px)");
        project
            .child('div')
            .html('Créer un projet')
            .addClass("title");
        var name = this
            .buildInput(project, "Nom du projet", "text");
        var description = this
            .buildInput(project, "Donnez une courte description de votre projet", "textarea");
        var type = this
            .buildInput(project, "Type de projet", "select");
        var t = type.get(0);
        var types = ["video", "photo", "code", "3d", "jeu"];
        types.forEach(function (type) {
            var option = document.createElement('option');
            option.value = type;
            option.text = type;
            t.add(option);
        });
        //@ts-ignore
        t.onblur();
        project
            .child('button')
            .click(function () {
            createProject({
                name: name.value(),
                shortDescription: description.value(),
                type: type.value()
            });
        })
            .addClass('button')
            .html('Confirmer et créer')
            .attr("data-internal", true).get(0).href = "dashboard-new-project";
    };
    View.prototype.buildPVPage = function (data) {
        var e = this.container;
        extjs_1.$(".header .title").html("PV des réunions");
        var panel = e
            .child('div')
            .css('display', "inline-block")
            .css('vertical-align', "top")
            .addClass('panel')
            .addClass('padding')
            .css('max-width', "100%")
            .css('width', "calc(100% - 30px)");
        panel
            .child('div')
            .html('PV des réunions')
            .addClass("title");
        data.forEach(function (report_url) {
            panel
                .child('p')
                .child('a')
                .html(report_url)
                .get(0)
                .href = report_url;
        });
        this.page.addUrlSwitcher();
    };
    return View;
}());
exports.View = View;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!this.json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


(function (root, factory) {
  if (true) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    root.getYouTubeID = factory();
  }
}(this, function (exports) {

  return function (url, opts) {
    if (opts == undefined) {
      opts = {fuzzy: true};
    }

    if (/youtu\.?be/.test(url)) {

      // Look first for known patterns
      var i;
      var patterns = [
        /youtu\.be\/([^#\&\?]{11})/,  // youtu.be/<id>
        /\?v=([^#\&\?]{11})/,         // ?v=<id>
        /\&v=([^#\&\?]{11})/,         // &v=<id>
        /embed\/([^#\&\?]{11})/,      // embed/<id>
        /\/v\/([^#\&\?]{11})/         // /v/<id>
      ];

      // If any pattern matches, return the ID
      for (i = 0; i < patterns.length; ++i) {
        if (patterns[i].test(url)) {
          return patterns[i].exec(url)[1];
        }
      }

      if (opts.fuzzy) {
        // If that fails, break it apart by certain characters and look 
        // for the 11 character key
        var tokens = url.split(/[\/\&\?=#\.\s]/g);
        for (i = 0; i < tokens.length; ++i) {
          if (/^[^#\&\?]{11}$/.test(tokens[i])) {
            return tokens[i];
          }
        }
      }
    }

    return null;
  };

}));


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shared_model_1 = __webpack_require__(3);
var extjs_1 = __webpack_require__(0);
var Page = /** @class */ (function (_super) {
    __extends(Page, _super);
    function Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Page;
}(shared_model_1.P));
exports.Page = Page;
;
var Model = /** @class */ (function (_super) {
    __extends(Model, _super);
    function Model() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Uploads a photo project final result
     */
    Model.prototype.uploadPhotoProject = function (data, callback) {
        extjs_1.AR.POST(this.api_url + "api/index.php?res=photo", data, callback, function () {
            callback("e:r");
        });
    };
    /**
     * Uploads an image to the server
     * @param file
     * @param onprogress
     * @param onuploaded
     */
    Model.prototype.uploadImage = function (file, onprogress, onuploaded) {
        if (file == null) {
            alert('Erreur, vous devez uploader une capture');
            return;
        }
        var data = new FormData();
        data.append("file", file);
        var a = new XMLHttpRequest();
        a.upload.addEventListener('progress', onprogress, false);
        a.addEventListener('load', function (event) {
            // @ts-ignore
            var val = event.target.responseText;
            if (val.indexOf('file:../') == 0) {
                onuploaded(val.replace('file:../', ""));
            }
            else {
                alert(val);
                onuploaded(undefined);
            }
        }, false);
        a.addEventListener('error', function () {
        }, false);
        a.addEventListener('abort', function () {
        }, false);
        a.open('POST', "api/index.php?res=image");
        a.send(data);
    };
    /**
     * Uploads a video for a project
     * @param data
     */
    Model.prototype.uploadVideoProject = function (data, callback) {
        extjs_1.AR.POST(this.api_url + "api/index.php?res=video", data, callback, function () {
            callback("e:r");
        });
    };
    /**
     * Removes an user from the project
     * @param data
     * @param callback
     */
    Model.prototype.removeUserFromProject = function (data, callback) {
        extjs_1.AR.DELETE(this.api_url + ("api/index.php?res=user&user_id=" + data.user_id + "&project_id=" + data.project_id), function (data) {
            if (data == "ok") {
                callback();
            }
            else {
                callback(data);
            }
        });
    };
    /**
     * Adds an user to the project
     * @param data
     * @param callback
     */
    Model.prototype.addUserToProject = function (data, callback) {
        extjs_1.AR.POST(this.api_url + "api/index.php?res=user", data, function (data) {
            if (data == "ok") {
                callback();
            }
            else {
                callback(data);
            }
        });
    };
    /**
     * Gets a list of all the usres of the site
     * @param callback function walled when the list of all the users as been downloaded
     */
    Model.prototype.getAllUsers = function (callback) {
        extjs_1.AR.GET(this.api_url + "api?res=users", function (data) {
            try {
                var d = JSON.parse(data);
                callback(d);
            }
            catch (error) {
                console.log(error);
            }
        }, function () {
            console.log('Fatal error 500');
        });
    };
    /**
     * Gets the user's projects
     * @param callback function to call when everythong has been loaded
     */
    Model.prototype.getUsersProject = function (callback) {
        extjs_1.AR.GET(this.api_url + "api?res=user-projects", function (data) {
            try {
                var d = JSON.parse(data);
                callback(d);
            }
            catch (error) {
                console.log(error);
            }
        });
    };
    /**
     * Gets the informations of a project via it's id
     * @param id the id of the project
     * @param callback function to call when * is ok
     * @param onErrorCallback function to call if something went wrong
     * @param othercallback function passed to callback
     * @param second_other_callback function passed to callback
     */
    Model.prototype.getProjectById = function (id, callback, onErrorCallback, othercallback, second_other_callback, third_other_callback) {
        extjs_1.AR.GET(this.api_url + "api?res=project&manager&id=" + id, function (data) {
            try {
                var d = JSON.parse(data);
                if (d.type != "error" && d.message == undefined) {
                    if (othercallback != undefined && second_other_callback != undefined && third_other_callback != undefined) {
                        callback(d, othercallback, second_other_callback, third_other_callback);
                    }
                    else if (othercallback != undefined) {
                        callback(d, othercallback);
                    }
                    else {
                        callback(d);
                    }
                }
                else {
                    if (onErrorCallback != undefined) {
                        onErrorCallback(d);
                    }
                }
            }
            catch (error) {
                //console.log(error)
            }
        });
    };
    /**
     * Updates the project with the new valmues of the project object
     * @param project the object that contains all the new values
     */
    Model.prototype.updateProject = function (project) {
        var keys = Object.keys(project);
        keys.forEach(function (key, index) {
            //@ts-ignore
            var value = project[key];
            if (value.trim() == "") {
                alert("Param\u00E8tre " + keys + " ne peut pas \u00EAtre vide !");
                return false;
            }
        });
        if (["video", "photo", "code", "3d", "jeu"].indexOf(project.type) < 0) {
            alert("Le type " + project.type + " n'existe pas");
            return false;
        }
        var ask = confirm('Cette modification est irréversible, continuer ?');
        if (ask == true) {
            extjs_1.AR.PUT(this.api_url + "api/index.php?res=project", project, function (data) {
                if (data != "ok") {
                    alert('Le serveur a rencontré une erreur inconnue : ' + data);
                }
                else {
                    alert('Projet mis à jour');
                    window.location.reload();
                }
            });
        }
    };
    /**
     * Gets the history of the project
     * @param id id of the project (-1 if global)
     * @param callback function to call when * has been loaded
     */
    Model.prototype.getHistory = function (id, callback) {
        extjs_1.AR.GET(this.api_url + "api?res=history&id=" + id, function (data) {
            try {
                var d = JSON.parse(data);
                callback(d);
            }
            catch (error) {
                console.log(error);
            }
        });
    };
    /**
     * Creates a project with the project given
     * @param project project object used to create the project
     */
    Model.prototype.createProject = function (project) {
        if (["video", "photo", "code", "3d", "jeu"].indexOf(project.type) < 0) {
            alert("Le type " + project.type + " n'existe pas");
            return false;
        }
        if (project.name.trim().length < 10) {
            alert('Donnez un nom plus grand');
            return;
        }
        if (project.shortDescription.length > 250) {
            alert('Cette description est trop grande');
            return false;
        }
        if (project.shortDescription.length < 50) {
            alert('Cette description est trop petite (entre 80 et 250 caractères)');
            return false;
        }
        extjs_1.AR.POST(this.api_url + "api/index.php?res=project", project, function (data) {
            if (data.indexOf("ok") != 0) {
                alert('Le serveur a rencontré une erreur inconnue : ' + data);
            }
            else {
                alert('Projet créé');
                window.location.href = "dashboard-my-projects";
            }
        }, function () {
            alert("Erreur 500 : internal server error");
        });
    };
    /**
     * Gets all the reports of the last meetings
     * @param callback Function that is called when all the reports have been loaded
     */
    Model.prototype.getAllMeetingReports = function (callback) {
        extjs_1.AR.GET(this.api_url + "api?res=pv", function (data) {
            try {
                var d = JSON.parse(data);
                callback(d);
            }
            catch (error) {
                console.log(error);
            }
        });
    };
    return Model;
}(shared_model_1.SharedModel));
exports.Model = Model;
;


/***/ })
/******/ ]);