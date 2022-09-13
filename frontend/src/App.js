import "./App.css";
import React from "react";
import Home from "./components/screens/Home";
import UpdateEmployee from "./components/screens/UpdateEmployee";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/general/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/updateEmployee" element={<UpdateEmployee />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
