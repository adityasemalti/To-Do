import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/user/Login";
import RegisterPage from "./components/user/RegisterPage";
import Dashboard from "./components/user/Dashboard";

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/register" element={<RegisterPage />} />
    //   </Routes>
    // </Router>
    <>
    <Dashboard/>
    </>
  );
};

export default App;
