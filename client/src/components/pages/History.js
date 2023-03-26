import React,{useContext} from 'react';
import { UserContext } from '../../contexts/UserContext';
import './History.css';
import {format} from 'date-fns'
function HistoryCard(props) {
  const { date, to, from, amount, category } = props;
  const {userInfo, setUserInfo} = useContext(UserContext)
  const date_format = format(new Date(date), 'dd/MM/yyyy')

  return (
      <div className='transaction-card'>
      <div>
        <p className='mb-0 transaction-recipient'>{userInfo?.id == from ? "Debit": "Credit"}</p>
        <p className='mb-0 transaction-recipient'>{userInfo?.id == from ? "Paid to " + to : "Received from " + from}</p>

        <p className='transaction-date'>{date_format}</p>
      </div>
      <div>
        <p className='transaction-amount'>{amount}</p>
        <p className='transaction-amount'>{category}</p>

      </div>
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