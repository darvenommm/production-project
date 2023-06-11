import { useState } from 'react';

import * as classes from './Counter.module.scss';

export const Counter = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  const buttonClickHandler = (): void => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button className={classes.button} onClick={buttonClickHandler}>
        +
      </button>
    </>
  );
};
