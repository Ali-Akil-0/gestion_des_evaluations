import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';
import './Navbar.css';
import {AiFillBell} from "react-icons/ai";
import {FiSmile} from "react-icons/fi";


function NavbarProf(){
    return (
        <>
        <Nav>
          <NavLink to='/'>
            <img id="Image" src={require('./Logo_ENSA.png')} alt='logo' />
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to='/Prevenir' activeStyle>
              Prévenir les examens
            </NavLink>
            <NavLink to='/Surveillance' activeStyle >
              Surveillance
            </NavLink>
            <NavLink to='/DemandeCopie' activeStyle>
              Demande de consultation de copie
            </NavLink>
            <NavLink to='#' activeStyle className="Bell">
              <AiFillBell/>
            </NavLink>
            
            <NavLink to='/Teacher' activeStyle>
              <FiSmile/>
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
        </Nav>
      </>
      );
}
export default NavbarProf ;