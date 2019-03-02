import { combineReducers } from "redux";
import menu from './menu';
import tasks from './tasks';
import taskData from './taskData';
import sortTasks from './sortTasks';
import filters from './filter';

export default combineReducers({
  menu,
  tasks,
  taskData,
  sortTasks,
  filters
});
