import React from 'react';
import { createHashRouter, Navigate } from 'react-router-dom';

import { GlobalContextProvider } from '../components/GlobalContextProvider';
import { AppWrapper } from '../views/AppWrapper';
import { Directory } from '../views/Directory';
import { Landing } from '../views/Landing';
import { Main } from '../views/Main';

export const router = createHashRouter([
  {
    element: <GlobalContextProvider />,
    children: [
      {
        element: <AppWrapper />,
        children: [
          {
            element: <Main />,
            path: '/',
            children: [
              { element: <Landing />, index: true },
              { element: <Directory />, path: ':name' },
            ],
          },
          { element: <Navigate to="/" />, path: '*' },
        ],
      },
    ],
  },
]);
