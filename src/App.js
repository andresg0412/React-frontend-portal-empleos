// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Employees from './pages/Employees';
import Company from './pages/Company';
import Login from './components/Login/login';
import LoginPage from './pages/Login/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';
import BibliotecaEstilos from './pages/BibliotecaEstilos';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
          <Route path="/empleados" element={<Employees />} />
          <Route path="/empresa" element={<Company />} />
          <Route path='/biblioteca' element={<BibliotecaEstilos />} />
        </Routes>
      </Router>
  );
}

export default App;
