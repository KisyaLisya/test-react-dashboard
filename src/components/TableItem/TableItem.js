import React, { Component } from 'react';
import { connect } from "react-redux";
import { toggleTask } from '../../store/actions';

import './TableItem.less';

import ActionButton from '../ActionButton';
import Badge from '../Badge';


const TableItem = ({ className = '', data, actions, toggleTask }) => {
	const {
		id,
		createdAt = 'unknown',
		status = false,
		task,
		priority
	} = data;
	const { editAction, deleteAction } = actions;

	return(
		<tr
			className={className}
		>
			<td>
				{createdAt[1]}
			</td>
			<td>
				{priority}
			</td>
			<td>
				<Badge
					type={status}
					value={`${status[0].toUpperCase()}${status.slice(1)}`}
				/>
			</td>
			<td>
				{task}
			</td>
			<td>
				<ActionButton
					className="btn-outline-info mr-1"
					icon="fa-pencil"
					onClick={() => editAction(id)}
				/>
				<ActionButton
					className="btn-outline-danger"
					icon="fa-trash-o"
					onClick={() => editAction(id)}
				/>
			</td>
		</tr>
	);
}

export default connect(
	null,
	{ toggleTask }
)(TableItem);
