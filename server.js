const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req)
  switch (req.url) {
    case '/index.html':
      fs.readFile("./index.html", (err, html) => {
        if (err) {
          res.statusCode = 500;
          res.end(`Error getting file: ${err}`);
        }
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write(html);
        res.end();
      });
      break;

    case '/about.html':
      fs.readFile("./about.html", (err, html) => {
        if (err) {
          res.statusCode = 500;
          res.end(`Error getting file: ${err}`);
        }
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write(html);
        res.end();
      });
      break;

    case '/help.html':
      fs.readFile("./help.html", (err, html) => {
        if (err) {
          res.statusCode = 500;
          res.end(`Error getting file: ${err}`);
        }
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write(html);
        res.end();
      });
      break;

    case '/contact.html':
      fs.readFile("./contact.html", (err, html) => {
        if (err) {
          res.statusCode = 500;
          res.end(`Error getting file: ${err}`);
        }
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write(html);
        res.end();
      });
      break;

    default:
      fs.readFile("./css/style.css", (err, html) => {
        if (err) {
          res.statusCode = 500;
          res.end(`Error getting file: ${err}`);
        } else {
          res.statusCode = 200;
          res.setHeader("Content-type", "text/css");
          res.write(html);
          res.end();
        }
      });
      break;
  }
})

server.listen(8910, () => {
  console.log("Server running!")
})