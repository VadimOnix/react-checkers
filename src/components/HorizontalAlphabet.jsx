import React from 'react';
import { useOptions } from '../OptionContext';
import styled from 'styled-components';
import { useMemo } from 'react';

const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

export default function HorizontalAlphabet() {
  const options = useOptions();
  
  // Создаём массив параграфов, в котором содержаться горизонтальные буквы доски
  const labels = useMemo(() => {
    let labels = [];
    for (let i = 0; i < options.dimension; i++) {
      labels.push(<p>{alphabetArray[i].toUpperCase()}</p>);
    }
    return labels;
  }, [options.dimension]);

  /** С горизонтального контейнера с буквами */
  const HorizontalAlphabetDiv = styled.div`
    flex-basis: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: auto ${options.VNW}px;
    width: ${options.dimension * options.cellSize}px;
    height: ${options.HAH}px;
  `;
  return <HorizontalAlphabetDiv>{labels}</HorizontalAlphabetDiv>;
}
