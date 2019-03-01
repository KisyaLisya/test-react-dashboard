import React, from 'react';

import './Filter.less';

const Filter = () => {
	const {
		className = '',
		placeholder = 'Search ...',
		value = '',
		onSearch
	} = this.props;

	return(
		<input
			className={`form-control ${className}`}
			type="text"
			placeholder={placeholder}
			value={value}
			onChange={onSearch}
		/>
	);
}

export default Filter;

export const applyFilter = (filter, value) => {
	if (filter) {
		const regex = new RegExp(`^${filter}`);
		return value.search(regex) !== -1;
	} else {
		return true;
	}
}
