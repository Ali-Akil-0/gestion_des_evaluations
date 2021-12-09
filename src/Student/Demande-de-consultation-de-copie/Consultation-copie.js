import React from "react";
import NavbarStudent from "../Navbar/Navbar";
import "./Consultation-copie.css";
import {AiFillCaretDown} from "react-icons/ai";

function Consultation_copie() {
  return (
    <>
      <NavbarStudent></NavbarStudent>
      <h3 class="Comment">Veuillez remplir les champs ci-dessous</h3>

      <div class="DemandeConsultation">
        <form class="DemandeFormConsultation">
          <h2 class="TitleDemande">Demande de consultation de copie</h2>
          <h4>Module (ou element du module) : 
              <span>

                <div class="dropdown">
                <button class="dropbtn">Modélisation UML et POO <AiFillCaretDown/> </button>
                <div class="dropdown-content">
                    <a href="#">Programmation Web</a>
                    <a href="#">Systeme d'exploitation</a>
                    <a href="#">Programmation C</a>
                </div>
                </div>

              </span> 
          </h4>
          <h4>Responsable du module : 

          <span>
                  
                  <div class="dropdown">
                  <button class="dropbtn">Zineb BESRI <AiFillCaretDown/> </button>
                  <div class="dropdown-content">
                      <a href="#">Prof 1</a>
                      <a href="#">Prof 2</a>
                      <a href="#">Prof 3</a>
                  </div>
                  </div>
  
            </span> 

           </h4> 

           <div class="Description">
           <label for="Desc">Description</label> 
           <input id="Desc" name="Desc" type="text" />
           </div>
          <button class="Envoyer">
              Envoyer
          </button>
        </form>
        <div class="NoteBien">
            <h4 class="NB">
                N.B : 
            </h4>
            <p class="NBp">
            Toute demande de consultation de copie dépassant 48 heures à partir d'affichage des résultats
            est considéré refusé
            </p>
        </div>
      </div>
    </>
  );
}
export default Consultation_copie;
