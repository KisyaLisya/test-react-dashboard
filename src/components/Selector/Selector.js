import React, { Component } from 'react';

import './Selector.less';

export default class Selector extends Component {

	constructor(props) {
		super(props);

		this.state = {
			opened: false,
			search: '',
		}

		this.onSearch = this.onSearch.bind(this);
		this.clearSearch = this.clearSearch.bind(this);
	}

	applyFilter(filter, value) {
		if (filter) {
			const regex = new RegExp(`^${filter}`);
			return value.search(regex) !== -1;
		} else {
			return true;
		}
	}

	onSearch(event) {
		event.stopPropagation();
		const value = event.target.value;

		this.setState({
			search: value
		})
	}

	clearSearch() {
		this.setState({
			search: ''
		})
	}

	render() {
		const { className = '', opened = false, elements = [], value = '', onSelect, onToggle } = this.props;
		const { search } = this.state;

		const list = elements
			.filter(({ title }) => this.applyFilter(search, title))
			.map((el) => {
				const { id, title } = el;
				return(
					<li
						key={id}
						className="dropdown-item"
						onClick={() => {
							this.clearSearch();
							onSelect(id);
						}}
					>
						{title}
					</li>
				)
			});

		let body = null;

		if (opened) {
			body = (
				<React.Fragment>
					<input
						className="dropdown-toggle form-control"
						value={search}
						onChange={this.onSearch}
						autoFocus
					/>
					<ul className={`dropdown-menu show`}>
						{list}
					</ul>
				</React.Fragment>
			);
		} else {
			body = (
				<div
					className="dropdown-toggle"
					onClick={onToggle}
				>
					{value}
				</div>
			);
		}

		return(
			<div
				className={`btn btn-primary w-25 dropdown ${opened ? 'show' : ''}`}
				onClick={(e) => e.stopPropagation()}
			>
				{body}
			</div>
		);
	}
}
