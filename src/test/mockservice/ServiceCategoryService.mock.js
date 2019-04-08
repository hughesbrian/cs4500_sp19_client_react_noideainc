import serviceCategories from '../mockdata/ServiceCategories.mock.json'
import serviceCategories2 from '../mockdata/ServiceCategories2.mock.json'

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
        if(url.indexOf("/api/categories/score/1") != -1) {
            let sc = JSON.parse(config.body)
            sc.score = sc.score + 1
            serviceCategories2[0] = sc
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                    return serviceCategories2
                }})
            })
        } else {
            let sc = JSON.parse(config.body)
            serviceCategories[0] = sc
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                    return serviceCategories
                }})
            })
        }
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
