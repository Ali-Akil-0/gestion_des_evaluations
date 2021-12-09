import React from 'react';
import LogoENSA from './Logo_ENSA.png';
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import {BsFillHouseDoorFill} from "react-icons/bs";
import './Propos.css';

function Propos(){
    return (
        <>
        <Link to="/">
        <img src={LogoENSA} alt="LogoENSA" class="LogoENSA3">
        </img>
        </Link>
        
        <div class="Propos">
        <h2 class="headerPropos">
        Ce système est créé dans le but de faciliter la gestion
des évaluations au sein de l’école national des sciences
appliquées de Tétouan.
        </h2>
        
        </div>
        <hr/>
        <div class="AideFooter">
            <AiOutlineMail>
            </AiOutlineMail>
            <h3 class="ParFooter">ensatetouan@uae.ac.ma</h3>
            <BsFillHouseDoorFill>
            </BsFillHouseDoorFill>
            <h3 class="ParFooter">BP. 2222 M'hannech</h3>


        </div>
        </>
      );

}
export default Propos ;