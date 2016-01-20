"use strict";
import React,{ Component,PropTypes } from 'react';
import SelectList from './SelectList.jsx';
import CommonActions from '../../../actions/CommonActions';

import CommentStore from '../../../stores/CommonStore';

var commonActions = new CommonActions();
function getCurVal(_id){
	return CommentStore.getCurVal(_id);
}
class SelectBox extends React.Component {
	eventId = "";
	constructor(props) {
		super(props);
	};
	state = {
		isOpen : false,
		val : { id : "0", text: "item 0"},
		list : [
		{ id : "0", text:"item.."+Math.ceil(Math.random()*10)}
		,{ id : "1", text:"item 1"}
		,{ id : "2", text:"item 2"}
		,{ id : "3", text:"item 3"}
		,{ id : "4", text:"item 4"}
		,{ id : "sb", text:"hwhw sb"}
		]
	};
	onStoreChange() {
		if(this.eventId){
			var val = getCurVal(this.eventId);
			var state = this.state;
			state.val = val;
			this.setState(state);
		}
	};

	shouldComponentUpdate(){
		
		/*
		 *console.log("should update======? false....can receive the update success");
		 *return false;
		 */
		console.log("should update ====? true...can receive the update success");
		return true;
	}
	componentDidUpdate(){
		this.eventId = "";
		console.log("update success....");
	}
	componentDidMount() {
		console.log("componentDidMount-----kwkw");
		CommentStore.addChangeListener(this.onStoreChange.bind(this));
	}

	componentWillUnmount() {
		CommentStore.removeChangeListener(this.onStoreChange);
	}
	clickHandle(){
		var state = this.state;
		state.isOpen = !state.isOpen;
		this.setState(state);
	}
	valChange(args){
		this.eventId = this.props._id + Date.now();
		commonActions.create(this.eventId,args.id, args.text);
	}
	render (){
		return (
				<div onClick={this.clickHandle.bind(this)} className="common_select_box">
				<span className="common_select_val">{this.state.val.text}</span>
				<SelectList onValChange={this.valChange.bind(this)} list={this.state.list} isOpen={this.state.isOpen}/>
				</div>
				);
	}
}
module.exports = SelectBox;
