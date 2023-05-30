import React from 'react';
import Blog from './Blog-Page/Blog.jsx';
import BlogAdminPage from './BlogAdminPage.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog-admin" element={<BlogAdminPage />} /> {/* Update the path here */}
      </Routes>
    </Router>
  );
}

export default App;




