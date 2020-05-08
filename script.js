"use strict";

function joinFunction(...funcs) {
	function newFunc(...i) {
		for (let f of funcs)
			f.apply(this, i);
	}
	newFunc.prototype = Object.assign(...funcs);
	return newFunc;
}

function overwriteFunction(a, b) {
	b.prototype = Object.assign(a.prototype, b.prototype);
	return b;
}

function disableFunction(a) {
	b = function () { };
	for (let i in a.prototype)
		b.prototype[i] =
			typeof a.prototype[i] == 'function' ?
				function () { } :
				a.prototype[i];
	return b;
}