"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogProvider = exports.BlogContext = void 0;
// eslint-disable-next-line 
var react_1 = require("react");
exports.BlogContext = (0, react_1.createContext)({});
function BlogProvider(_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)({
        aphra: true,
        david: true,
        jose: true,
        iman: true,
    }), admins = _b[0], setAdmins = _b[1];
    var _c = (0, react_1.useState)([
        {
            id: 1,
            author: 'Aphra',
            title: 'A day in the life of...',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
            image: 'https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=600',
            date: 'May 1, 2023',
            likes: 0,
            favorite: false,
            comments: [],
        },
        {
            id: 2,
            author: 'David',
            title: 'Blogging through bootcamp...',
            description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system...",
            image: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=600',
            date: 'May 5, 2023',
            likes: 0,
            favorite: false,
            comments: [],
        },
        {
            id: 3,
            author: 'Jose',
            title: 'Milestone Project',
            description: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure...',
            image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
            date: 'May 10, 2023',
            likes: 0,
            favorite: false,
            comments: [],
        },
        {
            id: 4,
            author: 'Iman',
            title: 'Coding Issues',
            description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested...',
            image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=600',
            date: 'May 15, 2023',
            likes: 0,
            favorite: false,
            comments: [],
        },
    ]), blogPosts = _c[0], setBlogPosts = _c[1];
    var addBlogPost = function (author, title, description, image, date) {
        var newBlogPost = {
            id: blogPosts.length + 1,
            author: author,
            title: title,
            description: description,
            image: image,
            date: date,
            likes: 0,
            favorite: false,
            comments: [],
        };
        setBlogPosts(__spreadArray(__spreadArray([], blogPosts, true), [newBlogPost], false));
    };
    var likeBlogPost = function (postId) {
        setBlogPosts(function (prevBlogPosts) {
            return prevBlogPosts.map(function (post) {
                if (post.id === postId) {
                    return __assign(__assign({}, post), { likes: post.likes + 1 });
                }
                return post;
            });
        });
    };
    var favoriteBlogPost = function (postId) {
        setBlogPosts(function (prevBlogPosts) {
            return prevBlogPosts.map(function (post) {
                if (post.id === postId) {
                    return __assign(__assign({}, post), { favorite: !post.favorite });
                }
                return post;
            });
        });
    };
    var addCommentToPost = function (postId, comment) {
        setBlogPosts(function (prevBlogPosts) {
            return prevBlogPosts.map(function (post) {
                if (post.id === postId) {
                    return __assign(__assign({}, post), { comments: __spreadArray(__spreadArray([], post.comments, true), [comment], false) });
                }
                return post;
            });
        });
    };
    return (react_1.default.createElement(exports.BlogContext.Provider, { value: { admins: admins, blogPosts: blogPosts, addBlogPost: addBlogPost, likeBlogPost: likeBlogPost, favoriteBlogPost: favoriteBlogPost, addCommentToPost: addCommentToPost } }, children));
}
exports.BlogProvider = BlogProvider;
