/** @format */
import React, { Component } from 'react';
import LifeCycleA from './components/LifecycleA';

class App extends Component {
	constructor(props) {
		console.log('inside constructor');
		super(props);

		this.state = {
			text: 'hello',
		};
	}

	componentDidMount() {
		console.log('inside componentdidmount');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('inside getDerivedStateFromProps method ');
		return null;
	}

	render() {
		console.log('inside render method');
		return (
			<div>
				parent component
				<LifeCycleA />
			</div>
		);
	}
}

export default App;
