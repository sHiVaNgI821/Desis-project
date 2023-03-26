import React, { useState } from "react";
import "./NotificationsList.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell} from '@fortawesome/free-solid-svg-icons';

function NotificationsList() {
  const [notifications, setNotifications] = useState([
    {
      date: "2023-03-20",
      type: "upcoming",
      message: "You owe A",
      amount: "1000",
      description: " for medicines",
    },
    {
      date: "2023-03-15",
      type: "done",
      message: "You paid B",
      amount: "500",
      description: "  for Canteen food",
    },
    {
      date: "2023-03-10",
      type: "done",
      message: "C paid you",
      amount: "750",
      description: "  for Stationary",
    },
    {
        date: "2023-03-24",
        type: "done",
        message: "E paid you",
        amount: "550",
        description: "  for party",
      },
      // {
      //   date: "2023-03-10",
      //   type: "done",
      //   message: "You paid Administration",
      //   amount: "1500",
      //   description: "  for Competition",
      // },
      {
        date: "2023-03-10",
        type: "upcoming",
        message: "C paid you",
        amount: "800",
        description: "  for personal",
      },
      // {
      //   date: "2023-03-10",
      //   type: "upcoming",
      //   message: "You owe C",
      //   amount: "200",
      //   description: "  for Dominos",
      // },
      // {
      //   date: "2023-03-18",
      //   type: "done",
      //   message: "You paid A",
      //   amount: "100",
      //   description: "  for Salon",
      // },
  ]);

  return (
    <div className="notifications-card">
      <div className='d-flex align-items-center'>
        <div>
          <FontAwesomeIcon className='icon-3' icon={faBell}/>
        </div>
        <div className='ms-3'>
          <h3 className='main-heading'>Notifications</h3>
        </div>
      </div>
      <br />
      
      <div className="notif-body">
        {notifications.map((notification, index) => (
          <div key={index} className='notification'>
            <div>
              <div>
                <p className="mb-0 transaction-recipient">{notification.message}</p>
                <p className="transaction-date">{notification.date}</p>
              </div>
            </div>
            <div>
                <p className="transaction-amount">{`Rs. ${notification.amount} ${notification.description}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationsList;