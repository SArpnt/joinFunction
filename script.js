"use strict";

function joinFunction(...funcs) {
	function newFunc(...i) {
		for (let f of funcs)
			f.apply(this, i);
	}
	newFunc.prototype = funcs[0].prototype;
	return newFunc;
}

function joinFunctionAndPrototype(...funcs) {
	function recursiveProtoJoin(protos) {
		if (protos.length)
			return Object.assign(
				Object.create(recursiveProtoJoin(
					protos.filter(e => e).map(e => Object.getPrototypeOf(e))
				)),
				...protos);
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