import React from 'react';
import styled from 'styled-components';
import { useOptions } from '../OptionProvider';

/** Стили вертикального контейнера с цифрами */
const VerticalNumericDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: ${(props) => props.VNW}px;
  height: ${(props) => props.dimension * props.cellSize}px;
  color: white;
`;

const labels = Array.from({ length: 8 }, (_, i) => (
  <p key={i}>
    <b>{i + 1}</b>
  </p>
));

export default function VerticalNumeric() {
  const options = useOptions();

  return <VerticalNumericDiv {...options}>{labels}</VerticalNumericDiv>;
}
