import React from 'react';
import './PV.css';
import {AiFillCaretDown} from "react-icons/ai";
import NavbarProf from '../Navbar/Navbar';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

function PV(){
    return (
        <>
        <NavbarProf></NavbarProf>
        <form class="DemandeForm">
          <h4>Module (ou element du module) : 
              <span>

                <div class="dropdown">
                <button class="dropbtn" >Modélisation UML et POO <AiFillCaretDown/> </button>
                <div class="dropdown-content">
                    <a href="#">Programmation Web</a>
                    <a href="#">Systeme d'exploitation</a>
                    <a href="#">Programmation C</a>
                </div>
                </div>

              </span> 
          </h4>
          <h4> La salle d'évaluation :

          <span>
                  
                  <div class="dropdown">
                  <button class="dropbtn">Salle 201 <AiFillCaretDown/> </button>
                  <div class="dropdown-content">
                      <a href="#">Salle 005</a>
                      <a href="#">Salle 003</a>
                      <a href="#">Salle TP6</a>
                  </div>
                  </div>
  
            </span> 

           </h4> 

           <h4> Le jour d'évaluation :
            <span>
            <input type="date" id="start" name="trip-start"
            value="2018-07-22"
             min="2018-01-01" max="2018-12-31"/>
            </span> 

            </h4> 
          
          <NavLink to='/PV2' activeStyle>
          <button class="Envoyer">
              Rechercher
          </button>
          </NavLink>
          
        </form>
        </>
      );
}
export default PV ;