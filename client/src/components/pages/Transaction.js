import React, {useState, useEffect} from 'react';
import History from './History';
import Card from 'react-bootstrap/Card';
import './Transaction.css'


function Transaction() {
  const [history, setHistory] = useState();
  useEffect(()=>{
    fetch("http://localhost:4000/getHistory", {
      credentials:"include",
    }).then((resHistory)=>resHistory.json()).then((dataHistory) => setHistory(dataHistory));
  }, [])
  return (
    <div className='transaction'>      
        <h3>Transaction History</h3>
        <History transactions={history} />
    </div>
    
  );
}

export default Transaction;