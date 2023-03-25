import React, { useState } from 'react';

const SavingsCalculator = () => {
  const [targetAmount, setTargetAmount] = useState(0);
  const [time, setTime] = useState(0);
  const [time2, setTime2] = useState(0);
  const [time3, setTime3] = useState(0);
  const [interestRate1, setInterestRate1] = useState(-1);
  const [interestRate2, setInterestRate2] = useState(0);
  const [interestRate3, setInterestRate3] = useState(0);
  const [monthlySaving, setMonthlySaving] = useState(0);
  const [monthlySaving2, setMonthlySaving2] = useState(0);
  const [monthlySaving3, setMonthlySaving3] = useState(0);
  
  
  const calculateInterestRate = () => {
    if(targetAmount<(time*12*monthlySaving)) {
      setInterestRate1(0);
    }
    else{
      const interestRate = ((targetAmount*100*2) / ((12* time)*(12*time + 1) * monthlySaving));
      setInterestRate1(interestRate.toFixed(2));
    }
    
  }

  const calculateMonthlySaving = () => {
    const savings = ((targetAmount*100*2) / ((12* time2)*(12*time2 + 1) * interestRate2));
    setMonthlySaving2(savings.toFixed(2));
  }

  const calculateTime = () => {
    // if(targetAmount<(time*12*monthlySaving)) {
    //   setTime3(0);
    // }
    // else{
    const time = (Math.sqrt((800*targetAmount)/(interestRate3*monthlySaving)) - 1)/2;
    setTime3(Math.ceil(time));
  
  }
  return (
    <div className='savings-calculator'>
      <h1>Target Amount</h1>
      <input type="number" value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)} />

      <h1>Calculate Interest Rate</h1>
      <div>
        <label>Time: </label>
        <input type="range" min="1" max="50" value={time} onChange={(e) => setTime(e.target.value)} />
        <span>{time} years</span>
      </div>
      <div>
        <label>Monthly Savings: </label>
        <input type="number" value={monthlySaving} onChange={(e) => setMonthlySaving(e.target.value)} />
      </div>
      <button onClick={calculateInterestRate}>Calculate Interest Rate</button>
      {interestRate1!==-1 && (interestRate1 > 0 ? <p>Interest Rate: {interestRate1}%</p>: "   ERROR: Total Amount is more than Target Amount!")}

      <h1>Calculate Monthly Savings</h1>
      <div>
        <label>Time: </label>
        <input type="number" value={time2} onChange={(e) => setTime2(e.target.value)} />
      </div>
      <div>
        <label>Interest Rate: </label>
        <input type="range" min="1" max="30" value={interestRate2} onChange={(e) => setInterestRate2(e.target.value)} />
        <span>{interestRate2}%</span>
      </div>
      <button onClick={calculateMonthlySaving}>Calculate Monthly Savings</button>
      {monthlySaving2 > 0 && <p>Monthly Savings: {monthlySaving2}</p>}
      
      <h1>Calculate Time</h1>
      <div>
        <label>Monthly Income Saving: </label>
        <input type="number" value={monthlySaving3} onChange={(e) => setMonthlySaving3(e.target.value)} />
      </div>
      <div>
        <label>Interest Rate: </label>
        <input type="range" min="1" max="30" value={interestRate3} onChange={(e) => setInterestRate3(e.target.value)} />
        <span>{interestRate3}%</span>
      </div>
      <button onClick={calculateTime}>Calculate Time</button>
      {/* {time3!==-1 && (time3 > 0 ? <p>Time: {time3} years</p>: "  ERROR:")} */}
      {time3 > 0 &&  <p>Time: {time3} years</p>}
      </div>
  )
};

  export default SavingsCalculator