import React from 'react';

import './ActionButton.less';

const ActionButton = (props) => {
	const { className = 'btn-outline-info', icon = 'fa-pencil', onClick } = props;

	return(
		<button
			type="button"
			className={`btn btn-sm ${className}`}
			onClick={onClick}
		>
			<i className={`fa ${icon}`}></i>
		</button>
	);
}

export default ActionButton;
