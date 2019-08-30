import {Alert} from 'react-native';

import {NAME_CHANGED, LOGIN_SUCCESS} from '../types';

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

    dispatch({
      type: LOGIN_SUCCESS,
      payload: name,
    });
  };
};
