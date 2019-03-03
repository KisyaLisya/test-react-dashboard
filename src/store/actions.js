import {
  LOGGED_IN,
  LOGGED_OUT,
  LOGGING_IN,
  SWITCH_PAGE,
  TASKS_LOADING,
  TASKS_LOADED,
  TASK_DATA_LOADING,
  TASK_DATA_LOADED,
  SET_SORT,
  SET_SEARCH_FILTER,
  SET_FILTER_STATUS,
  ADD_TASK,
  DELETE_TASK,
  CLOSE_TASK,
  UPDATE_TASK_STATUS
} from './actionTypes';
import { isDef } from 'utils/utils';
import { formTasksList, formTaskData } from 'utils/dataFormers';
import ApiService from 'services/ApiService';

const Api = new ApiService();

export const loginByToken = () => {
  return (dispatch) => {
    dispatch(loggingIn());
    return Api.loginByToken()
      .then(
        (data) => dispatch(loggedIn(data, true)),
        (err) => console.log(err)
      )
  }
}

export const login = (userData) => {
  return (dispatch) => {
    dispatch(loggingIn());
    return Api.login(userData)
      .then(
        (data) => dispatch(loggedIn(data)),
        (err) => console.log(err)
      )
  }
}

export const loggingIn = () => {
  return {
    type: LOGGING_IN,
    payload: null
  }
}

export const loggedIn = (data, err) => {
  if (isDef(data)) {
    Api.setToken(data)
  }
  return {
    type: LOGGED_IN,
    payload: {
      logged: isDef(data),
      error: !isDef(err) && !isDef(data) ? `Invalid login or password` : ''
    }
  }
}

export const logout = () => {
  Api.logout();
  return {
    type: LOGGED_OUT,
    payload: null
  }
}

export const loadTasks = () => {
  return (dispatch) => {
    dispatch(tasksLoading());
    return Api.getAllTasks()
      .then(
        (tasks) => dispatch(tasksLoaded(tasks)),
        (err) => console.log(err)
      );
  }
}

export const loadTaskData = (id) => {
  return (dispatch) => {
    dispatch(taskDataLoading());
    return Api.getTaskById(id)
      .then(
        (task) => dispatch(taskDataLoaded(task)),
        (err) => console.log(err)
      );
  }
}

export const taskDataLoading = () => {
  return {
    type: TASK_DATA_LOADING,
    payload: {}
  }
}

export const taskDataLoaded = (task) => {
  const data = formTaskData(task);
  return {
    type: TASK_DATA_LOADED,
    payload: data
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

export const saveTask = (taskData) => {
  return (dispatch) => {
    dispatch(taskDataLoading());
    return Api.saveTask(taskData)
      .then(
        (task) => {
          dispatch(loadTasks());
          dispatch(closeTask(task));
        },
        (err) => console.log(err)
      );
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
  return (dispatch) => {
    dispatch(tasksLoading());
    return Api.deleteTask(id)
      .then(
        (tasks) => dispatch(loadTasks()),
        (err) => console.log(err)
      );
  }
}

export const onParsedData = (data) => {
  return {
    type: UPDATE_TASK_STATUS,
    payload: {
      ...data
    }
  }
}

export const createNewTask = () => {
  return {
    type: ADD_TASK,
    payload: null
  }
}

export const closeTask = (e) => {
  return {
    type: CLOSE_TASK,
    payload: null
  }
}

// RESETS

export const resetSorting = (data) => {
  return {
    type: RESET_SORT,
    payload: null
  }
}
