import { TOGGLE_TASK, EDIT_TASK, DELETE_TASK, SET_SORT, SET_SEARCH_FILTER, SET_FILTER_STATUS } from './actionTypes';

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

export const changeSearchFilter = (filter) => {
  return {
    type: SET_SEARCH_FILTER,
    payload: {
      filter
    }
  }
}

export const changeStatusFilter = (group, filter) => {
  return {
    type: SET_FILTER_STATUS,
    payload: {
      filter
    }
  }
}
