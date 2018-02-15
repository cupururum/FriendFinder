const path = require('path')

var getHtml = function(app) {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'))
    })

    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/survey.html'))
    })

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'))
    })
}

module.exports = getHtml