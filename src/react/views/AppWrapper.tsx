import React from 'react';
import { Outlet } from 'react-router-dom';
import { createTheme, CssBaseline, GlobalStyles,ThemeProvider } from '@mui/material';
import grey from '@mui/material/colors/grey';
import { SnackbarProvider } from 'notistack';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

import { useGlobalContext } from '../components/GlobalContextProvider';

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light', background: { default: grey['100'] } } });

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
