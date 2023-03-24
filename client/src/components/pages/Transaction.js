import React from 'react';
import History from './History';
import Card from 'react-bootstrap/Card';
import './Transaction.css'


function Transaction() {
  const transactions = [
    {
      id: 1,
      date: "2022-03-18",
      description: "Payment received",
      person: "from Dada",
      amount: "Rs 100.00",
    },
    {
      id: 2,
      date: "2022-03-17",
      description: "Payment sent",
      person: "to Vishal",
      amount: "Rs 50.00",
    },
    {
      id: 3,
      date: "2022-03-15",
      description: "Payment received",
      person: "from Papa",
      amount: "Rs 2775.00",
    },
    {
        id: 4,
        date: "2022-03-14",
        description: "Payment received",
        person: "from Shreya",
        amount: "Rs 175.00",
      },
      {
        id: 5,
        date: "2022-03-12",
        description: "Payment sent",
        person: "to stationary shop",
        amount: "Rs 25.00",
      },
      {
        id: 6,
        date: "2022-03-12",
        description: "Payment received",
        person: "from Aarohi",
        amount: "Rs 75.00",
      },
      {
        id: 7,
        date: "2022-03-12",
        description: "Payment sent",
        person: "to Canteen",
        amount: "Rs 50.00",
      },
      {
        id: 8,
        date: "2022-03-10",
        description: "Payment received",
        person: "from Sid",
        amount: "Rs 150.00",
      },
      {
        id: 9,
        date: "2022-03-10",
        description: "Payment received",
        person: "from Mummy",
        amount: "Rs 775.00",
      },
  ];

  return (
    <div className='transaction'>      
        <h3>Transaction History</h3>
        <History transactions={transactions} />
    </div>
    
  );
}

export default Transaction;