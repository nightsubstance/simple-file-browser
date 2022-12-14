import React, { useId } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { DirectoryObject } from '../../../types/DirectoryObject';
import { Breadcrumbs } from '../Breadcrumbs';
import { useGlobalContext } from '../GlobalContextProvider';

import { DirectoryTile } from './DirectoryTile';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(),
}));

const StyledCard = styled(Card)({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  overflow: 'auto',
  gap: theme.spacing(),
  width: '100%',
  maxHeight: '100%',
  padding: theme.spacing(),
}));

interface DirectoryTilesProps {
  data: DirectoryObject[];
  rootName: string;
}

export function DirectoryTiles(props: DirectoryTilesProps) {
  const id = useId();
  const { filterObjects } = useGlobalContext();

  const data = filterObjects(props.data);

  return (
    <Root>
      <Breadcrumbs rootName={props.rootName} />
      <StyledCard>
        <StyledCardContent>
          {data.length === 0 ? (
            <Typography variant="body1" color="text.secondary">
              Directory is empty
            </Typography>
          ) : (
            data.map((object) => <DirectoryTile key={`${id}-${object.name}`} data={object} />)
          )}
        </StyledCardContent>
      </StyledCard>
    </Root>
  );
}
