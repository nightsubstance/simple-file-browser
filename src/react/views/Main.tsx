import React from 'react';
import { styled } from '@mui/material/styles';
import { DirectoriesMenu } from '../components/DirectoriesMenu';
import { Outlet } from 'react-router-dom';

const Root = styled('div')({
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  display: 'grid',
  gridTemplateColumns: '300px 1fr',
});

export function Main() {
  return (
    <Root>
      <DirectoriesMenu />
      <Outlet />
    </Root>
  );
}
