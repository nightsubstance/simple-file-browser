import { ipcMain } from 'electron';

import { handleCloseWindow } from '../handlers/handleCloseWindow';
import { handleDirectoryDetails } from '../handlers/handleDirectoryDetails';
import { handleDirectoryList } from '../handlers/handleDirectoryList';
import { handleGetIcon } from '../handlers/handleGetIcon';
import { handleGetUserData } from '../handlers/handleGetUserData';
import { handleMaximizeWindow } from '../handlers/handleMaximizeWindow';
import { handleMinimizeWindow } from '../handlers/handleMinimizeWindow';
import { handleOpenFile } from '../handlers/handleOpenFile';

ipcMain.handle('directory:list', handleDirectoryList);
ipcMain.handle('directory:details', handleDirectoryDetails);
ipcMain.handle('file:open', handleOpenFile);
ipcMain.handle('user:get_data', handleGetUserData);
ipcMain.handle('file:icon', handleGetIcon);
ipcMain.on('window:close', handleCloseWindow);
ipcMain.on('window:minimize', handleMinimizeWindow);
ipcMain.on('window:maximize', handleMaximizeWindow);
