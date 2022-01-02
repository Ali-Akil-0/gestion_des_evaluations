import React, { useState } from "react";
import NavbarProf from "../../Navbar/Navbar";
import "./Etape-2.css";
import { AiFillCaretDown } from "react-icons/ai";
import Axios from "axios";
function Etape2() {
  // the second
  const [Module, setModule] = useState("");
  const [Mode, setMode] = useState("");
  const [Presentiel, setPresentiel] = useState("");
  const [SalleTP, setSalleTP] = useState("");
  const submitReview = () => {
    Axios.post("http://localhost:3001/PrevenirExamen/", {
      Module: Module,
      Mode: Mode,
      Presentiel: Presentiel,
      SalleTP: SalleTP,
    }).then(() => {
      console.log("successful insert");
    });
    console.log("the module is : " + Module);
  };
  return (
    <>
      <NavbarProf></NavbarProf>
      <div class="MarginDownDev">
        <form class="DemandeFormConsultation">
          <h4 class="title2">
            Module (ou element du module) :
            <span>
              <select
                class="ModuleConsultation"
                name="Module"
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
          </h4>
          <h4>
            Le mode souhaite de l’examen :
            <span>
              <select
                class="ModuleConsultation"
                name="Mode"
                onChange={(e) => {
                  setMode(e.target.value);
                }}
              >
                <option disabled selected value="">
                  {""}
                  ---- Sélectionner ----{" "}
                </option>
                <option value="Analyse">Examen écrit</option>
                <option value="Physique">Examen (travaux pratiques)</option>
                <option value="Algebre1">Examen oral (ou présentation)</option>
                <option value="Algebre2">Projet (ou mini-projet)</option>
                <option value="Algebre3">Certification (entité externe)</option>
                <option value="Algebre3">QROC</option>


              </select>
            </span>
          </h4>
          <h4>
            Possibilité de planification d’un contrôle presentiel :
            <span>
              <select
                class="ModuleConsultation"
                name="Presentiel"
                onChange={(e) => {
                  setPresentiel(e.target.value);
                }}
              >
                <option disabled selected value="">
                  {""}
                  ---- Sélectionner ----{" "}
                </option>
                <option value="Oui">Oui</option>
                <option value="Non">Non</option>
              </select>
            </span>
          </h4>

          <h4>
            Besoin d’une salle de travaux pratique :
            <span>
              <select
                class="ModuleConsultation"
                name="SalleTP"
                onChange={(e) => {
                  setSalleTP(e.target.value);
                }}
              >
                <option disabled selected value="">
                  {""}
                  ---- Sélectionner ----{" "}
                </option>
                <option value="Oui">Oui</option>
                <option value="Non">Non</option>
              </select>
            </span>
          </h4>
          <div onClick={submitReview}>
            <button type="submit" class="Envoyer3">
              Valider
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Etape2;
