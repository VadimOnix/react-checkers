import React, { useContext, createContext } from 'react';
import { OPTIONS } from './CONSTANTS';


const OptionContext = createContext(OPTIONS);

export default function OptionProvider({ children }) {
  return (
    <OptionContext.Provider value={OPTIONS}>{children}</OptionContext.Provider>
  );
}

// Собственный хук, для того, чтобы не дублировать во всех компонентах "useContext(OptionContext)"
export const useOptions = () => useContext(OptionContext);
