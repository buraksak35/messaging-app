import {
  MESSAGE_REQUEST,
  MESSAGE_REQUEST_SUCCESS,
  MESSAGE_INPUT_CHANGED,
  SEND_MESSAGE,
} from '../types';

const INITIAL_STATE = {
  loading: false,
  messages: [],
  messageInput: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MESSAGE_REQUEST:
      return { ...state, loading: true };
    case MESSAGE_REQUEST_SUCCESS:
      return { ...state, loading: false, messages: action.payload };
    case MESSAGE_INPUT_CHANGED:
      return { ...state, messageInput: action.payload };
    case SEND_MESSAGE:
      state.messages.push(action.payload);
      return {
        ...state,
        messageInput: '',
        messages: state.messages,
      };
    default:
      return state;
  }
};
