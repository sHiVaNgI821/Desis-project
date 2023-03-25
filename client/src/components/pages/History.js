import React from 'react';
import './History.css';

function HistoryCard(props) {
  const { date, description, person, amount } = props;

  return (
    <div className='transaction-card'>
      <div>
        <p className='mb-0 transaction-recipient'>{person}</p>
        <p className='transaction-date'>{date}</p>
      </div>
      <div>
        <p className='transaction-amount'>{amount}</p>
      </div>
    </div>
  );
}

function History(props) {
  const { transactions } = props;

  return (
    <div className="transaction-history">
      
      {transactions.map((transaction) => (
        <HistoryCard
          key={transaction.id}
          date={transaction.date}
          description={transaction.description}
          person={transaction.person}
          amount={transaction.amount}
        />
      ))}
    </div>
  );
}

export default History;