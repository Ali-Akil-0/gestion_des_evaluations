import React , {useState, useEffect} from 'react';
import './PV.css';
import {AiFillCaretDown} from "react-icons/ai";
import NavbarProf from '../Navbar/Navbar';
import { Link } from "react-router-dom";

import Axios from 'axios';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

function PV(){
  const [Module,setModule]= useState("");
  const [SalleEvaluation, setSalleEvaluation]=useState("");
  const [JourEvaluation, setJourEvaluation]=useState("");
  const submitReview4= () =>{
      Axios.post("http://localhost:3001/PvEvaluation/", {
        Module:Module,
        SalleEvaluation:SalleEvaluation,
        JourEvaluation:JourEvaluation,
      }).then(()=>{
          console.log("successful insert");
      });
  };
    return (
        <>

        <NavbarProf></NavbarProf>
        <form class="DemandeForm">
          <h4>Module (ou element du module) : 
          <span>
              <select class="ModuleConsultation" name="Module" onChange={(e)=>{
              setModule(e.target.value);
            }}>
              <option disabled selected value="">
                {""}
                ---- Sélectionner ----{" "}
              </option>
              <option value="Analyse" >Analyse 1</option>
              <option value="Physique"  >Physique 1</option>
              <option value="Algebre1"  >Algebre 1</option>
              <option value="Mecanique"  >Mécanique</option>
              <option value="Electronique" >Electronique</option>
              <option value="TEC">TEC</option>
              <option value="Anglais">Anglais</option>
              <option value="Espagnol"  >Espagnol</option>
              <option value="ProgrammationWeb"  >ProgrammationWeb</option>

            </select>
            </span>
            </h4>


        
          <h4> La salle d'évaluation :

          <span>
          <select class="ModuleConsultation" name="SalleEvaluation" onChange={(e)=>{
              setSalleEvaluation(e.target.value);
            }}>
              <option disabled selected value="">
                {""}
                ---- Sélectionner ----{" "}
              </option>
              <option value="Analyse" >Salle 001</option>
              <option value="Physique"  >Salle 002</option>
              <option value="Algebre1"  >Salle 003</option>
              <option value="Mecanique"  >Salle 004</option>
              <option value="Electronique" >Salle 005</option>
              <option value="TEC">Salle 101</option>
              <option value="Anglais">Salle 102</option>
              <option value="Espagnol"  >Salle 103</option>
              <option value="ProgrammationWeb"  >Salle 104</option>

            </select>
  
            </span> 
            </h4> 

           <h4> Le jour d'évaluation :
            <span>
            <input type="date" id="start" name="JourEvaluation"
            value="2018-07-22"
             min="2018-01-01" max="2018-12-31"  onChange={(e)=>{
              setJourEvaluation(e.target.value);
            }} />
            </span> 
            </h4> 
            <div onClick={submitReview4}>
           <Link to='/PV2' activeStyle>
          <button type="submit" class="Envoyer3">
              Rechercher
          </button>
          </Link>
          </div>
            
            </form>
        
        
        </>
      );
}
export default PV ;