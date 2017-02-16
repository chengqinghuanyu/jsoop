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
	alert(123);
}else{
	alert(456);
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
