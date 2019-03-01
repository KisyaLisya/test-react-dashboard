import React from 'react';
import { connect } from "react-redux";

import './FilterPanel.less';
import { STATUS_FILTERS } from 'utils/constants';

import { getStatusFilter } from 'store/selectors';
import { changeStatusFilter } from 'store/actions';

import RadioButtonGroup from 'components/RadioButtonGroup';

const FilterPanel = (props) => {
	const { statusId, changeStatusFilter }= props;

	return(
		<div className="jumbotron">
			<RadioButtonGroup
				className="btn-info"
				name="filter_panel"
				list={STATUS_FILTERS.allIds.slice()}
				selected={statusId}
				onChange={changeStatusFilter}
			/>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		statusId: getStatusFilter(state)
	}
}

export default connect(
	mapStateToProps,
	{ changeStatusFilter }
)(FilterPanel);
