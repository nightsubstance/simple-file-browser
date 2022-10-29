import os from 'os';
import { app, IpcMainInvokeEvent } from 'electron';

export async function handleGetIcon(event: IpcMainInvokeEvent, path: string) {
  const image = await app.getFileIcon(`${os.homedir()}/${path}`, { size: 'normal' });
  
  return image.toDataURL();
}
