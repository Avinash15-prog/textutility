// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {

  const [mode, setmode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = 'rgb(24 46 67)';
      showAlert(" Dark Mode had been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode had been enabled", "success");
      document.title = "TextUtils - Light Mode";

}
  }
  return (
    <>
      {/* <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element = {<>
            <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
                />
                <Alert alert={alert} />
                </>}>
            </Route>
            <Route exact path="/about" element={<About mode ={mode}/>}/>
                
          </Routes>
        </div>
      </Router> */}
      <Navbar title="Tefficacy 📝" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        />
        </div>

        <br />
        
      <div className="container my-3">
        <About mode={mode} />
        </div>

    </>
  );
}

export default App;
 