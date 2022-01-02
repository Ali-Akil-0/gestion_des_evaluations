import React , {useState,useEffect} from 'react';
import './Teacher.css';
import Logo_ENSA from './Logo_ENSA.png';
import { Link } from "react-router-dom";
import Axios from 'axios';
import { AiOutlineConsoleSql } from 'react-icons/ai';

function Teacher() {
  const [identifiant,setIdentifiant]= useState("");
  const [Module,setModule]= useState("");
  const [password, setPassword]=useState("");
  const [joke, setJoke] = useState('');
  const submitReview=()=>{
      Axios.post("http://localhost:3001/professeur/", {
        identifiant:identifiant,
        password:password,
      }).then(()=>{
          console.log("successful insert");
      });
  };
  sessionStorage.setItem('email' ,[identifiant]);
  
  var test = sessionStorage.getItem('email');
  console.log("Testing attention please : "+test);
  console.log("ABove is the test check it out");
  // console.log("Look down for the module");
  // console.log("The module is  : "+[Module]);
  // console.log("Look up for the module");

  var somejoke="joke";
  var resultJoke = somejoke.localeCompare([joke]);
  console.log("the first is "+ somejoke);
  console.log("the second one is  :"+[joke]);
  console.log("The joke result is  = " +resultJoke);
  useEffect(() => {
    console.log("The joke result is  = " +resultJoke);
     if (resultJoke==0) {
    Axios.get("http://localhost:3001/professeur/").then((response) => {
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
      // if(result1==0 && result2==0){
      // alert("equals");
      // }
      var k = 0;
      var i=0;
      while(k!=1){
        result1 = response.data[i].Identifiant.localeCompare([identifiant]);
        result2 = response.data[i].password.localeCompare([password]);
        console.log(result1);
        console.log(result2);
        if (result1 == 0 && result2 == 0) {
          setModule(response.data[i].Module);
          k = 1;
        }
        i++ ;
      }
      if (k == 1) {
        window.location.replace("http://localhost:3000/Prevenir/");
         
      }
      else {
        console.log("Identifiant ou Mot de passe non valide");
      }
    });
  }
  });
  sessionStorage.setItem('module2' ,[Module]);
  console.log("The module is  : "+ [Module]);
  return (
    <>
<div class="container" id="container">
<div class="form-container sign-in-container">
  <form action="#">
  <Link to="/">
  <img class="LogoENSA"  src={Logo_ENSA} alt="LOGO ENSATE">
  </img>
  </Link>
    <h1 class="TitleEnseignant"> 
      Espace enseignant
    </h1>
 
    <input type="email" placeholder="Email Institutionnel" onChange={(e)=>{
        setIdentifiant(e.target.value)
      }} />
    <input type="password" placeholder="Mot de passe" onChange={(e)=>{
        setPassword(e.target.value)
      }}/>
    <a href="#">Avez-vous oublié votre mot de passe?</a>
    <div  onClick={() => setJoke('joke')}>
    <button class="se_connecter">Se connecter</button>
    </div>
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
  }

export default Teacher ;