import {NAME_CHANGED, LOGIN_SUCCESS} from '../types';

const INITIAL_STATE = {
  name: '',
  loggedInUser: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAME_CHANGED:
      return {...state, name: action.payload};
    case LOGIN_SUCCESS:
      return {...state, loggedInUser: action.payload};
    default:
      return state;
  }
};
