import React, { useId } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { DirectoryObject } from '../../../types/DirectoryObject';
import { DirectoryTile } from './DirectoryTile';
import { useGlobalContext } from '../GlobalContextProvider';

const Root = styled(Card)({
  width: '100%',
});

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  overflow: 'auto',
  gap: theme.spacing(),
}));

interface DirectoryTilesProps {
  data: DirectoryObject[];
  name: string;
}

export function DirectoryTiles(props: DirectoryTilesProps) {
  const id = useId();
  const { filterObjects } = useGlobalContext();

  return (
    <Root>
      <CardHeader title={props.name} sx={{ paddingBottom: 0 }} />
      <StyledCardContent>
        {filterObjects(props.data).map((object) => (
          <DirectoryTile key={`${id}-${object.name}`} data={object} />
        ))}
      </StyledCardContent>
    </Root>
  );
}
