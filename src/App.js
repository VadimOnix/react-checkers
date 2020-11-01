import React from 'react';
import Board from './components/Board';
import GameProvider from './GameProvider';
import OptionProvider from './OptionProvider';

function App() {
  return (
    // Оборачиваем приложение в провайдер контекста
    <GameProvider>
      <OptionProvider>
        <div className="App">
          <Board />
        </div>
        </OptionProvider>
    </GameProvider>
  );
}

export default App;
