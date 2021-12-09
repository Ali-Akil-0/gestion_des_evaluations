import React from 'react';
import NavbarProf from '../../Navbar/Navbar';
import './Description-jour.css';
import {AiFillCaretDown} from "react-icons/ai";

function DescriptionJour(){
    return (
        <>
        <NavbarProf></NavbarProf>
        
        <h3 class="Comment">Veuillez remplir les champs ci-dessous</h3>

<div class="DemandeConsultation">
  <form class="DemandeForm2">
    <h2 class="TitleDemande">Demande de consultation de copie</h2>
    <h4>Nombre d’étudiants presents
        <span>
            <input type="text" class="SmallText">
            </input>

        </span> 
    </h4>
    <h4>Nombre de copies recues
    <span>
            <input type="text" class="SmallText">
            </input>
        </span> 

     </h4> 

     <div class="Description">
     <label for="Desc">Signaler les anomalies :</label> 
     <input id="Desc" name="Desc" type="text" class="Anomalies" />
     </div>
    <button class="Envoyer">
        Envoyer
    </button>
    </form>
    </div>


        </>
      );
}
export default DescriptionJour ;