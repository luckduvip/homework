"use strict";
import ReactDOM from 'react-dom';
import React from 'react';
import Sb from './common/selectBox/index.jsx';

ReactDOM.render(
	<div><Sb _id="sb1"/><Sb _id="sb2"/></div>
	, document.getElementById("test")); 

import Test,{_Test,arr} from "../test";
function testEs6(){
	var test = new _Test();
	test.fun({x:"1",y:"2"});
	test.fun1("sss",1,2,3,4);
	test.fun2(null,222);
	test.fun3(["ddd",24]);
	test.fun4();
	test.fun5();
	test.fun6("sssb");
	console.log("this arr.............");
	arr.testFill({name:"sfg",age:25});
	arr.test();
	arr.includes([,2]);
	console.log("this arr.............");
}
testEs6();
