import {MESSAGE_REQUEST, MESSAGE_REQUEST_SUCCESS} from '../types';

const INITIAL_STATE = {
  loading: false,
  messages: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MESSAGE_REQUEST:
      return {...state, loading: true};
    case MESSAGE_REQUEST_SUCCESS:
      return {...state, loading: false, messages: action.payload};
    default:
      return state;
  }
};
