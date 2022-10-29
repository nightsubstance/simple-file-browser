import { IpcMainInvokeEvent, shell } from 'electron';

export async function handleOpenFile(event: IpcMainInvokeEvent, path: string) {
  try {
    return shell.openPath(path);
  } catch (error) {
    return error;
  }
}
