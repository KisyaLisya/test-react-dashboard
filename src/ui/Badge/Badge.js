import React from 'react';

import './Badge.less';

const Badge = (props) => {
	const { className = '', type = 'default', value = '' } = props;
	const modificator = formBadgeClass(type)

	return(
		<span
			className={`badge ${modificator} ${className}`}
		>
			{value}
		</span>
	);
}

export default Badge;

function formBadgeClass(type) {
	let modificator = '';
	switch(type) {
		case 'done':
			modificator = 'success';
			break;
		case 'todo':
			modificator = 'info';
			break;
		case 'in progress':
			modificator = 'warning';
			break;
		// case 'danger':
		// 	modificator = 'danger';
		// 	break;
		// case 'reopened':
		// 	modificator = 'secondary';
		// 	break;
		case 'default':
		default:
			modificator = 'dark';
			break;
	}

	return `badge-${modificator}`;
}
