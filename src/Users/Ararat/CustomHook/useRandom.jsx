import { useState, useEffect } from 'react';

function getRandNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

function getRandLetter(elem) {
  const str = elem ? 'abcdefghijklmnopqrstuvwxyz' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randIndex = getRandNumber(0, str.length - 1);
  return str[randIndex];
}

function useRandom(count, type, font = 'upper') {
  const [randData, setRandData] = useState([]);

  useEffect(() => {
    const genRandData = () => {

      if (type == 'number') {
        const randNumbers = [];

        for (let i = 0; i < count; i++) {
          randNumbers.push(getRandNumber(1, 99));
        }
        setRandData(randNumbers);

      } else if (type == 'string') {
        const elem = font == 'upper';
        const randStrings = [];

        for (let i = 0; i < count; i++) {
          randStrings.push(getRandLetter(elem));
        }
        setRandData(randStrings);
      }
    };
    genRandData();
  }, [count, type, font]);

  return randData;
}

export default useRandom;

