import {
  TASK_DATA_LOADING,
  TASK_DATA_LOADED,
  UPDATE_TASK_STATUS,
  ADD_TASK,
  CLOSE_TASK
} from '../actionTypes';

const defaultState = {
  id: 'new',
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
};

const initialState = {
  loading: false,
  saved: false,
  loaded: false,
  data: {}
}

const taskData = (state = initialState, action) => {
  const { type = '', payload } = action;

  switch (type) {
    case TASK_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TASK_DATA_LOADED:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: payload
      };
    case UPDATE_TASK_STATUS:
      return {
        ...state,
        loaded: false,
      };
    case ADD_TASK:
      return {
        ...state,
        loaded: true,
        data: {
          ...defaultState
        }
      };
    case CLOSE_TASK:
      return {
        ...state,
        loaded: false,
        data: {}
      }
    default:
      return state;
  }
}

export default taskData;
