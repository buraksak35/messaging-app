import {Alert} from 'react-native';
import uuid from 'uuid/v1';

import {
  NAME_CHANGED,
  LOGIN_SUCCESS,
  SESSION_SUCCESS,
  LEAVE_SUCCESS,
} from '../types';
import {removeUserFromLocal} from '../../helpers/auth';

export const nameChanged = name => {
  return dispatch => {
    dispatch({
      type: NAME_CHANGED,
      payload: name,
    });
  };
};

export const onLogin = name => {
  return dispatch => {
    const isValidName = name.length > 2;
    if (!isValidName) {
      Alert.alert('Name is too short! Min 2 characters');
    }

    const userData = {
      name,
      avatarUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
      id: uuid(),
    };

    dispatch({
      type: LOGIN_SUCCESS,
      payload: userData,
    });
  };
};

export const onSuccessSession = userData => {
  return dispatch => {
    dispatch({
      type: SESSION_SUCCESS,
      payload: userData,
    });
  };
};

export const onLeave = () => {
  return dispatch => {
    removeUserFromLocal();

    dispatch({
      type: LEAVE_SUCCESS,
    });
  };
};
