import React, { FunctionComponent } from 'react';
import withCounter, {ICounterProps} from './withCounter';

const ClickCounter:FunctionComponent<ICounterProps> = ({ counter, setCounter }) => {
  return (
    <div>
      <button onClick={() => setCounter()}>Clicked {counter} times</button>
    </div>
  )
}

export default withCounter(ClickCounter);
