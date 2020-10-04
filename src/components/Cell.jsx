import React from 'react'
import styled from 'styled-components'

export default function Cell({ color, size }) {
  const StyledDiv = styled.div`
    background-color: ${color};
    width: ${size}px;
    height: ${size}px;
  `;

  return (
    <StyledDiv>
      
    </StyledDiv>
  )
}
