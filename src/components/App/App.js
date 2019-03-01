import React, { Component } from 'react';

import './App.less';

import Header from 'app/Header';
import Table from 'app/Table';
import FilterPanel from 'app/FilterPanel';

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
					<FilterPanel />
					<Table />
				</main>
			</div>
		);
	}
}
