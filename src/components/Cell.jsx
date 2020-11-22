import React, { useState } from 'react';
import styled from 'styled-components';
import Checker from './Checker';

const StyledDiv = styled.div`
  background-color: ${(props) => (props.isSelected ? 'red' : props.color)};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
`;

export default function Cell({ color, size, value, callback, key }) {
  const [selected, setSelected] = useState(false);

  const clickHandler = (s) => {
    setSelected(!s);
    // callback()
  };

  return (
    <StyledDiv
      isSelected={selected}
      size={size}
      color={color}
      onClick={() => clickHandler(selected)}>
      {key}
      {!!value && (
        <Checker
          color={value % 2 != 0 ? 'black' : 'white'}
          isQueen={value > 2}
        />
      )}
    </StyledDiv>
  );
}
