import React from 'react';
import Blog from './Blog-Page/Blog';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blog />}></Route>
        </Routes>
      
      </BrowserRouter>


 );
}

export default App;
