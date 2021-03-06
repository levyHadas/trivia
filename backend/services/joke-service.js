const Axios = require('axios')

module.exports = {
    suggestRandomJoke,
}

async function suggestRandomJoke() {
    const res = await Axios.get('http://api.icndb.com/jokes/random')
    return res.data.value.joke
}

