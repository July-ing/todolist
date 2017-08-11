var path = require("path");
var webpack = require('webpack'); 
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		build:"./app/index.js",
		abc:"./app/abc.js"
	},
	output:{
		
		path: path.resolve(__dirname, './build'),
		filename:"[name].js"
	},
	module:{
		loaders:[
			{
				test:/.css$/,
				loaders:["style-loader","css-loader"],
				exclude:"/node_modules/"
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
        	title:"1",
        	chunks:["build"]
        }),
        new htmlWebpackPlugin({
        	title:"2",
        	filename:"htmlconfigtest.html",  //不写默认index
        	chunks:["abc"]  // 引用模块
        })
    ]
}