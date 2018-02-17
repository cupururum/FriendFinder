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

        var minScore = diffScoreArrayOfFriends[0].diffScore
        for (j = 1; j <  diffScoreArrayOfFriends.length; j++) {
            if (minScore >= diffScoreArrayOfFriends[j].diffScore) {
                minScore = diffScoreArrayOfFriends[j].diffScore
                var compatName = diffScoreArrayOfFriends[j].name
            } else {
                // ignore!
            }
        }
      
        var resultPhoto
        for (k = 0; k < friendsData.length; k++) {
            if (compatName === friendsData[k].name) {
                resultPhoto = friendsData[k].photo
                console.log(resultPhoto)
            }
        }

        friendsData.push(req.body)
        res.json({ name: compatName,
                   photo: resultPhoto
                 });
    })

}



module.exports = routes