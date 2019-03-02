import { combineReducers } from "redux";
import menu from './menu';
import tasks from './tasks';
import sortTasks from './sortTasks';
import filters from './filter';

export default combineReducers({
  menu,
  tasks,
  sortTasks,
  filters
});
