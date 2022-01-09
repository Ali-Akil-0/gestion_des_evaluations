import React, { useState } from "react";
import NavbarProf from "../../Navbar/Navbar";
import "./Etape-2.css";
import { AiFillCaretDown } from "react-icons/ai";
import Axios from "axios";
function Etape2() {
  const The_module = sessionStorage.getItem('module2');
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
                onClick={(e) => {
                  setModule(e.target.value);
                }}
              >
                <option value={The_module}>{The_module}</option>
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
                <option value="Examen_écrit">Examen écrit</option>
                <option value="Examen_TP">Examen (travaux pratiques)</option>
                <option value="Examen_oral">Examen oral (ou présentation)</option>
                <option value="Projet">Projet (ou mini-projet)</option>
                <option value="Certification">Certification (entité externe)</option>
                <option value="QROC">QROC</option>


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
