import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { brotliDecompress } from "zlib";

export const useDarkMode = (key, initialValue) => {
  const [colorScheme, setColorScheme] = useLocalStorage(key, initialValue);

  useEffect(() => {
    const body = document.querySelector("body");
    colorScheme
      ? body.classList.add("dark-mode")
      : body.classList.remove("dark-mode");
  }, [colorScheme]);

  return [colorScheme, setColorScheme];
};
