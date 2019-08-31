import {
  NAME_CHANGED,
  LOGIN_SUCCESS,
  SESSION_SUCCESS,
  LEAVE_SUCCESS,
  SELECTED_GENDER_CHANGED,
  CHANGED_AVATAR,
} from '../types';

const INITIAL_STATE = {
  name: '',
  loggedInUser: null,
  selectedGender: 'male',
  selectedAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAME_CHANGED:
      return { ...state, name: action.payload };
    case LOGIN_SUCCESS:
      return { ...state, loggedInUser: action.payload, name: '' };
    case SESSION_SUCCESS:
      return { ...state, loggedInUser: action.payload };
    case LEAVE_SUCCESS:
      return { ...state, loggedInUser: null };
    case SELECTED_GENDER_CHANGED:
      return {
        ...state,
        selectedGender: action.payload.gender,
        selectedAvatar: action.payload.avatarUrl,
      };
    case CHANGED_AVATAR:
      return {
        ...state,
        selectedAvatar: action.payload,
      };
    default:
      return state;
  }
};
