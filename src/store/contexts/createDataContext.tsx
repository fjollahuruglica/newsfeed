import React, { useReducer } from 'react';
import { INews } from '../models';

export interface AppState {
  news: INews[];
  language: string;
  isLight: boolean;
}

type StateProviderProps = {
  reducer: any;
  actions: any;
  defaultValue: AppState;
};

export default ({ reducer, actions, defaultValue }: StateProviderProps) => {
  const Context = React.createContext<any>(defaultValue);

  const Provider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions: any = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
