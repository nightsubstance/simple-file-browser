import React, { useEffect, useId, useState } from 'react';
import MenuList from '@mui/material/MenuList';
import { styled } from '@mui/material/styles';
import _ from 'lodash';
import { useSnackbar } from 'notistack';

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
  const { enqueueSnackbar } = useSnackbar();

  function getData() {
    window.api
      .getDirectoriesList()
      .then((response: DirectoryObject[]) => {
        const newDirectoriesList = response.filter((i) => i.isDirectory);
        setDirectoriesList((prev) => {
          if (_.isEqual(prev, newDirectoriesList)) {
            return prev;
          }

          return newDirectoriesList;
        });
      })
      .catch((error) => {
        if (error instanceof Error) {
          enqueueSnackbar(error.message, { variant: 'error' });
        } else {
          enqueueSnackbar('Unknown error', { variant: 'error' });
        }
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
