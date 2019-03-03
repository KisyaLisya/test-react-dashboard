import React from 'react';

import './Button.less';

const Button = (props) => {
	const { className = '', name = '', onClick, type = 'button' } = props;

	return(
		<button
			type={type}
			className={`btn ${className}`}
			onClick={onClick}
		>
			{name}
		</button>
	);
}

export default Button;
