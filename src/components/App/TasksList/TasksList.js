import React, { Component } from 'react';

import './TasksList.less';

import NotFoundBlock from 'components/NotFoundBlock';
import Spinner from 'components/Spinner';
import TaskItem from './TaskItem';

class TasksList extends Component {

	render() {
		const {
			className = '',
			selectedTask = null,
			list = [],
			loading = false,
			onSelect
		} = this.props;

		if (loading) {
			return(
				<div className="TasksList-error">
					<Spinner />
				</div>
			);
		}

		const items = list.map((el) => {
			return(
				<TaskItem
					key={el.id}
					id={el.id}
					active={el.id === selectedTask}
					name={el.task}
					status={el.status[1]}
					onClick={onSelect}
				/>
			)
		})

		return(
			<ul className={`TasksList list-group ${className}`}>
				{items.length > 0 ? items : (
					<NotFoundBlock />
				)}
			</ul>
		);
	}
}

export default TasksList;
