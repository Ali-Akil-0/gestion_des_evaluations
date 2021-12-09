import React from 'react';
import NavbarProf from '../Navbar/Navbar';
import './Consultation-copie.css';
import {AiFillCaretDown} from "react-icons/ai";

function Consultation_de_copie(){
    return (
        <>
        <NavbarProf></NavbarProf>
        <h3 class="Comment">Les étudiants suivants demandent la consultation de leurs copies :</h3>

        <table id="TabSurveillance">
        <tr>
          <th>Module (ou element du module)</th>
          <th>Numero apogée</th>
          <th> Etudiant</th>
          <th>Message</th>
          <th class="thReponse">Réponse </th>
        </tr>
        <tr>
          <td>POO</td>
          <td>0000000</td>
          <td>Etudiant 1</td>
          <td></td>
          <td>
          <button class="Reponse">
                Refuser
            </button>
            <button class="Reponse">
                Accepter
            </button>
          </td>
        </tr>
        <tr>
          <td>Programmation Web</td>
          <td>0001000</td>
          <td>Etudiant 2</td>
          <td></td>
          <td > 
          <button class="Reponse">
                Refuser
            </button>
            <button class="Reponse">
                Accepter
            </button>
          </td>
        </tr>
       
      </table>


        </>
       
      );

}
export default Consultation_de_copie ;