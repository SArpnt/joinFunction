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
	b.prototype = Object.assign(a.prototype,b.prototype);
	return b;
}