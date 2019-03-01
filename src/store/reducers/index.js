import { combineReducers } from "redux";
import tasks from './tasks';
import sortTasks from './sortTasks';

export default combineReducers({
  tasks,
  sortTasks
});
