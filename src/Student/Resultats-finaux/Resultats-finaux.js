import React , {useEffect, useState} from "react";
import NavbarStudent from "../Navbar/Navbar";
import './Resultats-finaux.css';
import QRCode from "qrcode.react";
import {AiOutlineDownload} from "react-icons/ai";
import Axios from "axios";

function Resultats_finaux() {

  const [resultModules1 , setResultModules1] =useState("") ; 
  const [resultModules2 , setResultModules2] =useState("") ; 
  const [resultModules3 , setResultModules3] =useState("") ; 
  const [resultModules4 , setResultModules4] =useState("") ; 
  const [resultModules5 , setResultModules5] =useState("") ; 
  var test = sessionStorage.getItem('apoge');
  console.log("Testing attention please : " + test);

 
  console.log("after");
  useEffect(() => {
    Axios.post("http://localhost:3001/Resultatfinaux/", {
      test:test,
    });
    Axios.get("http://localhost:3001/Resultatfinaux/", { params: { answer: test } }).then(response => {
      console.log("Ontop");
      console.log(response.data[0]);
      console.log("Ontop");
      setResultModules1(response.data[0]);
      setResultModules2(response.data[1]);
      setResultModules3(response.data[2]);
      // setResultModules4(response.data[3]);
      // setResultModules5(response.data[4]);
    })
  },[])
    console.log("For the modules one ");
    console.log(resultModules1.Module);
    console.log("For the modules one ");

  // The main

  return (
    <>
      <NavbarStudent></NavbarStudent>
      <table id="TabResultat">
        <tr>
          <th>Intitulé du Module</th>
          <th>Note</th>
          <th>Résultat</th>
        </tr>
        <tr>
          <td>{resultModules1.Module}</td>
          <td>{resultModules1.Note}</td>
          <td>{resultModules1.Resultat}</td>
        </tr>
        <tr>
          <td>{resultModules2.Module}</td>
          <td>{resultModules2.Note}</td>
          <td>{resultModules2.Resultat}</td>
        </tr>
        <tr>
          <td>{resultModules3.Module}</td>
          <td>{resultModules3.Note}</td>
          <td>{resultModules3.Resultat}</td>
        </tr>
        {/* <tr> */}
          {/* <td>{resultModules4.Module}</td>
          <td>{resultModules4.Note}</td>
          <td>{resultModules4.Resultat}</td>
        </tr> 
         <tr>
          <td>{resultModules5.Module}</td>
          <td>{resultModules5.Note}</td>
          <td>{resultModules5.Resultat}</td>
        </tr>
       */}
      </table>
      <div class="NoteBien NoteBien3">
          <h4 class="NB NB3">N.B :</h4>
          <p class="NBp NBp3">
          Ces notes sont établies après délibérations et ne sont pas susceptibles d’être modifiés.
          </p>
        </div>

    </>
  );
}
export default Resultats_finaux;
