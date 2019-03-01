import { TOGGLE_TASK, EDIT_TASK, DELETE_TASK, SET_FILTER, SET_SORT } from './actionTypes';

export const toggleTask = id => ({
  type: TOGGLE_TASK,
  payload: { id }
});

export const toggleSortType = (id, type = true) => {
  return {
    type: SET_SORT,
    payload: {
      id,
      type
    }
  }
}
