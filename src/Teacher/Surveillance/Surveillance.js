import React , {useEffect, useState} from "react";
import NavbarProf from '../Navbar/Navbar';
import './Surveillance.css' ; 
import { Link } from "react-router-dom";
import Axios from "axios";

function Surveillance(){
  const [resultModules1 , setResultModules1] =useState("") ; 
  const [resultModules2 , setResultModules2] =useState("") ; 

  var test = sessionStorage.getItem('email');
  console.log("Testing attention please : "+test);
  console.log("ABove is the test check it out");
  Axios.post("http://localhost:3001/Surveillance", {
    test:test ,
  })
  Axios.get("http://localhost:3001/Surveillance", { params: { answer: test } }).then(response => {
    console.log("Ontop");
    console.log(response.data[1]);
    console.log("Ontop");
    setResultModules1(response.data[0]);
    setResultModules2(response.data[1]);
    // setResultModules4(response.data[3]);
    // setResultModules5(response.data[4]);
  })
   sessionStorage.setItem('resultModules1' ,[resultModules1]);
   sessionStorage.setItem('resultModules1' ,[resultModules1]);
   sessionStorage.setItem('resultModules1.Date' ,[resultModules1.Date]);



  console.log("After etting the data  : "+resultModules1.Date);
  console.log("After etting the data  2 : "+resultModules2.Date);
  console.log(resultModules2.Date);
  console.log("On top the second one ???");


    return (
        <>
        <NavbarProf></NavbarProf>
        <div>
        <table id="TabSurveillance">
        <tr>
          <th>Date</th>
          <th>Heure de début</th>
          <th>Module</th>
          <th>Responsable du module</th>
          <th>Salle</th>
          <th>Confirmation de presence</th>
          <th>Description du jour</th>
        </tr>
        <tr>
          <td >{resultModules1.Date}</td>
          <td>{resultModules1.Heure}</td>
          <td value={resultModules1.Module}>{resultModules1.Module}</td>
          <td>{resultModules1.Responsable}</td>
          <td>{resultModules1.Salle}</td>

          <td>
           
          <div class="checkboxOverride">
	  		<input type="checkbox" name="" id="checkboxInputOverride" value="1"/>
		  	<label for="checkboxInputOverride"></label>
          </div> 

          </td>
          <td>
              <Link to="/DescriptionJour">
              <button class="DescriptionButton">
                Ajouter
            </button>
              </Link>
            
          </td>
        </tr>
        <tr>
        <td>{resultModules2.Date}</td>
          <td>{resultModules2.Heure}</td>
          <td>{resultModules2.Module}</td>
          <td>{resultModules2.Responsable}</td>
          <td>{resultModules2.Salle}</td>
          <td>
          <div class="checkboxOverride">
	  		<input type="checkbox" name="" id="checkboxInputOverride2" value="2"/>
		  	<label for="checkboxInputOverride2"></label>
          </div> 
          </td>
          <td>
          <Link to="/DescriptionJour">
          <button class="DescriptionButton">
                Ajouter
            </button>
            </Link>
          </td>
        </tr>
       
      </table>

        </div>
        </>
        
      );

}
export default Surveillance ;