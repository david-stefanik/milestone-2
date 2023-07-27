import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';
import { BlogContext } from './Blog-Page/BlogContext';


import './Blog.css';

export default function Blog() {
  const { admins, blogPosts, likeBlogPost, favoriteBlogPost, addCommentToPost } = useContext(BlogContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [comments, setComments] = useState({});

  const handleCommentChange = (postId, comment) => {
    setComments((prevComments) => ({
      ...prevComments,
      [postId]: comment,
    }));
  };

  const renderBlogPosts = (admin) => {
    if (admins[admin]) {
      const filteredPosts = blogPosts.filter((post) => post.author.toLowerCase() === admin);
      return filteredPosts.map((post, index) => {
        const highlightedTitle = post.title.replace(new RegExp(`(${searchTerm})`, 'gi'), '<mark>$1</mark>');
        const highlightedAuthor = post.author.replace(new RegExp(`(${searchTerm})`, 'gi'), '<mark>$1</mark>');
        const highlightedDescription = post.description.replace(
          new RegExp(`(${searchTerm})`, 'gi'),
          '<mark>$1</mark>'
        );

        const comment = comments[post.id] || '';

        return (
          <Card key={index} className="blog-card">
            <Card.Img variant="top" src={post.image} alt={post.title} />
            <Card.Body>
              <Card.Title dangerouslySetInnerHTML={{ __html: highlightedTitle }} />
              <Card.Subtitle className="mb-2 text-muted">
                <span dangerouslySetInnerHTML={{ __html: highlightedAuthor }} />
              </Card.Subtitle>
              <Card.Text dangerouslySetInnerHTML={{ __html: highlightedDescription }} />
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{post.date}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Read More</Card.Link>
              <Card.Link href="#" onClick={() => likeBlogPost(post.id)}>
                Like ({post.likes})
              </Card.Link>
              <Card.Link href="#" onClick={() => favoriteBlogPost(post.id)}>
                {post.favorite ? 'Remove from Favorites' : 'Add to Favorites'}
              </Card.Link>
            </Card.Body>
            <Card.Body>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  addCommentToPost(post.id, comment);
                  handleCommentChange(post.id, '');
                }}
              >
                <input
                  type="text"
                  placeholder="Leave a comment..."
                  value={comment}
                  onChange={(e) => handleCommentChange(post.id, e.target.value)}
                />
                <button type="submit">Submit</button>
              </form>
              <div>
                {post.comments.map((comment, commentIndex) => (
                  <p key={commentIndex}>{comment}</p>
                ))}
              </div>
            </Card.Body>
          </Card>
        );
      });
    }
    return null;
  };

  return (
    <div>
      {/* Navigation bar */}
      <nav className="nav">
        <h2>CODING TO SUCCESS</h2>
        <ul className="menu">
          {/* Home link */}
          <li>
            <Link to="/">HOME</Link>
          </li>
          {/* Blog link */}
          <li>
            <Link to="/blog-admin">BLOG</Link>
          </li>
          <li>
            {/* Search input */}
            <div className="search-container">
              <input
                type="text"
                placeholder="Search"
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </li>
        </ul>
      </nav>
      {/* Blog posts section */}
      <div className="posts">
        <div className="post-container">
          {/* Links to individual authors */}
          <div className="button-container">
            {Object.keys(admins).map((admin) => (
              <Link to={`/${admin}`} key={admin} className="blog-button name-box">
                {admin.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
        {/* Video banner */}
        <div className="video-banner">
          {/* Replace the URL with your desired video */}
          <video
            className="video-player"
            src="https://player.vimeo.com/external/368763065.sd.mp4?s=13988c9dbaddf24bcbceb333cc76d1936255e78a&profile_id=164&oauth2_token_id=57447761"
            autoPlay
            loop
            muted
          />
        </div>
        {/* Container for blog post cards */}
        <div className="blog-post-container">
          {/* Render the blog post cards for each author */}
          {Object.keys(admins).map((admin) => renderBlogPosts(admin))}
        </div>
      </div>
    </div>
  );
}

