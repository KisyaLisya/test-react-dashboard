import React from 'react';

import './Input.less';

const Input = (props) => {
	const {
		className = '',
		id = '',
		type = 'text',
		placeholder = '',
		value = '',
		onChange
	} = props;

	return(
		<input
			id={id}
			className={`form-control ${className}`}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
}

export default Input;
