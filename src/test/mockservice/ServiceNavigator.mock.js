import serviceCategories from '../MockData/ServiceCategories.mock.json'
import services from '../MockData/Services.mock.json'

global.fetch = jest.fn().mockImplementation((url, config) => {
    if(!config) {
        if(url.indexOf("api/categories/1") != -1){
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                    return serviceCategories[0]
                }})
            })
        }
        else if(url.indexOf("api/categories/2") != -1){
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                    return serviceCategories[1]
                }})
            })
        }
        else if(url.indexOf("api/categories/paged?page=0&count=10") != -1) {
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                    return {content: serviceCategories, totalPages: 1}
                }})
            })
        }
        else if(url.indexOf("api/categories") != -1) {
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                    return serviceCategories
                }})
            })
        }
        else if(url.indexOf("api/services") != -1) {
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                    return services
                }})
            })
        }
    }
    else if(config.method === 'post') {
        let sc = JSON.parse(config.body)
        sc.id = (new Date()).getTime()
        serviceCategories.push(sc)
        return new Promise((resolve, reject) => {
            resolve({ json: function() {
                return serviceCategories
            }})
        })
    }
    else if(config.method === 'put') {
        let sc = JSON.parse(config.body)
        serviceCategories[0] = sc
        return new Promise((resolve, reject) => {
            resolve({ json: function() {
                return serviceCategories
            }})
        })
    }
    else if(config.method === 'delete') {
        serviceCategories.shift()
        return new Promise((resolve, reject) => {
            resolve({ json: function() {
                return serviceCategories
            }})
        })
    }
})
