import React , {useEffect, useState , PureComponent} from "react";
import NavbarStudent from "../Navbar/Navbar";
import "./Examens.css";
import QRCode from "qrcode.react";
import {AiOutlineDownload} from "react-icons/ai";
import Axios from "axios";
import { jsPDF } from "jspdf";
import Image from './Logo.png';
import Image2 from './UAE.png';

import 'jspdf-autotable' ; 


function Examens() {
 
 

  const [result, setResult] = useState("") ; 
  const [resultModules1 , setResultModules1] =useState("") ; 
  const [resultModules2 , setResultModules2] =useState("") ; 
  const [resultModules3 , setResultModules3] =useState("") ; 
  const [resultModules4 , setResultModules4] =useState("") ; 
  const [resultModules5 , setResultModules5] =useState("") ; 

  


  var test = sessionStorage.getItem('apoge');
  console.log("Testing attention please : " + test);
  console.log("ABove is the test check it out");
    Axios.post("http://localhost:3001/Convocation2/", {
      test:test,
    });
    console.log("after");
    
    let Nom ; 
    let someResponse
  useEffect(() => {
    Axios.get("http://localhost:3001/Convocation2/"  ,{ params: { answer: test } }).then(response => {
      let k=0 ;
      console.log("Ontop");
      console.log(response.data);
      console.log("The length is : "+response.length);
          console.log("......................");
          setResult(response.data[k])
      console.log("The data above : ");
    
    })
    console.log("Before the table ");
    Axios.get("http://localhost:3001/Convocation3/" ,{ params: { answer: test } } ).then(response2 => {
      console.log("The others works ??? how ");
      console.log(response2.data);
      setResultModules1(response2.data[0]);
      setResultModules2(response2.data[1]);
      setResultModules3(response2.data[2]);
      setResultModules4(response2.data[3]);
      setResultModules5(response2.data[4]);
    })
        
  },[])
    
    console.log("Is it ?? : "+ result.Prenom);
    console.log("For the modules one ");
    console.log(resultModules1.Module);
    console.log("For the modules one ");


   var image = "data:image/png;base64,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";
  //  var image2 = new Image();
   function jsPDFGenerator(){
    const doc = new jsPDF('landscape', 'mm', 'a4');
    doc.addImage(image, 'PNG', 20, 20, 80, 80); 
    doc.setFont(undefined, 'bold');
    doc.text("Nom : "+"                          "+ result.Nom, 120, 30);
    doc.text("Prénom :"+"                      "+result.Prenom,  120, 40 );
    doc.text("CNE :"+"                            "+result.APOGE, 120, 50);
    doc.text("Lieu de l'examen :"+"       "+result.LieuExamen, 120, 60);
    doc.addImage(Image, 'PNG', 220, 15, 60, 50); 
    doc.autoTable({ html: '#TabExamens',tableWidth: 150 , startY : 70  , startX: 15 , margin: {left:110}});
    doc.setFontSize(12);
    doc.setFont("times");
    doc.setTextColor(255,0,0);
    doc.text("Pour passer l'examen, il est obligatoire de se présenter avec cette convocation imprimée sur papier ;", 45, 124);
    doc.text("Le scan du QR-CODE de la convocation se fait à l'entrée du lieu de l’examen indiqué.", 45, 130);
    doc.setTextColor(0,0,139);
    doc.text("Merci de NE PAS PLIER.", 202, 130);
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(6);  
    doc.line(15, 136, 280, 136);   
    doc.setFont(undefined);
    doc.setTextColor(0,0,0);
    doc.setFontSize(10);
    doc.addImage(Image2, 'PNG', 250, 160, 40, 40); 
    doc.text("• Les élèves-ingénieurs doivent se présenter 30 minutes avant le début de la première épreuve et de rejoindre les locaux des examens directement ;", 15, 150);
    doc.text("• Seuls les élèves-ingénieurs, les enseignants et le personnel administratif sont autorisés d'accéder à l’Ecole ;", 15, 155);
    doc.text("• Toute personne accédant à l’Ecole doit porter une bavette ;", 15, 160);
    doc.text("• Toute personne accédant à l’Ecole doit respecter la distanciation de 1.5 m qui est tracée au sol ;", 15, 165);
    doc.text("• Toute personne accédant à l’Ecole bénéficiera d'une prise de sa température et une désinfection des mains avec une solution hydroalcoolique ; ", 15, 170);
    doc.text("• Tout cas suspect sera affecté à une salle isolée pour passer l'examen ;", 15, 175);
    doc.text(" Les élèves-ingénieurs sont priés d'amener le strict minimum d'objets personnels avec eux (trousse, carte d'étudiant, CIN, …) ; ", 15, 180);
    doc.text("• Aucun prêt de matériel (calculatrice, stylos, blanco, ...) ne sera autorisé ;", 15, 185);
    doc.text(" Les étudiants doivent quitter immédiatement les locaux de l’Ecole après la fin de l'épreuve ;", 15, 190);
    doc.text("• Les rassemblements sont interdits ;                    Tout type de contact physique est interdit ; ", 15, 195);
    doc.text("• Il est interdit de cracher ou jeter les mouchoirs au sol ; ", 15, 200);
    doc.setTextColor(0,0,139);
    doc.text("Document Propriété de l’ENSA de Tétouan, valable pour les épreuves citées aux dates citées et aux heures indiquées.", 15, 205);



   

    doc.save("a4.pdf");
  }
// The main return

  return (
    <>
      <NavbarStudent></NavbarStudent>
      <div class="TabExamens">
        <table id="TabExamens">
          <tr>
            <th>Module</th>
            <th>Salle</th>
            <th>Date</th>
            <th>Heure</th>
            <th>Durée</th>
          </tr>
          <tr>
            <td> {resultModules1.Module}</td>
            <td>{resultModules1.Salle}</td>
            <td>{resultModules1.Date}</td>
            <td>{resultModules1.Heure}</td>
            <td>{resultModules1.Duree}</td>
          </tr>
          <tr>
            <td> {resultModules2.Module}</td>
            <td>{resultModules2.Salle}</td>
            <td>{resultModules2.Date}</td>
            <td>{resultModules2.Heure}</td>
            <td>{resultModules2.Duree}</td>
          </tr>
          <tr>
            <td> {resultModules3.Module}</td>
            <td>{resultModules3.Salle}</td>
            <td>{resultModules3.Date}</td>
            <td>{resultModules3.Heure}</td>
            <td>{resultModules3.Duree}</td>
          </tr>
          <tr>
            <td> {resultModules4.Module}</td>
            <td>{resultModules4.Salle}</td>
            <td>{resultModules4.Date}</td>
            <td>{resultModules4.Heure}</td>
            <td>{resultModules4.Duree}</td>
          </tr>
          <tr>
            <td> {resultModules5.Module}</td>
            <td>{resultModules5.Salle}</td>
            <td>{resultModules5.Date}</td>
            <td>{resultModules5.Heure}</td>
            <td>{resultModules5.Duree}</td>
          </tr>
        
        </table>
      </div>
      <div class="ConvocationEtudiant">
        <div class="ConvoInformation">
          <h1>Convocation</h1>
          <h3>Nom : {result.Nom}</h3>
          <h3>Prénom : {result.Prenom}</h3>
          <h3>APOGE : {result.APOGE}</h3>
          <h3>Lieu de l'examen : {result.LieuExamen}</h3>
        </div>
        <div class="ConvoQR">
          <QRCode id="abc" value="1234" />
        </div>
      </div>
      <div class="donwload2"  >
        <button class="Envoyer3 someButton3" onClick={jsPDFGenerator}>
          <AiOutlineDownload></AiOutlineDownload> Télécharger
        </button>
      </div>
    </>
  );
}
export default Examens;



