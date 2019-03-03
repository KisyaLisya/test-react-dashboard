import React, { Component } from 'react';
import { connect } from "react-redux";

import './Tasks.less';

import { getMinutesDelay, isDef } from 'utils/Utils';
import { getTasksLoading, getPerformedTasks, getTaskDataState } from 'store/selectors';
import {
	loadTasks,
	loadTaskData,
	saveTaskData,
	createNewTask,
	closeTask
} from 'store/actions';

import FilterPanel from 'app/FilterPanel';
import TasksList from 'app/TasksList';
import TaskPreview from 'app/TaskPreview';
import AddTaskWindow from 'app/AddTaskWindow';

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
			saveTaskData,
			createNewTask,
			closeTask
		} = this.props;
		const { data: { id: taskId = null } } = taskData;

		const previewPanel = getSidePanel(
			taskId,
			{
				taskData,
				saveTaskData,
				createNewTask,
				closeTask
			}
		);

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
					{previewPanel}
				</div>
			</main>
		);
	}
}

function getSidePanel(taskId, props) {
	const {
		taskData,
		saveTaskData,
		createNewTask,
		closeTask
	} = props;
	let body = null;
	if (isDef(taskId)) {
		body = (
			<TaskPreview
				className="Tasks-preview"
				isEditing={taskId !== 'new'}
				data={taskData}
				onUpdate={saveTaskData}
				onClose={closeTask}
			/>
		);
	} else {
		body = (
			<AddTaskWindow
				className="Tasks-preview"
				onClick={createNewTask}
			/>
		)
	}
	return body;
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
	{ loadTasks, loadTaskData, saveTaskData, createNewTask, closeTask }
)(Tasks);
