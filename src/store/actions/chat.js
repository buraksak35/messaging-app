import {MESSAGE_REQUEST, MESSAGE_REQUEST_SUCCESS} from '../types';
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
