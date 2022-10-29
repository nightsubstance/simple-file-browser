import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { DirectoryObject } from '../../../types/DirectoryObject';

export interface GlobalContextInterface {
  showHiddenDirectories: boolean;
  handleShowHiddenDirectories: (value?: boolean) => void;
  filterObjects: (objects: DirectoryObject[]) => DirectoryObject[];
  themeMode: 'dark' | 'light';
  handleThemeMode: (mode?: 'dark' | 'light') => void;
}

export const GlobalContext = createContext(null as GlobalContextInterface);

export function GlobalContextProvider() {
  const [showHiddenDirectories, setShowHiddenDirectories] = useState<boolean>(false);
  const [themeMode, setThemeMode] = useState<'dark' | 'light'>('dark');

  function handleShowHiddenDirectories(value?: boolean) {
    setShowHiddenDirectories((prev) => (value === undefined ? !prev : value));
  }

  function filterObjects(objects: DirectoryObject[]): DirectoryObject[] {
    if (showHiddenDirectories) return objects;

    return objects.filter((item) => {
      return !/(^|\/)\.[^/.]/g.test(item.name);
    });
  }

  function handleThemeMode(mode?: 'dark' | 'light') {
    if (mode === undefined) {
      setThemeMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    } else {
      setThemeMode(mode);
    }
  }

  return (
    <GlobalContext.Provider
      value={{ showHiddenDirectories, handleShowHiddenDirectories, filterObjects, handleThemeMode, themeMode }}
    >
      <Outlet />
    </GlobalContext.Provider>
  );
}
