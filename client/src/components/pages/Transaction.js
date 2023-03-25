import React from 'react';
import History from './History';
import Card from 'react-bootstrap/Card';
import './Transaction.css'
import { UserContext } from "../../contexts/UserContext";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoneyBillTransfer} from '@fortawesome/free-solid-svg-icons';



function Transaction() {
  const transactions = [
    {
      id: 1,
      date: "2022-03-18",
      description: "Payment received",
      person: "Dada",
      amount: "+ ₹ 100.00",
    },
    {
      id: 2,
      date: "2022-03-17",
      description: "Payment sent",
      person: "Vishal",
      amount: "- ₹ 50.00",
    },
    {
      id: 3,
      date: "2022-03-15",
      description: "Payment received",
      person: "Papa",
      amount: "+ ₹ 2775.00",
    },
    {
        id: 4,
        date: "2022-03-14",
        description: "Payment received",
        person: "Shreya",
        amount: "+ ₹ 175.00",
      },
      {
        id: 5,
        date: "2022-03-12",
        description: "Payment sent",
        person: "Stationery",
        amount: "- ₹ 25.00",
      },
      {
        id: 6,
        date: "2022-03-12",
        description: "Payment received",
        person: "Aarohi",
        amount: "+ ₹ 75.00",
      },
      {
        id: 7,
        date: "2022-03-12",
        description: "Payment sent",
        person: "Canteen",
        amount: "- ₹ 50.00",
      },
      // {
      //   id: 8,
      //   date: "2022-03-10",
      //   description: "Payment received",
      //   person: "Sid",
      //   amount: "+ ₹ 150.00",
      // },
      // {
      //   id: 9,
      //   date: "2022-03-10",
      //   description: "Payment received",
      //   person: "Mummy",
      //   amount: "+ ₹ 775.00",
      // },
  ];

  return (
    <div className='transaction'>    
      <div className='d-flex align-items-center'>
        <div>
          <FontAwesomeIcon className='icon-3' icon={faMoneyBillTransfer}/>
        </div>
        <div className='ms-3'>
          <h3 className='main-heading'>Transactions</h3>
          <p className='mb-0'>Obtain a summary of all of your transactions.</p>
        </div>
      </div>
        
      <br />
      
      <div className='peer-body'>
        <History transactions={transactions} />
      </div>
    </div>
    
  );
}

export default Transaction;