import React, { Component } from 'react';
import CardList from './cardList.js';
import { robots } from './robots.js';
import Searchbox from './searchbox.js';


class App extends Component{
	constructor(){
		super()
		this.state = {
			robotArray: robots,
			searchfield: '',
		}
	}

	componentDidMount(){
		this.setState();
	}

	OnSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	render(){
		const filterdRobots = this.state.robotArray.filter(robot => {
				return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		});
		return(
			<div className='tc'>
				<h1 className='ma5 f1'>RoboFriends</h1>
				<Searchbox searchchange = {this.OnSearchChange} />
				<CardList robots={filterdRobots} />
			</div>			
		);
	}
}

export default App;