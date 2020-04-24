var friends = require("../data/friends.js");


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        if (friends.length < i) {
            friends.push(req.body);
            res.json(true);
        } 
    });

    app.post("/api/friends", function (req, res) {
        

        res.json({ ok: true });
    });
};
