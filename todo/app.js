import {store} from './util';

let app = {
	dataArr:[],
	info:function(){
		store("todo",app.dataArr);
	},
	addItem:function (value) {
		app.dataArr.push({
			id:Date.now(),
			content:value,
			compile:false
		});
		app.info();
		app.render(app.dataArr);
	},
	toggleAll:function(bl){
		app.dataArr.forEach((item) => {
			item.compile = !item.compile;
			console.log(item);
		})
		app.info();
		app.render(app.dataArr);
	},
	toggle:function(id){
		console.log("toggle")
		app.dataArr.forEach((item) => {
			if(item.id === id){
				item.compile = !item.compile;
			}
		})
		app.info();
		app.render(app.dataArr);
	},
	del:function(id){
		console.log("toggle")
		
		app.dataArr = app.dataArr.filter((item) => {
			return item.id !== id;
		})
		app.info();
		app.render(app.dataArr);
	}
}
app.dataArr = store("todo") ||[];
export default app;

