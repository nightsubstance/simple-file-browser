import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { DirectoryObject } from '../../../types/DirectoryObject';

export interface GlobalContextInterface {
  showHiddenDirectories: boolean;
  handleShowHiddenDirectories: (value?: boolean) => void;
  filterObjects: (objects: DirectoryObject[]) => DirectoryObject[];
}

export const GlobalContext = createContext(null as GlobalContextInterface);

export function GlobalContextProvider() {
  const [showHiddenDirectories, setShowHiddenDirectories] = useState<boolean>(false);

  function handleShowHiddenDirectories(value?: boolean) {
    setShowHiddenDirectories((prev) => (value === undefined ? !prev : value));
  }

  function filterObjects(objects: DirectoryObject[]): DirectoryObject[] {
    if (showHiddenDirectories) return objects;

    return objects.filter((item) => {
      if (!item.isDirectory) return true;

      return !/(^|\/)\.[^/.]/g.test(item.name);
    });
  }

  return (
    <GlobalContext.Provider value={{ showHiddenDirectories, handleShowHiddenDirectories, filterObjects }}>
      <Outlet />
    </GlobalContext.Provider>
  );
}
