"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var BlogContext_1 = require("./Blog-Page/BlogContext");
require("./BlogAdminPage.css");
function BlogAdminPage() {
    var addBlogPost = (0, react_1.useContext)(BlogContext_1.BlogContext).addBlogPost;
    var _a = (0, react_1.useState)(''), admin = _a[0], setAdmin = _a[1];
    var _b = (0, react_1.useState)(''), password = _b[0], setPassword = _b[1];
    var _c = (0, react_1.useState)(false), isLoggedIn = _c[0], setIsLoggedIn = _c[1];
    var handleAdminChange = function (event) {
        setAdmin(event.target.value);
    };
    var handlePasswordChange = function (event) {
        setPassword(event.target.value);
    };
    var handleLogin = function (event) {
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
    var handleTitleChange = function (event) {
        setTitle(event.target.value);
    };
    var handleDateChange = function (event) {
        setDate(event.target.value);
    };
    var handleContentChange = function (event) {
        setContent(event.target.value);
    };
    var handleSubmit = function (event) {
        event.preventDefault();
        var newBlogPost = {
            title: title,
            author: admin,
            date: date,
            content: content,
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
    var _d = (0, react_1.useState)(''), title = _d[0], setTitle = _d[1];
    var _e = (0, react_1.useState)(''), date = _e[0], setDate = _e[1];
    var _f = (0, react_1.useState)(''), content = _f[0], setContent = _f[1];
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
