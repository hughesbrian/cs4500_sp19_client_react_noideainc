import users from "../MockData/Users1.mock.json"
import updatedUsers from "../MockData/updatedUsers.mock.json"

global.fetch = jest.fn().mockImplementation((url, config) => {
    // default GET request
    if (!config) {
        if (url.indexOf('/api/checkLogin') != -1) {
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                        return users[0]
                    }
                })
            })         
        }
    } else if(config.method === 'post') {
        if (url.indexOf('/api/login') != -1) {
            // let user = JSON.parse(config.body)
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                        return users[0]
                    }
                })
            })         
        } else if (url.indexOf('/api/logout') != -1) {
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                        return users[0]
                    }
                })
            })         
        } else if(url.indexOf('/api/register') != -1) {
            let newUser = JSON.parse(config.body)
            newUser.id = (new Date()).getTime();
            updatedUsers.push(newUser)
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                        return newUser
                    }
                })
            })  
        } 
    }
});