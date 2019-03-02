import React from 'react';

import './TableHeadItem.less';

const TableHeadItem = (props) => {
	const {
		id = 0,
		className = '',
		value = '',
		sort = {},
		onSort,
		noSort = false } = props;
	const sortClass = sort.type ? '_sortUp' : '_sortDown';

	if (noSort) {
		return(
			<th
				title={value}
				className={className}
			>
				{value}
			</th>
		);
	}

	return(
		<th
			title={value}
			className={`${className} ${sort.id === id ? sortClass : ''}`}
			onClick={() => onSort(id, sort.type)}
		>
			{value}
		</th>
	);
}

export default TableHeadItem;
