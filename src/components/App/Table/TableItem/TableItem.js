import React, { Component } from 'react';
import { connect } from "react-redux";
import { toggleTask } from 'store/actions';

import { makeWordFromId } from 'utils/Utils';
import './TableItem.less';

import ActionButton from 'components/ActionButton';
import Badge from 'components/Badge';


const TableItem = ({ className = '', data, actions, toggleTask }) => {
	const {
		id,
		createdAt = 'unknown',
		status = [0, 'todo'],
		task,
		priority
	} = data;
	const { editAction, deleteAction } = actions;
	const [, statusType] = status;
	const statusName = statusType
		.split(' ')
		.map((w) => makeWordFromId(w))
		.join(' ');

	return(
		<tr
			className={className}
		>
			<td className="align-middle">
				{createdAt[1]}
			</td>
			<td className="align-middle">
				{makeWordFromId(priority[1])}
			</td>
			<td className="align-middle">
				<Badge
					type={statusType}
					value={statusName}
				/>
			</td>
			<td className="align-middle">
				{task}
			</td>
			<td className="align-middle">
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
