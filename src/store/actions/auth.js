import {GET_LOGGEDIN_USER} from '../types';

export const getLoggedInUser = () => {
  return dispatch => {
    type: GET_LOGGEDIN_USER,
  };
};
