import React, { Component } from 'react';

import { makeClass } from 'utils/Utils';
import './Header.less';

import NavPanel from 'app/NavPanel';

const menu = [
	{ id: 'dashboard', name: 'Dashboard', url:'#', active: true },
	{ id: 'scrum', name: 'Scrum', url:'#', active: false },
	{ id: 'profile', name: 'Profile', url:'#', active: false },
]

export default class Header extends Component {

	render() {
		const props = this.props;
		const propsClass = makeClass(props.className);

		return(
			<header
				className={`navbar navbar-expand navbar-dark bg-primary ${propsClass}`}
			>
				<a
					className="navbar-brand"
					href="/"
				>
					{props.name}
				</a>
				<div
					className="navbar-collapse"
				>
					<NavPanel
						list={menu}
					/>
				</div>
			</header>
		)
	}
};
