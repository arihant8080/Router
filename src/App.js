import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import About from "./About"
import Menu from './Menu';
import Contact from './Contact';
import Email from './Email';

function App() {
  return (
    <div>
     
      <BrowserRouter>
      <Menu/>
      <br />
      <Routes>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Email" element={<Email />}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
