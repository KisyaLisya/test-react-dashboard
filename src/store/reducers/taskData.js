import {
  TASK_DATA_LOADING,
  TASK_DATA_LOADED,
  SAVE_TASK
} from '../actionTypes';

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
      console.log('LOADED', state, payload);
      return {
        ...state,
        loading: false,
        loaded: true,
        data: payload
      };
    case SAVE_TASK:
      return {
        ...state,
        loaded: false,
      };
    default:
      return state;
  }
}

export default taskData;
