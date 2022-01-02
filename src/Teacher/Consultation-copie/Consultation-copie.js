import React , {useRef,useEffect, useState} from "react";
import NavbarProf from "../Navbar/Navbar";
import "./Consultation-copie.css";
import { AiFillCaretDown } from "react-icons/ai";
import emailjs from "emailjs-com";
import Axios from "axios";

function Consultation_de_copie() {
  const [resultModules1 , setResultModules1] =useState("") ; 
  const [resultModules2 , setResultModules2] =useState("") ; 
  var test = sessionStorage.getItem('module2');
  console.log("Testing attention please : "+test);
  console.log("ABove is the test check it out");
  Axios.post("http://localhost:3001/DemandeCopies", {
    test:test ,
  })
  Axios.get("http://localhost:3001/DemandeCopies", { params: { answer: test } }).then(response => {
    console.log("Ontop");
    console.log(response.data);
    console.log("Ontop");
    setResultModules1(response.data[0]);
    setResultModules2(response.data[1]);

  })
  console.log("After etting the data  : "+resultModules1.EmailEtudiant);
  console.log("After etting the data  2 : "+resultModules2.EmailEtudiant);
  console.log(resultModules2.EmailEtudiant);
  console.log("On top the second one ???");

  var templateParams = {
    to: "ali.akil@etu.uae.ac.ma",
  };
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_whve4kl",
        "template_e9cy18a",
        "#theForm",
        "user_W2SEM0j2uJIDKJQPvvSPT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <>
      <NavbarProf></NavbarProf>
      <h3 class="Comment">
        Les étudiants suivants demandent la consultation de leurs copies :
      </h3>
      <table id="TabSurveillance" class="consultationClass">
        <tr>
          <th>Module (ou element du module)</th>
          <th>Numero apogée</th>
          <th> Email de l'étudiant</th>
          <th>Message</th>
          <th class="thReponse">Réponse </th>
        </tr>
        <tr>
          <td>Modélisation et POO</td>
          <td>{resultModules1.Apoge}</td>
          <td>{resultModules1.EmailEtudiant}</td>
          <td>{resultModules1.Message}</td>
          <td>
          <form onSubmit={sendEmail} id="theForm2">
              <div class="invisible ">
                <label>Email</label>
                <input
                  type="email"
                  name="user_email"
                  value="ali.akil@etu.uae.ac.ma"
                />
              </div>
              <button class="Reponse" type="submit">
                Accepter
              </button>
              <button class="Reponse" value="Send" type="submit">
                Refuser
              </button>
            </form>
          </td>
        </tr>
        <tr>
          <td>Modélisation et POO</td>
          <td>{resultModules2.Apoge}</td>
          <td>{resultModules2.EmailEtudiant}</td>
          <td>{resultModules2.Message}</td>
          <td>
            <form onSubmit={sendEmail} id="theForm">
              <div class="invisible ">
                <label>Email</label>
                <input
                  type="email"
                  name="user_email"
                  value="ali.akil@etu.uae.ac.ma"
                />
              </div>
              <button class="Reponse" type="submit">
                Accepter
              </button>
              <button class="Reponse" value="Send" type="submit">
                Refuser
              </button>
            </form>
          </td>
        </tr>
      </table>
      {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}
    </>
  );
}
export default Consultation_de_copie;
