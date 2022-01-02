import React , {useState} from 'react';
import NavbarProf from '../../Navbar/Navbar';
import './Description-jour.css';
import {AiFillCaretDown} from "react-icons/ai";
import Axios from 'axios';
import emailjs from "emailjs-com";

function DescriptionJour(){
    
    const [NbrEtudiants,setNbrEtudiants]= useState("");
    const [NbrCopies, setNbrCopies]=useState("");
    const [Anomalies, setAnomalies]=useState("");
    const submitReview2=()=>{
      Axios.post("http://localhost:3001/DescriptionDuJour/", {
        NbrEtudiants:NbrEtudiants,
        NbrCopies:NbrCopies,
        Anomalies:Anomalies,
        }).then(()=>{
            console.log("successful insert");
        });
    };
    return (
        <>
        <NavbarProf></NavbarProf>
        
        <h3 class="Comment">Veuillez remplir les champs ci-dessous</h3>
        <div class="DemandeConsultation">
        <form class="DemandeForm2">
        <h2 class="TitleDemande">Description du jour</h2>
        <h4>Nombre d’étudiants presents :
        <span>
            <input type="text" class="SmallText"  name="NbrEtudiants" 
            onChange={(e)=>{
                setNbrEtudiants(e.target.value)
            }}
            >
            </input>
        </span> 
        </h4>
     <h4>Nombre de copies rendues :
    <span>
            <input type="text" class="SmallText" name="NbrCopies" 
            onChange={(e)=>{
              setNbrCopies(e.target.value)
            }}
            onclick={submitReview2}
            >
            </input>
        </span> 
        </h4> 
    

     <div class="Description2">
     <label for="Desc">Signaler les anomalies :</label> 
     <input id="Desc" name="Anomalies" type="text" class="Anomalies2" 
             onChange={(e)=>{
              setAnomalies(e.target.value)
            }}
             />
     </div>
     <div onClick={submitReview2}> 
    <button type="submit" class="Envoyer3">
        Envoyer
    </button>
    </div> 
     </form>
  
    </div>
        </>
      );
}
export default DescriptionJour ;