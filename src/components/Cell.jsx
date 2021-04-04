import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useGame } from '../GameProvider';
import Checker from './Checker';

const StyledDiv = styled.div`
  background-color: ${(props) => props.color};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
`;

export default function Cell({ color, size, value, coords }) {
  const { availableCells, move } = useGame();

  const [modifyColor, setModifyColor] = useState(null);

  useEffect(() => {
    if ( availableCells.some(c => c.row === coords.row && c.column === coords.column) ) {
      setModifyColor('#FCCF5D')
    } else {
      setModifyColor(null)
    } 
  }, [availableCells, coords.column, coords.row]);

  const clickHandler = (event) => {
    move(coords)
  }

  return (
    <StyledDiv size={size} color={!!modifyColor ? modifyColor : color} onClick={clickHandler}>
      {!!value && (
        <Checker
          color={value % 2 !== 0 ? 'black' : 'white'}
          isQueen={value > 2}
          coords={coords}
        />
      )}
    </StyledDiv>
  );
}
