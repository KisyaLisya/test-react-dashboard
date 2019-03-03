import React from 'react';
import { Link } from 'react-router-dom';

import './NavPanel.less';

const NavPanel = (props) => {
	const { className = '', list = [] } = props;

	const navList = list.map((el) => {
		return(
			<li
				key={el.id}
				className={`nav-item ${el.active ? 'active' : ''}`}
			>
				<Link
					to={el.url}
					className="nav-link"
					title={el.name}
				>
					{el.name}
				</Link>
			</li>
		)
	});

	return(
		<ul
			className={`navbar-nav mr-auto ${className}`}
		>
			{navList}
		</ul>
	)
};

export default NavPanel;
