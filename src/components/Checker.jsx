import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useGame } from '../GameProvider';

const StyledDiv = styled.div`
  background-color: ${(props) => props.color};
  width: 80%;
  height: 80%;
  border-radius: 50%;
  border: ${(props) => (props.isQueen ? '5px solid #D4BE28' : 'none')};
`;

export default function Checker(props) {
  const {selectChecker} = useGame()
  return <StyledDiv {...props} onClick={()=>selectChecker(props.coords)}/>;
}
