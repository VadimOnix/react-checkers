export class Game {
  constructor() {
    this.grid = [
      [0, 1, 0, 3, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 3, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [2, 0, 2, 0, 2, 0, 2, 0],
      [0, 2, 0, 2, 0, 4, 0, 2],
      [2, 0, 2, 0, 2, 0, 2, 0],
    ];
    this.currentPlayer = 2;
    this.selectedCell = null;
    this.availableCells = [];
  }

  isEmptyCell = (cell) => {
    return this.grid[cell.row][cell.column] === 0;
  };

  setAvailableCells = () => {
    const cell = this.selectedCell;
    this.availableCells = [];
    if (this.grid[cell.row + 1][cell.column + 1] === 0)
      this.availableCells.push({row: cell.row + 1, column: cell.column + 1});
    if (this.grid[cell.row + 1][cell.column - 1] === 0)
      this.availableCells.push({row: cell.row + 1, column: cell.column - 1});
    if (this.grid[cell.row - 1][cell.column + 1] === 0)
      this.availableCells.push({row: cell.row - 1, column: cell.column + 1});
    if (this.grid[cell.row - 1][cell.column - 1] === 0)
      this.availableCells.push({row: cell.row - 1, column: cell.column - 1});
    console.log(this.availableCells);
  };

  selectChecker = (cell) => {
    if (this.isEmptyCell(cell)) return null;

    this.selectedCell = null;

    switch (this.currentPlayer) {
      case 1: {
        if (this.grid[cell.row][cell.column] % 2 !== 0) {
          this.selectedCell = cell;
          this.setAvailableCells();
          return console.log('selected: ', cell);
          return cell;
        } else {
          return null;
        }
      }
      case 2: {
        if (this.grid[cell.row][cell.column] % 2 !== 0) {
          this.selectedCell = cell;
          this.setAvailableCells();
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

  move = (newCell) => {
    // if (!this.selectedCell) rerutn null
  };

  changeValue = (cell, newValue) => {
    this.grid[cell.row][cell.column] = newValue;
  };
}
