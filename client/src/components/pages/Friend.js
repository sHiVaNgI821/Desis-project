/* Friend.jsx */

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
    status = 'settled up';
  }

  return (
    <div className="friend">
      <div className="friend-info">
        {/* <img src={friend.picture} alt={friend.name} /> */}
        <div>
          <h3>{friend?._id}</h3>
          <ul>{friend?.data?.length > 0 && friend.data.map((doc)=><li>Interest:{doc.interest}, Date: {format(new Date(doc.date), 'dd/MM/yyyy')}, DueDate: {format(new Date(doc.date), 'dd/MM/yyyy')}, Amount: {doc.amount}</li>)}</ul>
          <p className="status">{status}</p>
        </div>
      </div>
      <button className="settle-up" style={{height:'26px', fontColor: 'white', fontSize:'13px', position:'relative', bottom:'22px', right:'25px', backgroundColor:'purple', fontWeight:'bold', borderRadius:'4px'}}>Settle up</button>
    </div>
  );
};

export default Friend;