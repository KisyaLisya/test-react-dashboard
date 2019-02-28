import React, { Component } from 'react';

import { makeClass } from '../../active/Utils';
import './App.less';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import CheckboxSelector from '../../components/CheckboxSelector';
import Table from '../../components/Table';

import Header from '../Header';

export default class App extends Component {

	render() {
		const props = this.props;
		const propsClass = makeClass(props.className);

		return(
			<div>
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
