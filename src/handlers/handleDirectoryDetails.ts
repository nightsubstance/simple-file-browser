import { IpcMainInvokeEvent } from 'electron';
import fs from 'fs/promises';
import os from 'os';

import { DirectoryObject } from '../types/DirectoryObject';

export async function handleDirectoryDetails(event: IpcMainInvokeEvent, path: string): Promise<DirectoryObject> {
  try {
    const rootPathArr = path.split('/');
    const [rootName] = rootPathArr.splice(rootPathArr.length - 1, 1);
    const files = await fs.readdir(`${os.homedir()}/${path}`, { withFileTypes: true, encoding: 'utf-8' });

    const children: DirectoryObject[] = files.map((file) => ({
      name: file.name,
      isDirectory: file.isDirectory(),
      isFile: file.isFile(),
      path: `${path}/${file.name}`,
      children: [],
    }));

    children.sort((a, b) => {
      if (a.isDirectory && b.isFile) return -1;
      if (a.isFile && a.isDirectory) return 1;
      return a.name.localeCompare(b.name);
    });

    return {
      name: rootName,
      path: path,
      isDirectory: true,
      isFile: false,
      children,
    };
  } catch (error) {
    throw new Error(error);
  }
}
