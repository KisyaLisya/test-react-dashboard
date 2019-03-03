import React, { Component } from 'react';
import { connect } from "react-redux";

import './Table.less';

import { UPDATE_TIME } from 'services/ApiService';
import { getMinutesDelay } from 'utils/Utils';
import { getTasksLoading, getPerformedTasks, getSortOptions } from 'store/selectors';
import { loadTasks, toggleSortType, deleteTask } from 'store/actions';

import NotFoundBlock from 'components/NotFoundBlock';
import Spinner from 'components/Spinner';
import TableHeadItem from './TableHeadItem';
import TableItem from './TableItem';

class Table extends Component {

	constructor(props) {
		super(props);
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

	render() {
		const { loading = false, data = [], sortOptions = {}, toggleSortType, deleteTask } = this.props;
		const items = data.map((el) => {
			const actions = {
				editAction: (id) => console.log(id),
				deleteAction: (id) => deleteTask(id)
			};

			return(
				<TableItem
					key={el.id}
					data={el}
					actions={actions}
				/>
			)
		});

		if (loading) {
			return(
				<div className="Table-error">
					<Spinner />
				</div>
			);
		}

		if (items.length === 0) {
			return(
				<div className="Table-error">
					<NotFoundBlock
						value="No task found"
					/>
				</div>
			)
		}

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
							className="align-middle _w100"
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
		loading: getTasksLoading(state),
		data: getPerformedTasks(state),
		sortOptions: getSortOptions(state)
	}
}

export default connect(
	mapStateToProps,
	{ loadTasks, toggleSortType, deleteTask }
)(Table);
