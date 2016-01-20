"use strict";
import React, {PropTypes} from 'react';
export default class SelectItem extends React.Component{
	static propTypes = {
			item: PropTypes.shape({
					id: PropTypes.string.isRequired,
					text: PropTypes.string.isRequired,
			}),
	};
	componentWillReceiveProxy(nextPros){
		console.log("old_props is ====",this.props);
		console.log("new_props is ====",nextPros);
	}
	clickHandle(){
		this.props.onAClick({id:this.props.item.id,text:this.props.item.text});
	}
	render (){
		return (
			<a href="javascript:;" onClick={this.clickHandle.bind(this)} className="common_select_item">{this.props.item.text}</a>
		);
	}
}
