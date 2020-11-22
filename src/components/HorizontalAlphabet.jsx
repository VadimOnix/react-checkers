import React from 'react';
import { useOptions } from '../OptionProvider';
import styled from 'styled-components';
import { useMemo } from 'react';

const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

/** С горизонтального контейнера с буквами */
const HorizontalAlphabetDiv = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto ${(props) => props.VNW}px;
  width: ${(props) => props.dimension * props.cellSize}px;
  height: ${(props) => props.HAH}px;
  color: white;
`;

export default function HorizontalAlphabet() {
  const options = useOptions();

  // Создаём массив параграфов, в котором содержаться горизонтальные буквы доски
  const labels = useMemo(() => {
    let labels = [];
    for (let i = 0; i < options.dimension; i++) {
      labels.push(
        <p key={i}>
          <b>{alphabetArray[i].toUpperCase()}</b>
        </p>
      );
    }
    return labels;
  }, [options.dimension]);

  return <HorizontalAlphabetDiv {...options}>{labels}</HorizontalAlphabetDiv>;
}
