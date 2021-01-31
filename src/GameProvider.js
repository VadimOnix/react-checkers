import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export default function GameProvider({ children }) {
  // абстракция игровой доски, где вместо ячеек с шашками элементы массива с числами
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
  // состояние текущего игрока
  const [currentPlayer, setCurrentPlayer] = useState(2);
  // подтвердженная выбранная ячейка
  const [selectedCell, setSelectedCell] = useState(null);
  // ячейки, доступные для хода
  const [availableCells, setAvailableCells] = useState([]);

  // функция проверки ячеки на пустоту
  const isEmptyCell = (cell) => {
    return grid[cell.row][cell.column] === 0;
  };

  // перезаписывает доступные для хода ячейки
  const changeAvailableCells = (selectedCell) => {
    let cells = [];

    if (grid[selectedCell.row + 1][selectedCell.column + 1] === 0)
      cells.push({ row: selectedCell.row + 1, column: selectedCell.column + 1 });
    
    if (grid[selectedCell.row + 1][selectedCell.column - 1] === 0)
      cells.push({ row: selectedCell.row + 1, column: selectedCell.column - 1 });
    
    if (grid[selectedCell.row - 1][selectedCell.column + 1] === 0)
      cells.push({ row: selectedCell.row - 1, column: selectedCell.column + 1 });
    
    if (grid[selectedCell.row - 1][selectedCell.column - 1] === 0)
      cells.push({ row: selectedCell.row - 1, column: selectedCell.column - 1 });
    
    setAvailableCells(cells);
  };
  
  // функция выбора шашки
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
        if (grid[cell.row][cell.column] % 2 === 0) {
          setSelectedCell(cell);
          changeAvailableCells(cell);
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

  // алгоритм хода для шашки
  const move = (coords) => {
    // если не выбрана шашка, то ничего не делать
    if (!selectedCell) return
    // флаг проверки, что далее будет выбрана ячека из доступных
    let isAvailableCell = false
    // проверка на доступность хода в вбыранную ячейку
    availableCells.forEach(aCell => {
      if (aCell.row == coords.row && aCell.column == coords.column)
        isAvailableCell = true
    })
    // если ход не подтверждён, то прекращаем процесс хода
    if (!isAvailableCell) return
    // если ячейка была доступна для хода, то выполняем ход, перезаписываем значения в игровой сетке
    let newGrid = [...grid]
    let temp = newGrid[selectedCell.row][selectedCell.column]
    newGrid[selectedCell.row][selectedCell.column] = newGrid[coords.row][coords.column]
    newGrid[coords.row][coords.column] = temp
    setGrid(newGrid)
    // сбрасываем параметры хода
    setSelectedCell(null)
    setAvailableCells([])
  }

  return (
    <GameContext.Provider value={{ move, grid, selectChecker, availableCells }}>
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);
