var friendData = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friendlist", function(req, res) {
        res.json(friendData);
      });

app.post("/api/friendlist", function(req, res) {
    friendData.push(req.body);
    res.json(true);
    // console.log(req.body);
    console.log(friendData);
  });
}