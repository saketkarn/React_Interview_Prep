import React, { useState } from 'react';

// Higher-Order Component
const withRedBackground = (WrappedComponent) => {
  return (props) => {
    return (
      <div style={{ backgroundColor: "red", textAlign: "center" }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me!
      </button>
    </div>
  );
};

const CounterWithRedBackground = withRedBackground(Counter);

const HigherOrderComponent = () => {
  return (
    <div>
      <CounterWithRedBackground />
    </div>
  );
};

export default HigherOrderComponent;
