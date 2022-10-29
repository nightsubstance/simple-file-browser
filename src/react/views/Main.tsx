import React from 'react';
import { styled } from '@mui/material/styles';
import { DirectoriesMenu } from '../components/DirectoriesMenu';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../components/AppBar';

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
