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
  const [transId, setTransId] = useState();

  // useEffect(()=>{

  // }, [transId])
  const [, updateState] = React.useState();
 const forceUpdate = React.useCallback(() => updateState({}), []);
  async function settle(ev, trans_Id){
    ev.preventDefault();
    const resp =  await fetch(`http://localhost:4000/settleTransaction/${trans_Id}`, {
      method:"PATCH", 
      credentials:"include",
      headers: { "Content-Type": "application/json" },
    });
    if(resp.ok){
      alert("Settled Successfully");
      setTransId(trans_Id);
      forceUpdate();
    }
  }
  return (
    <div>
      <div>
        <div className='friend-card'>
          <p className='name'>{friend?._id}</p>
          <div>
            <div className='friend-header'>
              <p className='friend-text'><b>Interest</b></p>
              <p className='friend-text'><b>Date</b></p>
              <p className='friend-text'><b>Due Date</b></p>
              <p className='friend-text'><b>Amount</b></p>
            </div>
            {friend?.data?.length > 0 && friend.data.map((doc)=>
            <div className='friend-rows'>
              <p className='friend-text'>{doc.interest}%</p>
              <p className='friend-text'>{format(new Date(doc.date), 'dd/MM/yyyy')}</p>
              <p className='friend-text'>{format(new Date(doc.dueDate), 'dd/MM/yyyy')}</p>
              <p className='friend-text'>{doc.amount}</p>
              {
                (doc?.status === "pending"? <p><button className='settle-button' onClick={(ev)=>settle(ev, doc.trans_id)}>Settle</button></p>:<p>Settled</p>)
              }
            </div>)}
          </div>
          {/* <p className="status">{status}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Friend;