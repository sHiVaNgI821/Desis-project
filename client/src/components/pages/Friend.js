import React, {useState, useEffect} from 'react';
import './Friend.css';
import {format} from 'date-fns';

const Friend = ({ friend }) => {
  let status = '';
  if (friend.amount > 0) {
    status = 'owes you Rs.' + friend.amount;
  } else if (friend.amount < 0) {
    status = 'you owe Rs.' + Math.abs(friend.amount);
  } else {
    status = 'Settled';
  }

  return (
    <div className="">
      <div className="">
        <div>
          <h3>{friend?._id}</h3>
          <ul>
            {friend?.data?.length > 0 && friend.data.map((doc)=>
            <li>
                Interest:{doc.interest}, Date: {format(new Date(doc.date), 'dd/MM/yyyy')}, DueDate: {format(new Date(doc.date), 'dd/MM/yyyy')}, Amount: {doc.amount}
                <li><button type="submit" onClick={settle}>Settle</button></li>
            </li>)}
            </ul>
          <p className="status">{status}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Friend;