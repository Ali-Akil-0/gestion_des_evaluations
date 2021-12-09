import React from "react";
import NavbarStudent from "../Navbar/Navbar";
import './Resultats-finaux.css'

function Resultats_finaux() {
  return (
    <>
      <NavbarStudent></NavbarStudent>
      <table id="TabResultat">
        <tr>
          <th>Module</th>
          <th>Note</th>
        </tr>
        <tr>
          <td>Programmation Web</td>
          <td>21</td>
        </tr>
        <tr>
          <td>Systeme d'exploitation</td>
          <td>22</td>
        </tr>
        <tr>
          <td>POO</td>
          <td>23</td>
        </tr>
      </table>
    </>
  );
}
export default Resultats_finaux;