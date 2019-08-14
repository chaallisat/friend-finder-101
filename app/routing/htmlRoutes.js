//GET Route to '/survey' which will display survey page
//Default, catch-all route that leads to 'home.html'
  
  const server = http.createServer(handleRequest);

  function handleRequest(req, res) {
  
      const path = req.url;
  
      switch (path) {
  
          case "/survey":
              return serveHTML(`${path}.html`, res);
  
          default:
              return serveHTML("/home.html", res);
      }
  }
  
  const serveHTML = (filePath, res) => {
      return fs.readFile(__dirname + filePath, (err, data) => {
          if (err) throw err;
          res.writeHead(200, { "Content-type": "text/html" });
          res.end(data);
      })
  }