import React from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import { AppBar } from '../components/AppBar';
import { DirectoriesMenu } from '../components/DirectoriesMenu';

const Root = styled('div')({
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
});

const Container = styled('div')({
  width: '100%',
  height: 'calc(100% - 45px)',
  boxSizing: 'border-box',
  display: 'flex',
});

export function Main() {
  return (
    <Root>
      <AppBar />
      <Container>
        <DirectoriesMenu />
        <Outlet />
      </Container>
    </Root>
  );
}
