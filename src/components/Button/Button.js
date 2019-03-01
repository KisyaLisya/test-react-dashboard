import React from 'react';

import './Button.less';

const Button = (props) => {
	const { className, name, onClick } = props;

	return(
		<button
			className={`btn ${className}`}
			onClick={onClick}
		>
			{name}
		</button>
	);
}

export default Button;
