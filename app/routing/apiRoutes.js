
// import server.js file
//GET route with url '/api/frineds' will isplay JSON of all possible friends
//POST routes '/api/friends' will handle incosming survey results. WIll also handle compatibility logic

app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/frineds", function(req, res) {
      const newFriend = req.body;

    friends.push(newFriend);
    res.json(newFriend);
  });