import { SET_SORT } from '../actionTypes';

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
      }
    default:
      return state;
  }
}

export default sortTasks;
