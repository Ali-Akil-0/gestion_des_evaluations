import React, { useState } from "react";
import NavbarStudent from "../Navbar/Navbar";
import "./Consultation-copie.css";
import { AiFillCaretDown } from "react-icons/ai";
import  Axios  from "axios";

function Consultation_copie() {
  const [module, setModule] = useState("");
  const [responsable, setResponsable] = useState("");
  const [Description, setDescription] = useState("");
  console.log("here");

  const submitReview2 = () => {
    Axios.post("http://localhost:3001/Convocation4", {
      module: module,
      responsable: responsable,
      Description: Description,
    },[]).then(() => {
      console.log("successful insert");
    },[]);
    console.log("Done");
  };
  return (
    <>
      <NavbarStudent></NavbarStudent>
      <h3 class="Comment">Veuillez remplir les champs ci-dessous</h3>

      <div class="DemandeConsultation something">
        <form class="DemandeFormConsultation DemandeFormConsultation3">
          <h2 class="TitleDemande">Demande de consultation de copie</h2>
          <div class="modulemove">
          <h4 class="modulelabel">
            Module (ou element du module) :
            
            <span>
              <span>
              <select
                class="ModuleConsultation testing3"
                name="module"
                onChange={(e) => {
                  setModule(e.target.value);
                }}
              >
                <option disabled selected value="">
                  {""}
                  ---- Sélectionner ----{" "}
                </option>
                <option value="GL">GL</option>
                <option value="RI2">RI2</option>
                <option value="UML">Modélisation et POO</option>
                <option value="Java">Java</option>
                <option value="PLSQL">PL/SQL</option>
                <option value="AdministrationBD<">Administration BD</option>
                <option value="TI">Traitement d'image</option>
                <option value="TEC">TEC</option>
                <option value="Anglais">Anglais</option>
                <option value="Espagnol">Espagnol</option>
              </select>
              </span>
            </span>
            </h4>
            </div>
          
          <h4>
            Responsable du module :
           
            <span>
              <select
                class="ModuleConsultation"
                name="responsable"
                onChange={(e) => {
                  setResponsable(e.target.value);
                }}
              >
                <option disabled selected value="">
                  {""}
                  ---- Sélectionner ----{" "}
                </option>
                <option value="Prof.CHKOURI">Prof CHKOURI</option>
                <option value="Prof.ABTOY">Prof ABTOY</option>
                <option value="Prof.BESRI">Prof BESRI</option>
                <option value="Prof.BENTAJER">Prof BENTAJER</option>
                <option value="Prof.MEDOURI">Prof MEDOURI</option>
                <option value="Prof.NEJJARI">Prof NEJJARI</option>
                <option value="Prof.MALLA_HUSSEIN">Prof MALLA HUSSEIN</option>


              </select>
            </span>
            </h4>
         

          <div class="Description">
            <label for="Desc" class="textDesciption">Message</label>
            <input
              id="Desc"
              name="description"
              type="text"
              class="description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div onClick={submitReview2} class="EnvoyerButton">
            <button type="button" class="Envoyer2 someButton">
              Envoyer
            </button>
          </div>
        </form>
        <div class="NoteBien NoteBien3">
          <h4 class="NB NB3">N.B :</h4>
          <p class="NBp NBp3">
            Toute demande de consultation de copie dépassant 48 heures à partir
            d'affichage des résultats est considéré refusé
          </p>
        </div>
      </div>
    </>
  );
}
export default Consultation_copie;
