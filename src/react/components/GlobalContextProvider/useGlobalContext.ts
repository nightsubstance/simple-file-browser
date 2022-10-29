import { GlobalContext, GlobalContextInterface } from './GlobalContextProvider';
import { useContext } from 'react';

export function useGlobalContext(): GlobalContextInterface {
  return useContext<GlobalContextInterface>(GlobalContext);
}
