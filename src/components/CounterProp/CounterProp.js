import PropTypes from 'prop-types';
import { useState } from 'react';

function CounterProp(props) {
  const [localCounterVal, setLocalCounterVal] = useState(props.initVal);

  return (
    <div>
      <h2>Counter name: {props.name}</h2>
      <h3>Counter initial value: {localCounterVal + 5}</h3>
      <h2>{props.specialVal}</h2>
      <h2 style={{ color: props.selectVal }}>{props.selectVal}</h2>
      <h4>
        {props.favNumbers.map((n) => (
          <span key={n}>{n + 2} -- </span>
        ))}
      </h4>
    </div>
  );
}

// default props
CounterProp.defaultProps = {
  name: 'Usual',
};

// check props
CounterProp.propTypes = {
  name: PropTypes.string,
  initVal: PropTypes.number.isRequired,
  specialVal: PropTypes.node.isRequired,
  selectVal: PropTypes.oneOf(['red', 'green', 'blue', 'orange']),
  favNumbers: PropTypes.arrayOf(PropTypes.number),
  arrayOfNumbersOrStrings: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
};

export default CounterProp;
