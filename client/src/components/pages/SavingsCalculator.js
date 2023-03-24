import React, { useState } from 'react';
import './SavingsCalculator.css';
import Card from 'react-bootstrap/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalculator} from '@fortawesome/free-solid-svg-icons';

const SavingsCalculator = () => {
  const [targetAmount, setTargetAmount] = useState(10000);
  const [time, setTime] = useState(5);
  const [interestRate, setInterestRate] = useState(5);
  const [monthlySaving, setMonthlySaving] = useState(100);

  const handleTargetAmountChange = (event) => {
    setTargetAmount(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleInterestRateChange = (event) => {
    setInterestRate(event.target.value);
  };

  const handleMonthlySavingChange = (event) => {
    setMonthlySaving(event.target.value);
  };

  return (
    <div className="savings-calculator">
      <div style={{ width: '30rem', height: '43rem'}}>
        <span className="square bg-primary rounded-9"></span>
            <h2><FontAwesomeIcon icon={faCalculator} /> Savings Calculator</h2>
            <form className="form-group">
              <div>
                <label>Target Amount:</label>
                <input type="range" min="0" max="100000" step="1000" value={targetAmount} onChange={handleTargetAmountChange} />
                {targetAmount}
              </div>
              <div>
                <label>
                  Time (years):
                </label>
                <input type="range" min="0" max="10" step="1" value={time} onChange={handleTimeChange} />
                {time}
              </div>
              <div>
                <label>
                  Interest Rate (%):
                </label>
                <input type="range" min="0" max="30" step="0.25" value={interestRate} onChange={handleInterestRateChange} />
                  {interestRate}
              </div>
              <div>
                <label>
                  Monthly Saving:
                </label>
                <input type="range" min="0" max="10000" step="10" value={monthlySaving} onChange={handleMonthlySavingChange} />
                  {monthlySaving}
              </div>
              <button type="submit">Calculate</button>    
            </form>
        </div>
      
          </div>
  );
};

export default SavingsCalculator;