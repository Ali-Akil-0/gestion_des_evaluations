import React ,{useEffect , useState} from "react";
import NavbarStudent from "../Navbar/Navbar";
import "./Profil.css";
import Profile from "./Placeholder.jpg";
import  Axios from "axios";
import image from "./back.jpg";

function Profil() {
  const [resultModules1 , setResultModules1] =useState("") ; 
  const [resultModules2 , setResultModules2] =useState("") ; 
  const [resultModules3 , setResultModules3] =useState("") ; 
  const [resultModules4 , setResultModules4] =useState("") ; 
  const [resultModules5 , setResultModules5] =useState("") ; 
  const [resultEmail , setResultEmail] =useState("") ; 

  var test = sessionStorage.getItem('apoge');
  console.log("Testing attention please : " + test);
  Axios.post("http://localhost:3001/Profil/", {
    test:test,
  });
  console.log("after");

  // The use effect
    Axios.get("http://localhost:3001/Profil/", { params: { answer: test } }).then(response => {
      console.log("Ontop");
      console.log(response.data[0]);
      console.log("Ontop");
      setResultModules1(response.data[0]);
      setResultModules2(response.data[1]);
      setResultModules3(response.data[2]);
      setResultModules4(response.data[3]);
      setResultModules5(response.data[4]);
    },[])
    Axios.get("http://localhost:3001/Profil2/" ,  { params: { answer: test } }).then(response => {
      console.log("Ontop");
      console.log(response.data);
      console.log("The length is : "+response.length);
          setResultEmail(response.data[0])
      console.log("The data above : ");
    
    },[])
    console.log("For the modules one ");
    console.log(resultModules1.EmailInstitutionnel);
    console.log("For the modules one ");

  // The main 

  return (
    <>
      <NavbarStudent></NavbarStudent>
      <img class="profile-img" src={Profile} alt="ProfileImage" />
      <div class="NomProfile">
        <h1>{resultEmail.Nom} {resultEmail.Prenom} </h1>
        <hr />
      </div>
      <table class="ProfilTable">
        <tr>
          <td>
            <div class="InfoDetail DivColor1">
              <h2>Informations détailées</h2>
              <h3> Adresse de courriel</h3>
              <p>{resultEmail.EmailInstitutionnel}</p>
              <h3> Pays</h3>
              <p>Maroc</p>
              <h3> Ville</h3>
              <p>Tétouan</p>
            </div>
          </td>
          <td>
            <div class="InfoDetail DivColor2">
              <h2>Informations détaillées des cours</h2>
              <h3> Profils de cours</h3>
              <p>
                {resultModules1.Module} <br />
                {resultModules2.Module} <br />
                {resultModules3.Module}<br />
                {resultModules4.Module}<br />
                {resultModules5.Module} <br />

              </p>
            </div>
          </td>
          <td>
            <div class="InfoDetail DivColor3">
              <h2>Informations de connexion</h2>
              <h3> Premier accès au site</h3>
              <p>Vendredi 10 Décembre 2021, 00:03 </p>
              <h3> Dernier accès au site</h3>
              <p>Mercredi 04 Janvier 2022, 09:00</p>
            </div>
          </td>
        </tr>
      </table>
    </>
  );
}
export default Profil;
