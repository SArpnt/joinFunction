# joinFunction

**notice: this is mainly intended for my own use, it often has breaking changes!**\
**this readme is also often outdated, look over the code for any new features**

functions to combine and manipulate functions\
supports class creation functions (for the most part, sometimes still has issues)

## usage

### joinFunction(...i)

returns a function that is the combination of all input functions (**i**)

### overwriteFunction(a,b)

returns function b but with the properties and prototype of function **a**\
(this is useful for replacing function class constructors (whatever they're called))

### disableFunction(a)

returns empty function (`function () {}`) with properties and prototype of a,\
but every function in the properties/prototype (does not check inside arrays/objects)\
is also an empty function

## examples

output code shown does not represent actions of functions,\
it's made to illustrate how resulting code behaves.

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
