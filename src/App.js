import React from 'react';
import Blog from './Blog-Page/Blog';
import './App.css';
import navBar from './pages/navbar';


import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (

   <div className="App">
    <navBar />
    </div>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blog />}></Route>
        </Routes>
      
      </BrowserRouter>



 );
}

export default App;
