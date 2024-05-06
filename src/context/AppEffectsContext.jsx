import { createContext, useContext, useEffect, useState } from 'react';

const AppEffectsContext = createContext();

/* eslint-disable react/prop-types */
function AppEffectsProvider({ children }) {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);
    console.log(windowSize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowSize]);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  /*   const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
    'isDarkMode',
  ); */

  /*   useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add('dark-mode');
        document.documentElement.classList.remove('light-mode');
      } else {
        document.documentElement.classList.add('light-mode');
        document.documentElement.classList.remove('dark-mode');
      }
    },
    [isDarkMode],
  ); */

  /*   function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  } */

  return (
    <AppEffectsContext.Provider
      value={{
        windowSize,
      }}
    >
      {children}
    </AppEffectsContext.Provider>
  );
}

function useAppEffects() {
  const context = useContext(AppEffectsContext);
  if (context === undefined)
    throw new Error('DarkModeContext was used outside of DarkModeProvider');
  return context;
}

export { AppEffectsProvider, useAppEffects };
