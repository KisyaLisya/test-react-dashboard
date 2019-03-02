import React from 'react';

import './BaseForm.less';

const BaseForm = (props) => {
	const {
		className = '',
		id = 'default',
		label = '',
		children = null
	} = props;

	const labelItem = label ? (
		<label htmlFor={id}>
			{label}
		</label>
	) : null;

	return(
		<div
			className={`form-group ${className}`}
		>
			{labelItem}
			{children}
		</div>
	);
}

export default BaseForm;
