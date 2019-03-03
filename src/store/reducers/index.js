import { combineReducers } from "redux";
import user from './user';
import menu from './menu';
import tasks from './tasks';
import taskData from './taskData';
import sortTasks from './sortTasks';
import filters from './filter';

export default combineReducers({
  user,
  menu,
  tasks,
  taskData,
  sortTasks,
  filters
});
