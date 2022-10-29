import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
}));

export function Landing() {
  return (
    <Root>
      <Typography variant="h4" fontWeight="bold">Greetings!</Typography>
      <Typography variant="body1">
        I am pleased to welcome you to my app. I hope you'll have fun checking out how it works.
      </Typography>
      <Typography variant="body1">
        This is the first time I've written something working in Electron.js so I ask for your understanding if I've
        made any serious mistakes related to file structure or good practices.{' '}
      </Typography>
      <Typography variant="body1">Best regards</Typography>
      <Typography variant="body1" color="text.secondary">
        Paweł Stosio
      </Typography>
    </Root>
  );
}
