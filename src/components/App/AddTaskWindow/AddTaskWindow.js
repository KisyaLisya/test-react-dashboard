import React from 'react';

import './AddTaskWindow.less';

import Button from 'components/Button';

const AddTaskWindow = (props) => {
	const { className = '', onClick: onAddTask } = props;

	return(
		<div className={`AddTaskWindow ${className}`}>
			<p className="AddTaskWindow-label">No task selected</p>
			<Button
				className="btn-primary btn-lg AddTaskWindow-button"
				name="Add new"
				onClick={onAddTask}
			/>
		</div>
	);
}

export default AddTaskWindow;
