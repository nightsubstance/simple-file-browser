import { app, IpcMainInvokeEvent } from 'electron';
import os from 'os';

export async function handleGetIcon(event: IpcMainInvokeEvent, path: string) {
  const image = await app.getFileIcon(`${os.homedir()}/${path}`, {
    // https://www.electronjs.org/docs/latest/api/app#appgetfileiconpath-options
    size: os.platform() === 'win32' || os.platform() === 'linux' ? 'large' : 'normal',
  });

  return image.toDataURL();
}
