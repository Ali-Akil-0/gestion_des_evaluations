import React from 'react'
import logo from './logo.svg';
import $ from 'jquery';
import './App.css';
import Student from './Student/Student';
import Teacher from './Teacher/Teacher';
import Aide from './Aide/Aide';
import Propos from './Propos/propos';
import ConsultationCopie from './Student/Demande-de-consultation-de-copie/Consultation-copie';
import Examens from './Student/Examens/Examens';
import ResultatsFinaux from './Student/Resultats-finaux/Resultats-finaux';
import Consultation_de_copie from './Teacher/Consultation-copie/Consultation-copie';
import Prevenir from './Teacher/Prevenir-examens/Prevenir-examen';
import Surveillance from './Teacher/Surveillance/Surveillance';
import Etape2 from './Teacher/Prevenir-examens/Etape-2/Etape-2';
import DescriptionJour from './Teacher/Surveillance/Description du jour/Description-jour';
//Importing the route and link methodes from the react-router-dom
import {Route,Routes} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './Front/Navbar';


function App() {
  
  return (
    // On ajoute un lien pour toutes les pages
    // exact to not use a weird routing method
    // React route has been updated
    //Routes instead of Switch
    // Path instead of to
    // elements instead of component
    
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route  path='/Student' element={<Student/>}/>
      <Route  path='/Teacher' element={<Teacher/>}/>
      <Route path ='/Aide' element={<Aide/>}/>
      <Route path ='/Propos' element={<Propos/>}/>
      <Route path ='/Examens' element={<Examens/>}/>
      <Route path ='/ResultatsFinaux' element={<ResultatsFinaux/>}/>
      <Route path ='/ConsultationDeCopie' element={<ConsultationCopie/>}/>
      <Route path ='/Prevenir' element={<Prevenir/>}/>;
      <Route path ='/Surveillance' element={<Surveillance/>}/>;
      <Route path ='/DemandeCopie' element={<Consultation_de_copie/>}/>;
      <Route path = '/Etape2' element={<Etape2/>}/>
      <Route path = '/DescriptionJour' element={<DescriptionJour/>} />
      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
