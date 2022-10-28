import { ipcRenderer, contextBridge } from 'electron';

type SendChannel = 'directories_list';
type ReceiveChannel = 'directories_list';

export const api = {
  send(chanel: SendChannel, data: unknown) {
    const validChannels = ['directories_list'];

    if (validChannels.includes(chanel)) {
      ipcRenderer.send(chanel, data);
    }
  },
  receive(chanel: ReceiveChannel, func: (...args: unknown[]) => void) {
    const validChannels = ['directories_list'];

    if (validChannels.includes(chanel)) {
      ipcRenderer.on(chanel, (event, ...args) => func(...args));
    }
  },
  getDirectoriesList: () => ipcRenderer.invoke('directory:list'),
};

contextBridge.exposeInMainWorld('api', api);
