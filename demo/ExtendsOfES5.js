/**
* 使用 ES5 实现 ES6 的 Extends 方法inherit
* 关键点：寄生组合式继承
* 寄生组合式继承要点如下：
* 1.子类构造函数的 _proto_ 指向父类构造器，继承父类的静态方法。
* 2.子类构造函数的 prototype 的 _proto_ 指向父类构造器的 prototype，继承父类的方法。
* 3. 子类构造器里调用父类构造器，继承父类的属性。
*/

//父类
function Parent(name){
	this.name = name;
}
//静态方法
Parent.sayHello = function(){
	console.log('hello');
}
Parent.prototype.sayName = function(){
	console.log('my name is' + this.name);
	return this.name;
}

//子类
function Child(name, age){
	//相当于 super，继承属性
	Parent.call(this,name);
	this.age = age;
}

//Object.create 的 polyfill
function object(proto){
	function F(){}
	F.prototype = proto;
	return new F();
}

function _inherits(Child, Parent){
	if (typeof Parent !== "function" && Parent !== null) {
        throw new TypeError("Parent expression must either be null or a function");
    }
	// ES6
	Child.prototype = Object.create(Parent.prototype,{
		constructor:{
			value: Child,
			writable: true,
			configurable: true
		}
	});
	Child.prototype.constructor = Child;
	Object.setPrototypeOf(Child, Parent);
	
	//ES5
	Child.prototype._proto_ = Parent.prototype;
	Child.prototype.constructor = Child;
	Child._proto_ = Parent;
	
}

_inherits(Child, Parent);
Child.prototype.sayAge = function(){
	console.log('my age is' + this.age);
	return this.age;
}