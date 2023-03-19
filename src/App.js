import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar';
import Menu from './menu';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path='/' element= {<Home/>}></Route>
              <Route path='/connexion' element= {<Connexion/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
