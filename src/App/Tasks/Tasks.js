import React, { Component } from 'react';
import { connect } from "react-redux";

import './Tasks.less';

import { UPDATE_TIME } from 'services/ApiService';
import { getMinutesDelay, isDef } from 'utils/utils';
import { getTasksLoading, getTaskDataLoading, getPerformedTasks, getTaskDataState } from 'store/selectors';
import {
	loadTasks,
	loadTaskData,
	onParsedData,
	createNewTask,
	saveTask,
	closeTask
} from 'store/actions';

import FilterPanel from 'components/FilterPanel';
import TasksList from './TasksList';
import TaskPreview from './TaskPreview';
import AddTaskWindow from './AddTaskWindow';

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
		}, getMinutesDelay(UPDATE_TIME));
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
			loadingTask = false,
			tasksList = [],
			taskData = {},
			onParsedData,
			createNewTask,
			saveTask,
			closeTask
		} = this.props;
		const { data: { id: taskId = null } } = taskData;

		const previewPanel = getSidePanel(
			taskId,
			{
				loadingTask,
				taskData,
				onParsedData,
				createNewTask,
				saveTask,
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
		loadingTask,
		taskData,
		onParsedData,
		createNewTask,
		saveTask: onSaveTask,
		closeTask
	} = props;
	let body = null;
	if (isDef(taskId)) {
		body = (
			<TaskPreview
				className="Tasks-preview"
				loading={loadingTask}
				isEditing={taskId !== 'new'}
				data={taskData}
				onUpdate={onParsedData}
				onSave={onSaveTask}
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
		loadingTask: getTaskDataLoading(state),
		tasksList: getPerformedTasks(state),
		taskData: getTaskDataState(state)
	}
}

export default connect(
	mapStateToProps,
	{ loadTasks, loadTaskData, onParsedData, createNewTask, saveTask, closeTask }
)(Tasks);
