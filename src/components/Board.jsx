import React from 'react'
import styled from 'styled-components'
import { useOptions } from '../OptionContext'
import Playground from './Playground'
import HorizontalAlphabet from './HorizontalAlphabet'
import VerticalNumeric from './VerticalNumeric'

export default function Board() {
  const options = useOptions()
  /** Стили контейнера игровой доски */
  const BoardDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: ${options.dimension * options.cellSize + options.HAH * 2}px;
    height: ${options.dimension * options.cellSize + options.VNW * 2}px;
  `;
  return (
    <BoardDiv className={"Board"}>
      <HorizontalAlphabet />
      <VerticalNumeric/>
      <Playground/>
      <VerticalNumeric/>
      <HorizontalAlphabet/>
    </BoardDiv>
  )
}
