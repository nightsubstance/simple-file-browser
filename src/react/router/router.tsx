import { createHashRouter, Navigate } from 'react-router-dom';
import { AppWrapper } from '../views/AppWrapper';
import { Main } from '../views/Main';
import React from 'react';
import { NoDirectory } from '../views/NoDirectory';
import { Directory } from '../views/Directory';

export const router = createHashRouter([
  {
    element: <AppWrapper />,
    children: [
      {
        element: <Main />,
        path: '/',
        children: [
          { element: <NoDirectory />, index: true },
          { element: <Directory />, path: ':name' },
        ],
      },
      { element: <Navigate to="/" />, path: '*' },
    ],
  },
]);
