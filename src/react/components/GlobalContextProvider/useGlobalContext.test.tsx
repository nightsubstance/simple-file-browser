import React from 'react';

import { DirectoryObject } from '../../../types/DirectoryObject';
import { act, renderHook } from '../../test-utils';

import { GlobalContextProvider } from './GlobalContextProvider';
import { useGlobalContext } from './useGlobalContext';

const hiddenFiles: DirectoryObject[] = [
  { isDirectory: true, isFile: true, path: '', children: [], name: '.name_1' },
  { isDirectory: true, isFile: true, path: '', children: [], name: '.name_2' },
];

const files: DirectoryObject[] = [
  { isDirectory: true, isFile: true, path: '', children: [], name: 'name_3' },
  { isDirectory: true, isFile: true, path: '', children: [], name: 'name_4' },
];

const mock = files.concat(hiddenFiles);

describe('useGlobalContext', () => {
  it('should change themeMode value', () => {
    const { result } = renderHook(() => useGlobalContext(), {
      wrapper: (props) => <GlobalContextProvider>{props.children}</GlobalContextProvider>,
    });

    expect(result.current.themeMode).toEqual('dark');

    act(() => {
      result.current.handleThemeMode();
    });

    expect(result.current.themeMode).toEqual('light');

    act(() => {
      result.current.handleThemeMode('light');
    });

    expect(result.current.themeMode).toEqual('light');

    act(() => {
      result.current.handleThemeMode('dark');
    });

    expect(result.current.themeMode).toEqual('dark');
  });

  it('should change showHiddenDirectories value', () => {
    const { result } = renderHook(() => useGlobalContext(), {
      wrapper: (props) => <GlobalContextProvider>{props.children}</GlobalContextProvider>,
    });

    expect(result.current.showHiddenDirectories).toEqual(false);
    expect(result.current.filterObjects(mock)).toEqual(files);

    act(() => {
      result.current.handleShowHiddenDirectories();
    });

    expect(result.current.showHiddenDirectories).toEqual(true);
    expect(result.current.filterObjects(mock)).toEqual(mock);

    act(() => {
      result.current.handleShowHiddenDirectories(true);
    });

    expect(result.current.showHiddenDirectories).toEqual(true);
    expect(result.current.filterObjects(mock)).toEqual(mock);

    act(() => {
      result.current.handleShowHiddenDirectories(false);
    });

    expect(result.current.showHiddenDirectories).toEqual(false);
    expect(result.current.filterObjects(mock)).toEqual(files);
  });
});
