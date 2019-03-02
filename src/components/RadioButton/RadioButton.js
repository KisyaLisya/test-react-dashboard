import React from 'react';

import './RadioButton.less';

const RadioButton = (props) => {
	const { className, id, group, name, checked, onChange } = props;

	return(
		<label
			className={`RadioButton btn ${className} ${checked ? 'active' : ''}`}
		>
			<input
				type="radio"
				name={group}
				id={id}
				checked={checked}
				onChange={() => onChange(group, id)}
			/>
			{name}
		</label>
	);
}

export default RadioButton;
