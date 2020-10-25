import React, { useState } from 'react';
import Board from './components/Board';
import DimensionInput from './components/DimensionInput';
import OptionContext, { options } from './OptionContext';

function App() {
  const [myDimension, setMyDimension] = useState(8);

  return (
    // Оборачиваем приложение в провайдер контекста
    <OptionContext.Provider value={options}>
      <div className="App">
        <Board />
        <DimensionInput change={setMyDimension} />
      </div>
    </OptionContext.Provider>
  );
}

export default App;
