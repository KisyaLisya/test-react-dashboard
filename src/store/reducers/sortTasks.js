import { SET_SORT, SWITCH_PAGE } from '../actionTypes';

const defaultState = {
  id: 'createdAt',
  type: true
}

const initialState = {
  ...defaultState
};

const sortTasks = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SORT:
      const isIdChanged = state.id !== payload.id
      return {
        id: payload.id,
        type: isIdChanged ? true : !payload.type,
      };
    case SWITCH_PAGE:
      return {
        ...defaultState
      };
    default:
      return state;
  }
}

export default sortTasks;
