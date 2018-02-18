const friendsData = require('../data/friends')

var routes = function(app){

    app.get("/api/friends", (req, res) => {
        res.json(friendsData)
    })

    app.post('/api/friends', (req, res) => {

        var scoresNewUser = req.body.scores    
        var diffScoreArrayOfFriends = []
        
        friendsData.forEach((friend) => {
            var difScoreDict = {
                name: undefined,
                diffScore: undefined
            }
            var sumDif = 0
            var friendScores = friend.scores
 
            for (i = 0; i < friendScores.length; i++ ){
                var difScore = Math.abs(scoresNewUser[i] - friendScores[i])
                sumDif += difScore
                difScoreDict.name = friend.name
                difScoreDict.diffScore = sumDif
            }
            diffScoreArrayOfFriends.push(difScoreDict)
        })
    
        var minScore 
        var compatName
        for (j = 0; j <  diffScoreArrayOfFriends.length-1; j++) {
            if (diffScoreArrayOfFriends[j].diffScore > diffScoreArrayOfFriends[j+1].diffScore) {
                minScore = diffScoreArrayOfFriends[j+1].diffScore
                compatName = diffScoreArrayOfFriends[j+1].name
            } else {
                compatName = diffScoreArrayOfFriends[j].name
                minScore = diffScoreArrayOfFriends[j].diffScore
            }
        }
    
        for (k = 0; k < friendsData.length; k++) {
            if (compatName === friendsData[k].name) {
                var resultPhoto = friendsData[k].photo
            }
        }

        friendsData.push(req.body)
        res.json({ 
                name: compatName,
                photo: resultPhoto
                 });
    })
}

module.exports = routes