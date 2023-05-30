import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from './Blog-Page/BlogContext';
import './BlogAdminPage.css'; 

export default function BlogAdminPage() {
  const { addBlogPost } = useContext(BlogContext);
  const [admin, setAdmin] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');

  const handleAdminChange = (event) => {
    setAdmin(event.target.value);
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

    // Create a new blog post object
    const newBlogPost = {
      title,
      author: admin, // Add the admin name to the blog post
      date,
      content,
    };

    // Add the new blog post
    addBlogPost(admin, newBlogPost);

    // Clear the form fields
    setAdmin('');
    setTitle('');
    setDate('');
    setContent('');
  };

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

      {/* Admin page container */}
      <div className="admin-container">
        <h2>Blog Admin Page</h2>

        {/* Form for adding a new blog post */}
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
