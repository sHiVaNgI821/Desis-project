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
    <div>
      <div>
        <div className='friend-card'>
          <p className='name'>{friend?._id} ({status})</p>
          <div>
            <div className='friend-header'>
              <p className='friend-text'><b>Interest</b></p>
              <p className='friend-text'><b>Date</b></p>
              <p className='friend-text'><b>Due Date</b></p>
              <p className='friend-text'><b>Amount</b></p>
            </div>
            {friend?.data?.length > 0 && friend.data.map((doc)=>
            <div className='friend-rows'>
              <p className='friend-text'>{doc.interest}</p>
              <p className='friend-text'>{format(new Date(doc.date), 'dd/MM/yyyy')}</p>
              <p className='friend-text'>{format(new Date(doc.date), 'dd/MM/yyyy')}</p>
              <p className='friend-text'>{doc.amount}</p>
              <p><button className='settle-button'>Settle</button></p>
            </div>)}
          </div>
          {/* <p className="status">{status}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Friend;