import React from 'react';
import { CssBaseline, createTheme, ThemeProvider, GlobalStyles } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import { SnackbarProvider } from 'notistack';
import { useGlobalContext } from '../components/GlobalContextProvider';

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

export function AppWrapper() {
  const { themeMode } = useGlobalContext();

  return (
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <ThemeProvider theme={themeMode === 'dark' ? darkTheme : lightTheme}>
        <SnackbarProvider maxSnack={3}>
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
        </SnackbarProvider>
      </ThemeProvider>
    </QueryParamProvider>
  );
}
