// import React, { useState } from "react";
// import ReminderCalendar from "./ReminderCalendar";
// import './ReminderScreen.css'

// function ReminderScreen() {
//   const [reminder, setReminder] = useState({ title: "", date: "", time: "" });

//   function handleFormSubmit(event) {
//     event.preventDefault();
//     // Update the reminder state with the form values
//     setReminder({
//       title: event.target.title.value,
//       date: event.target.date.value,
//       time: event.target.time.value,
//     });
//   }

//   return (
    
//     <div className="reminder-screen">
//       <h2>Create a Reminder</h2>
//       <form onSubmit={handleFormSubmit}>
//         <label>
//           Title:
//           <input type="text" name="title" />
//         </label>
//         <label>
//           Date:
//           <input type="date" name="date" />
//         </label>
//         <label>
//           Time:
//           <input type="time" name="time" />
//         </label>
//         <button type="submit">Create Reminder</button>
//       </form>
//       <ReminderCalendar reminder={reminder} />
//     </div>
//   );
// }

// export default ReminderScreen;
import React, { useState } from 'react';
import './ReminderScreen.css';
import Card from 'react-bootstrap/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons';

function ReminderPopup({ onSubmit }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const reminder = { date, time, description };
    onSubmit(reminder);
  };

  return (
    <div className="popup">
      <form className='form-group' onSubmit={handleSubmit}>
        <label>Date</label>
        <input className='form-control' type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <br />

        <label>Time</label>
        <input className='form-control' type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        <br />

        <label>Description</label>
        <input className='form-control' type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <br />

        <button className='reminder-button' type="submit">Set Reminder</button>
      </form>
    </div>
  );
}

function ReminderScreen() {
  const [reminders, setReminders] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleReminderSubmit = (reminder) => {
    setReminders([...reminders, reminder]);
    setShowPopup(false);
  };

  return (
    <div className='reminder-screen'>
      <div className='d-flex align-items-center'>
        <div>
          <FontAwesomeIcon className='icon-3' icon={faCalendarDays}/>
        </div>
        <div className='ms-3'>
          <h3 className='main-heading'>Reminders</h3>
        </div>
      </div>
      <br />

      <div className='peer-body'>
        <div>
          {reminders.map((reminder, index) => (
          <div className='reminder-card' key={index}>
            <div>
              <p className='mb-0 reminder-desc'>{reminder.description}</p>
              <p className='reminder-date'>{reminder.date}</p>
            </div>
            <div>
              <p className='reminder-amount'>{reminder.time}</p>
            </div>
          </div>
          ))}
        </div>
        <button className='calculate-button' onClick={() => setShowPopup(true)}>Add Reminder</button>
        {showPopup && <ReminderPopup onSubmit={handleReminderSubmit} />}
      </div>
    </div>
  );
}

export default ReminderScreen;



{/* <h1 className='h1'>Reminders</h1>
      <ul>
        {reminders.map((reminder, index) => (
          <li key={index}>{reminder.description} - {reminder.date} at {reminder.time}</li>
        ))}
      </ul>
      <button onClick={() => setShowPopup(true)}>Add Reminder</button>
      {showPopup && <ReminderPopup onSubmit={handleReminderSubmit} />} */}