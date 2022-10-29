import React, { useId } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { DirectoryObject } from '../../../types/DirectoryObject';
import { DirectoryTile } from './DirectoryTile';
import { useGlobalContext } from '../GlobalContextProvider';

const Root = styled(Card)({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  padding: theme.spacing(),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

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
  name: string;
}

export function DirectoryTiles(props: DirectoryTilesProps) {
  const id = useId();
  const { filterObjects } = useGlobalContext();

  const data = filterObjects(props.data);

  return (
    <Root>
      <StyledCardHeader title={props.name} />
      <StyledCardContent>
        {data.length === 0 ? (
          <Typography variant="body1" color="text.secondary">
            Directory is empty
          </Typography>
        ) : (
          data.map((object) => <DirectoryTile key={`${id}-${object.name}`} data={object} />)
        )}
      </StyledCardContent>
    </Root>
  );
}
