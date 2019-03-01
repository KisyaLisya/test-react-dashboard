
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

export const getSortOptions = (store) => {
  return store.sortTasks;
}

export const sortTasks = (tasks, sortOptions) => {
	return tasks.sort((a, b) => {
		let aVal = a[sortOptions.id];
		let bVal = b[sortOptions.id];
    const isString = typeof aVal === 'string' || typeof bVal === 'string';

    if (isString) {
      aVal = aVal.toString();
      bVal = bVal.toString();
    }

		const sortProps = {
			local: isString,
			aId: a.id,
			bId: b.id,
			aVal: Array.isArray(aVal) ? aVal[0] : aVal,
			bVal: Array.isArray(bVal) ? bVal[0] : bVal
		};

		if (sortOptions.type) {
			return sortUp(sortProps);
		} else {
			return sortDown(sortProps);
		}
	})
}

export const getFilters = (store) => {
  return store.filters;
}

export const getStatusFilter = (store) => {
  const state = getFilters(store);
  return state ? state.statusFilter : 'all';
}

export const filterByStatus = (list, filterStatus) => {
  return list.filter((el) => {
    const [, status] = el.status;

    return filterStatus === 'all' || status === filterStatus;
  });
}

export const getPerformedTasks = (store) => {
  const tasks = getTasks(store);
  const statusFilter = getStatusFilter(store);
  const sortOptions = getSortOptions(store);

  const filtered = filterByStatus(tasks, statusFilter);

  return sortTasks(filtered, sortOptions);
}
