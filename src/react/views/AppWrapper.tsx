import React from 'react';
import { CssBaseline, createTheme, ThemeProvider, GlobalStyles } from '@mui/material';
import { Outlet } from 'react-router-dom';

const theme = createTheme({ palette: { mode: 'dark' } });

export function AppWrapper() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          'html, body, #root': {
            width: '100%',
            height: '100%',
            overflow: 'auto',
          },
        }}
      />
      <Outlet />
    </ThemeProvider>
  );
}
