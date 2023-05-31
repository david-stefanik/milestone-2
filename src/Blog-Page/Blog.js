import React from 'react';
import { Card, ListGroup, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blog.css';




export default function Blog() {
    const blogPosts = [
        {
            title: "SUBJECT",
            author: 'Aphra',
            date: 'May 21, 2023',
            image: 'https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&w=1600',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            title: "SUBJECT",
            author: 'David',
            date: 'May 15, 2023',
            image: 'https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=1600',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            title: "SUBJECT",
            author: 'Jose',
            date: 'May 20, 2023',
            image: 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1600',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            title: "SUBJECT",
            author: 'Iman',
            date: 'May 19, 2023',
            image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1600',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
    ];

    return (
        <>
            <div className='nav'>
                <h2 className='nav-bar'>CODING TO SUCCESS</h2>
                <ul className='menu'>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/blog">BLOG</Link></li>
                </ul>
            </div>

            <div className='posts'>
                <div className='post-container'>
                    <div className="button-container">
                        <Link to="/aphra" className="blog-button name-box">APHRA</Link>
                        <Link to="/david" className="blog-button name-box">DAVID</Link>
                        <Link to="/jose" className="blog-button name-box">JOSE</Link>
                        <Link to="/iman" className="blog-button name-box">IMAN</Link>

                    </div>
                </div>

                <div className="search-container">
                    <input type='text' placeholder='Search' className='search-input' />
                </div>

                <div className="blog-post-container">
                    {/* Render the blog post cards */}
                    {blogPosts.map((post, index) => (
                        <Card key={index} className="blog-card">

                            <Card.Img variant="top" src={post.image} alt={post.title} />
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{post.author}</Card.Subtitle>
                                <Card.Text>{post.description}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>{post.date}</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">Read More</Card.Link>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}