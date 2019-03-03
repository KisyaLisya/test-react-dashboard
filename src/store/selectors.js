
import { isDef, sortUp, sortDown, getUnicListItems, getSameItems } from 'utils/Utils';

export function getUserState(store) {
  return store.user;
}

export function getUserLoginStatus(store) {
  const state = getUserState(store);
  return state ? state.isLoggedIn : false;
}

export function getUserLoginLoading(store) {
  const state = getUserState(store);
  return state ? state.loading : false;
}

export function getUserLoginError(store) {
  const state = getUserState(store);
  return state ? state.error : false;
}

export function getMenuState(store) {
  return store.menu;
}

export function getTaskState(store) {
  return store.tasks;
};

export function getTaskDataState(store) {
  return store.taskData;
};

export function getSortOptions(store) {
  return store.sortTasks;
}

export function getFilters(store) {
  return store.filters;
}

export function getTasksLoading(store) {
  const state = getTaskState(store);
  return state ? state.loading : false;
}

export function getTaskDataLoading(store) {
  const state = getTaskDataState(store);
  return state ? state.loading : false;
}

export function getMenu(store) {
  const state = getMenuState(store);
  return state ? state.menu : [];
}

export function getActiveMenuId(store) {
  const state = getMenuState(store);
  return state ? state.active : '';
}

export function getTaskList(store) {
  const state = getTaskState(store);
  return state ? state.allIds : [];
}

export function getTaskById(store, id) {
  const tasks = getTaskState(store);
  return tasks ? { ...tasks.byIds[id], id } : {};
}

export function getTasks(store) {
  return getTaskList(store).map((id) => getTaskById(store, id));
}

export function filterTasks(store, filterFunc) {
	return getTasks(store).filter((el) => filterFunc(el));
}

export function sortTasks(tasks, sortOptions) {
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

export function getSearchFilter(store) {
  const state = getFilters(store);
  return state ? state.searchFilter : '';
}

export function getStatusFilter(store) {
  const state = getFilters(store);
  return state ? state.statusFilter : 'all';
}

export function applySearchInput(filter, value, caseSensitive = false) {
  const filterValue = caseSensitive ? filter : filter.toLowerCase();
  const compareValue = caseSensitive ? value : value.toLowerCase();

	if (filterValue) {
		const regex = new RegExp(`^${filterValue}`);
		return compareValue.search(regex) !== -1;
	} else {
		return true;
	}
}

export function filterListBySearch(list, store) {
  const filter = getSearchFilter(store);
  return list.filter((el) => applySearchInput(filter, el.task));
}

export function filterByStatus(list, store) {
  const filterStatus = getStatusFilter(store);
  return list.filter((el) => {
    const [, status] = el.status;

    return filterStatus === 'all' || status === filterStatus;
  });
}

export function connectFilteredLists(...filters) {
  const firstFilter = filters[0];
  const initFilter = isDef(firstFilter) ? firstFilter : [];

  return filters.reduce((acc, list) => {
    return getSameItems(
      getUnicListItems(acc, 'id'),
      getUnicListItems(list, 'id'),
      'id'
    );
  }, initFilter);
}

export function getPerformedTasks(store) {
  const tasks = getTasks(store);
  const sortOptions = getSortOptions(store);

  const filtered = connectFilteredLists(
    filterListBySearch(tasks, store),
    filterByStatus(tasks, store)
  );

  return sortTasks(filtered, sortOptions);
}
