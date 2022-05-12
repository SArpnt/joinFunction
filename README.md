## notice

this project was linked to in a bunch of userscripts, any changes made will break those.
i may create a different repo to replace this but whatever you do please don't use this code without modifying it first

# joinFunction

functions to combine and manipulate functions\
supports manipulating class constructors (for the most part, sometimes still has issues)

## usage

### joinFunction(o, ...i)

returns a function that is the combination of all input functions (o and i), with the prototype of o

this function is supposed to have an options parameter but the code is messed up.

### overwriteFunction(a, b)

returns function b but with the properties and prototype of function a.
this is useful for replacing class constructors.

### disableFunction(a)

returns empty function with properties and prototype of a,
but every function in the properties/prototype (not inside arrays/objects) is also an empty function.

## examples

output code shown does not represent actions of functions, it's made to illustrate how resulting code behaves.

### starting conditions

```js
function foo(a) {
	this.a = a;
}
foo.fooValue = 3;
foo.prototype.fooProto = function () {
	this.proto = "foo";
}
function bar(b, c) {
	this.b = b;
	this.c = c;
}
bar.prototype.barProto = function () {
	this.proto = "bar";
}
```

### joinFunction(foo,bar)

```js
function result(ab, c) {
	this.a = ab;
	this.b = ab;
	this.c = c;
}
result.fooValue = 3;
result.prototype.fooProto = function () {
	this.proto = "foo";
}
result.prototype.barProto = function () {
	this.proto = "bar";
}
```

### overwriteFunction(foo,bar)

```js
function result(b, c) {
	this.b = b;
	this.c = c;
}
result.fooValue = 3;
result.prototype.fooProto = function () {
	this.proto = "foo";
}
result.prototype.barProto = function () {
	this.proto = "bar";
}
```

### disableFunction(foo)

```js
function result() { }
result.fooValue = 3;
result.prototype.fooProto = function () { }
```
