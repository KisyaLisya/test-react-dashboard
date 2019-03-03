import React, { Component } from 'react';
import { connect } from "react-redux";

import './Tasks.less';

import { getMinutesDelay, isDef } from 'utils/Utils';
import { getTasksLoading, getPerformedTasks, getTaskDataState } from 'store/selectors';
import { loadTasks, loadTaskData, saveTaskData } from 'store/actions';

import FilterPanel from 'app/FilterPanel';
import TasksList from 'app/TasksList';
import TaskPreview from 'app/TaskPreview';

class Tasks extends Component {

	constructor(props) {
		super(props);

		this.selectTask = this.selectTask.bind(this);
	}

	componentDidMount() {
		const { loadTasks } = this.props;

		loadTasks();
		this.refreshTimeout = setInterval(() => {
			loadTasks();
		}, getMinutesDelay(1));
	}

	componentWillUnmount() {
		clearInterval(this.refreshTimeout);
	}

	selectTask(id) {
		const { loadTaskData } = this.props;

		loadTaskData(id);
	}

	render() {
		const {
			className = '',
			loadingList = false,
			tasksList = [],
			taskData = {},
			saveTaskData
		} = this.props;

		const { data: { id: taskId = null } } = taskData;
		console.log(taskId);

		return(
			<main
				className={`Tasks ${className}`}
			>
				<FilterPanel
					className="mt-0 Tasks-filter"
				/>
				<div className="Tasks-main">
					<TasksList
						className="Tasks-list"
						loading={loadingList}
						selectedTask={taskId}
						list={tasksList}
						onSelect={this.selectTask}
					/>
					<TaskPreview
						className="Tasks-preview"
						isEditing={isDef(taskId)}
						data={taskData}
						onUpdate={saveTaskData}
					/>
				</div>
			</main>
		);
	}
}

const mapStateToProps = state => {
	return {
		loadingList: getTasksLoading(state),
		tasksList: getPerformedTasks(state),
		taskData: getTaskDataState(state)
	}
}

export default connect(
	mapStateToProps,
	{ loadTasks, loadTaskData, saveTaskData }
)(Tasks);
