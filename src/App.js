import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import Connexion from './Connexion';
import Menu from './Menu';
import { UserContext } from "./Usercontext"
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  
  return (
    <div className="App">
     
        <BrowserRouter>
       
            <Routes>
             
                  <Route path='/' element= {<Home/>}></Route>
                  <Route path='/Connexion' element= {<Connexion/>}></Route>
            </Routes>
       
        </BrowserRouter>
      
     
    </div>
  );
}

export default App;
