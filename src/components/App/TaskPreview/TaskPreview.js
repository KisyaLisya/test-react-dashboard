import React, { Component } from 'react';
import { connect } from "react-redux";

import './TaskPreview.less';
import {
  STATUS_LIST as statusList,
  PRIORITY_LIST as priorityList,
  DAYS_OPTIONS as daysOption,
  HOURS_OPTIONS as hoursOptions
} from 'utils/constants';
import { isDef } from 'utils/Utils';
import { getTaskDataState } from 'store/selectors';

import Badge from 'components/Badge';
import BaseForm from 'components/BaseForm';
import Button from 'components/Button';
import Input from 'components/Input';
import Textarea from 'components/Textarea';
import Select from 'components/Select';

class TaskPreview extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      status: '0',
      priority: '0',
      dateRequired: {
        days: '0d',
        hours: '0h'
      },
      datePromised: {
        days: '0d',
        hours: '0h'
      },
      description: '',
    };
  }

  componentDidMount() {
    const {
      data = {}
    } = this.props;

    const { loaded = false, ...options} = data;

    this.updateStateData(options);
  }

  updateStateData(data) {

    this.setState({
      ...this.state,
      ...data
    })
  }

  render() {
    const {
      className = '',
      isEditing = true
    } = this.props;
    const {
      name: stateName = '',
      status = '0',
      priority = '1',
      dateRequired: {
        days: daysRequired = '0d',
        hours: hoursRequired = '0h'
      },
      datePromised: {
        days: daysPromised = '0d',
        hours: hoursPromised = '0h'
      },
      description = ''
    } = this.state;

    let header = null;

    if (isEditing) {
      const statusObj = statusList.find((el) => el.id == status);
      const { name: statusName } = statusObj;

      header = (
        <React.Fragment>
          <h5 className="modal-title mr-2">
            {stateName}
          </h5>
          <Badge
            type={statusName.toLowerCase()}
            value={statusName}
          />
        </React.Fragment>
      );
    } else {
      header = (
        <React.Fragment>
          <h5 className="modal-title mr-2">
            Create new task
          </h5>
          <Badge
            type="todo"
            value="Todo"
          />
        </React.Fragment>
      );
    }

    return(
      <form
        className={`TaskPreview modal-content border-primary ${className}`}
      >
        <div className="modal-header justify-content-start align-items-center">
          {header}
        </div>
        <div className="modal-body">
          <BaseForm
            id="name"
            label="Task Name"
          >
            <Input
              id="name"
              placeholder="Type name ..."
              value={stateName}
              onChange={(e) => console.log(e.target.value)}
            />
          </BaseForm>
          <div className="form-row mx-0">
            <BaseForm
              id="priority"
              label="Priority"
              className="mr-4"
            >
              <Select
                active={priority}
                list={priorityList}
              />
            </BaseForm>
            <BaseForm
              id="status"
              label="Status"
            >
              <Select
                active={status}
                list={statusList}
              />
            </BaseForm>
          </div>
          <div className="form-row mx-0 justify-content-between">
            <BaseForm
              id="requiredDate"
              label="Required Time"
              className="flex-grow-1 mr-4"
            >
              <div className="row mx-0">
                <Select
                  className="col mr-2"
                  active={daysRequired}
                  list={daysOption}
                />
                <Select
                  className="col"
                  active={hoursRequired}
                  list={hoursOptions}
                />
              </div>
            </BaseForm>
            <BaseForm
              id="requiredDate"
              label="Promised Time"
              className="flex-grow-1"
            >
              <div className="row mx-0">
                <Select
                  className="col mr-2"
                  active={daysPromised}
                  list={daysOption}
                />
                <Select
                  className="col"
                  active={hoursPromised}
                  list={hoursOptions}
                />
              </div>
            </BaseForm>
          </div>
          <BaseForm
            id="description"
            label="Descrition"
          >
            <Textarea
              id="editing"
              rows="8"
              value={description}
              onChange={(e) => console.log(e.target.value)}
            />
          </BaseForm>

        </div>
        <div className="modal-footer">
          <Button
            className="btn-success"
            name="Save"
          />
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
	return {
		data: getTaskDataState(state),
	}
}

export default connect(
  mapStateToProps,
  null
)(TaskPreview);
