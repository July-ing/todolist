import React from 'react';
import ReactDom from 'react-dom';
import app from './app';
import Item from './item';

require('./css/index');
require('./css/base');


class Main extends React.Component{
	render(){
		var dataArr = this.props.dataArr;
		var content,footer,num=0;
		dataArr.reduce((n,item)=>{
			item.compile?num:num++;
		},0)
		if(dataArr.length !== 0){
			content =   <session className="main">
							<input className="toggle-all" type="checkbox"  checked = {num === 0} onChange={this.toggleAll}/>
							<ul className="todo-list">
								{	
									dataArr.map(function(item,index){
										return <Item key={index} {...item} toggle={app.toggle.bind(this,item.id)} del={app.del.bind(this,item.id)} />
									}.bind(this))
								}
							</ul>
						</session>
			footer =  	<footer className='footer'>
							<span className='todo-count'>
								<strong>{num}</strong>
								<span>条未选中</span>
							</span>
						</footer>

		}



		return (
			<div>
				<header className="header">
					<h1>todos</h1>
					<input 
						className="new-todo" 
						placeholder="请输入内容" 
						defaultValue="" 
						onKeyDown={this.downHandle}
					/>
				</header>
				{content}
				{footer}


			</div>
		)
	}
	downHandle(ev){
		if(ev.keyCode === 13){
			app.addItem(ev.target.value);
			ev.target.value="";
		}
	}

	toggleAll(ev){

		app.toggleAll(ev.target.checked);
	}
}

var section = document.createElement('section');
section.className = "todoapp";
document.body.appendChild(section); 

function render (dataArr) {
	// body...
	ReactDom.render(<Main dataArr={dataArr}/>,section);

}
render(app.dataArr);
app.render = render;