import React from 'react';
import './Aide.css';
import LogoENSA from './Logo_ENSA.png';
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import {BsFillHouseDoorFill} from "react-icons/bs";

function Aide(){
    return (
        <>
        <Link to="/">
        <img src={LogoENSA} alt="LogoENSA" class="LogoENSA2">
        </img>
        </Link>
        
        <div class="Aide">
        <h1>
        Pour consulter les convocations, veuillez suivre les
étapes suivantes :
        </h1>
        <h2>
        -Étape N1 :
--------------

--------------
</h2>
<h2>
-Étape N2 :
--------------

-------------- 
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
export default Aide ;