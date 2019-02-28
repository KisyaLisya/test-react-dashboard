import React from 'react';

import { makeClass } from '../../active/Utils';
import './CheckboxSelector.less';

const CheckboxSelector = (props) => {
	const propsClass = makeClass(props.className);

	return(
		<label
			className={`CheckboxSelector ${propsClass}`}
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
