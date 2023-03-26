/* Friends.jsx */

import React, { useState, useEffect } from 'react';
import Friend from './Friend';
import './Friends.css';
import FemaleUser from '../../images/FemaleUser.svg';
import MaleUser from '../../images/MaleUser.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserGroup } from '@fortawesome/free-solid-svg-icons';


const Friends = () => {
  const [friends, setFriends] = useState([
    {
      id: 1,
      name: 'Vishal Gupta',
      picture: MaleUser,
      expenses: 500,
    },
    {
      id: 2,
      name: 'Shreya Parbat',
      picture: FemaleUser,
      expenses: 0,
    },
    {
      id: 3,
      name: 'Mohit Chauhan',
      picture: MaleUser,
      expenses: -250,
    },
    {
        id: 4,
        name: 'Shivangi Nayak',
        picture: FemaleUser,
        expenses: 750,
      },
      {
        id: 5,
        name: 'Ashneer Grover',
        picture: FemaleUser,
        expenses: -1750,
      },
  ]);

  const [friendData, setFriendData] = useState();
  useEffect(() => {
    fetch(`http://localhost:4000/getFriends`, {
      credentials: "include",
    })
      .then((resFriendData) => resFriendData.json())
      .then((friendData) => setFriendData(friendData));
  }, []);

  
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="friends">
      <div className='d-flex align-items-center'>
        <div>
          <FontAwesomeIcon className='icon-3' icon={faUserGroup}/>
        </div>
        <div className='ms-3'>
          <h3 className='main-heading'>Friends</h3>
          <p className='mb-0'>Obtain a summary of all of your transactions.</p>
        </div>
      </div>
      <br />

      <div className='peer-body'>
        <form>
          <input className='form-control' type="text" placeholder="Search" value={searchTerm} onChange={handleChange} />
        </form>
        <div className="friends-list">
        <h2>Borrowed From: </h2>
          {friendData?.borrows?.length && friendData.borrows.map((friend) => (
            <Friend friend={friend} />
          ))}

          <h2>Lended To</h2>
          {friendData?.lends?.length && friendData.lends.map((friend) => (
            <Friend friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Friends;
