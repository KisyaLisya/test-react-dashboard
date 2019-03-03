import React, { Component } from 'react';
import { connect } from "react-redux";

import './FilterPanel.less';
import { STATUS_FILTERS } from 'utils/constants';

import { getSearchFilter, getStatusFilter } from 'store/selectors';
import { changeSearchFilter, changeStatusFilter } from 'store/actions';

import SearchInput from 'components/SearchInput';
import RadioButtonGroup from 'components/RadioButtonGroup';

class FilterPanel extends Component {

	render() {
		const {
			className = '',
			searchFilter,
			statusId,
			changeSearchFilter,
			changeStatusFilter
		} = this.props;

		return(
			<div className={`FilterPanel ${className}`}>
				<SearchInput
					className="FilterPanel-item _w250"
					value={searchFilter}
					onSearch={changeSearchFilter}
				/>
				<RadioButtonGroup
					className="FilterPanel-item"
					buttonClass="btn-outline-primary"
					name="filter_panel"
					list={STATUS_FILTERS.allIds.slice()}
					selected={statusId}
					onChange={changeStatusFilter}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		searchFilter: getSearchFilter(state),
		statusId: getStatusFilter(state)
	}
}

export default connect(
	mapStateToProps,
	{ changeSearchFilter, changeStatusFilter }
)(FilterPanel);
