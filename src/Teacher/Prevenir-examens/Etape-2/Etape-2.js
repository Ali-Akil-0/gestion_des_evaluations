import React from 'react';
import NavbarProf from '../../Navbar/Navbar';
import './Etape-2.css';
import {AiFillCaretDown} from "react-icons/ai";

function Etape2(){
    return (
        <>
        <NavbarProf></NavbarProf>
        <form class="DemandeForm">
          <h4>Module (ou element du module) : 
              <span>

                <div class="dropdown">
                <button class="dropbtn"> <AiFillCaretDown/> </button>
                <div class="dropdown-content">
                    <a href="#">Programmation Web</a>
                    <a href="#">Systeme d'exploitation</a>
                    <a href="#">Programmation C</a>
                </div>
                </div>

              </span> 
          </h4>
          <h4>Le mode souhaite de l’examen

          <span>
                  
                  <div class="dropdown">
                  <button class="dropbtn"> <AiFillCaretDown/> </button>
                  <div class="dropdown-content">
                      <a href="#">Présentiel</a>
                      <a href="#">A distance</a>
                      <a href="#">Projet</a>
                  </div>
                  </div>
  
            </span> 

           </h4> 

           <h4>Possibilité de planification d’un contrôle presentielle

            <span>
            <button class="Oui">
              Oui
          </button>
          <button class="Non">
              Non
          </button>
            </span> 

            </h4> 
            <h4>Besoin d’une salle de travaux pratique

            <span>
            <button class="Oui">
              Oui
          </button>
          <button class="Non">
              Non
          </button>
            </span> 

            </h4> 

          <button class="Envoyer">
              Valider
          </button>
        </form>
        </>
      );
}
export default Etape2 ;