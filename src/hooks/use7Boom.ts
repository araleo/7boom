import { useEffect, useMemo, useState } from 'react';
import { forcePositive, getNumOrBoom } from '../utils/lib';

const use7Boom = (initialNumber: number) => {
  const initialPositive = useMemo(
    () => forcePositive(initialNumber),
    [initialNumber]
  );

  const [current, setCurrent] = useState<number>(initialPositive);
  const [sequence, setSequence] = useState<number[]>([]);

  useEffect(() => {
    const initial = getNumOrBoom(initialPositive);
    setSequence([initial]);

    return () => setSequence([]);
  }, [initialPositive]);

  const add1 = () => {
    const seq = [...sequence];
    const next = handleNext();
    seq.push(getNumOrBoom(next));
    setSequence(seq);
  };

  const handleNext = () => {
    const next = current + 1;
    setCurrent(next);
    return next;
  };

  return { current, sequence, add1 };
};

export default use7Boom;
