import { TASKS_LOADED, TASKS_LOADING, EDIT_TASK, DELETE_TASK } from '../actionTypes';

const initialState = {
  loading: false,
  allIds: [],
  byIds: {}
}

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TASKS_LOADING:
      return {
        ...state,
        loading: true,
      }
    case TASKS_LOADED:
      return {
        loading: false,
        ...payload
      };
    case EDIT_TASK:
      console.log('EDIT_TASK');
      return state;
    case DELETE_TASK:
      const { allIds, byIds } = state;
      const { id: taskId } = payload;

      return {
        allIds: allIds.filter((el) => el !== taskId),
        byIds: {
          ...byIds,
          [taskId]: null
        }
      };
    default:
      return state;
  }
}
