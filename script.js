"use strict";

function joinFunction(options, ...funcs) {
	if (typeof options != 'object') {
		funcs.unshift(options);
		options = {};
	}
	options = Object.assign(options, {
		prototype: 0,
	});

	function newFunc() {
		for (let f of funcs)
			f.apply(this, arguments);
	}
	newFunc = Object.assign(newFunc, ...funcs);
	if (options.prototype === 'join') {
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
		newFunc.prototype = recursiveProtoJoin(funcs.map(e => e.prototype));
	} else if (typeof options.prototype == 'number')
		newFunc.prototype = funcs[options.prototype].prototype;
	else
		newFunc.prototype = options.prototype;
	return newFunc;
}

function overwriteFunction(a, b) {
	b = Object.assign(b, a);
	b.prototype = Object.assign(a.prototype, b.prototype);
	return b;
}

function disableFunction(a) {
	b = function () { };
	for (let i in a)
		b[i] =
			typeof a[i] == 'function' ?
				function () { } :
				a[i];
	for (let i in a.prototype)
		b.prototype[i] =
			typeof a.prototype[i] == 'function' ?
				function () { } :
				a.prototype[i];
	return b;
}