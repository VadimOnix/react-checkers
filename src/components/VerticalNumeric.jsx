import React from 'react';
import styled from 'styled-components';
import { useOptions } from '../OptionContext';

export default function VerticalNumeric() {
  const options = useOptions();
  /** Стили вертикального контейнера с цифрами */
  const VerticalNumericDiv = styled.div`
    width: ${options.VNW}px;
  `;
  return <VerticalNumericDiv>1 2 3 4 5 6 7 8</VerticalNumericDiv>;
}
