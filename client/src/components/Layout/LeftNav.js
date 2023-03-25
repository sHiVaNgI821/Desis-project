import React from 'react'
import './LeftNav.css'
// import {Navbar, Nav} from 'react-bootstrap';
import {Navbar, Nav} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { UserContext } from "../../contexts/UserContext";
import {faChartBar, faBell, faGear, faCalendarDays, faIndianRupee, faMoneyBillTransfer, faRightFromBracket, faUserGroup, faHandHoldingUsd, faCalculator } from '@fortawesome/free-solid-svg-icons';
import dp from '../../images/ProfilePicture.svg'
import { useEffect, useContext, useState } from "react";
import { Navigate, Link } from "react-router-dom";

function LeftNav() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  // setUserInfo(userInfo);
  const name = userInfo?.username;
  setUserInfo({username: name});
  if(true){
    return (
      <div className='leftnav'>
          <Navbar expand="md" className='nav d-md-block sidebar'>
            <br />
              <Navbar.Brand className='p-3 m-0' href="/"><img src={dp} alt="Pay" className='logo2'/><span className='title2 ms-1'> Hello, {name}</span></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="d-md-block">
                      <Link disabled className='d-block heading text-white mt-4 mb-0 text-decoration-none' href="#">ADMINISTRATION</Link>
                      <Link className='d-block items mt-0 pt-0 text-decoration-none' to ="/homepage"><FontAwesomeIcon className='icons2 text-white' icon={faChartBar}/><span className='items2'> Dashboard</span></Link>
                      <Link className='d-block items mt-0 pt-0 text-decoration-none' to="/peer"><FontAwesomeIcon className='icons2 text-white' icon={faHandHoldingUsd}/><span className='items2'> Peer Lending</span></Link>
                      <Link className='d-block items mt-0 pt-0 text-decoration-none' to ="/savings"><FontAwesomeIcon className='icons2 text-white' icon={faCalculator}/><span className='items2'> Savings Calculator</span></Link>
                      <Link disabled className='d-block heading text-white mb-0 text-decoration-none' to="#">MANAGEMENT</Link>
                      <Link className='d-block items mt-0 pt-0 text-decoration-none' to="/create"><FontAwesomeIcon className='icons2 text-white' style={{width:'22.5px'}} icon={faIndianRupee}/><span className='items2'> Add expenses</span></Link>
                      <Link className='d-block items mt-0 pt-0 text-decoration-none' to="/transaction"><FontAwesomeIcon className='icons2 text-white' icon={faMoneyBillTransfer}/><span className='items2'> Transactions</span></Link>
                      <Link className='d-block items mt-0 pt-0 text-decoration-none' to="/friends"><FontAwesomeIcon className='icons2 text-white' icon={faUserGroup}/><span className='items2'> Friends</span></Link>
                      <Link disabled className='d-block heading text-white mb-0 text-decoration-none' to="#">OTHER</Link>
                      <Link className='d-block items mt-0 pt-0 text-decoration-none' to="/reminder"><FontAwesomeIcon className='icons2 text-white' icon={faCalendarDays}/><span className='items2'> Reminders</span></Link>
                      <Link className='d-block items mt-0 pt-0 text-decoration-none' to="/notification"><FontAwesomeIcon className='icons2 text-white' icon={faBell}/><span className='items2'> Notifications</span></Link>
                      <Link className='d-block items mt-0 pt-0 text-decoration-none' to="/settings"><FontAwesomeIcon className='icons2 text-white' icon={faGear}/><span className='items2'> Settings</span></Link>
                      <Link className='d-block items mt-0 pt-0 text-decoration-none' to="/logout"><FontAwesomeIcon className='icons2 text-white' icon={faRightFromBracket}/><span className='items2'> Logout</span></Link>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
      </div>
    );
  }
  
  return (
    <>
      <Navigate to={"/homepage"} />
    </>
  );


}

export default LeftNav