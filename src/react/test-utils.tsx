import React, { ReactElement } from 'react';
import { RouterProvider } from 'react-router-dom';
import { render, RenderOptions } from '@testing-library/react';

import { memoryRouter } from './router';

function TestRoot() {
  return <RouterProvider router={memoryRouter} />;
}

function customRender(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(ui, { wrapper: TestRoot, ...options });
}

// eslint-disable-next-line import/export
export * from '@testing-library/react';
// eslint-disable-next-line import/export
export { customRender as render };
