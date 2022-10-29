import { IpcMainInvokeEvent, shell } from 'electron';
import os from 'os';

export async function handleOpenFile(event: IpcMainInvokeEvent, path: string) {
  try {
    return shell.openPath(`${os.homedir()}/${path}`);
  } catch (error) {
    throw new Error(error);
  }
}
