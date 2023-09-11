import express from "express";
import React from "react";
import ReactDOMServer from "react-dom-server";

const app = express();
const port = 3000;

import App from "../App";

app.use(express.static("dist"));

app.get("*", (req, res) => {
  const html = ReactDOMServer.renderToString(<App />);
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>SSR React App</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
