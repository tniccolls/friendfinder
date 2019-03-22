var friendData = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friendlist", function(req, res) {
        res.json(friendData);
      });

// app.post("/api/friendlist", function(req, res) {
//     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//     // It will do this by sending out the value "true" have a table
//     // req.body is available since we're using the body parsing middleware
//     friendData.push(req.body);
//   });

app.post("/api/friendlist", function(req, res) {
    friendData.push(req.body);
    res.json(true);
    // console.log(req.body);
    console.log(friendData);
  });
}