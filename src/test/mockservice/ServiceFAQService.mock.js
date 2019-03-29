import FAQ from '../mockdata/FAQ.mock.json'

global.fetch = jest.fn().mockImplementation((url, config) => {
    if(!config) {
        if(url.indexOf("api/faqs/filtered?title=test&question=22222222") != -1){
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                    return FAQ[7]
                }})
            })
        }
        else if(url.indexOf("api/faqs/filtered") != -1) {
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                    return FAQ
                }})
            })
        }
    }
})
