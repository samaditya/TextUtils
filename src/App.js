
import Navbar from './components/Navbar';
import './App.css';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor= '#0A2647'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
  <>
  <Navbar title = "Text Utils" about = "Utilities" mode ={mode} toggleMode = {toggleMode}/>
  <div className="container my-3">
  <Textform heading = "ENTER TEXT" mode = {mode}/> 
  {/* <About/> */}
  </div>
  </>
  );
}

export default App;
