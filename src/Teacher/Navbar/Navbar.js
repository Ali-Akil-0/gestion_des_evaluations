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
            <NavLink to='/PV' activeStyle>
                PV d'évaluation
            </NavLink>
            <div class="dropdown3">
                <button class="dropbtn3"><AiFillBell size={20} /></button>
                <div class="dropdown-content3">
                    <p>
                    - Le dernier délai de prevention des examens est le Date/Horaire
                    <br/>
                    - Votre convocation de surveillance est disponible
                    </p>
                </div>
                </div>
        <div class="dropdown2">
                <button class="dropbtn2"><FiSmile/></button>
                <div class="dropdown-content2">
                   <NavLink to='/Teacher' activeStyle>
                    <a href="#">Se déconnecter</a>
                    </NavLink>
                </div>
                </div>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
        </Nav>
      </>
      );
}
export default NavbarProf ;