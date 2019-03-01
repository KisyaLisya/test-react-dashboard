import React, { Component } from 'react';

import './App.less';

import Table from '../../components/Table';
import Header from '../Header';

export default class App extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { className = '' } = this.props;

		return(
			<div onClick={this.onCloseDropdowns}>
				<Header
					name="My App"
				/>
				<main className="jumbotron">
					<Table />
				</main>
			</div>
		);
	}
}
