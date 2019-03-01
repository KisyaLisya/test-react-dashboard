import React, { Component } from 'react';

import './App.less';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import CheckboxSelector from '../../components/CheckboxSelector';
import Selector from '../../components/Selector';

import Table from '../../components/Table';
import Header from '../Header';

export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			opened: false,
			selected: 'Dropdown',
			elements: [
				{ id: 0, title: 'elem0' },
				{ id: 1, title: '22elem1' },
				{ id: 2, title: 'elem2' },
				{ id: 3, title: '6elem3' },
				{ id: 4, title: '66elem4' },
				{ id: 5, title: '1elem5' },
			]
		};
		this.onCloseDropdowns = this.onCloseDropdowns.bind(this);
		this.onToggle = this.onToggle.bind(this);
		this.onSelect = this.onSelect.bind(this);
	}

	onCloseDropdowns(event) {
		this.setState({
			opened: false
		})
	}

	onToggle(event) {
		event.stopPropagation();
		const { opened } = this.state;

		this.setState({
			opened: !opened
		})
	}

	onSelect(id) {
		const selElem = this.state.elements.find((el) => el.id === id);

		if (!selElem) return;

		this.setState({
			opened: false,
			selected: selElem.title
		})
	}

	render() {
		const { className = '' } = this.props;
		const { opened, elements, selected } = this.state;

		return(
			<div onClick={this.onCloseDropdowns}>
				<Header
					name="My App"
				/>
				<main className="jumbotron">
					<Selector
						opened={opened}
						value={selected}
						elements={elements}
						onToggle={this.onToggle}
						onSelect={this.onSelect}
					/>
					<Table />
				</main>
			</div>
		);
	}
}
