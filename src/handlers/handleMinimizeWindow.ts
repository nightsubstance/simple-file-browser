import { BrowserWindow,IpcMainEvent } from 'electron';

export function handleMinimizeWindow(event: IpcMainEvent) {
  const webContents = event.sender;
  const window = BrowserWindow.fromWebContents(webContents);

  window.minimize();
}
