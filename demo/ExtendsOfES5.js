/**
* ʹ�� ES5 ʵ�� ES6 �� Extends ����inherit
* �ؼ��㣺�������ʽ�̳�
* �������ʽ�̳�Ҫ�����£�
* 1.���๹�캯���� _proto_ ָ���๹�������̳и���ľ�̬������
* 2.���๹�캯���� prototype �� _proto_ ָ���๹������ prototype���̳и���ķ�����
* 3. ���๹��������ø��๹�������̳и�������ԡ�
*/

//����
function Parent(name){
	this.name = name;
}
//��̬����
Parent.sayHello = function(){
	console.log('hello');
}
Parent.prototype.sayName = function(){
	console.log('my name is' + this.name);
	return this.name;
}

//����
function Child(name, age){
	//�൱�� super���̳�����
	Parent.call(this,name);
	this.age = age;
}

//Object.create �� polyfill
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