import { TOGGLE_TASK, EDIT_TASK, DELETE_TASK, SET_FILTER } from './actionTypes';

export const toggleTask = id => ({
  type: TOGGLE_TASK,
  payload: { id }
});
