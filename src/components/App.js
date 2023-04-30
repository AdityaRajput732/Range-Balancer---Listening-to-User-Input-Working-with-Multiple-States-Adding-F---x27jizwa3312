import React, { useState } from 'react';

const App = () => {
  const [maxSum, setMaxSum] = useState(50);
  const [rangeA, setRangeA] = useState(0);
  const [rangeB, setRangeB] = useState(50);

  const handleMaxSumChange = (event) => {
    setMaxSum(parseInt(event.target.value));
    setRangeB(parseInt(event.target.value));
    setRangeA(0);
  };

  const handleRangeAChange = (event) => {
    setRangeA(parseInt(event.target.value));
    setMaxSum(parseInt(rangeB) - parseInt(event.target.value));
  };

  const handleRangeBChange = (event) => {
    setRangeB(parseInt(event.target.value));
    setMaxSum(parseInt(rangeA) + parseInt(event.target.value));
  };

  return (
    <div>
      <div id="max-sum-holder">
        Input max sum:-
        <input type="number" value={maxSum} onChange={handleMaxSumChange} />
      </div>
      <div id="range-a-holder">
        <input type="range" value={rangeA} max={rangeB} onChange={handleRangeAChange} />
        <span id="range-a-value">{rangeA}</span>
      </div>
      <div id="range-b-holder">
        <input type="range" value={rangeB} max={maxSum} onChange={handleRangeBChange} />
        <span id="range-b-value">{rangeB}</span>
      </div>
      <div id="sum">{parseInt(rangeA) + parseInt(rangeB)}</div>
    </div>
  );
};

export default App;
