import './App.css';
import Navbar from './components/Navbar';
//import About from './components/About';
import React, { useState } from 'react';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="FirstApp" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Textform showAlert={showAlert} heading="Enter the text to analyse here" mode={mode}/>
          {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyse here" mode={mode} />} />
          </Routes>
        </div>
      </Router> */}
      </div>
    </>
  );
}

export default App;
