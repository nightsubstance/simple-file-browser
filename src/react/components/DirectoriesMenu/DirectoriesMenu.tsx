import React, { useEffect, useId, useState } from 'react';
import MenuList from '@mui/material/MenuList';
import { styled } from '@mui/material/styles';
import _ from 'lodash';

import { DirectoryObject } from '../../../types/DirectoryObject';
import { useGlobalContext } from '../GlobalContextProvider';

import { DirectoriesMenuItem } from './DirectoriesMenuItem';

const Root = styled('div')({
  width: '300px',
  overflow: 'auto',
});

export function DirectoriesMenu() {
  const id = useId();
  const [directoriesList, setDirectoriesList] = useState<DirectoryObject[]>([]);
  const { filterObjects } = useGlobalContext();

  function getData() {
    window.api.getDirectoriesList().then((response: DirectoryObject[]) => {
      const newDirectoriesList = response.filter((i) => i.isDirectory);
      setDirectoriesList((prev) => {
        if (_.isEqual(prev, newDirectoriesList)) {
          return prev;
        }

        return newDirectoriesList;
      });
    });
  }

  useEffect(() => {
    getData();

    const interval = setInterval(() => getData(), 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Root>
      <MenuList dense>
        {filterObjects(directoriesList).map((data, index) => (
          <DirectoriesMenuItem key={`${id}-${index}`} data={data} />
        ))}
      </MenuList>
    </Root>
  );
}
