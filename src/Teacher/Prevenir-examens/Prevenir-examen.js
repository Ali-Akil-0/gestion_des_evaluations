import React from 'react';
import NavbarProf from '../Navbar/Navbar';
import './Prevenir-examen.css';
import { Link } from "react-router-dom";

function Prevenir(){
  var test = sessionStorage.getItem('module2');
  console.log("Testing attention please : "+test);
  console.log("ABove is the test check it out");
    return (
        <>
        <NavbarProf></NavbarProf>
        <div class="PrevenirButtons">
         <Link to="/Etape2">
         <button class="name_noselect" id="ActiveSession">Session Normale (1er contrôle)</button>
         </Link>
        
        <button class="name_noselect" disabled>Session Normale (2nd contrôle)</button>
        <button class="name_noselect" disabled>Session Rattrapage</button>
          
        </div>
        </>
        
      );

}
export default Prevenir ;