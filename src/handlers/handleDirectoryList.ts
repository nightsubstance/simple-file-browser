import os from 'os';
import fs from 'fs/promises';

export async function handleDirectoryList() {
  try {
    const files = await fs.readdir(os.homedir(), { withFileTypes: true, encoding: 'utf-8' });

    return files.filter((file) => file.isDirectory());
  } catch (error) {
    return error;
  }
}
