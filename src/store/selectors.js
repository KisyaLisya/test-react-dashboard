
import { sortUp, sortDown } from '../active/Utils';

export const getTaskState = (store) => {
  return store.tasks;
};

export const getTaskList = (store) => {
  const state = getTaskState(store);
  return state ? state.allIds : [];
}

export const getTaskById = (store, id) => {
  const tasks = getTaskState(store);
  return tasks ? { ...tasks.byIds[id], id } : {};
}

export const getTasks = (store) => {
  return getTaskList(store).map((id) => getTaskById(store, id));
}

export const filterTasks = (store, filterFunc) => {
	return getTasks(store).filter((el) => filterFunc(el));
}

export const sortTasks = (store, options = {}) => {
	const { sortType = 'up', sortName = 'createdAt', isString = false } = options;
	const tasks = getTasks(store);

	return tasks.sort((a, b) => {
		let aVal = a[sortName];
		let bVal = b[sortName];

		const sortProps = {
			local: isString,
			aId: a.id,
			bId: b.id,
			aVal: Array.isArray(aVal) ? aVal[0] : aVal,
			bVal: Array.isArray(bVal) ? bVal[0] : bVal
		};

		if (sortType === 'up') {
			return sortUp(sortProps);
		} else {
			return sortDown(sortProps);
		}
	})
}
