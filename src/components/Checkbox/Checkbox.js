import React from 'react';

import { makeClass } from '../../active/Utils';
import './Checkbox.less';

const Checkbox = (props) => {
	const propsClass = makeClass(props.className);
	const checboxId = props.label.toLowerCase();

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
				className={`custom-control-label Checkbox-label ${propsClass}`}
			>
				{props.label}
			</label>
		</div>
	);
}

export default Checkbox;
