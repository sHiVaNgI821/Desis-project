import React,{useContext} from 'react';
import { UserContext } from '../../contexts/UserContext';
import './History.css';
import {format} from 'date-fns'
function HistoryCard(props) {
  const { date, to, from, amount, category } = props;
  const {userInfo, setUserInfo} = useContext(UserContext)
  const date_format = format(new Date(date), 'dd/MM/yyyy')

  return (
    <div className="transaction-history-card">
      <p className="transaction-history-card__date text-white">{date_format}</p>
      <p className="transaction-history-card__description text-white">{userInfo?.id == from ? "Debit": "Credit"}</p>
      <p className="transaction-history-card__description text-white">{userInfo?.id == from ? "Paid to " + to : "Received from " + from}</p>
      <p className="transaction-history-card__person text-white">{category}</p>
      <p className="transaction-history-card__amount text-white">{amount}</p>
    </div>
  );
}

function History(props) {
  const { transactions } = props;

  return (
    <div className="transaction-history">
      
      {transactions?.map((transaction) => (
        <HistoryCard
          key={transaction._id}
          date={transaction.date}
          to = {transaction. to}
          from ={transaction.from}
          amount={transaction.amount}
          category = {transaction.category}
        />
      ))}
    </div>
  );
}

export default History;