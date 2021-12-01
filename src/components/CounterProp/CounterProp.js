import { useState } from 'react';
function CounterProp(props) {
  const [localCounterVal, setLocalCounterVal] = useState(props.initVal);

  return (
    <div>
      <h2>Counter name: {props.name}</h2>
      <h3>Counter initial value: {localCounterVal + 5}</h3>
    </div>
  );
}

export default CounterProp;
