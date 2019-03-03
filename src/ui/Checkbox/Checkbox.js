import React from 'react';

import './Checkbox.less';

const Checkbox = (props) => {
	const { className = '', label = '' } = props;
	const checboxId = label.toLowerCase();

	return(
		<div className="custom-control custom-checkbox">
			<input
				id={checboxId}
				className="custom-control-input"
				type="checkbox"
				onChange={props.onChange}
			/>
			<label
				htmlFor={checboxId}
				className={`custom-control-label Checkbox-label ${className}`}
			>
				{props.label}
			</label>
		</div>
	);
}

export default Checkbox;
