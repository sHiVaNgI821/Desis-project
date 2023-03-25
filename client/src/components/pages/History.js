import React from 'react';
import './History.css';

function HistoryCard(props) {
  const { date, description, person, amount } = props;

  return (
    <div className="transaction-history-card">
      <p className="transaction-history-card__date text-white">{date}</p>
      <p className="transaction-history-card__description text-white">{description}</p>
      <p className="transaction-history-card__person text-white">{person}</p>
      <p className="transaction-history-card__amount text-white">{amount}</p>
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