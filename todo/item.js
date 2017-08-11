import React from 'react';
import ReactDom from 'react-dom';
import {classNames} from './util';

export default class Item extends React.Component{
	render(){
		return (
			<li className={classNames({
				completed:this.props.compile
			})}>
				<div className='view'>
					<input className='toggle' type='checkbox' checked={this.props.compile} onChange={this.props.toggle} />
					<label>{this.props.content}</label>
					<button className="destroy" onClick={this.props.del} value="sss"></button>
				</div>
				<input className='edit' defaultValue="剁剁剁剁剁" />
			</li>
		)

	}	
}