import React, { useState } from 'react';
import './Logoutpop.css';

function LogoutPopup(props) {
  return (
    <div className="logout-popup">
      <p>Are you sure you want to log out?</p>
      <button onClick={props.onConfirm}>Yes</button>
      <button onClick={props.onCancel}>No</button>
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
    // TODO: handle logout logic
    setShowLogoutPopup(false);
  }

  return (
    <div classname="button">
      {/* TODO: add your app content here */}
      <button onClick={handleLogout}>Logout</button>
      {showLogoutPopup && <LogoutPopup onConfirm={handleConfirmLogout} onCancel={handleCancelLogout} />}
    </div>
  );
}

export default Logoutpop;