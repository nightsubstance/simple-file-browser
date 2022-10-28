import React, { useEffect, useId, useState } from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import Divider from '@mui/material/Divider';
import { HiddenDirectoriesButton } from './HiddenDirectoriesButton';
import _ from 'lodash';
import { DirectoriesMenuItem } from './DirectoriesMenuItem';
import { styled } from '@mui/material/styles';
import { DirectoryObject } from '../../../types/DirectoryObject';

const StyledPaper = styled(Paper)({
  width: '300px',
  overflow: 'auto',
});

export function DirectoriesMenu() {
  const id = useId();
  const [showHiddenDirectories, setShowHiddenDirectories] = useState<boolean>(false);
  const [directoriesList, setDirectoriesList] = useState<DirectoryObject[]>([]);

  function handleShowHiddenDirectories() {
    setShowHiddenDirectories((prev) => !prev);
  }

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

  const filteredDirectoriesList = showHiddenDirectories
    ? directoriesList
    : directoriesList.filter((i) => !/(^|\/)\.[^/.]/g.test(i.name));

  return (
    <StyledPaper square>
      <MenuList dense>
        <HiddenDirectoriesButton show={showHiddenDirectories} handler={handleShowHiddenDirectories} />
        <Divider />
        {filteredDirectoriesList.map((data, index) => (
          <DirectoriesMenuItem key={`${id}-${index}`} data={data} />
        ))}
      </MenuList>
    </StyledPaper>
  );
}
