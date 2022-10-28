import React from 'react';
import { createRoot } from 'react-dom/client';
import { Root } from './react/Root';

const element = document.getElementById('root') as HTMLDivElement;

const root = createRoot(element);

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
