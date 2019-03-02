import React from 'react';

import './CheckboxSelector.less';

const CheckboxSelector = (props) => {
	const { className = '' } = props;

	return(
		<label
			className={`CheckboxSelector ${className}`}
		>
			<input
				className="CheckboxSelector-input"
				type="checkbox"
				checked={props.value}
				onChange={(e) => props.onChange()}
			/>
			<span className="CheckboxSelector-box"></span>
		</label>
	);
}

export default CheckboxSelector;
