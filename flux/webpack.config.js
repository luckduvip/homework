module.exports = {
	entry : [
		 "./public/js/temp/MyHi.jsx"
		,"./public/js/temp/index.jsx"

		,"./public/js/temp/common/selectBox/SelectItem.jsx"
		,"./public/js/temp/common/selectBox/SelectList.jsx"
		,"./public/js/temp/common/selectBox/index.jsx"

		,"./public/js/global/GlobalEvent.js"
		,"./public/js/dispatcher/AppDispatcher.js"
		,"./public/js/constants/CommentConstants.js"
		,"./public/js/actions/CommonActions.js"
		,"./public/js/stores/CommonStore.js"

		,"./public/css/base.css"
		,"./public/css/a.scss"
		,"./public/css/index.min.css"
		,"./public/js/test"
	]
	,output : {
		path: "./public/js/assets"
		,publicPath : "/js/assets/"
		,filename : "bundle.js"
	}
	,module :{
		loaders : [
			{ 
				test : /\.jsx$/
				,exclude: /(node_modules|bower_components)/
				,loader: 'babel-loader'
				,query: {
					"presets":['es2015','stage-0','react']
				}
			}
			,{ 
				test : /\.js$/
				,exclude: /(node_modules|bower_components)/
				,loader: 'babel-loader'
				,query: {
					"presets":['es2015','stage-0']
				}
			}
			,{ test : /\.css$/,loader: "style!css"}
			,{ test : /\.scss$/,loader: "style!css!sass"}
		]
	}
}
