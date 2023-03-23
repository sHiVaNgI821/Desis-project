/* Friends.jsx */

import React, { useState } from 'react';
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
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="friends">
      
      <Card className='d-inline' style={{ width: '30rem', height: '41rem', paddingTop: '20px'}}>
            <span className="square bg-primary rounded-9"></span>
            <Card.Body>
            <Card.Title style={{ width: '25rem', height: '0.5rem', fontSize:'26px'}}><FontAwesomeIcon className='icons2' icon={faUserGroup}style={{color:'black'}}/> Friends</Card.Title>
            <Card.Text style={{width: '25rem', height: '5rem', padding: '30px'}}>
            <div className="friends-search">
                <input
                type="text"
                placeholder="Search friends"
                value={searchTerm}
                onChange={handleChange}
                />
            </div>
            <div className="friends-list">
                {filteredFriends.map((friend) => (
                <Friend key={friend.id} friend={friend} />
                ))}
            </div>
            </Card.Text>
            </Card.Body>
        </Card>
      
    </div>
  );
};

export default Friends;
