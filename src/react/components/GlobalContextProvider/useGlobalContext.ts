import { useContext } from 'react';

import { GlobalContext, GlobalContextInterface } from './GlobalContextProvider';

export function useGlobalContext(): GlobalContextInterface {
  return useContext<GlobalContextInterface>(GlobalContext);
}
