import React from 'react';
import NavbarStudent from '../Navbar/Navbar';
import './Examens.css';
import QRCode from 'qrcode.react';

function Examens(){
    return (
        <>
        <NavbarStudent>
        </NavbarStudent>
        <div class="TabExamens">

 <table id="TabExamens">
  <tr>
    <th>Module</th>
    <th>Salle</th>
    <th>Date</th>
  </tr>
  <tr>
    <td>Programmation Web</td>
    <td>104</td>
    <td>19/05/2020</td>
  </tr>
  <tr>
    <td>Systeme d'exploitation</td>
    <td>203</td>
    <td>28/12/2020</td>
  </tr>
  <tr>
    <td>POO</td>
    <td>5</td>
    <td>28/10/2020</td>
  </tr>
</table>
        </div>
        <div class="ConvocationEtudiant">
          <div class="ConvoInformation"> 
             <h1>
                 Convocation
             </h1>
             <h3>
                 Nom :
             </h3>
             <h3>
                 Prénom :
             </h3>
             <h3>
                 APOGE :
             </h3>
             <h3>
                 Lieu de l'examen :
             </h3>
          </div>
          <div class="ConvoQR">
              <QRCode id='abc' value='1234'/>
          </div> 
        </div>
        </>
      );

}
export default Examens ;