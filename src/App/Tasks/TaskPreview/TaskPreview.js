import React, { Component } from 'react';
import { connect } from "react-redux";

import './TaskPreview.less';
import {
  STATUS_LIST as statusList,
  PRIORITY_LIST as priorityList,
  DAYS_OPTIONS as daysOption,
  HOURS_OPTIONS as hoursOptions
} from 'utils/constants';
import { isDef } from 'utils/utils';

import ActionButton from 'components/ActionButton';
import Badge from 'components/Badge';
import BaseForm from 'components/BaseForm';
import Button from 'components/Button';
import Input from 'components/Input';
import Textarea from 'components/Textarea';
import Select from 'components/Select';
import Spinner from 'components/Spinner';

class TaskPreview extends Component {

  constructor(props) {
    super(props);

    this.state = {
      headlineName: '',
      headlineStatus: '',
      taskData: {
        name: '',
        status: '0',
        priority: '0',
        requiredDate: {
          days: '0d',
          hours: '0h'
        },
        promisedDate: {
          days: '0d',
          hours: '0h'
        },
        description: '',
      }
    };

    this.bindFunctions();
  }

  componentDidMount() {
    const {
      data = {}
    } = this.props;

    const { loading = false, saved = false, data: options } = data;

    this.updateStateData(options);
  }

  componentDidUpdate() {
    const {
      data = {},
      onUpdate
    } = this.props;
    const { taskData } = this.state;
    const { loading = false, loaded = false, data: options } = data;

    if (loaded) {
      this.updateStateData(options);

      onUpdate({
        loaded: false,
      });
    }
  }

  bindFunctions() {
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePriority = this.onChangePriority.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeRequiredDays = this.onChangeRequiredDays.bind(this);
    this.onChangeRequiredHours = this.onChangeRequiredHours.bind(this);
    this.onChangePromisedDays = this.onChangePromisedDays.bind(this);
    this.onChangePromisedHours = this.onChangePromisedHours.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  updateStateData(data) {
    if (!isDef(data.id)) return;

    this.setState({
      headlineName: data.name,
      headlineStatus: data.status,
      taskData: {
        ...this.state.taskData,
        ...data
      }
    })
  }

  onChangeFunc(e, propsName, objName) {
    const { target: { value = '' } } = e;

    if (!isDef(value)) return;
    const { taskData } = this.state;

    if (objName) {
      this.setState({
        taskData: {
          ...taskData,
          [objName]: {
            ...taskData[objName],
            [propsName]: value
          }
        }
      });
    } else {
      this.setState({
        taskData: {
          ...taskData,
          [propsName]: value
        }
      });
    }
  }

  onChangeName(e) {
    this.onChangeFunc(e, 'name');
  }

  onChangePriority(e) {
    this.onChangeFunc(e, 'priority');
  }

  onChangeStatus(e) {
    this.onChangeFunc(e, 'status');
  }

  onChangeRequiredDays(e) {
    this.onChangeFunc(e, 'days', 'requiredDate');
  }

  onChangeRequiredHours(e) {
    this.onChangeFunc(e, 'hours', 'requiredDate');
  }

  onChangePromisedDays(e) {
    this.onChangeFunc(e, 'days', 'promisedDate');
  }

  onChangePromisedHours(e) {
    this.onChangeFunc(e, 'hours', 'promisedDate');
  }

  onChangeDescription(e) {
    this.onChangeFunc(e, 'description');
  }

  onSave() {
    const { onSave } = this.props;
    const { taskData } = this.state;

    onSave({
      saved: true,
      ...taskData
    });
  }

  render() {
    const {
      className = '',
      loading = false,
      isEditing = false,
      onClose
    } = this.props;
    const {
      headlineName = '',
      headlineStatus = '0',
      taskData: {
        name: stateName = '',
        status = '0',
        priority = '1',
        requiredDate: {
          days: daysRequired = '0d',
          hours: hoursRequired = '0h'
        },
        promisedDate: {
          days: daysPromised = '0d',
          hours: hoursPromised = '0h'
        },
        description = ''
      }
    } = this.state;

    if (loading) {
      return (
        <div
          className={`TaskPreview modal-content border-primary ${className}`}
        >
          <Spinner />
        </div>
      );
    }

    let header = null;

    if (isEditing) {
      const statusObj = statusList.find((el) => el.id == headlineStatus);
      const { name: statusName } = statusObj;

      header = (
        <React.Fragment>
          <h5 className="modal-title mr-2">
            {headlineName}
          </h5>
          <Badge
            type={statusName.toLowerCase()}
            value={statusName}
          />
          <ActionButton
            className="btn-outline-danger ml-auto"
            icon="fa-times"
            title="Close"
            onClick={() => onClose()}
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
          <ActionButton
            className="btn-outline-danger ml-auto"
  					icon="fa-times"
            title="Close"
            onClick={() => onClose()}
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
              onChange={this.onChangeName}
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
                onChange={this.onChangePriority}
              />
            </BaseForm>
            <BaseForm
              id="status"
              label="Status"
            >
              <Select
                active={status}
                list={statusList}
                onChange={this.onChangeStatus}
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
                  onChange={this.onChangeRequiredDays}
                />
                <Select
                  className="col"
                  active={hoursRequired}
                  list={hoursOptions}
                  onChange={this.onChangeRequiredHours}
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
                  onChange={this.onChangePromisedDays}
                />
                <Select
                  className="col"
                  active={hoursPromised}
                  list={hoursOptions}
                  onChange={this.onChangePromisedHours}
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
              onChange={this.onChangeDescription}
            />
          </BaseForm>

        </div>
        <div className="modal-footer">
          <Button
            className="btn-success"
            name="Save"
            onClick={this.onSave}
          />
        </div>
      </form>
    );
  }
}

export default TaskPreview;
