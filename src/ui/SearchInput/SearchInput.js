import React from 'react';

import './SearchInput.less';

const SearchInput = (props) => {
	const {
		className = '',
		placeholder = 'Search ...',
		value = '',
		onSearch
	} = props;

	return(
		<input
			className={`form-control ${className}`}
			type="text"
			placeholder={placeholder}
			value={value}
			onChange={(e) => onSearch(e.target.value)}
		/>
	);
}

export default SearchInput;
