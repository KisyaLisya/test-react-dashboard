import React, { Component } from 'react';
import { connect } from "react-redux";

import './Table.less';

import { getPerformedTasks, getSortOptions } from 'store/selectors';
import { toggleSortType } from 'store/actions';

import TableHeadItem from './TableHeadItem';
import TableItem from './TableItem';

class Table extends Component {

	render() {
		const { data = [], sortOptions = {}, toggleSortType } = this.props;
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
		});

		return(
			<table
				className="table table-hover"
			>
				<thead>
					<tr>
						<TableHeadItem
							id="createdAt"
							className="Table-head-item align-middle _w150"
							value="Created Date"
							sort={sortOptions}
							onSort={toggleSortType}
						/>
						<TableHeadItem
							id="priority"
							className="Table-head-item align-middle _w100"
							value="Priority"
							sort={sortOptions}
							onSort={toggleSortType}
						/>
						<TableHeadItem
							id="status"
							className="Table-head-item align-middle _w100"
							value="Status"
							sort={sortOptions}
							onSort={toggleSortType}
						/>
						<TableHeadItem
							id="task"
							className="Table-head-item align-middle"
							value="Task"
							sort={sortOptions}
							onSort={toggleSortType}
						/>
						<TableHeadItem
							id="actions"
							className="align-middle _w125"
							value="Actions"
							noSort
						/>
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
		data: getPerformedTasks(state),
		sortOptions: getSortOptions(state)
	}
}

export default connect(
	mapStateToProps,
	{ toggleSortType }
)(Table);
