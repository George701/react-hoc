import React, { useState } from 'react';

export interface ICounterProps {
  counter: number;
  setCounter: ()=>void;
}


const withCounter = (Component: any) => ({ ...props }) => {
  const [counter, setCounter] = useState(0);
  return (<Component {...props} counter={counter} setCounter={() => setCounter(counter + 1)}/>);
}

export default withCounter;
