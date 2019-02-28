import { TOGGLE_TASK, EDIT_TASK, DELETE_TASK, SET_FILTER } from '../actionTypes';

const initialState = {
  allIds: [0, 1, 2],
  byIds: {
    '0': {
      status: false,
      task: 'Task 1 desription',
      assignee: 'Assignee_Name'
    },
    '1': {
      status: false,
      task: 'Task 2 desription',
      assignee: 'Assignee_Name'
    },
    '2': {
      status: false,
      task: 'Task 3 desription',
      assignee: 'Assignee_Name'
    }
  }
}

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_TASK:
      const { id } = payload;
      console.log('TOGGLE_TASK', id, state);
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            checked: !state.byIds[id].checked
          }
        }
      };
    case EDIT_TASK:
      console.log('EDIT_TASK');
      break;
    case DELETE_TASK:
      console.log('DELETE_TASK');
      break;
    case SET_FILTER:
      console.log('SET_FILTER');
      break;
    default:
      return state;
  }
}
