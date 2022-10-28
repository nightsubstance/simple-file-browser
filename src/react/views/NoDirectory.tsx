import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Root = styled('div')({
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export function NoDirectory() {
  return (
    <Root>
      <Typography variant="h6" color="text.secondary">
        Select a directory!
      </Typography>
    </Root>
  );
}
