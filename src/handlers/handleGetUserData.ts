import os from 'os';

export async function handleGetUserData() {
  try {
    return os.userInfo({ encoding: 'utf-8' });
  } catch (error) {
    return error;
  }
}
