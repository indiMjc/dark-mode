import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    //1.  make hook value, get

    //declare variable with value equal to `key` paramater and JSON PARSE IT
    const item = window.localStorage.getItem(key);
    //does item exist? if so, return it, otherwise return initialValue with is undefined by default
    return item ? JSON.parse(item) : initialValue;
  });

  //2.  setter function, set
  const setValue = value => {
    //set state according to parameter
    setStoredValue(value);
    //save to localStorage IN JSON STRING FORMAT
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  //return state as `storedValue`
  return [storedValue];
};
