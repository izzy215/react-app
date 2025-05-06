'use client';

import {  useState } from 'react';

interface Props {
    count:number,
    setCount: React.Dispatch<React.SetStateAction<number>>;
}
export default function Counter({count, setCount} : Props) {
  

  return (
    <div>
      <h2>카운터: {count}</h2>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
