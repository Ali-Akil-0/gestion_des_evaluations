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


function NavbarStudent(){
  const [resultModules1 , setResultModules1] =useState("") ; 
  var test = sessionStorage.getItem('apoge');
  console.log("Testing attention please : " + test);
  
  useEffect(() => {
  Axios.post("http://localhost:3001/NavbarEtudiant/", {
    test:test,
  });
  console.log("after");
  Axios.get("http://localhost:3001/NavbarEtudiant/", { params: { answer: test } }).then(response => {
    console.log("Ontop");
    console.log(response.data[0]);
    console.log("Ontop");
    setResultModules1(response.data[0]);
    })
  },[])

    console.log("Look below");
    console.log(resultModules1.Message);
    console.log("Look above");

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
    return (
        <>
        <Nav>
          <NavLink to='/'>
            <img id="Image" src={require('./Logo_ENSA.png')} alt='logo' />
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to='/Examens' activeStyle>
              Examens
            </NavLink>
            <NavLink to='/ResultatsFinaux' activeStyle >
              Résultats finaux
            </NavLink>
            <NavLink to='/ConsultationDeCopie' activeStyle>
              Demande de consultation de copie
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
                    <NavLink to='/Profil' class="navlink">
                    <a href="#">Profile</a>
                    </NavLink>
                    <NavLink to='/Student' activeStyle>
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
export default NavbarStudent ;