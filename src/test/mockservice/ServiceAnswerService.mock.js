import serviceAnswers from '../MockData/ServiceAnswer.mock.json'
import serviceQuestions from '../MockData/ServiceQuestion.mock'

global.fetch = jest.fn().mockImplementation((url, config) => {
    if(!config) {
        if(url.indexOf("api/service-answers/1") != -1){
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                        return serviceAnswers[0]
                    }})
            })
        }
        else if(url.indexOf("api/service-answers/2") != -1){
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                        return serviceAnswers[1]
                    }})
            })
        }
        else if(url.indexOf("api/service-answers/3") != -1){
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                        return serviceAnswers[2]
                    }})
            })
        }
        else if(url.indexOf("api/service-answers/4") != -1){
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                        return serviceAnswers[3]
                    }})
            })
        }
        else if(url.indexOf("api/service-answers/5") != -1){
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                        return serviceAnswers[4]
                    }})
            })
        }
        else if(url.indexOf("api/service-answers/6") != -1){
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                        return serviceAnswers[5]
                    }})
            })
        }
        else if(url.indexOf("api/service-answers") != -1) {
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                        return serviceAnswers
                    }})
            })

        }
        else if(url.indexOf("api/service-questions/1") != -1){
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                        return serviceQuestions[0]
                    }})
            })
        }
        else if(url.indexOf("api/service-questions/2") != -1){
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                        return serviceQuestions[1]
                    }})
            })
        }
        else if(url.indexOf("api/service-questions/3") != -1){
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                        return serviceQuestions[2]
                    }})
            })
        }
        else if(url.indexOf("api/service-questions") != -1) {
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                        return serviceQuestions
                    }})
            })


        }
    }
    else if(config.method === 'post') {
        let sc = JSON.parse(config.body)
        sc.id = (new Date()).getTime()
        serviceAnswers.push(sc)
        return new Promise((resolve, reject) => {
            resolve({ json: function() {
                    return serviceAnswers
                }})
        })
    }
    else if(config.method === 'put') {
        let sc = JSON.parse(config.body)
        serviceAnswers[0] = sc
        return new Promise((resolve, reject) => {
            resolve({ json: function() {
                    return serviceAnswers
                }})
        })
    }
    else if(config.method === 'delete') {
        serviceAnswers.shift()
        return new Promise((resolve, reject) => {
            resolve({ json: function() {
                    return serviceAnswers
                }})
        })
    }
})
