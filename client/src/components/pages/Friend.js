/* Friend.jsx */

import React from 'react';
import './Friend.css';

const Friend = ({ friend }) => {
  let status = '';
  if (friend.expenses > 0) {
    status = 'owes you Rs.' + friend.expenses;
  } else if (friend.expenses < 0) {
    status = 'you owe Rs.' + Math.abs(friend.expenses);
  } else {
    status = 'settled up';
  }

  return (
    <div className="friend">
      <div className="friend-info">
        <img src={friend.picture} alt={friend.name} />
        <div>
          <h3>{friend.name}</h3>
          <p className="status">{status}</p>
        </div>
      </div>
      <button className="settle-up" style={{height:'26px', fontColor: 'white', fontSize:'13px', position:'relative', bottom:'22px', right:'25px', backgroundColor:'purple', fontWeight:'bold', borderRadius:'4px'}}>Settle up</button>
    </div>
  );
};

export default Friend;