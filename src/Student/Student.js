import React from 'react';
import './Student.css';
import Logo_ENSA from './Logo_ENSA.png';
import { Link } from "react-router-dom";


function Student() {
    return (
      <>
<div class="container" id="container">
	<div class="form-container sign-in-container">
		<form action="#">
    <Link to="/">
    <img class="LogoENSA"  src={Logo_ENSA} alt="LOGO ENSATE">
    </img>
    </Link>
      <h1 class="TitleStudent">
        Espace étudiant
      </h1>
    
    
			<input type="text" placeholder="Identifiant" />
			<input type="password" placeholder="Mot de passe" />
			<a href="#">Avez-vous oublié votre mot de passe?</a>
      <Link to="/Examens">
			<button class="se_connecter">Se connecter</button>
      </Link>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-right">
        <ul>
        <Link to="/Aide">
            <button class="top_right">
               Aide
            </button>
        </Link>
        <Link to="/Propos">
        <button class="top_right">
              À propos
            </button>
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

export default Student ;