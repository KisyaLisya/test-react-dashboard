import React from 'react';

import './NotFoundBlock.less';

const NotFoundBlock = (props) => {
	const { className = '', value = 'Not Found' } = props;

	return(
		<div className={`NotFoundBlock ${className}`}>
			<div className="NotFoundBlock-value alert alert-secondary">
				{value}
			</div>
		</div>
	);
}

export default NotFoundBlock;
