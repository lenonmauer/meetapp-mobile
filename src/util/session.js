import AsyncStorage from '@react-native-community/async-storage';

const key = '@meetapp/token';

function setToken(token) {
  return AsyncStorage.setItem(key, token);
}

function getToken() {
  return AsyncStorage.getItem(key);
}

function clearToken() {
  return AsyncStorage.removeItem(key);
}

export default {
  setToken,
  getToken,
  clearToken,
};
