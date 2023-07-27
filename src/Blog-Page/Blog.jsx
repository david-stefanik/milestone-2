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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_bootstrap_1 = require("react-bootstrap");
var BlogContext_1 = require("./BlogContext");
require("./Blog.css");
function Blog() {
    var _a = (0, react_1.useContext)(BlogContext_1.BlogContext), admins = _a.admins, blogPosts = _a.blogPosts, likeBlogPost = _a.likeBlogPost, favoriteBlogPost = _a.favoriteBlogPost, addCommentToPost = _a.addCommentToPost;
    var _b = (0, react_1.useState)(''), searchTerm = _b[0], setSearchTerm = _b[1];
    var _c = (0, react_1.useState)({}), comments = _c[0], setComments = _c[1];
    var handleCommentChange = function (postId, comment) {
        setComments(function (prevComments) {
            var _a;
            return (__assign(__assign({}, prevComments), (_a = {}, _a[postId] = comment, _a)));
        });
    };
    var renderBlogPosts = function (admin) {
        if (admins[admin]) {
            var filteredPosts = blogPosts.filter(function (post) { return post.author.toLowerCase() === admin; });
            return filteredPosts.map(function (post, index) {
                var highlightedTitle = post.title.replace(new RegExp("(".concat(searchTerm, ")"), 'gi'), '<mark>$1</mark>');
                var highlightedAuthor = post.author.replace(new RegExp("(".concat(searchTerm, ")"), 'gi'), '<mark>$1</mark>');
                var highlightedDescription = post.description.replace(new RegExp("(".concat(searchTerm, ")"), 'gi'), '<mark>$1</mark>');
                var comment = comments[post.id] || '';
                return (react_1.default.createElement(react_bootstrap_1.Card, { key: index, className: "blog-card" },
                    react_1.default.createElement(react_bootstrap_1.Card.Img, { variant: "top", src: post.image, alt: post.title }),
                    react_1.default.createElement(react_bootstrap_1.Card.Body, null,
                        react_1.default.createElement(react_bootstrap_1.Card.Title, { dangerouslySetInnerHTML: { __html: highlightedTitle } }),
                        react_1.default.createElement(react_bootstrap_1.Card.Subtitle, { className: "mb-2 text-muted" },
                            react_1.default.createElement("span", { dangerouslySetInnerHTML: { __html: highlightedAuthor } })),
                        react_1.default.createElement(react_bootstrap_1.Card.Text, { dangerouslySetInnerHTML: { __html: highlightedDescription } })),
                    react_1.default.createElement(react_bootstrap_1.ListGroup, { className: "list-group-flush" },
                        react_1.default.createElement(react_bootstrap_1.ListGroup.Item, null, post.date)),
                    react_1.default.createElement(react_bootstrap_1.Card.Body, null,
                        react_1.default.createElement(react_bootstrap_1.Card.Link, { href: "#" }, "Read More"),
                        react_1.default.createElement(react_bootstrap_1.Card.Link, { href: "#", onClick: function () { return likeBlogPost(post.id); } },
                            "Like (",
                            post.likes,
                            ")"),
                        react_1.default.createElement(react_bootstrap_1.Card.Link, { href: "#", onClick: function () { return favoriteBlogPost(post.id); } }, post.favorite ? 'Remove from Favorites' : 'Add to Favorites')),
                    react_1.default.createElement(react_bootstrap_1.Card.Body, null,
                        react_1.default.createElement("form", { onSubmit: function (e) {
                                e.preventDefault();
                                addCommentToPost(post.id, comment);
                                handleCommentChange(post.id, '');
                            } },
                            react_1.default.createElement("input", { type: "text", placeholder: "Leave a comment...", value: comment, onChange: function (e) { return handleCommentChange(post.id, e.target.value); } }),
                            react_1.default.createElement("button", { type: "submit" }, "Submit")),
                        react_1.default.createElement("div", null, post.comments.map(function (comment, commentIndex) { return (react_1.default.createElement("p", { key: commentIndex }, comment)); })))));
            });
        }
        return null;
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("nav", { className: "nav" },
            react_1.default.createElement("h2", null, "CODING TO SUCCESS"),
            react_1.default.createElement("ul", { className: "menu" },
                react_1.default.createElement("li", null,
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "HOME")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/blog-admin" }, "BLOG")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement("div", { className: "search-container" },
                        react_1.default.createElement("input", { type: "text", placeholder: "Search", className: "search-input", value: searchTerm, onChange: function (e) { return setSearchTerm(e.target.value); } }))))),
        react_1.default.createElement("div", { className: "posts" },
            react_1.default.createElement("div", { className: "post-container" },
                react_1.default.createElement("div", { className: "button-container" }, Object.keys(admins).map(function (admin) { return (react_1.default.createElement(react_router_dom_1.Link, { to: "/".concat(admin), key: admin, className: "blog-button name-box" }, admin.toUpperCase())); }))),
            react_1.default.createElement("div", { className: "video-banner" },
                react_1.default.createElement("video", { className: "video-player", src: "https://player.vimeo.com/external/368763065.sd.mp4?s=13988c9dbaddf24bcbceb333cc76d1936255e78a&profile_id=164&oauth2_token_id=57447761", autoPlay: true, loop: true, muted: true })),
            react_1.default.createElement("div", { className: "blog-post-container" }, Object.keys(admins).map(function (admin) { return renderBlogPosts(admin); })))));
}
exports.default = Blog;
