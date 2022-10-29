import { BrowserWindow,IpcMainEvent } from 'electron';

export function handleCloseWindow(event: IpcMainEvent) {
  const webContents = event.sender;
  const window = BrowserWindow.fromWebContents(webContents);

  window.close();
}
