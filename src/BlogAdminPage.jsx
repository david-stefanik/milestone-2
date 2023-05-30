import React, { useState } from 'react';
import './BlogAdminPage.css';
import { Link, useParams } from 'react-router-dom';

const BlogAdminPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const { author } = useParams();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [submittedTitle, setSubmittedTitle] = useState('');
  const [submittedDate, setSubmittedDate] = useState('');
  const [submittedContent, setSubmittedContent] = useState('');

  // eslint-disable-next-line no-unused-vars
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // eslint-disable-next-line no-unused-vars
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // eslint-disable-next-line no-unused-vars
  const handleLogin = (event) => {
    event.preventDefault();

    // Check if the entered username and password are correct
    if (username === 'admin' && password === 'password') {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };


  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
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

    // Save the submitted data to the state variables
    setSubmittedTitle(title);
    setSubmittedDate(date);
    setSubmittedContent(content);

    // Clears the form fields
    setTitle('');
    setDate('');
    setContent('');
  };

  if (loggedIn) {
    return (
      <div className="admin-container">
        {/* Navbar */}
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

        {/* Welcome message and logout button */}
        <h2>Welcome, Admin!</h2>
        <button onClick={handleLogout}>Logout</button>

        {/* Displaying author's name */}
        <h2>{author}'s Blog</h2>

         {/* Create new blog post form */}
         <div className="new-blog-container">
          <h3>Create New Blog Post</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input type="text" value={title} onChange={handleTitleChange} />
            </label>
            <br />
            <label>
              Date:
              <input type="text" value={date} onChange={handleDateChange} />
            </label>
            <br />
            <label>
              Blog Post:
              <textarea value={content} onChange={handleContentChange} />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>

      {/* Displaying submitted blog post */}
      <div className="submitted-blog-container">
          <h3>Submitted Blog Post</h3>
          <div>
            <h4>Title: {submittedTitle}</h4>
            <p>Date: {submittedDate}</p>
            <p>{submittedContent}</p>
          </div>
        </div>
      </div>
    );
  }

  // If not logged in, display login form
  return (
    <div className="login-container">
      {/* Navbar */}
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

      {/* Welcome message and logout button */}
      <h2>Welcome, Admin!</h2>
      <button onClick={handleLogout}>Logout</button>

      {/* Create new blog post form */}
      <h2>Create New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <br />
        <label>
          Date:
          <input type="text" value={date} onChange={handleDateChange} />
        </label>
        <br />
        <label>
          Blog Post:
          <textarea value={content} onChange={handleContentChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Displaying submitted blog post */}
      <div className="submitted-blog-container">
        <h3>Submitted Blog Post</h3>
        <div>
          <h4>Title: {submittedTitle}</h4>
          <p>Date: {submittedDate}</p>
          <p>{submittedContent}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogAdminPage;