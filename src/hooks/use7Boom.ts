import { useState } from 'react';
import { forcePositive, getNumOrBoom, isNumBoom } from '../utils/lib';

const use7Boom = (initialNumber: number) => {
  const initial = forcePositive(initialNumber);

  const [current, setCurrent] = useState<number>(initial);
  const [sequence, setSequence] = useState<number[]>([
    isNumBoom(initial) ? -1 : initial,
  ]);

  const add1 = () => {
    const seq = [...sequence];
    let next = current + 1;
    setCurrent(next);
    document.title = isNumBoom(next) ? 'Boom!' : 'Counting';
    next = getNumOrBoom(next);
    seq.push(next);
    setSequence(seq);
  };

  return { current, sequence, add1 };
};

export default use7Boom;
