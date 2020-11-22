import React from 'react';
import styled from 'styled-components';
import { useGame } from '../GameProvider';
import { useOptions } from '../OptionProvider';
import Cell from './Cell';

/** Стили для игрового поля */
const PlaygroundDiv = styled.div`
  width: ${(props) => props.dimension * props.cellSize}px;
  height: ${(props) => props.dimension * props.cellSize}px;
  display: flex;
  flex-wrap: wrap;
`;

export default function Playground() {
  const { grid } = useGame();

  const options = useOptions();

  /** Массив с ячейками игрового поля */
  let renderGrid = [];

  /** Алгоритм заполнения закрашенными ячейками игрового поля */
  for (let i = 0; i < grid.length; i++) {
    renderGrid.push([]);
    for (let j = 0; j < grid[i].length; j++) {
      renderGrid[i].push(
        <Cell
          key={`${i} ${j}`}
          color={
            (i % 2 !== 0 && j % 2 !== 0) || (i % 2 === 0 && j % 2 === 0)
              ? options.primaryColor
              : options.secondColor
          }
          size={options.cellSize}
          value={grid[i][j]}
        />
      );
    }
  }

  return (
    <PlaygroundDiv className={'Playground'} {...options}>
      {renderGrid}
    </PlaygroundDiv>
  );
}
