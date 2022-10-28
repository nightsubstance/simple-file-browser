import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

export function Root() {
  return <RouterProvider router={router} />;
}
