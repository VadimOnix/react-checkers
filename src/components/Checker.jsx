import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: ${(props) => props.color};
  width: 80%;
  height: 80%;
  border-radius: 50%;
  border: ${(props) => (props.isQueen ? '5px solid #D4BE28' : 'none')};
`;

export default function Checker(props) {
  return <StyledDiv {...props} />;
}
