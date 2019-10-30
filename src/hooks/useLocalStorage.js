import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    //declare variable with value equal to `key` paramater and parse it to return it in JSON format
    const item = window.localStorage.getItem(key);
    //does item exist? if so, return it, otherwise return initialValue with is undefined by default
    return item ? JSON.parse(item) : initialValue;
  });

  //return state as `storedValue`
  return [storedValue];
};
