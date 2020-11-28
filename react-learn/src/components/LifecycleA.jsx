/** @format */

import React, { Component } from 'react';

export class LifecycleA extends Component {
	constructor(props) {
		console.log('inside constructor child');
		super(props);

		this.state = {
			text: 'hello',
		};
	}

	componentDidMount() {
		console.log('inside componentdidmount child');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('inside getDerivedStateFromProps method child');
		return null;
	}

	render() {
		return <div>child component</div>;
	}
}

export default LifecycleA;
