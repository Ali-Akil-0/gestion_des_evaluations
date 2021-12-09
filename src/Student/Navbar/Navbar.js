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


function NavbarStudent(){
    return (
        <>
        <Nav>
          <NavLink to='/'>
            <img id="Image" src={require('./Logo_ENSA.png')} alt='logo' />
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to='/Examens' activeStyle>
              Examens
            </NavLink>
            <NavLink to='/ResultatsFinaux' activeStyle >
              Résultats finaux
            </NavLink>
            <NavLink to='/ConsultationDeCopie' activeStyle>
              Demande de consultation de copie
            </NavLink>
            <NavLink to='#' activeStyle className="Bell">
              <AiFillBell/>
            </NavLink>
            
            <NavLink to='/Student' activeStyle>
              <FiSmile/>
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
        </Nav>
      </>
      );
}
export default NavbarStudent ;