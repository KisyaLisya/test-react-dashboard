import React from 'react';

import './Textarea.less';

const Textarea = (props) => {
	const {
		className = '',
		rows = '5',
		id = '',
		value = '',
		onChange
	} = props;

	return(
		<textarea
			className={`form-control ${className}`}
			id={id}
			rows={rows}
			value={value}
			onChange={onChange}
		/>
	);
}

export default Textarea;
