// eslint-disable-next-line 
import React, { createContext, useContext, useState } from 'react';

export const BlogContext = createContext();

export function BlogProvider({ children }) {
  // eslint-disable-next-line 
  const [admins, setAdmins] = useState({
    aphra: true,
    david: true,
    jose: true,
    iman: true,
  });

  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      author: 'Aphra',
      title: 'A day in the life of...',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      image:
        'https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'May 1, 2023',
      likes: 0,
      favorite: false,
      comments: [],
    },
    {
      id: 2,
      author: 'David',
      title: 'Blogging through bootcamp...',
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system...",
      image:
        'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'May 5, 2023',
      likes: 0,
      favorite: false,
      comments: [],
    },
    {
      id: 3,
      author: 'Jose',
      title: 'Milestone Project',
      description:
        'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure...',
      image:
        'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'May 10, 2023',
      likes: 0,
      favorite: false,
      comments: [],
    },
    {
      id: 4,
      author: 'Iman',
      title: 'Coding Issues',
      description:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested...',
      image:
        'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'May 15, 2023',
      likes: 0,
      favorite: false,
      comments: [],
    },
  ]);

  const addBlogPost = (author, title, description, image, date) => {
    const newBlogPost = {
      id: blogPosts.length + 1,
      author,
      title,
      description,
      image,
      date,
      likes: 0,
      favorite: false,
      comments: [],
    };

    setBlogPosts([...blogPosts, newBlogPost]);
  };

  const likeBlogPost = (postId) => {
    setBlogPosts((prevBlogPosts) => {
      return prevBlogPosts.map((post) => {
        if (post.id === postId) {
          return { ...post, likes: post.likes + 1 };
        }
        return post;
      });
    });
  };

  const favoriteBlogPost = (postId) => {
    setBlogPosts((prevBlogPosts) => {
      return prevBlogPosts.map((post) => {
        if (post.id === postId) {
          return { ...post, favorite: !post.favorite };
        }
        return post;
      });
    });
  };

  const addCommentToPost = (postId, comment) => {
    setBlogPosts((prevBlogPosts) => {
      return prevBlogPosts.map((post) => {
        if (post.id === postId) {
          return { ...post, comments: [...post.comments, comment] };
        }
        return post;
      });
    });
  };

  return (
    <BlogContext.Provider
      value={{ admins, blogPosts, addBlogPost, likeBlogPost, favoriteBlogPost, addCommentToPost }}
    >
      {children}
    </BlogContext.Provider>
  );
}
