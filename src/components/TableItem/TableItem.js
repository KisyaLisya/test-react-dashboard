import React, { Component } from 'react';
import { connect } from "react-redux";

import { makeClass } from '../../active/Utils';
import './TableItem.less';

import { toggleTask } from '../../store/actions';

const TableItem = ({ className = '', data, actions, toggleTask }) => {
	const {
		id,
		checked = false,
		status = false,
		task,
		assignee
	} = data;
	const { editAction, deleteAction } = actions;

	return(
		<tr
			key={id}
			className={className}
		>
			<td>
				{status}
			</td>
			<td>
				{task}
			</td>
			<td>
				{assignee}
			</td>
			<td>
				<button
					type="button"
					className="btn btn-outline-info btn-sm"
					onClick={() => editAction(id)}
				>
					<i className="fa fa-pencil"></i>
				</button>
				<button
					type="button"
					className="btn btn-outline-danger btn-sm"
					onClick={() => deleteAction(id)}
				>
					<i className="fa fa-trash-o"></i>
				</button>
			</td>
		</tr>
	);
}

export default connect(
	null,
	{ toggleTask }
)(TableItem);
