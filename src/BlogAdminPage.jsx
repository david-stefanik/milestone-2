import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from './Blog-Page/BlogContext';
import './BlogAdminPage.css';

export default function BlogAdminPage() {
  const { addBlogPost } = useContext(BlogContext);
  const [admin, setAdmin] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAdminChange = (event) => {
    setAdmin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (admin === 'admin' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    setAdmin('');
    setPassword('');
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBlogPost = {
      title,
      author: admin,
      date,
      content,
    };

    addBlogPost(admin, newBlogPost);

    setTitle('');
    setDate('');
    setContent('');
  };

  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="admin">Admin:</label>
            <input type="text" id="admin" value={admin} onChange={handleAdminChange} />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    );
  }

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className="admin-page">
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>

      <div className="admin-container">
        <h2>Blog Admin Page</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="admin">Admin:</label>
            <select id="admin" value={admin} onChange={handleAdminChange}>
              <option value="">Select Admin</option>
              <option value="Aphra">Aphra</option>
              <option value="David">David</option>
              <option value="Jose">Jose</option>
              <option value="Iman">Iman</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" value={title} onChange={handleTitleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input type="text" id="date" value={date} onChange={handleDateChange} />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content:</label>
            <textarea id="content" value={content} onChange={handleContentChange} />
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}


