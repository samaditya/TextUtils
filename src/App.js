import Navbar from "./components/Navbar";
import "./App.css";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";



function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0A2647";
      showAlert("Dark Mode Enabled" , "success")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled" , "success")
    }
  };
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    })
    setTimeout(()=>{
      setalert(null)
    } , 1500)
  };
  return (
    <>

    {/* <BrowserRouter> */}
    
      <Navbar
        title="Text Utils"
        
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
      
        {/* <Routes>
        
        <Route exact path ="/about" element = {<About/>}/>
        <Route exact path ="/" element = {<Textform heading="ENTER TEXT" mode={mode} showAlert={showAlert}/>}/> 

        </Routes> */}
        <Textform heading="ENTER TEXT" mode={mode} showAlert={showAlert}/>
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
