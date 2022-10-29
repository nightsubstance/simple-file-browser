import { contextBridge,ipcRenderer } from 'electron';

export const api = {
  getDirectoriesList: () => ipcRenderer.invoke('directory:list'),
  getDirectoryDetails: (path: string) => ipcRenderer.invoke('directory:details', path),
  openFile: (path: string) => ipcRenderer.invoke('file:open', path),
  getUserData: () => ipcRenderer.invoke('user:get_data'),
  getFileIcon: (path: string) => ipcRenderer.invoke('file:icon', path),
  closeWindow: () => ipcRenderer.send('window:close'),
  minimizeWindow: () => ipcRenderer.send('window:minimize'),
  maximizeWindow: () => ipcRenderer.send('window:maximize'),
};

contextBridge.exposeInMainWorld('api', api);
