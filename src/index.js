import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import path from 'path';
import App from './App';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  const appString = ReactDOMServer.renderToString(<App />);
  const indexHTML = path.join(__dirname, 'build', 'index.html');
  res.sendFile(indexHTML.replace(/\\/g, '/').replace(/\/index\.html$/, '/404.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
