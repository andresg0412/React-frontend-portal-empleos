// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Employees from './pages/Employees';
import Company from './pages/Company';
import Login from './components/Login/login';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';
import BibliotecaEstilos from './pages/BibliotecaEstilos';

function App() {
  return (
    <AuthProvider>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
          <Route path="/empleados" element={<Employees />} />
          <Route path="/empresa" element={<Company />} />
          <Route path='/biblioteca' element={<BibliotecaEstilos />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
