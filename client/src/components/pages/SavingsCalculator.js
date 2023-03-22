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
      <Card style={{ width: '30rem', height: '43rem'}}>
        <span className="square bg-primary rounded-9"></span>
          <Card.Body>
          <Card.Title style={{ width: '25rem', height: '0.5rem', fontSize:'26px'}}><FontAwesomeIcon icon={faCalculator} /> Savings Calculator</Card.Title>
          <Card.Text style={{padding:'100px', fontSize:'18px'}}>
          <label style={{position:'relative', bottom:'20px', fontFamily:'cursive'}}>
            Target Amount:
            <input type="range" min="0" max="100000" step="1000" value={targetAmount} onChange={handleTargetAmountChange} />
            {targetAmount}
          </label>
          <label style={{position:'relative', bottom:'20px', fontFamily:'cursive'}}>
            Time (years):
            <input type="range" min="0" max="10" step="1" value={time} onChange={handleTimeChange} />
            {time}
          </label>
          <label style={{position:'relative', bottom:'20px', fontFamily:'cursive'}}>
            Interest Rate (%):
            <input type="range" min="0" max="30" step="0.25" value={interestRate} onChange={handleInterestRateChange} />
            {interestRate}
          </label>
          <label style={{position:'relative', bottom:'20px', fontFamily:'cursive'}}>
            Monthly Saving:
            <input type="range" min="0" max="10000" step="10" value={monthlySaving} onChange={handleMonthlySavingChange} />
            {monthlySaving}
          </label>
          <button type="submit" style={{backgroundColor:'purple', fontWeight:'bold', color:'white', position:'relative', top:'30px', borderRadius:'5px'}}>Calculate</button>    
           <label ></label>
           </Card.Text>
          </Card.Body>
        </Card>
      
          </div>
  );
};

export default SavingsCalculator;