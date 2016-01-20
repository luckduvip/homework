"use strict";
import React, {PropTypes}  from 'react';
import SelectItem from './SelectItem.jsx';
export default class SelectList extends React.Component{
	static propTypes = {
		comments: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
		})),
	};
	state = {
		loopsRemaining: "name"
	};
	aClick(args){
		this.props.onValChange(args);
	}
	componentWillReceiveProps(nextPros){
		console.log("this is ====old_props is ====",this.props);
		console.log("this is ====new_props is ====",nextPros);
	}
	render (){
		return (
			<div className={ this.props.isOpen == true ? 'common_select_list':'common_select_list common_select_list_close'} >
				{
					this.props.list.map(item => <SelectItem onAClick={this.aClick.bind(this)} key={item.id} item={item}/>)
				}
			</div>
		)
	}
}
