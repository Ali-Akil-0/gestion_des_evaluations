import React from 'react';
import './PV2.css';
import NavbarProf from '../../Navbar/Navbar';
import {BsPersonSquare} from 'react-icons/bs';
import {AiFillFileText} from 'react-icons/ai';
import {RiErrorWarningFill} from 'react-icons/ri';


function PV2(){
    return (
        <>
        <NavbarProf></NavbarProf>
        <h1 class="PV2Title">
        PV d’évaluation du Module Modélisation UML et POO au niveau de la salle 201 le 10/12/2021
        </h1>
        <table class="PVTable">
              <td>
              <div class="NbrEtudiants">
                 <h2>Nombre d’étudiants</h2>
                <div class="nmbreContainer">
                <div class="numberCircle">30</div>
                 <div class="personIcon">
                 <BsPersonSquare size={30}/>
                 </div>
                     
                </div>
                
             </div>
              </td>
              <td>
              <div class="NbrCopies">
         <h2>Nombre de copies rendues</h2>
         <div class="nmbreContainer">
                <div class="numberCircle">5</div>
                 <div class="personIcon">
                 <AiFillFileText size={30}/>
                 </div>
         </div>
         </div>
             </td>
              <td>
              <div class="Anomalies">
         <h2>Les anomalies</h2>
         
         <div class="nmbreContainer">
                <div class="numberCircle">0</div>
                 <div class="personIcon">
                 <RiErrorWarningFill size={30}/>
                 </div>
         </div>
       
        </div>
              </td>

      </table>

        </>
      );
}
export default PV2 ;