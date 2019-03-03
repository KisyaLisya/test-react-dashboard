import { SET_SORT, SWITCH_PAGE } from '../actionTypes';

const initialState = {
  id: 'createdAt',
  type: true
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
        ...initialState
      };
    default:
      return state;
  }
}

export default sortTasks;
