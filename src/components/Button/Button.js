import React from 'react';

import { makeClass } from '../../active/Utils';
import './Button.less';

const Button = (props) => {
	const propClass = makeClass(props.className);

	return(
		<button
			className={`btn btn-secondary ${propClass}`}
			onClick={props.onClick}
		>
			{props.name}
		</button>
	);
}

export default Button;
