import React from 'react';

import { makeClass, makePlaceholder } from '../../active/Utils';
import './Input.less';

const Input = (props) => {
	const propsClass = makeClass(props.className);
	const placeholder = makePlaceholder(props.placeholder);

	return(
		<input
			className={`form-control ${propsClass}`}
			type="text"
			placeholder={placeholder}
			value={props.value}
			onChange={props.onChange}
		/>
	);
}

export default Input;
