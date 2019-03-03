import React from 'react';

import './Spinner.less';

const Spinner = (props) => {
	const { className = '' } = props;

	return(
		<div className={`Spinner ${className}`}>
			<div className="Spinner-value">
				<i className="fa fa-spinner fa-spin fa-2x fa-fw"></i>
			</div>
		</div>
	);
}

export default Spinner;
