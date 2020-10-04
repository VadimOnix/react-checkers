import React from 'react'
import Cell from './Cell'
import styled from 'styled-components'

const primaryColor = "#dbae95"
const secondColor = "#6c5040"
const HAH = 40 // horizontalAlphabetHeight
const VNW = 40 // verticalNumericWidth
const cellSize = 80 // размерность ячейки в пикселях

/**
 * @param {number} dimension -  размерность игрового поля, должно быть больше 0
 */
export default function Board({ dimension }) {

  /** Стили для игрового поля */
  const PlaygroundDiv = styled.div`
    width: ${dimension * cellSize}px;
    height: ${dimension * cellSize}px;
    display: flex;
    flex-wrap: wrap;
  `;

  /** Стили контейнера игровой доски */
  const BoardDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: ${dimension * cellSize + HAH * 2}px;
    height: ${dimension * cellSize + VNW * 2}px;
  `;

  /** С горизонтального контейнера с буквами */
  const HorizontalAlphabetDiv = styled.div`
    flex-basis: 100%;
    width: ${dimension * cellSize}px;
    height: ${HAH}px;
  `;
  /** Стили вертикального контейнера с цифрами */
  const VerticalNumericDiv = styled.div`
    width: ${VNW}px;
  `;

  /** Массив с ячейками игрового поля */
  let grid = []

  /** Алгоритм заполнения закрашенными ячейками игрового поля */
  for (let i = 0; i < dimension; i++){
    grid.push([])
    for (let j = 0; j < dimension; j++) {
      if ((i % 2 !== 0 && j % 2 !== 0) || (i % 2 === 0 && j % 2 === 0)) {
        grid[i].push(<Cell key={`${i} ${j}`} color={primaryColor} size={cellSize}/> )
      }
      else {
        grid[i].push(<Cell key={`${i} ${j}`} color={secondColor} size={cellSize}/> )
      }
    } 
  }

  return (
    <BoardDiv className={"Board"}>
      <HorizontalAlphabetDiv>
        A B C D E F G
      </HorizontalAlphabetDiv>

      <VerticalNumericDiv>
        1 2 3 4 5 6 7 8
      </VerticalNumericDiv>

      <PlaygroundDiv className={"Playground"}>
        {grid}
      </PlaygroundDiv>

      <VerticalNumericDiv>
        1 2 3 4 5 6 7 8
      </VerticalNumericDiv>

      <HorizontalAlphabetDiv>
        A B C D E F G
      </HorizontalAlphabetDiv>
    </BoardDiv>
  )
}
