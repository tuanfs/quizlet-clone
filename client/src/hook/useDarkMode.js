import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [theme, setTheme] = useState(localStorage.getItem('THEME_MODE'));
  const colorTheme = theme === 'light' ? 'dark' : 'light';
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem('THEME_MODE', theme);
  }, [theme, colorTheme]);
  return [colorTheme, setTheme];
}
