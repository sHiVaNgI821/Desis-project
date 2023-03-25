import React, { useState } from 'react';
import './Logoutpop.css';

function LogoutPopup(props) {
  return (
    <div className="logout-popup">
      <p className='confirmation'>Are you sure you want to log out?</p>
      <button className='cancel-button' onClick={props.onCancel}>No</button>
      <button className='save-button' onClick={props.onConfirm}>Yes</button>
    </div>
  );
}

function Logoutpop() {
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogout = () => {
    setShowLogoutPopup(true);
  }

  const handleCancelLogout = () => {
    setShowLogoutPopup(false);
  }

  const handleConfirmLogout = () => {
    fetch('http://localhost:4000/logout', {
      credentials:'include',
      method:'POST'
    });
    // setUserInfo(null);
    setShowLogoutPopup(false);
  }

  return (
    <div className="button">
      <button onClick={handleLogout}>Logout</button>
      {showLogoutPopup && <LogoutPopup onConfirm={handleConfirmLogout} onCancel={handleCancelLogout} />}
    </div>
  );
}

export default Logoutpop;