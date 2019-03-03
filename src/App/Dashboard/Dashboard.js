import React from 'react';

import './Dashboard.less';

import Table from './Table';
import FilterPanel from 'components/FilterPanel';

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
