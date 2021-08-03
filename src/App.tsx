import React from 'react';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';

function App() {
  return (
    <div>
      <h1>High Order Components</h1>
      <div>
        A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.
      </div>
      <div>
        Concretely, a higher-order component is a function that takes a component and returns a new component.
      </div>
      <div>HOC are used to share same functionality between components</div>
      <div>
        Whereas a component transforms props into UI, a higher-order component transforms a component into another component.
      </div>
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

export default App;
