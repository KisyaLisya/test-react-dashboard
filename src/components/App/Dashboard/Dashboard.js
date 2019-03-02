import React from 'react';

import './Dashboard.less';

import Table from 'app/Table';
import FilterPanel from 'app/FilterPanel';

const Dashboard = (props) => {
	const { className = '' } = props;

	return(
		<main
			className={className}
		>
			<FilterPanel
				className="mt-0"
			/>
			<Table />
		</main>
	);
}

export default Dashboard;
