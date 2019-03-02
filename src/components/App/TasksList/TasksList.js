import React, { Component } from 'react';
import { connect } from "react-redux";

import './TasksList.less';

import { getPerformedTasks } from 'store/selectors';

import TaskItem from './TaskItem';

class TasksList extends Component {

	render() {
		const {
			className = '',
			list = []
		} = this.props;

		const items = list.map((el) => {
			return(
				<TaskItem
					key={el.id}
					name={el.task}
					status={el.status[1]}
				/>
			)
		})

		return(
			<ul className={`TasksList list-group ${className}`}>
				{items}
			</ul>
		);
	}
}

const mapStateToProps = state => {
	return {
		list: getPerformedTasks(state),
	}
}

export default connect(
	mapStateToProps,
	null
)(TasksList);
