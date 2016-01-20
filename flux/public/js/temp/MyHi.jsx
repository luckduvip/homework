"use strict";
var React = require("react");
class MyHi extends React.Component {
	render (){
		return (<div className={this.props.cName}>
					<span className = "sfg_span">hi i amsfg......</span>
				</div>);
	}
}
module.exports = MyHi;
