import React, { useState } from 'react';

const App = () => {
  const [maxSum, setMaxSum] = useState(50);
  const [rangeA, setRangeA] = useState(0);
  const [rangeB, setRangeB] = useState(50);
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(50);

  const handleMaxSumChange = (event) => {
    const newMaxSum = parseInt(event.target.value);

    if (!isNaN(newMaxSum)) {
      setMaxSum(newMaxSum);
      setRangeA(Math.min(rangeA, newMaxSum - valueB));
      setRangeB(Math.min(rangeB, newMaxSum - valueA));
    }
  };

  const handleRangeAChange = (event) => {
    const newValueA = parseInt(event.target.value);

    if (!isNaN(newValueA)) {
      setValueA(newValueA);
    }
  };

  const handleRangeBChange = (event) => {
    const newValueB = parseInt(event.target.value);

    if (!isNaN(newValueB)) {
      setValueB(newValueB);
    }
  };

  return (
    <div>
      <div id="max-sum-holder">
        Input max sum:-
        <input
          type="number"
          value={maxSum}
          onChange={handleMaxSumChange}
        />
      </div>
      <div id="range-a-holder">
        <input
          type="range"
          value={valueA}
          max={rangeA}
          onChange={handleRangeAChange}
        />
        <span id="range-a-value">{valueA}</span>
      </div>
      <div id="range-b-holder">
        <input
          type="range"
          value={valueB}
          max={rangeB}
          onChange={handleRangeBChange}
        />
        <span id="range-b-value">{valueB}</span>
      </div>
      <div id="sum">{parseInt(valueA) + parseInt(valueB)}</div>
    </div>
  );
};

export default App;
