// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import AboutUs from './components/AboutUs';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import { type } from '@testing-library/user-event/dist/type';

function App() {
  const [mode, setMode] = useState('light');  //whether dark mode is enable or not
  const [alert, setAlert] = useState(null);   //state variable alert ko set karne ke liye

  const showAlert = (message,  type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
          setAlert(null);
        }, 1500); // 2000 milliseconds = 2 seconds
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark'); 
      document.body.style.backgroundColor = '#2d3436'
      showAlert("Dark mode has been enable", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enable", "success");
    }
  }
  return (
  <>
  <Navbar title="Logo" mode={mode} toggleMode={toggleMode}/>
  {/* <Navbar/> */}
<Alert alert={alert}/> 

  <div className="container">
  <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
    {/* <AboutUs/> */}
  </div>
  </>
  );
}

export default App;
