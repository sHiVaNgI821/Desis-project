import React from 'react';
import './History.css';

function HistoryCard(props) {
  const { date, description, person, amount } = props;

  return (
    <div className="transaction-history-card">
      <p className="transaction-history-card__date">{date}</p>
      <p className="transaction-history-card__description">{description}</p>
      <p className="transaction-history-card__person">{person}</p>
      <p className="transaction-history-card__amount">{amount}</p>
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