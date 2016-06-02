var axios = require('axios')

const id = "YOUR_CLIENT_ID",
    sec = "YOUR_SECRET_ID",
    param = `?client_id=${id}&client_secret=${sec}`

// axios returns a propmise
function getUserInfo(username) {
    return axios.get(`https://api.github.com/users/${username}${param}`)
}


const helpers = {
    getPlayersInfo: function(players) {
        return axios.all(players.map(username => getUserInfo(username)))
        .then(info => info.map(user => user.data))
        .catch(err => { console.warn('Error in getPlayersInfo ', err) })
    }
}

module.exports = helpers
