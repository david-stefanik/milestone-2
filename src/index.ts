import * as React from 'react';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BlogProvider } from './Blog-Page/BlogContext';
import ReactDOM from 'react-dom';
import './BlogAdminPage.css';



// Create a root to render the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application inside the root
root.render(
  <React.StrictMode>
    {/* Wrap the App component with the BlogProvider to provide blog data */}
    <BlogProvider>
      <App />
    </BlogProvider>
  </React.StrictMode>
);
