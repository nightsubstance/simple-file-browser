import os from 'os';
import fs from 'fs/promises';
import { DirectoryObject } from '../types/DirectoryObject';

export async function handleDirectoryList(): Promise<DirectoryObject[]> {
  try {
    const objects = await fs.readdir(os.homedir(), { withFileTypes: true, encoding: 'utf-8' });

    return objects.map((object) => ({
      name: object.name,
      path: `${os.homedir()}/${object.name}`,
      rootPath: os.homedir(),
      isFile: object.isFile(),
      isDirectory: object.isDirectory(),
      children: [],
    }));
  } catch (error) {
    return error;
  }
}
