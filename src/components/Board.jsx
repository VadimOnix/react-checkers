import React from 'react'
import styled from 'styled-components'
import { useOptions } from '../OptionProvider'
import Playground from './Playground'
import HorizontalAlphabet from './HorizontalAlphabet'
import VerticalNumeric from './VerticalNumeric'

const BoardDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: ${props => props.dimension * props.cellSize + props.HAH * 2}px;
    height: ${props => props.dimension * props.cellSize + props.VNW * 2}px;
    background-color: #411900;
    box-sizing: content-box;
    border: 3px solid #c9643b;
  `;

export default function Board() {
  const {VNW,cellSize,HAH,dimension} = useOptions()
  /** Стили контейнера игровой доски */
  
  return (
    <BoardDiv className={"Board"} dimension={dimension} cellSize={cellSize} HAH={HAH} VNW={VNW}>
      <HorizontalAlphabet />
      <VerticalNumeric/>
      <Playground/>
      <VerticalNumeric/>
      <HorizontalAlphabet/>
    </BoardDiv>
  )
}
