import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
// ✅ Correct import path: 'react-router-dom' (not 'react-dom')

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";  
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
