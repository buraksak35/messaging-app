import { AsyncStorage } from 'react-native';

const AUTH_STORAGE_KEY = '@AUTH_STORAGE_KEY';

export const saveUserToLocal = async user => {
  try {
    await AsyncStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
};

export const getUserFromLocal = async () => {
  try {
    const value = await AsyncStorage.getItem(AUTH_STORAGE_KEY);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeUserFromLocal = async () => {
  try {
    await AsyncStorage.removeItem(AUTH_STORAGE_KEY);
  } catch (error) {
    console.log(error);
  }
};
