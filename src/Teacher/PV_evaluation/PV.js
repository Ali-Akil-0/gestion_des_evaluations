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
  sessionStorage.setItem('modulePV' ,[Module]);
  sessionStorage.setItem('Salle' ,[SalleEvaluation]);
  sessionStorage.setItem('JourEvaluation' ,[JourEvaluation]);
    return (
        <>

        <NavbarProf></NavbarProf>
        <form class="DemandeForm">
          <h4>Module de l'examen : 
          <span>
              <select class="ModuleConsultation" name="Module" onChange={(e)=>{
              setModule(e.target.value);
            }}>
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
              <option value="Salle 001" >Salle 001</option>
              <option value="Salle 002"  >Salle 002</option>
              <option value="Salle 003"  >Salle 003</option>
              <option value="Salle 004"  >Salle 004</option>
              <option value="Salle 005" >Salle 005</option>
              <option value="Salle 101">Salle 101</option>
              <option value="Salle 102">Salle 102</option>
              <option value="Salle 103"  >Salle 103</option>
              <option value="Salle 104"  >Salle 104</option>

            </select>
  
            </span> 
            </h4> 

           <h4> Le jour d'évaluation :
            <span>
            <input type="date" id="start" name="JourEvaluation"
            value="2022-01-10"
             min="2022-01-01" max="2023-12-31"  onClick={(e)=>{
              setJourEvaluation(e.target.value);
            }} />
            </span> 
            </h4> 
            <div onClick={submitReview4}>
           <Link to='/PV2' activeStyle>
          <button type="button" class="Envoyer3">
              Rechercher
          </button>
          </Link>
          </div>
            
            </form>
        
        
        </>
      );
}
export default PV ;