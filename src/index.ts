import { app, BrowserWindow, ipcMain } from 'electron';
import { handleDirectoryList } from './handlers/handleDirectoryList';
import { handleDirectoryDetails } from './handlers/handleDirectoryDetails';
import { handleOpenFile } from './handlers/handleOpenFile';
import { handleCloseWindow } from './handlers/handleCloseWindow';
import { handleMinimizeWindow } from './handlers/handleMinimizeWindow';
import { handleMaximizeWindow } from './handlers/handleMaximizeWindow';
import { handleGetUserData } from './handlers/handleGetUserData';
import { handleGetIcon } from './handlers/handleGetIcon';
// This allows TypeScript to pick up the magic constants that's auto-generated by Forge's Webpack
// plugin that tells the Electron app where to look for the Webpack-bundled app code (depending on
// whether you're running in development or production).
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit();
}

ipcMain.handle('directory:list', handleDirectoryList);
ipcMain.handle('directory:details', handleDirectoryDetails);
ipcMain.handle('file:open', handleOpenFile);
ipcMain.handle('user:get_data', handleGetUserData);
ipcMain.handle('file:icon', handleGetIcon);
ipcMain.on('window:close', handleCloseWindow);
ipcMain.on('window:minimize', handleMinimizeWindow);
ipcMain.on('window:maximize', handleMaximizeWindow);

const createWindow = (): void => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 800,
    width: 1200,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
