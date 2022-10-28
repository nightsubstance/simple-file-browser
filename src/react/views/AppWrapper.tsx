import React from 'react';
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';

const theme = createTheme();

export function AppWrapper() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Outlet />
    </ThemeProvider>
  );
}
