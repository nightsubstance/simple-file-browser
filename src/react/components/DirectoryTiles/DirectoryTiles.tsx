import React, { useId } from 'react';
import { styled } from '@mui/material/styles';
import { DirectoryObject } from '../../../types/DirectoryObject';
import { DirectoryTile } from './DirectoryTile';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: theme.spacing(),
}));

interface DirectoryTilesProps {
  data: DirectoryObject[];
}

export function DirectoryTiles(props: DirectoryTilesProps) {
  const id = useId();

  return (
    <Root>
      {props.data.map((object) => (
        <DirectoryTile key={`${id}-${object.name}`} data={object} />
      ))}
    </Root>
  );
}
