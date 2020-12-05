import React, { createContext, useContext, useState } from 'react';
import { Game } from './engine/core';

const GameContext = createContext();

export default function GameProvider({ children }) {
  const game = new Game();

  const [grid, setGrid] = useState([
    [0, 1, 0, 3, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 3, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [2, 0, 2, 0, 2, 0, 2, 0],
    [0, 2, 0, 2, 0, 4, 0, 2],
    [2, 0, 2, 0, 2, 0, 2, 0],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState(2);
  const [selectedCell, setSelectedCell] = useState(null);
  const [availableCells, setAvailableCells] = useState([]);

  const isEmptyCell = (cell) => {
    return grid[cell.row][cell.column] === 0;
  };

  const changeAvailableCells = (cell) => {
    let cells = [];

    if (grid[cell.row + 1][cell.column + 1] === 0)
      cells.push({ row: cell.row + 1, column: cell.column + 1 });
    
    if (grid[cell.row + 1][cell.column - 1] === 0)
      cells.push({ row: cell.row + 1, column: cell.column - 1 });
    
    if (grid[cell.row - 1][cell.column + 1] === 0)
      cells.push({ row: cell.row - 1, column: cell.column + 1 });
    
    if (grid[cell.row - 1][cell.column - 1] === 0)
      cells.push({ row: cell.row - 1, column: cell.column - 1 });
    
    setAvailableCells(cells);
  };

  const selectChecker = (cell) => {
    if (isEmptyCell(cell)) return null;

    setSelectedCell(null);

    switch (currentPlayer) {
      case 1: {
        if (grid[cell.row][cell.column] % 2 !== 0) {
          setSelectedCell(cell);
          changeAvailableCells(cell);
          return cell;
        } else {
          return null;
        }
      }
      case 2: {
        if (grid[cell.row][cell.column] % 2 !== 0) {
          setSelectedCell(cell);
          changeAvailableCells(cell);
          return console.log('selected: ', cell);
          return cell;
        } else {
          return null;
        }
      }
      default: {
        console.error('Игрок не выбран!');
        throw new Error('Недопустимый игрок');
      }
    }
  };

  return (
    <GameContext.Provider value={{ grid, selectChecker, availableCells }}>
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);
