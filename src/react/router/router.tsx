import { createHashRouter, Navigate } from 'react-router-dom';
import { AppWrapper } from '../views/AppWrapper';
import { Landing } from '../views/Landing';
import React from 'react';

export const router = createHashRouter([
  {
    element: <AppWrapper />,
    children: [
      { element: <Landing />, path: '/' },
      { element: <Navigate to="/" />, path: '*' },
    ],
  },
]);
