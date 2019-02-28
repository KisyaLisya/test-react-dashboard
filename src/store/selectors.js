
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
