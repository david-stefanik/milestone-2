import React from 'react';
import Navbar from './frontend/Navbar';
import { BrowserRouter as Router, Routes, Route } from 
'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact />
      </Routes>
    </Router>
    </>
  );
}

export default App;
