
// import server.js file
//GET route with url '/api/frineds' will isplay JSON of all possible friends
//POST routes '/api/friends' will handle incosming survey results. WIll also handle compatibility logic
const myFriends = require("./friends.js");
console.log(myFriends);


app.get("/api/friends", function(req, res) {
    return res.json(myFriends);
  });

  app.post("/api/frineds", function(req, res) {
      const newFriend = req.body;

    myFriends.push(newFriend);
    res.json(newFriend);
  });

const compatible = function() {

  //take answer and friend numbers and compare them
  //loop through all friends to find out which friend is more compatible

}