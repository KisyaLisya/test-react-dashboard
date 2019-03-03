import { LOGGED_IN, LOGGED_OUT, LOGGING_IN } from '../actionTypes';
import { isDef } from 'utils/utils';

const initialState = {
  isLoggedIn: false,
  error: '',
  loading: false
}

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGGING_IN:
      return {
        ...state,
        error: '',
        loading: true
      }
    case LOGGED_IN:
      const { logged = false, error = '' } = payload;
      return {
        ...state,
        isLoggedIn: logged,
        error: error,
        loading: false
      };
    case LOGGED_OUT:
      return {
        ...state,
        isLoggedIn: false,
        error: '',
        loading: false
      };
    default:
      return state;
  }
}
