import React from 'react';

import { makeWordFromId } from 'utils/Utils';
import './RadioButtonGroup.less';

import RadioButton from 'components/RadioButton';

const RadioButtonGroup = (props) => {
	const { className, buttonClass, name, list, selected, onChange } = props;

	const buttons = list.map((el) => {
		return(
			<RadioButton
				className={buttonClass}
				id={el}
				key={el}
				group={name}
				name={makeWordFromId(el)}
				checked={el === selected}
				onChange={onChange}
			/>
		)
	})

	return(
		<div className={`btn-group btn-group-toggle ${className}`}>
			{buttons}
		</div>
	);
}

export default RadioButtonGroup;
