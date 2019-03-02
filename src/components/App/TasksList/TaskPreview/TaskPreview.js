import React from 'react';

import './TaskPreview.less';

import Badge from 'components/Badge';

const TaskPreview = (props) => {
  const {
    className = '',
  } = props;

  return(
    <form
      className={`TaskPreview ${className}`}
    >

    </form>
  );
}

export default TaskPreview;
