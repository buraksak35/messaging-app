import uuid from 'uuid/v1';

import {
  MESSAGE_REQUEST,
  MESSAGE_REQUEST_SUCCESS,
  MESSAGE_INPUT_CHANGED,
  SEND_MESSAGE,
} from '../types';
import {getMessagesFromBackend} from '../../api/chat';

export const getMessages = () => {
  return async dispatch => {
    dispatch({
      type: MESSAGE_REQUEST,
    });

    const messages = await getMessagesFromBackend();

    dispatch({
      type: MESSAGE_REQUEST_SUCCESS,
      payload: messages,
    });
  };
};

export const messageInputChanged = message => {
  return async dispatch => {
    dispatch({
      type: MESSAGE_INPUT_CHANGED,
      payload: message,
    });
  };
};

export const sendMessage = (messageInput, loggedInUser) => {
  return async dispatch => {
    const timeStamp = Math.floor(Date.now() / 1000);

    const messageData = {
      text: messageInput,
      timeStamp,
      id: uuid(),
      user: loggedInUser,
    };

    dispatch({
      type: SEND_MESSAGE,
      payload: messageData,
    });
  };
};
