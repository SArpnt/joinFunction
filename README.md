# joinFunction

functions to combine and manipulate functions\
supports class creation functions (to the best of my knowledge)

## usage

### joinFunction(...i)

returns a function that is the combination of all input functions (**i**)

### overwriteFunction(a,b)

returns function b but with the prototype of function **a**\
(this is useful for replacing function class constructors (whatever they're called))


## examples

output code shown does not represent actions of functions,\
it's made to illustrate how resulting code behaves.

### starting conditions

```js
function foo(a) {
	this.a = a;
}
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
result.prototype.fooProto = function () {
	this.proto = "foo";
}
result.prototype.barProto = function () {
	this.proto = "bar";
}
```

## rules for use

take whatever you want from the code but please give credit and possibly a link to the repository

if you put underscores or dashes as spaces in your regular variable names\
(so not const or \#define) you aren't allowed to use this code\
(but i won't enforce it)
