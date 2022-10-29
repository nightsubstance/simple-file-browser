import React from 'react';
import { styled } from '@mui/material/styles';
import { DirectoriesMenu } from '../components/DirectoriesMenu';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../components/AppBar';

const Root = styled('div')({
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  display: 'grid',
  gridTemplateColumns: '300px 1fr',
  gridTemplateRows: '60px 1fr',
});

const Container = styled('div')({
  width: '100%',
  height: '100%',
  gridColumn: '1/3',
});

export function Main() {
  return (
    <Root>
      <Container>
        <AppBar />
      </Container>
      <DirectoriesMenu />
      <Outlet />
    </Root>
  );
}
