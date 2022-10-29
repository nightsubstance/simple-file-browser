import os from 'os';
import fs from 'fs/promises';
import { IpcMainInvokeEvent } from 'electron';
import { DirectoryObject } from '../types/DirectoryObject';

export async function handleDirectoryDetails(event: IpcMainInvokeEvent, path: string): Promise<DirectoryObject> {
  try {
    const rootPathArr = path.split('/');
    const [rootName] = rootPathArr.splice(rootPathArr.length - 1, 1);
    const files = await fs.readdir(`${os.homedir()}/${path}`, { withFileTypes: true, encoding: 'utf-8' });

    return {
      name: rootName,
      path: path,
      isDirectory: true,
      isFile: false,
      children: files.map((file) => ({
        name: file.name,
        isDirectory: file.isDirectory(),
        isFile: file.isFile(),
        path: `${path}/${file.name}`,
        children: [],
      })),
    };
  } catch (error) {
    throw new Error(error);
  }
}
