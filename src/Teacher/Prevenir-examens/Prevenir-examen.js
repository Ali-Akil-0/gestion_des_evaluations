import React from 'react';
import NavbarProf from '../Navbar/Navbar';
import './Prevenir-examen.css';
import { Link } from "react-router-dom";

function Prevenir(){
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