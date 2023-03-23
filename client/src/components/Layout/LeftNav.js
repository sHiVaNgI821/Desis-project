import React from 'react'
import './LeftNav.css'
// import {Navbar, Nav} from 'react-bootstrap';
import {Navbar, Nav} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { UserContext } from "../../contexts/UserContext";
import {faChartBar, faBell, faGear, faCalendarDays, faIndianRupee, faMoneyBillTransfer, faRightFromBracket, faUserGroup, faHandHoldingUsd, faCalculator } from '@fortawesome/free-solid-svg-icons';
import dp from '../../images/ProfilePicture.svg'
import { useEffect, useContext, useState } from "react";
import { Navigate } from "react-router-dom";

function LeftNav() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  // setUserInfo(userInfo);
  const name = userInfo?.username;
  setUserInfo({username: name});
  if(name){
    return (
      <div className='leftnav'>
          <Navbar expand="md" className='nav d-md-block sidebar'>
            <br />
              <Navbar.Brand className='p-3 m-0' href="/"><img src={dp} alt="Pay" className='logo2'/><span className='title2 ms-1'> Hello, {name}</span></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="d-md-block">
                      <Nav.Link disabled className='heading text-white mt-4 mb-0' href="#">ADMINISTRATION</Nav.Link>
                      <Nav.Link className='items mt-0 pt-0' href="/homepage"><FontAwesomeIcon className='icons2 text-white' icon={faChartBar}/><span className='items2'> Dashboard</span></Nav.Link>
                      <Nav.Link className='items mt-0 pt-0' href="/peer"><FontAwesomeIcon className='icons2 text-white' icon={faHandHoldingUsd}/><span className='items2'> Peer Lending</span></Nav.Link>
                      <Nav.Link className='items mt-0 pt-0' href="/savings"><FontAwesomeIcon className='icons2 text-white' icon={faCalculator}/><span className='items2'> Savings Calculator</span></Nav.Link>
                      <Nav.Link disabled className='heading text-white mb-0' href="#">MANAGEMENT</Nav.Link>
                      <Nav.Link className='items mt-0 pt-0' href="/create"><FontAwesomeIcon className='icons2 text-white' style={{width:'22.5px'}} icon={faIndianRupee}/><span className='items2'> Add expenses</span></Nav.Link>
                      <Nav.Link className='items mt-0 pt-0' href="/transaction"><FontAwesomeIcon className='icons2 text-white' icon={faMoneyBillTransfer}/><span className='items2'> Transactions</span></Nav.Link>
                      <Nav.Link className='items mt-0 pt-0' href="/friends"><FontAwesomeIcon className='icons2 text-white' icon={faUserGroup}/><span className='items2'> Friends</span></Nav.Link>
                      <Nav.Link disabled className='heading text-white mb-0' href="#">OTHER</Nav.Link>
                      <Nav.Link className='items mt-0 pt-0' href="/reminder"><FontAwesomeIcon className='icons2 text-white' icon={faCalendarDays}/><span className='items2'> Reminders</span></Nav.Link>
                      <Nav.Link className='items mt-0 pt-0' href="/notification"><FontAwesomeIcon className='icons2 text-white' icon={faBell}/><span className='items2'> Notifications</span></Nav.Link>
                      <Nav.Link className='items mt-0 pt-0' href="/settings"><FontAwesomeIcon className='icons2 text-white' icon={faGear}/><span className='items2'> Settings</span></Nav.Link>
                      <Nav.Link className='items mt-0 pt-0' href="/logout"><FontAwesomeIcon className='icons2 text-white' icon={faRightFromBracket}/><span className='items2'> Logout</span></Nav.Link>
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
{/* <Nav.Link className='heading pb-0 mb-2' href="#">OTHER</Nav.Link> */}