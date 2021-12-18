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
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
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
            <div class="dropdown3">
                <button class="dropbtn3"><AiFillBell size={20} /></button>
                <div class="dropdown-content3">
                    <p>
                    -Vous êtes convoqué au conseil de discipline
                    <br/>
                    -Votre convocation au examens est disponible
                    </p>
                </div>
                </div>
        <div class="dropdown2">
                <button class="dropbtn2"><FiSmile/></button>
                <div class="dropdown-content2">
                    <NavLink to='/Profil' class="navlink">
                    <a href="#">Profile</a>
                    </NavLink>
                    <NavLink to='/Student' activeStyle>
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
export default NavbarStudent ;