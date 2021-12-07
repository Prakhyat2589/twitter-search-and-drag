const setStorage = (key, value) => {
  const valueToStore = JSON.stringify(value);
  sessionStorage.setItem(key, valueToStore);
  return valueToStore;
};
const getStorage = (key) => {
  return JSON.parse(sessionStorage.getItem(key));
};

export { setStorage, getStorage };
