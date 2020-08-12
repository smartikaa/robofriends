import React, { Component } from 'react';
import CardList from '../Components/cardList.js';
import Searchbox from '../Components/searchbox.js';
import Scroll from '../Components/scroll.js';
import './App.css';

class App extends Component{
	constructor(){
		super()
		this.state = {
			robotArray: [],
			searchfield: '',
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robotArray: users}));
		
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
				<h1 className='main-title tc'>ROBOFRIENDS</h1>
				<p className='title-decs'>All your robot friends in one place.</p>
				<Searchbox searchchange = {this.OnSearchChange} />
				<Scroll>
					<CardList robots={filterdRobots} />
				</Scroll>
			</div>			
		);
	}
}

export default App;