import React from 'react';
import Blog from './Blog-Page/Blog.jsx';
import BlogAdminPage from './BlogAdminPage.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogProvider } from './Blog-Page/BlogContext.jsx';



function App() {
  return (
    <BlogProvider> {/* Wrap routes with the BlogProvider */}
      <Router>
        <Routes>
          {/* Define routes and corresponding components */}
          <Route path="/" element={<Blog />} />
          <Route path="/blog-admin" element={<BlogAdminPage />} />
        </Routes>
      </Router>
    </BlogProvider>
  );
}

export default App;
