import { SAVE_TASK, LOAD_TASK } from '../actionTypes';

const initialState = {
  loaded: false,
  saved: false,
  name: 'Task name number 222',
  status: '1',
  priority: '',
  dateRequired: {
    days: '5d',
    hours: '2h'
  },
  datePromised: {
    days: '6d',
    hours: '4h'
  },
  description: 'Thats best description. SOOOOO MUCH WORDSSSSSSSSSSSSSSs',
}

const taskData = (state = initialState, action) => {
  const { type = '', payload } = action;

  switch (type) {
    case SAVE_TASK:
      return {
        ...state,
        saved: true,
        ...payload
      };
    default:
      return state;
  }
}

export default taskData;
