import React from 'react';
import styled from 'styled-components';
import { useOptions } from '../OptionContext';
import Cell from './Cell';

export default function Playground() {
  const options = useOptions();

  /** Массив с ячейками игрового поля */
  let grid = [];

  /** Алгоритм заполнения закрашенными ячейками игрового поля */
  for (let i = 0; i < options.dimension; i++) {
    grid.push([]);
    for (let j = 0; j < options.dimension; j++) {
      if ((i % 2 !== 0 && j % 2 !== 0) || (i % 2 === 0 && j % 2 === 0)) {
        grid[i].push(
          <Cell
            key={`${i} ${j}`}
            color={options.primaryColor}
            size={options.cellSize}
          />
        );
      } else {
        grid[i].push(
          <Cell
            key={`${i} ${j}`}
            color={options.secondColor}
            size={options.cellSize}
          />
        );
      }
    }
  }
  /** Стили для игрового поля */
  const PlaygroundDiv = styled.div`
    width: ${options.dimension * options.cellSize}px;
    height: ${options.dimension * options.cellSize}px;
    display: flex;
    flex-wrap: wrap;
  `;

  return <PlaygroundDiv className={'Playground'}>{grid}</PlaygroundDiv>;
}
