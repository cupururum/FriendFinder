const friensData = require('../data/friends')

var routes = function(app){

    app.get("/api/friends", (req, res) => {
        res.json(friendsData)
    })

    app.post('/api/friends', (req, res) => {
        friendsData.push(req.body)
    })
}

module.exports = routes