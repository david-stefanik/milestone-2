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
const BlogContext_1 = require("./Blog-Page/BlogContext");
require("./BlogAdminPage.css");
function BlogAdminPage() {
    const { addBlogPost } = (0, react_1.useContext)(BlogContext_1.BlogContext);
    const [admin, setAdmin] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const [isLoggedIn, setIsLoggedIn] = (0, react_1.useState)(false);
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
        }
        else {
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
        return (react_1.default.createElement("div", { className: "login-container" },
            react_1.default.createElement("h2", null, "Login"),
            react_1.default.createElement("form", { onSubmit: handleLogin },
                react_1.default.createElement("div", { className: "form-group" },
                    react_1.default.createElement("label", { htmlFor: "admin" }, "Admin:"),
                    react_1.default.createElement("input", { type: "text", id: "admin", value: admin, onChange: handleAdminChange })),
                react_1.default.createElement("div", { className: "form-group" },
                    react_1.default.createElement("label", { htmlFor: "password" }, "Password:"),
                    react_1.default.createElement("input", { type: "password", id: "password", value: password, onChange: handlePasswordChange })),
                react_1.default.createElement("button", { type: "submit", className: "submit-btn" }, "Submit"))));
    }
    const [title, setTitle] = (0, react_1.useState)('');
    const [date, setDate] = (0, react_1.useState)('');
    const [content, setContent] = (0, react_1.useState)('');
    return (react_1.default.createElement("div", { className: "admin-page" },
        react_1.default.createElement("div", { className: "navbar" },
            react_1.default.createElement("ul", null,
                react_1.default.createElement("li", null,
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/blog" }, "Blog")))),
        react_1.default.createElement("div", { className: "admin-container" },
            react_1.default.createElement("h2", null, "Blog Admin Page"),
            react_1.default.createElement("form", { onSubmit: handleSubmit },
                react_1.default.createElement("div", { className: "form-group" },
                    react_1.default.createElement("label", { htmlFor: "admin" }, "Admin:"),
                    react_1.default.createElement("select", { id: "admin", value: admin, onChange: handleAdminChange },
                        react_1.default.createElement("option", { value: "" }, "Select Admin"),
                        react_1.default.createElement("option", { value: "Aphra" }, "Aphra"),
                        react_1.default.createElement("option", { value: "David" }, "David"),
                        react_1.default.createElement("option", { value: "Jose" }, "Jose"),
                        react_1.default.createElement("option", { value: "Iman" }, "Iman"))),
                react_1.default.createElement("div", { className: "form-group" },
                    react_1.default.createElement("label", { htmlFor: "title" }, "Title:"),
                    react_1.default.createElement("input", { type: "text", id: "title", value: title, onChange: handleTitleChange })),
                react_1.default.createElement("div", { className: "form-group" },
                    react_1.default.createElement("label", { htmlFor: "date" }, "Date:"),
                    react_1.default.createElement("input", { type: "text", id: "date", value: date, onChange: handleDateChange })),
                react_1.default.createElement("div", { className: "form-group" },
                    react_1.default.createElement("label", { htmlFor: "content" }, "Content:"),
                    react_1.default.createElement("textarea", { id: "content", value: content, onChange: handleContentChange })),
                react_1.default.createElement("button", { type: "submit", className: "submit-btn" }, "Submit")))));
}
exports.default = BlogAdminPage;
