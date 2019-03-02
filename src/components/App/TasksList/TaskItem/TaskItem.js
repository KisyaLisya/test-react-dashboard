import React from 'react';

import { makeWordFromId } from 'utils/Utils';
import './TaskItem.less';

import Badge from 'components/Badge';

const TaskItem = (props) => {
  const {
    className = '',
    name = '',
    status = 'todo',
  } = props;

	const statusName = status
		.split(' ')
		.map((w) => makeWordFromId(w))
		.join(' ');

  return(
    <li
      className={`TaskItem list-group-item list-group-item-action ${className}`}
    >
      <Badge
        className="TaskItem-status"
        type={status}
        value={statusName}
      />
      <span className="TaskItem-name">
        {name}
      </span>
    </li>
  );
}

export default TaskItem;
