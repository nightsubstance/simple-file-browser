import React from 'react';
import { createHashRouter, createMemoryRouter, Navigate, RouteObject } from 'react-router-dom';

import { AppWrapper } from '../views/AppWrapper';
import { Directory } from '../views/Directory';
import { Landing } from '../views/Landing';
import { Main } from '../views/Main';

const routes: RouteObject[] = [
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
];

/**
 * hashRouter for regular application
 */
export const hashRouter = createHashRouter(routes);
/**
 * memoryRouter is used for tests
 */
export const memoryRouter = createMemoryRouter(routes);
