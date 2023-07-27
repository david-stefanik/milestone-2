"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_bootstrap_1 = require("react-bootstrap");
const BlogContext_1 = require("./Blog-Page/BlogContext");
require("./Blog.css");
function Blog() {
    const { admins, blogPosts, likeBlogPost, favoriteBlogPost, addCommentToPost } = (0, react_1.useContext)(BlogContext_1.BlogContext);
    const [searchTerm, setSearchTerm] = (0, react_1.useState)('');
    const [comments, setComments] = (0, react_1.useState)({});
    const handleCommentChange = (postId, comment) => {
        setComments((prevComments) => (Object.assign(Object.assign({}, prevComments), { [postId]: comment })));
    };
    const renderBlogPosts = (admin) => {
        if (admins[admin]) {
            const filteredPosts = blogPosts.filter((post) => post.author.toLowerCase() === admin);
            return filteredPosts.map((post, index) => {
                const highlightedTitle = post.title.replace(new RegExp(`(${searchTerm})`, 'gi'), '<mark>$1</mark>');
                const highlightedAuthor = post.author.replace(new RegExp(`(${searchTerm})`, 'gi'), '<mark>$1</mark>');
                const highlightedDescription = post.description.replace(new RegExp(`(${searchTerm})`, 'gi'), '<mark>$1</mark>');
                const comment = comments[post.id] || '';
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
                        react_1.default.createElement(react_bootstrap_1.Card.Link, { href: "#", onClick: () => likeBlogPost(post.id) },
                            "Like (",
                            post.likes,
                            ")"),
                        react_1.default.createElement(react_bootstrap_1.Card.Link, { href: "#", onClick: () => favoriteBlogPost(post.id) }, post.favorite ? 'Remove from Favorites' : 'Add to Favorites')),
                    react_1.default.createElement(react_bootstrap_1.Card.Body, null,
                        react_1.default.createElement("form", { onSubmit: (e) => {
                                e.preventDefault();
                                addCommentToPost(post.id, comment);
                                handleCommentChange(post.id, '');
                            } },
                            react_1.default.createElement("input", { type: "text", placeholder: "Leave a comment...", value: comment, onChange: (e) => handleCommentChange(post.id, e.target.value) }),
                            react_1.default.createElement("button", { type: "submit" }, "Submit")),
                        react_1.default.createElement("div", null, post.comments.map((comment, commentIndex) => (react_1.default.createElement("p", { key: commentIndex }, comment)))))));
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
                        react_1.default.createElement("input", { type: "text", placeholder: "Search", className: "search-input", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) }))))),
        react_1.default.createElement("div", { className: "posts" },
            react_1.default.createElement("div", { className: "post-container" },
                react_1.default.createElement("div", { className: "button-container" }, Object.keys(admins).map((admin) => (react_1.default.createElement(react_router_dom_1.Link, { to: `/${admin}`, key: admin, className: "blog-button name-box" }, admin.toUpperCase()))))),
            react_1.default.createElement("div", { className: "video-banner" },
                react_1.default.createElement("video", { className: "video-player", src: "https://player.vimeo.com/external/368763065.sd.mp4?s=13988c9dbaddf24bcbceb333cc76d1936255e78a&profile_id=164&oauth2_token_id=57447761", autoPlay: true, loop: true, muted: true })),
            react_1.default.createElement("div", { className: "blog-post-container" }, Object.keys(admins).map((admin) => renderBlogPosts(admin))))));
}
exports.default = Blog;
