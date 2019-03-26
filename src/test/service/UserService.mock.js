import users from '../MockData/Users.mock'

global.fetch = jest.fn().mockImplementation((url, config) => {
    if (!config) {
        if (url.indexOf('api/users/123') != -1) {
            return users[0];
        } else if (url.indexOf('api/users/234') != -1) {
            return users[1];
        } else if (url.indexOf('api/users') != -1) {
            return new Promise((resolve, reject) => {
                resolve({
                    json: function () {
                        return users;
                    }
                })
            })
        }
    } else if (config.method === 'post') {
        let user = JSON.parse(config.body);
        user.id = (new Date()).getTime();
        users.push(user);
        return new Promise((resolve, reject) => {
            resolve({
                json: function () {
                    return users;
                }
            })
        })
    } else if (config.method === 'put') {
        if (url.indexOf('api/users/123') != -1) {
            users[0] = JSON.parse(config.body);
            return users[0];
        } else if (url.indexOf('api/users/234') != -1) {
            users[1] = JSON.parse(config.body);
            return users[1];
        }
    } else if (config.method === 'delete') {
        if (url.indexOf('api/users/123') != -1) {
            return users[0];
        } else if (url.indexOf('api/users/234') != -1) {
            return users[1];
        }
    }
});