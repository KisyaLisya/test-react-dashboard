import { SAVE_TASK } from '../actionTypes';

const initialState = {
  loaded: false,
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
        ...payload
      }
    default:
      return state;
  }
}

export default taskData;
