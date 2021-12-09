import React from 'react';
import NavbarProf from '../Navbar/Navbar';
import './Surveillance.css' ; 
import { Link } from "react-router-dom";

function Surveillance(){
    return (
        <>
        <NavbarProf></NavbarProf>
        <div>
        <table id="TabSurveillance">
        <tr>
          <th>Date</th>
          <th>Heure</th>
          <th>Module</th>
          <th>Prof du module</th>
          <th>Salle</th>
          <th>Confirmation de presence</th>
          <th>Description du jour</th>
        </tr>
        <tr>
          <td>20/10/2020</td>
          <td>15:00</td>
          <td>Programmation Web</td>
          <td>Jaber BOUHDIDI</td>
          <td>5</td>
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
          <td>10/10/2020</td>
          <td>13:30</td>
          <td>POO</td>
          <td>Zineb BESRI</td>
          <td>103</td>
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