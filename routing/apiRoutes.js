var friends = require("../app/data/friends.js");


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        //need to add a friend to friends
        req.body ={
            //copy friend 
        }
        console.log(req.body);
        
        if (friends.length < i) {
            friends.push(req.body);
            res.json(true);
        } 
    });

};
