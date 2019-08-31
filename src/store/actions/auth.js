import uuid from 'uuid/v1';

import {
  NAME_CHANGED,
  LOGIN_SUCCESS,
  SESSION_SUCCESS,
  LEAVE_SUCCESS,
  SELECTED_GENDER_CHANGED,
  CHANGED_AVATAR,
} from '../types';
import { removeUserFromLocal } from '../../helpers/auth';
import { generateRandomAvatar } from '../../helpers/avatar';

export const nameChanged = name => {
  return dispatch => {
    dispatch({
      type: NAME_CHANGED,
      payload: name,
    });
  };
};

export const onLogin = (name, selectedAvatar) => {
  return dispatch => {
    const userData = {
      name,
      avatarUrl: selectedAvatar,
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

export const selectedGenderChanged = gender => {
  const avatarUrl = generateRandomAvatar(gender);

  return dispatch => {
    dispatch({
      type: SELECTED_GENDER_CHANGED,
      payload: { gender, avatarUrl },
    });
  };
};

export const changeAvatar = gender => {
  const avatarUrl = generateRandomAvatar(gender);

  return dispatch => {
    dispatch({
      type: CHANGED_AVATAR,
      payload: avatarUrl,
    });
  };
};
