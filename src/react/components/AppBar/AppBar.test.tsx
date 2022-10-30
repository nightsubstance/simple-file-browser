import React from 'react';

import { fireEvent, render, screen, waitFor } from '../../test-utils';

import { AppBar } from './AppBar';

const handleShowHiddenDirectoriesMock = jest.fn();
const handleThemeModeMock = jest.fn();

jest.mock('../GlobalContextProvider/useGlobalContext', () => ({
  useGlobalContext: jest.fn(() => ({
    handleShowHiddenDirectories: handleShowHiddenDirectoriesMock,
    handleThemeMode: handleThemeModeMock,
    showHiddenDirectories: true,
    themeMode: 'dark',
  })),
}));

window.api = {
  ...window.api,
  getUserData: jest.fn(async () => ({ username: 'test.name' })),
};

describe('<AppBar />', () => {
  it('should render all elements', async () => {
    render(<AppBar />);

    await waitFor(() => {
      expect(screen.getByText('test.name')).toBeInTheDocument();
    });

    expect(screen.queryByTestId('SettingsIcon')).toBeInTheDocument();
    expect(screen.queryByTestId('ArrowBackIcon')).toBeInTheDocument();
    expect(screen.queryByTestId('ArrowForwardIcon')).toBeInTheDocument();
    expect(screen.queryByTestId('MinimizeIcon')).toBeInTheDocument();
    expect(screen.queryByTestId('CropSquareIcon')).toBeInTheDocument();
    expect(screen.queryByTestId('CloseIcon')).toBeInTheDocument();
  });
  it('should do all actions', async () => {
    render(<AppBar />);

    await waitFor(() => {
      expect(screen.getByText('test.name')).toBeInTheDocument();
    });

    expect(screen.queryByTestId('settings-menu')).not.toBeInTheDocument();

    fireEvent.click(screen.queryByTestId('settings-button'));
    expect(screen.queryByTestId('settings-menu')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('settings-menu-hidden-files-handler').firstChild);

    expect(handleShowHiddenDirectoriesMock).toBeCalledTimes(1);
    await waitFor(() => {
      expect(screen.queryByTestId('settings-menu')).not.toBeInTheDocument();
    });

    fireEvent.click(screen.queryByTestId('settings-button'));
    expect(screen.queryByTestId('settings-menu')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('settings-menu-theme-mode-handler').firstChild);

    expect(handleThemeModeMock).toBeCalledTimes(1);
    await waitFor(() => {
      expect(screen.queryByTestId('settings-menu')).not.toBeInTheDocument();
    });

    fireEvent.click(screen.queryByTestId('settings-button'));
    expect(screen.queryByTestId('settings-menu')).toBeInTheDocument();

    fireEvent.click(screen.queryByRole('presentation').firstChild);

    await waitFor(() => {
      expect(screen.queryByTestId('settings-menu')).not.toBeInTheDocument();
    });
  });
});
