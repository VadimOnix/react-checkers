import React, { useContext, createContext } from 'react';

// Объект контекста, который будет доступен во всех компонентах
export const options = {
  dimension: 8,
  primaryColor: '#dbae95',
  secondColor: '#6c5040',
  HAH: 40, // horizontalAlphabetHeight
  VNW: 40, // verticalNumericWidth
  cellSize: 80, // размерность ячейки в пикселях
};

const OptionContext = createContext(options);

export default function OptionProvider({ children }) {
  return (
    <OptionContext.Provider value={options}>{children}</OptionContext.Provider>
  );
}

// Собственный хук, для того, чтобы не дублировать во всех компонентах "useContext(OptionContext)"
export const useOptions = () => useContext(OptionContext);
