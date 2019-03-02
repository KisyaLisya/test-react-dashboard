import React from 'react';

import './Input.less';

const Input = (props) => {
	const {
		className = '',
		placeholder = '',
		value = '',
		onChange
	} = props;

	return(
		<input
			className={`form-control ${className}`}
			type="text"
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
}

export default Input;
