// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
  import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

// import { type } from '@testing-library/user-event/dist/type';

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enable or not
  const [alert, setAlert] = useState(null); //state variable alert ko set karne ke liye

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500); // 2000 milliseconds = 2 seconds
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2d3436";
      showAlert("Dark mode has been enable", "success");
      document.title = "Form App - Dark Mode";
      //   setInterval(() =>{
      //   document.title = "install app Now";
      // },2000);

      //   setInterval(() =>{
      //   document.title = "click on below";
      //   },1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
      document.title = "Form App - Light Mode";
    }
  };
  return (
    <>
      <Router>
          <Navbar title=".logo-design.png" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert} />
            <div className="container">
          <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/TextForm" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />

            {/* <Route path="/about"element={<About />} > */}
              {/* <About/> */}
            {/* </Route> */}
            {/* <Route path="/TextForm"  element={<TextForm />} />
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}/>
            // </Route> */}
          </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
