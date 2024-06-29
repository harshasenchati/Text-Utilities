import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alertText, setAlertText] = useState("Welcome to Text Utils");

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
    if (mode === "light") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <Router>
      <Navbar
        title="TextUtils"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alertText={alertText} setAlertText={setAlertText} />

      <Routes>
        <Route
          path="/TextForm"
          element={
            <TextForm
              heading="Enter The Text to analyze"
              mode={mode}
              setAlertText={setAlertText}
            />
          }
        />
        <Route path="/About" element={<About mode={mode} />} />
      </Routes>
    </Router>
  );
}

export default App;
