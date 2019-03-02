import React from 'react';

import './Select.less';

const Select = (props) => {
	const {
		className = '',
		id = '',
		active = '',
		list = [],
		onChange
	} = props;

	const options = list.map((el) => {
		return(
			<option
				key={el.id}
				value={el.id}
			>
				{el.name}
			</option>
		)
	})

	return(
		<select
			id={id}
			className={`custom-select ${className}`}
			value={active}
			onChange={onChange}
		>
			{options}
		</select>
	);
}

export default Select;
