import React, { useState, useEffect } from "react";
import "./Student.css";
import Logo_ENSA from "./Logo_ENSA.png";
import { Link } from "react-router-dom";
import Axios from "axios";
import { render } from "ejs";
import { useHistory } from "react-router-dom";
function Student() {

  const [identifiant, setIdentifiant] = useState("");
  const [password, setPassword] = useState("");
  const [joke, setJoke] = useState('');
  const submitReview = () => {
    Axios.post("http://localhost:3001/etudiant", {
      identifiant: identifiant,
      password: password,
    }).then(() => {
      console.log("successful insert");
    });
   
  };
  sessionStorage.setItem('apoge' ,[identifiant]);
  var test = sessionStorage.getItem('apoge');
  console.log("Testing attention please : "+test);
  console.log("ABove is the test check it out");

  var somejoke="joke";
  var resultJoke = somejoke.localeCompare([joke]);
  console.log("the first is "+ somejoke);
  console.log("the second one is  :"+[joke]);
  console.log("The joke result is  = " +resultJoke);

  useEffect(() => {
    console.log("The joke result is  = " +resultJoke);
     if (resultJoke==0) {
    Axios.get("http://localhost:3001/etudiant/").then((response) => {
      // Storing the variables 
      console.log(response.data[0].password);
      console.log(response.data[0].Identifiant);
      console.log(
        "The response = " +
          response.data[0].Identifiant +
          "The other is == " +
          [identifiant]
      );
      console.log(
        "The password = " +
          response.data[0].password +
          "The other is == " +
          [password]
      );
      var result1 = response.data[0].Identifiant.localeCompare([identifiant]);
      var result2 = response.data[0].password.localeCompare([password]);
      var k = 0;
      var i=0;
      while(k!=1){
        result1 = response.data[i].Identifiant.localeCompare([identifiant]);
        result2 = response.data[i].password.localeCompare([password]);
        console.log(result1);
        console.log(result2);
        if (result1 == 0 && result2 == 0) {
          k = 1;
        }
        i++ ;
      }
      if (k == 1) {
        window.location.replace("http://localhost:3000/Examens/");
         
      }
      else {
        console.log("Identifiant ou Mot de passe non valide");
      }
    });
  }
  });

  return (
    <>
      <div class="container" id="container">
        <div class="form-container sign-in-container">
          <form>
            <Link to="/">
              <img class="LogoENSA" src={Logo_ENSA} alt="LOGO ENSATE"></img>
            </Link>
            <h1 class="TitleStudent">Espace étudiant</h1>
            <input
              type="text"
              placeholder="Apoge"
              name="identifiant"
              required
              onChange={(e) => {
                setIdentifiant(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              name="password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <a href="#">Avez-vous oublié votre mot de passe?</a>
            <div  onClick={() => setJoke('joke')}>
              {/* <Link to="/Examens"> */}
              <button  class="se_connecter"  >
                Se connecter
              </button>
              {/* </Link> */}
            </div>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <ul>
                <Link to="/Aide">
                  <button class="top_right">Aide</button>
                </Link>
                <Link to="/Propos">
                  <button class="top_right">À propos</button>
                </Link>
              </ul>
              <h1>Bonjour!</h1>
              <p>Welcome Back</p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
  // const signUpButton = document.getElementById('signUp');
  // const signInButton = document.getElementById('signIn');
  // const container = document.getElementById('container');

  // signUpButton.addEventListener('click', () => {
  //   container.classList.add("right-panel-active");
  // });

  // signInButton.addEventListener('click', () => {
  //   container.classList.remove("right-panel-active");
  // });
}

export default Student;
