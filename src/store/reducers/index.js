import { combineReducers } from "redux";
import tasks from './tasks';
import sortTasks from './sortTasks';
import filters from './filter';

export default combineReducers({
  tasks,
  sortTasks,
  filters
});
