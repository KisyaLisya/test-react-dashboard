import {
  SWITCH_PAGE,
  TASKS_LOADED,
  TASKS_LOADING,
  SET_SORT,
  SET_SEARCH_FILTER,
  SET_FILTER_STATUS,
  DELETE_TASK,
  SAVE_TASK
} from './actionTypes';
import { formTasksList } from 'utils/DataFormers';
import ApiService from 'services/ApiService';

const Api = new ApiService();

export const loadTasks = () => {
  return (dispatch) => {
    dispatch(tasksLoading());
    return Api.getAllTasks()
      .then(
        (tasks) => dispatch(tasksLoaded(tasks)),
        (err) => console.log(err)
      )
  }
}

export const tasksLoading = () => {
  return {
    type: TASKS_LOADING,
    payload: {}
  }
}

export const tasksLoaded = (tasks) => {
  const data = formTasksList(tasks);
  return {
    type: TASKS_LOADED,
    payload: data,
  }
}

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

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: {
      id
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
