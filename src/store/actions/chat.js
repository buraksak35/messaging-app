import uuid from 'uuid/v1';

import {
  MESSAGE_REQUEST,
  MESSAGE_REQUEST_SUCCESS,
  MESSAGE_INPUT_CHANGED,
  SEND_MESSAGE,
  MESSAGE_REQUEST_SUCCESS_FIREBASE,
} from '../types';
import { getMessagesFromJsonblob } from '../../api/chat';
import firebase from 'react-native-firebase';

export const getMessages = () => {
  return async dispatch => {
    dispatch({
      type: MESSAGE_REQUEST,
    });

    const messages = await getMessagesFromJsonblob();

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
    const timestamp = Date.now();

    const messageData = {
      text: messageInput,
      timestamp,
      id: uuid(),
      user: loggedInUser,
    };

    firebase
      .database()
      .ref('messages')
      .push(messageData);

    dispatch({
      type: SEND_MESSAGE,
    });
  };
};

export const getMessagesFromFirebase = messages => {
  return async dispatch => {
    dispatch({
      type: MESSAGE_REQUEST_SUCCESS_FIREBASE,
      payload: messages,
    });
  };
};
