import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Alert from "./Mycomponents/Alert";
import './App.css';
import Navbar from "./Mycomponents/Navbar";
import Textform from "./Mycomponents/Textform";
import About from "./Mycomponents/About";

function App() {


  const [alert, setAlert] = useState(null) 

  const Alertfunc = (type, message) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const [mode, setMode] = useState("light")
  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark')
      document.body.style.backgroundColor = "rgb(0 11 23)"
          Alertfunc("success", "Dark theme is enabled")
    } else {
      setMode('light')
      document.body.style.backgroundColor = "#fff"
          Alertfunc("success", "Light theme is enabled")
    }
  }


  // FOR OTHER THEME  
  
  // const themeGreen = () => {

  //     document.body.style.backgroundColor = "rgb(0 23 0)"
  //     setMode("dark")
     
  //     Alertfunc("success", "green theme is enabled")
  // }
  // const themeRed = () => {
    
  //     document.body.style.backgroundColor = "rgb(45 0 0)"
  //     setMode("dark")
  //     Alertfunc("success", "red theme is enabled")
   
  // }
  // const themeYellow = () => {
    
  //     document.body.style.backgroundColor = "#B8860B"
  //     setMode("dark")
  //     Alertfunc("success", "yellow theme is enabled")
   
  // }

  // FOR TITLE
 
  const titleFunc = (e)=> {
    
    if (e.target.innerHTML === "About") {
      document.title = "TextUtils - About"
    } else{
      document.title = "TextUtils - Home"
    }
    // console.log(e.target.innerHTML)
  }

 
  



  return (
    
    <>
      <Router>
        <Navbar title={titleFunc} mode={mode} toggleMode={toggleMode}  />
        <Alert alert={alert}/>

        <Routes>
          <Route path="/about" element={<About mode={mode}  />}></Route>

          <Route path="/" element={<Textform heading="Enter The Text To Analyze Below" mode={mode}  Alertfunc={Alertfunc}/>}></Route>
        </Routes>
      </Router>
    </>

  );

}
export default App;


// npm install --save-dev ajv@^7