import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Student_img from "./Student_img.jpg";
import Professor_img from "./Professor_img.jpg";
import Logo_ENSA from "./Logo_ENSA.png";

// $(function(){
//     $(".Navbar").mouseover(function(){
//       $("li").hide();
//     });
//   });
// the Navbar contains the links of the student and teacher login page
function Navbar() {
  return (
    <>
      <div class="context2">
        <h1>Bienvenue</h1>
        <h2> Vous êtes ?</h2>
      </div>
      <div class="area">
        <ul class="circles">
          <li class="circle_li"></li>
          <li class="circle_li"></li>
          <li class="circle_li"></li>
          <li class="circle_li"></li>
          <li class="circle_li"></li>
          <li class="circle_li"></li>
          <li class="circle_li"></li>
          <li class="circle_li"></li>
          <li class="circle_li"></li>
          <li class="circle_li"></li>
        </ul>
      <div id="Personnel">
              <img class="Logo"  src={Logo_ENSA} alt="LOGO ENSATE">
              </img>
              <Link to="/Student">
              <img class="TitreFront" src={Student_img} alt="Étudiant">
              </img>
              </Link>
              <Link to="/Teacher">
              <img class="TitreFront" src={Professor_img} alt="Professeur">
              </img>
              </Link>
      </div>
      </div>
    </>
  );
}

export default Navbar;
