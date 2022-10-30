import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { GlobalContextProvider } from './components/GlobalContextProvider';
import { memoryRouter } from './router';

export function Root() {
  return (
    <GlobalContextProvider>
      <RouterProvider router={memoryRouter} />
    </GlobalContextProvider>
  );
}
