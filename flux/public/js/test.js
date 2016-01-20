"use strict";
class Test{
	fun({x=0,y=0}={}){
		console.log("x y is =====",x,y);
	}
	fun1(...args){
		console.log("fun1 is =====",...args);
	}
	fun2(n="sfg",age=26){
		console.log("fun2 is =====",n,age);
	}
	fun3([n,a]){
		console.log("fun3 is =====",n,a);
	}
	fun4(){
		[[1],[2,3],[4,2],[]].map(([a="s",b="b"]) => console.log("the result is ===",a,b));
	}
	fun5(){
		console.log("fun5=================");
		var map = new Map();
		map.set("f","first");
		map.set("s","second");
		for(let [key,val] of map){
			console.log(key,val);
		}
		console.log("fun5=================");
	}
	fun6(str){
		console.log((str=>"----"+str+"...")(str+"sss"));
		[1,2,3,4].map(i => console.log("the num is===",i));
	}
}
class arrDemo{
	arr = [1,2,3,4,5,6,7,];
	testFill(idx){
		this.arr.fill(idx);
	}
	test(){
		for(let index of this.arr.keys()){
			console.log("key is ====",index);
		}
		this.arr.map(item => console.log("item is ====",item));
		for(let [idx,val] of this.arr.entries()){
			console.log("key is ====",idx);
			console.log("values is ====",val);
		}
	}
	includes(arr=[1,2,3,4],val){
		console.log(arr.includes(val));
	}
}


module.exports = {
	_Test : Test
	,arr : new arrDemo()
}

