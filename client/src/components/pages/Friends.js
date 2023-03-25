/* Friends.jsx */

import React, { useState, useEffect } from 'react';
import Friend from './Friend';
import './Friends.css';
import Card from 'react-bootstrap/Card';
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
      <div>
            <h3><FontAwesomeIcon className='icons2' icon={faUserGroup}/> Friends</h3>
              <div className="friends-search">
                  <input type="text" placeholder="Search friends" value={searchTerm} onChange={handleChange} />
              </div>
              <div className="friends-list">
                  {friendData?.borrowed_from?.length && friendData.borrowed_from.map((friend) => (
                <Friend friend={friend} />
                ))}

                {friendData?.lended_to?.length && friendData.lended_to.map((friend) => (
                <Friend friend={friend} />
                ))}
              </div>
        </div>
    </div>
  );
};

export default Friends;
