"use strict";
class GlobalEvent{
	_list = {};
	constructor() {
		console.log("init........");
	};
	pushVal(id,val){
		this._list[id] = val;
	}
	getVal(id){
		var val = this._list[id];
		val&&delete(this._list[id]);
		return val;
	}
}
module.exports = new GlobalEvent();
