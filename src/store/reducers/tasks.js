import { TOGGLE_TASK, EDIT_TASK, DELETE_TASK } from '../actionTypes';

const initialState = {
  allIds: [0, 1, 2, 3, 4, 5, 6, 7],
  byIds: {
    '0': {
      status: [2, 'done'],
			priority: [1, 'major'],
			createdAt: [20180913, '13 Sept 2018'],
      task: 'Task 0 desription',
    },
    '1': {
      status: [0, 'todo'],
      priority: [1, 'major'],
			createdAt: [20180911, '11 Sept 2018'],
      task: 'Task 1 desription',
    },
    '2': {
      status: [1, 'in progress'],
      priority: [1, 'major'],
			createdAt: [20180912, '12 Sept 2018'],
      task: 'Task 2 desription',
    },
    '3': {
      status: [2, 'done'],
      priority: [1, 'major'],
			createdAt: [20180909, '9 Sept 2018'],
      task: 'Task 3 desription',
    },
    '4': {
      status: [1, 'in progress'],
      priority: [0, 'minor'],
			createdAt: [20180909, '9 Sept 2018'],
      task: 'Task 4 desription',
    },
    '5': {
      status: [1, 'in progress'],
      priority: [0, 'minor'],
			createdAt: [20180909, '9 Sept 2018'],
      task: 'Task 5 desription',
    },
    '6': {
      status: [0, 'todo'],
      priority: [1, 'major'],
			createdAt: [20180910, '10 Sept 2018'],
      task: 'Task 6 desription',
    },
    '7': {
      status: [2, 'done'],
      priority: [0, 'minor'],
			createdAt: [20180909, '9 Sept 2018'],
      task: 'Task 7 desription',
    }
  }
}

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_TASK:
      const { id } = payload;
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
    default:
      return state;
  }
}
