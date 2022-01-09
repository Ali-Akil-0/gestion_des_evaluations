import React from 'react';
import './PV2.css';
import NavbarProf from '../../Navbar/Navbar';
import {BsPersonSquare} from 'react-icons/bs';
import {AiFillFileText} from 'react-icons/ai';
import {RiErrorWarningFill} from 'react-icons/ri';


function PV2(){
  const modulePV =  sessionStorage.getItem('modulePV');
  const Salle = sessionStorage.getItem('Salle');
  const JourEvaluation = sessionStorage.getItem('JourEvaluation');
  const NbrEtudiants = sessionStorage.getItem('NbrEtudiants');
  const NbrCopies = sessionStorage.getItem('NbrCopies');
  const resultModules1 = sessionStorage.getItem('resultModules1');
  const date = sessionStorage.getItem('resultModules1.Date');



    return (
        <>
        <NavbarProf></NavbarProf>
        <h1 class="PV2Title">
        PV d’évaluation du Module {modulePV}  au niveau de la {Salle}.
        </h1>
        <table class="PVTable">
              <td>
              <div class="NbrEtudiants">
                 <h2>Nombre d’étudiants</h2>
                <div class="nmbreContainer">
                <div class="numberCircle1">{NbrEtudiants}</div>
                 <div class="personIcon1">
                 <BsPersonSquare size={30}/>
                 </div>
                </div>
                
             </div>
              </td>
              <td>
              <div class="NbrCopies">
         <h2>Nombre de copies rendues</h2>
         <div class="nmbreContainer">
                <div class="numberCircle">{NbrCopies}</div>
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
                <div class="numberCircle1">0</div>
                 <div class="personIcon1">
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