import React ,{useEffect , useState} from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';
import './Navbar.css';
import {AiFillBell} from "react-icons/ai";
import {FiSmile} from "react-icons/fi";
import  Axios from "axios";


function NavbarProf(){
  const [resultModules1 , setResultModules1] =useState("") ; 

  var test = sessionStorage.getItem('email');
  console.log("Testing attention please : "+test);
  console.log("ABove is the test check it out");
  useEffect(() => {
  Axios.post("http://localhost:3001/NavbarEnseignant/", {
    test:test,
  });
  console.log("after");
  Axios.get("http://localhost:3001/NavbarEnseignant/", { params: { answer: test } }).then(response => {
    console.log("Ontop");
    console.log(response.data[0]);
    console.log("Ontop");
    setResultModules1(response.data[0]);
    })
    console.log("Look below");
    console.log(resultModules1.Message);
    console.log("Look above");
  },[]);

    return (
        <>
        <Nav>
          <NavLink to='/'>
            <img id="Image" src={require('./Logo_ENSA.png')} alt='logo' />
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to='/Prevenir' activeStyle>
              Prévenir les examens
            </NavLink>
            <NavLink to='/Surveillance' activeStyle >
              Surveillance
            </NavLink>
            <NavLink to='/DemandeCopie' activeStyle>
              Demande de consultation de copie
            </NavLink>
            <NavLink to='/PV' activeStyle>
                PV d'évaluation
            </NavLink>
            <div class="dropdown3">
                <button class="dropbtn3"><AiFillBell size={20} /></button>
                <div class="dropdown-content3">
                    <p>
                    {resultModules1.Message}                   
                    </p>
                </div>
                </div>
        <div class="dropdown2">
                <button class="dropbtn2"><FiSmile/></button>
                <div class="dropdown-content2">
                   <NavLink to='/Teacher' activeStyle>
                    <a href="#">Se déconnecter</a>
                    </NavLink>
                </div>
                </div>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
        </Nav>
      </>
      );
}
export default NavbarProf ;