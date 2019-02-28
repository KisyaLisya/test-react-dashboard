import React, { Component } from 'react';
import { connect } from "react-redux";

import './Table.less';

import { getTasks } from '../../store/selectors';

import TableItem from '../TableItem';

class Table extends Component {

	render() {
		const { data = [] } = this.props;

		const items = data.map((el) => {
			const actions = {
				editAction: (id) => console.log(id),
				deleteAction: (id) => console.log(id)
			};

			return(
				<TableItem
					key={el.id}
					data={el}
					actions={actions}
				/>
			)
		})

		return(
			<table
				className="table table-hover"
			>
				<thead>
					<tr>
						<th title="Status">Status</th>
						<th title="Task">Task</th>
						<th title="Assignee">Assignee</th>
						<th title="Actions">Actions</th>
					</tr>
				</thead>
				<tbody>
					{items}
				</tbody>
			</table>
		);
	}
};

const mapStateToProps = state => {
	return {
		data: getTasks(state)
	}
}

export default connect(mapStateToProps)(Table);
