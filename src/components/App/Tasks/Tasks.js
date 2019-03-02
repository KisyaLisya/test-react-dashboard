import React from 'react';

import './Tasks.less';

import FilterPanel from 'app/FilterPanel';
import TasksList from 'app/TasksList';

const Tasks = (props) => {
	const { className = '' } = props;

	return(
		<main
			className={`Tasks ${className}`}
		>
			<FilterPanel
				className="mt-0 Tasks-filter"
			/>
			<div className="Tasks-main">
				<TasksList />
			</div>
		</main>
	);
}

export default Tasks;
