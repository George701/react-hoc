import React, { FunctionComponent } from 'react';
import withCounter, {ICounterProps} from './withCounter';

const HoverCounter: FunctionComponent<ICounterProps> = ({ counter, setCounter }) => {
  return (
    <div>
      <h2 onMouseOver={() => setCounter()}>Hovered {counter} times</h2>
    </div>
  )
}

export default withCounter(HoverCounter)
