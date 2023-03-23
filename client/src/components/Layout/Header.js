import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import React from 'react'
import './Header.css'
import {Navbar, Nav} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/Logo.svg'

export default function Header() {
  const {setUserInfo, userInfo} = useContext(UserContext);

  useEffect(()=>{
    fetch('http://localhost:4000/profile', {
      credentials:'include',
    }).then(response =>{
      response.json().then(userinfo=>{
        setUserInfo(userinfo);
      });
    });
  }, []);


  function logout(){
    fetch('http://localhost:4000/logout', {
      credentials:'include',
      method:'POST'
    });
    setUserInfo(null);
  }
  const username = userInfo?.username;

  return (
    <div>
        <div className="nav">
          <Link to="/" className="title"><img src={logo} alt="Pay" className='logo'/>FinSaathi</Link>
          <Navbar expand="md">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto nav2">
                {username && (
                  <>
                    <Link to="/create"> Add Transaction </Link>
                    <a onClick={logout}>Logout</a>
                  </>
                )}
                {!username && (
                  <>
                    <Link className="login" to="/login"><FontAwesomeIcon className='icons' icon={faArrowRightToBracket}/><span className='items login-word'> Login</span></Link>
                    <Link className="signUp" to="/register"><FontAwesomeIcon className='text-white icons' icon={faUserPlus}/><span className='items signUp-word'> Sign Up</span></Link>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        {/* <Navbar expand="md" className='nav'>
            <Navbar.Brand href="/"><img src={logo} alt="Pay" className='logo'/><span className='title'> App name</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link className='login' href="/login"><FontAwesomeIcon className='icons' icon={faArrowRightToBracket}/><span className='items login-word'> Login</span></Nav.Link>
                    <Nav.Link className='signUp' href="/signup"><FontAwesomeIcon className='text-white icons' icon={faUserPlus}/><span className='items signUp-word'> Sign up</span></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar> */}
    </div>
  );
}
