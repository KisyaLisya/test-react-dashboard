import React, { Component } from 'react';

import { makeClass } from 'utils/Utils';
import './NavPanel.less';

export default class NavPanel extends Component {

	render() {
		const props = this.props;
		const propsClass = makeClass(props.className);
		const list = props.list.map((el) => {
			return(
				<li
					key={el.id}
					className={`nav-item ${el.active ? 'active' : ''}`}
				>
					<a
						className="nav-link"
						href={el.url}
					>
						{el.name}
					</a>
				</li>
			)
		})

		return(
			<ul
				className={`navbar-nav mr-auto ${propsClass}`}
			>
				{list}
			</ul>
		)
	}
};
