/****
*
*
*jsoop类型
*/
//js的五中基本类型
//string
var name = "ypx";
var selection = 'a';

//number
var count = 123,value = 999.090;

//boolean
var flagment = true,defaultTag = !1;

//null
var objnull = null;

//undefined

var undefinedData = undefined,bok;

console.log(name);
console.log(selection);
console.log(count);console.log(value);

console.log(flagment);console.log(defaultTag);
console.log(objnull);console.log(undefinedData);
console.log(bok);

var color1 = "red";
var color2 = color1;
color2 = "blue"
console.log(color1);
console.log(color2);
console.log(color1);

if(bok === null){
	//alert(123);
}else{
	//alert(456);
}

var obj = {
	name:'ypx',
	poropto:{
		a:"1",
		name:"ypx"
	}
}



if(obj.poropto instanceof Object){
	console.log(obj.poropto.a);
}else{
	console.log(123);
}



var objNew = {
	name:'ypx'
}

if(objNew.poropto instanceof Object){
	console.log(obj.poropto.a);
}else{
	console.log(123456);
}



var name = "Nicholes";
var lowercaseName = name.toLowerCase();
var firstLatter = name.charAt(0);
var middleOfName = name.substring(2,5);
var count = 10;
var fixedCount = count.toFixed(2);
var textCount = count.toString(16);
var flag = true;
var string = flag.toString();


var object1 = new Object();
var object2 = object1;
object2.name=123;
console.log(object1);


var myname1 = 123;
var myname2 = myname1;
myname2 = 789;
console.log(myname1);


var arrnew = new Array();
var function1 = new Function(console.log(123));
var Err = new Error();
var obj = new Object();
var rep = new RegExp('\\d+');


function dates (){
	return new Date();
}


var newarr = [145,123,111];
if(Array.isArray(newarr)){
	console.log(Array.isArray(newarr));
};


function sum(){
	var m = 0;
	var n = arguments.length;
	var j = 0;
	for(var i=0;i<n;i++){
		j+=arguments[i];
	}
	return j;
}

console.log(sum(10,9,1,-100));
console.log(sum());
var k;
var m=null
console.log(k);
console.log(m);
console.log(m===k);
console.log(m==k);
console.log(typeof k);
console.log(typeof m);
console.log(m instanceof Object);
console.log(k instanceof Object);
//设置判定对象属性名称是否存在使用in 
//判断对象属性是否为私有属性用hasownproperty()
//删除对象属性使用delete
//判定对象的属性数量可以使用Object.keys

//对象的可枚举型：propertyIsEnumerable("name");


var person1 = {
	name:"nicholas"
}
Object.defineProperty(person1,"name",{
	enumberable:false
})
console.log("name" in person1);
console.log(person1.propertyIsEnumerable("name"));

var properties = Object.keys(person1);
console.log(properties.length);

Object.defineProperty(person1,"name",{
	configurable:false
});

//delete person1.name;
console.log("name" in person1);
person1.name = "good";
console.log(person1);


function hasProptotypeProperty(obj,name){
	return name in obj && !obj.hasOwnProperty(name);
}

console.log("1-------5");
console.log(hasProptotypeProperty(person1,"name"));

console.log(hasProptotypeProperty(person1,"propertyIsEnumerable"));
console.log(hasProptotypeProperty(person1,"isPropertyOf"));


function Person2(name){
	this.name = name;
} 
Person2.prototype = {
	constructor:Person2,
	sayName:function(){
		console.log(this.name);
	},
	toString:function(){
		return "[Person"+this.name+"]"
	}
}

var ps = new Person2("jim");
var pa = new Person2("pi");
ps.sayName();
console.log(pa.toString());

