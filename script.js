"use strict";

function joinFunction(...funcs) {
	function recursiveProtoJoin(protos) {
		let p = protos.filter(e => e).map(e => Object.getPrototypeOf(e));
		if (p.length)
			return p.reduce((a, e) => (
				Object.assign(a, e)
			), Object.create(recursiveProtoJoin(p)));
		else
			return null;
	}

	function newFunc(...i) {
		for (let f of funcs)
			f.apply(this, i);
	}
	newFunc.prototype = recursiveProtoJoin(funcs.map(e => e.prototype));
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