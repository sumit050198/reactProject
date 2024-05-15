// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import AboutUs from './components/AboutUs';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');  //whether dark mode is enable or not

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark'); 
      document.body.style.backgroundColor = 'gray'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'

    }
  }
  return (
  <>
  <Navbar title="Logo" mode={mode} toggleMode={toggleMode}/>
  {/* <Navbar/> */}
  <div className="container">
  <TextForm heading="Enter the text to analyze below" mode={mode}/>
    {/* <AboutUs/> */}
  </div>
  </>
  );
}

export default App;
