import React, { useState } from "react";
import NavbarStudent from "../Navbar/Navbar";
import "./Consultation-copie.css";
import { AiFillCaretDown } from "react-icons/ai";
import { Axios } from "axios";

function Consultation_copie() {
  const [module, setModule] = useState("");
  const [responsable, setResponsable] = useState("");
  const [Description, setDescription] = useState("");

  const submitReview2 = () => {
    Axios.post("http://localhost:3001/", {
      module: module,
      responsable: responsable,
      Description: Description,
    }).then(() => {
      console.log("successful insert");
    });
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
                <option value="Analyse">Analyse 1</option>
                <option value="Physique">Physique 1</option>
                <option value="Algebre1">Algebre 1</option>
                <option value="Mecanique">Mécanique</option>
                <option value="Electronique">Electronique</option>
                <option value="TEC">TEC</option>
                <option value="Anglais">Anglais</option>
                <option value="Espagnol">Espagnol</option>
                <option value="ProgrammationWeb">ProgrammationWeb</option>
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
                <option value="Prof1">Prof 1</option>
                <option value="Prof2">Prof 2</option>
                <option value="Prof3">Prof 1</option>
                <option value="Prof4">Prof 4</option>
                <option value="Prof5">Prof 5</option>
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
            <button class="Envoyer2 someButton" onClick={submitReview2}>
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
