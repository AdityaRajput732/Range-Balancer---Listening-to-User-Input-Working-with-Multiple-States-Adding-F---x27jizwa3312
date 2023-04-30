import React, { useState } from 'react';

const App = () => {
  const [maxSum, setMaxSum] = useState(50);
  const [rangeA, setRangeA] = useState(0);
  const [rangeB, setRangeB] = useState(50);
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(50);

  const handleMaxSumChange = (event) => {
    setMaxSum(parseInt(event.target.value));
    setRangeB(parseInt(event.target.value)-parseInt(valueA))
    // setRangeB(parseInt(event.target.value)-parseInt(rangeA))
    // setRangeB(parseInt(event.target.value));
    
    // setRangeA(parseInt(maxSum)-parseInt(rangeB))
    // setValueA(parseInt(maxSum)-parseInt(rangeB))
    if(maxSum==rangeB){
      setRangeA(0);
    } else{
      setRangeA(parseInt(maxSum)-parseInt(rangeB))
    }
  };

  const handleRangeAChange = (event) => {
    // setRangeA(parseInt(maxSum)-parseInt(rangeB));
    setRangeB(parseInt(maxSum)-parseInt(event.target.value));
    setValueA(parseInt(event.target.value))
    // setMaxSum(parseInt(rangeB) - parseInt(event.target.value));
  };

  const handleRangeBChange = (event) => {
    console.log(event.target.value);
    setRangeB(parseInt(maxSum)-parseInt(rangeA));
    setRangeA(parseInt(maxSum)-parseInt(event.target.value))
    setValueB(event.target.value)
    // setMaxSum(parseInt(valueA) + parseInt(event.target.value));
  };
  // console.log(rangeA, rangeB, maxSum);

  return (
    <div>
      <div id="max-sum-holder">
        Input max sum:-
        <input type="number" value={maxSum} onChange={handleMaxSumChange} />
      </div>
      <div id="range-a-holder">
        <input type="range" value={valueA} max={rangeA} onChange={handleRangeAChange} />
        <span id="range-a-value">{valueA}</span>
      </div>
      <div id="range-b-holder">
        <input type="range" value={valueB} max={rangeB} onChange={handleRangeBChange} />
        <span id="range-b-value">{valueB}</span>
      </div>
      <div id="sum">{parseInt(valueA) + parseInt(valueB)}</div>
    </div>
  );
};

export default App;
