import React, { useEffect, useId, useState } from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import _ from 'lodash';
import { DirectoriesMenuItem } from './DirectoriesMenuItem';
import { styled } from '@mui/material/styles';
import { DirectoryObject } from '../../../types/DirectoryObject';
import { useGlobalContext } from '../GlobalContextProvider';

const StyledPaper = styled(Paper)({
  width: '300px',
  overflow: 'auto',
});

export function DirectoriesMenu() {
  const id = useId();
  const [directoriesList, setDirectoriesList] = useState<DirectoryObject[]>([]);
  const { filterObjects } = useGlobalContext();

  useEffect(() => {
    const interval = setInterval(() => {
      window.api.getDirectoriesList().then((response: DirectoryObject[]) => {
        const newDirectoriesList = response.filter((i) => i.isDirectory);
        setDirectoriesList((prev) => {
          if (_.isEqual(prev, newDirectoriesList)) {
            return prev;
          }

          return newDirectoriesList;
        });
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledPaper square>
      <MenuList dense>
        {filterObjects(directoriesList).map((data, index) => (
          <DirectoriesMenuItem key={`${id}-${index}`} data={data} />
        ))}
      </MenuList>
    </StyledPaper>
  );
}
