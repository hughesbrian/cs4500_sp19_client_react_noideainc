import faqs from '../MockData/FAQ.mock.json'

global.fetch = jest.fn().mockImplementation((url, config) => {
    // default GET request
    if (!config) {
        // fetch all FAQs
        if (url.indexOf('/api/faqs') != -1) {
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                        return faqs
                    }
                })
            })         
        } else if (url.indexOf('api/faqs/1') != -1) {
            // fetch the FAQ that Id is 1
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                        return faqs[0]
                    }
                })
            })
        } else if (url.indexOf('api/faqs/2') != -1) {
            // fetch the FAQ that Id is 2
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                        return faqs[1]
                    }
                })
            })
        }
    } else if(config.method === 'post') {
        // create one FAQ
        if(url.indexOf('/api/faqs') != -1) {
            let newFAQ = JSON.parse(config.body)
            newFAQ.id = (new Date()).getTime();
            faqs.push(newFAQ)
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                        return newFAQ
                    }
                })
            })         
        }
    } else if(config.method === 'put') {
        // edit one FAQ, assume its id is 1
        if (url.indexOf('/api/faqs/1') != -1) {
            let newFAQ = JSON.parse(config.body)
            newFAQ.id = 1
            faqs[0] = newFAQ
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                        return newFAQ
                    }
                })
            })         
        } else if(url.indexOf('/api/faqs/2') != -1) {
            // edit one FAQ, assume its id is 2
            let newFAQ = JSON.parse(config.body)
            newFAQ.id = 2
            faqs[1] = newFAQ
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                        return newFAQ
                    }
                })
            })         
        }
    } else if(config.method === 'delete') {
        // remove one FAQ, assume its id is 1
        if (url.indexOf('/api/faqs/1') != -1) {
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                        return faqs[0]
                    }
                })
            })         
        } else if (url.indexOf('/api/faqs/2') != -1) {
            // remove one FAQ, assume its id is 2
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                        return faqs[1]
                    }
                })
            })         
        }
    }
    
});
