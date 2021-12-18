import React from "react";
import NavbarStudent from "../Navbar/Navbar";
import "./Profil.css";
import Profile from "./Placeholder.jpg";

function Profil() {
  return (
    <>
      <NavbarStudent></NavbarStudent>
      <img class="profile-img" src={Profile} alt="ProfileImage" />
      <div class="NomProfile">
        <h1>Prénom Nom</h1>
        <hr />
      </div>
      <table class="ProfilTable">
        <tr>
          <td>
            <div class="InfoDetail">
              <h2>Informations détailées</h2>
              <h3> Adresse de courriel</h3>
              <p>Prénom.Nom@etu.uae.ac.ma</p>
              <h3> Pays</h3>
              <p>Maroc</p>
              <h3> Ville</h3>
              <p>Tétouan</p>
            </div>
          </td>
          <td>
            <div class="InfoCour">
              <h2>Informations détaillées des cours</h2>
              <h3> Profils de cours</h3>
              <p>
                Administration de BD <br />
                Anglais <br />
                Méthodologies & génie logiciel <br />
                Modélisation & Poo <br />
                Réseaux info 2 <br />
                TEC <br />
                Vision artificielle <br />
                Espagnol <br />
              </p>
            </div>
          </td>
          <td>
            <div class="InfoConexion">
              <h2>Informations de connexion</h2>
              <h3> Premier accès au site</h3>
              <p>Vendredi 10 Décembre 2021, 00:00 (maintenant)</p>
              <h3> Dernier accès au site</h3>
              <p>Vendredi 30 Octobre 2020, 00:00(1 an 40 jours)</p>
            </div>
          </td>
        </tr>
      </table>
    </>
  );
}
export default Profil;
