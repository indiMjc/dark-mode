import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { brotliDecompress } from "zlib";

export const useDarkMode = initialValue => {
  const [colorScheme, setColorScheme] = useLocalStorage(initialValue);

  const body = document.querySelector("body");
  colorScheme
    ? body.classList.add("dark-mode")
    : body.classList.remove("dark-mode");

  return [colorScheme, setColorScheme];
};
