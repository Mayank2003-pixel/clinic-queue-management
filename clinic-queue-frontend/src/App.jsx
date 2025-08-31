// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";


// Pages
import Dashboard from "./pages/Dashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import ReceptionistDashboard from "./pages/ReceptionistDashboard";
import Appointments from "./pages/Appointments";
import Register from "./pages/Register";
import Queue from "./pages/Queue";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/doctor" element={<DoctorDashboard />} />
          <Route path="/receptionist" element={<ReceptionistDashboard />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/register" element={<Register />} />
          <Route path="/queue" element={<Queue />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
