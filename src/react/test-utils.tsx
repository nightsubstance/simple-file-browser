import React, { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, RenderOptions } from '@testing-library/react';

import '@testing-library/jest-dom';

import { GlobalContextProvider } from './components/GlobalContextProvider';

function TestRoot(props: { children: React.ReactNode }) {
  return (
    <GlobalContextProvider>
      <MemoryRouter>{props.children}</MemoryRouter>
    </GlobalContextProvider>
  );
}

function customRender(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(ui, { wrapper: TestRoot, ...options });
}

// eslint-disable-next-line import/export
export * from '@testing-library/react';
// eslint-disable-next-line import/export
export { customRender as render };
