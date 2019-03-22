import Axios from 'axios'

const BASE_PATH = (process.env.NODE_ENV !== 'development')
    ? '/user'
    : 'http://localhost:3003/user'


export default {
    login,
    logout,
    // signup
}

  
async function login(credentials) {
    try {
        const res = await Axios.post(`${BASE_PATH}/login`, credentials) //tell the server to try to log in 
        const loggedUser = res.data
        return loggedUser
    }
    catch {
       throw(err)
    }
}

function logout() {
    try {
        Axios.get(`${BASE_PATH}/logout`)
        return Promise.resolve()
    } 
    catch {
        throw('could not log out')
    }
}
function signup(user) {

    return Axios.post(`${BASE_PATH}/logout`, user)
        .then(res => res.data)
        .catch(err => err)
        
        
}
function getUser(userId) {

    return axios.get(`${BASE_PATH}/${userId}`)
        .then(res => res.data)
        .catch(err => err)
        
        
}

