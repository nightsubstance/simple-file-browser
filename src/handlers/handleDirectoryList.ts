import fs from 'fs/promises';
import os from 'os';

import { DirectoryObject } from '../types/DirectoryObject';

export async function handleDirectoryList(): Promise<DirectoryObject[]> {
  try {
    const objects = await fs.readdir(os.homedir(), { withFileTypes: true, encoding: 'utf-8' });

    const data = objects.map((object) => ({
      name: object.name,
      path: `${os.homedir()}/${object.name}`,
      rootPath: os.homedir(),
      isFile: object.isFile(),
      isDirectory: object.isDirectory(),
      children: [],
    }));

    data.sort((a, b) => {
      if (a.isDirectory && b.isFile) return -1;
      if (a.isFile && a.isDirectory) return 1;
      return a.name.localeCompare(b.name);
    });

    return data;
  } catch (error) {
    throw new Error(error);
  }
}
