var path = require("path");
var _path = require("path");
var webpack = require('webpack'); 
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		build:"./es6/index.js"
	},
	output:{
		
		path: path.resolve(__dirname, './es6_build'),
		filename:"[name].js"
	},
	module:{
		loaders:[
			{
				test:/.css$/,
				loaders:["style-loader","css-loader"],
				exclude:"/node_modules/"
			},
			{
				test:/.js$/,
				loaders:["babel-loader"],
				exclude:"/node_modules/",
				include:_path.resolve(_dirname,"es6")
			}
		]
	},
	devServer:{
		hot:true,
		inline:true
	},
	resolve:{
		extensions:['*','.js','.css','.jsx'] //自动补全识别后缀 .2不再支持'',改为'*'
	},
	plugins: [  
      	new webpack.LoaderOptionsPlugin({  
          // test: /\.xxx$/, // may apply this only f  
          	options: {  
            // babel: {  
            //     //presets: ['es2015', 'stage-0', 'react'],  
            //     plugins: ['transform-runtime', ['import', {  
            //       libraryName: 'antd',  
            //       style: 'true' // or true  
            //     }]]  
            // }  
          	}  
        }),
        new htmlWebpackPlugin({     //建成html文件
        	title:"es6",
        	chunks:["build"]
        })
    ]
}