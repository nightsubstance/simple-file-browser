import os from 'os';
import fs from 'fs/promises';
import { IpcMainInvokeEvent } from 'electron';
import { DirectoryObject } from '../types/DirectoryObject';

export async function handleDirectoryDetails(event: IpcMainInvokeEvent, name: string): Promise<DirectoryObject[]> {
  try {
    const rootPath = `${os.homedir()}/${name}`;

    const files = await fs.readdir(rootPath, { withFileTypes: true, encoding: 'utf-8' });

    return files.map((file) => ({
      name: file.name,
      isDirectory: file.isDirectory(),
      isFile: file.isFile(),
      path: `${rootPath}/${file.name}`,
      rootPath: rootPath,
    }));
  } catch (error) {
    return error;
  }
}
