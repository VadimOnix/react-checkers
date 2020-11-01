import React, { useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: ${props => props.isSelected ? "red" : props.color};
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2rem;
  `;

export default function Cell({ color, size, value, callback }) {
  const [selected, setSelected] = useState(false);

  const clickHandler = (s) => {
    setSelected(!s)
    // callback()
  }

  return (
    <StyledDiv isSelected={selected} size={size} color={color} onClick={() => clickHandler(selected)}>
      {value}
    </StyledDiv>
  );
}

