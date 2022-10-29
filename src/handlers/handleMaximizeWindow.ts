import { IpcMainEvent, BrowserWindow } from 'electron';

export function handleMaximizeWindow(event: IpcMainEvent) {
  const webContents = event.sender;
  const window = BrowserWindow.fromWebContents(webContents);

  window.maximize();
}
