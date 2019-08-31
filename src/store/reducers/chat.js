import {
  MESSAGE_REQUEST,
  MESSAGE_REQUEST_SUCCESS,
  MESSAGE_INPUT_CHANGED,
  SEND_MESSAGE,
  MESSAGE_REQUEST_SUCCESS_FIREBASE,
} from '../types';

const INITIAL_STATE = {
  loading: false,
  messages: [],
  messageInput: '',
  blobMessages: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MESSAGE_REQUEST:
      return { ...state, loading: true };
    case MESSAGE_REQUEST_SUCCESS:
      return { ...state, blobMessages: action.payload };
    case MESSAGE_INPUT_CHANGED:
      return { ...state, messageInput: action.payload };
    case SEND_MESSAGE:
      return {
        ...state,
        messageInput: '',
      };
    case MESSAGE_REQUEST_SUCCESS_FIREBASE:
      const newMessages = state.blobMessages.concat(action.payload);
      return {
        ...state,
        loading: false,
        messages: newMessages,
      };
    default:
      return state;
  }
};
