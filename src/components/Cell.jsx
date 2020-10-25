import React, { useState } from 'react';
import styled from 'styled-components';

export default function Cell({ color, size }) {
  const [selected, setSelected] = useState(false);

  const clickHandler = (s) => {
    setSelected(!s)
  }

  const StyledDiv = styled.div`
    background-color: ${props => props.isSelected ? "red" : color};
    width: ${size}px;
    height: ${size}px;
  `;

  return <StyledDiv isSelected={selected} onClick={() => clickHandler(selected)} />;
}


const myUseState = (param) => {
  // какая-то магия
  const func = (changedParam) => {
    // какая-то магия 2, изменяет значение <param>
  }
  return [param, func]
}

