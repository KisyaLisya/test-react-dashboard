import {
  SWITCH_PAGE,
  SET_SORT,
  SET_SEARCH_FILTER,
  SET_FILTER_STATUS,
  SAVE_TASK
} from './actionTypes';

export const switchPage = (page) => {
  return {
    type: SWITCH_PAGE,
    payload: {
      page
    }
  }
}

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

export const saveTaskData = (data) => {
  return {
    type: SAVE_TASK,
    payload: {
      ...data
    }
  }
}
