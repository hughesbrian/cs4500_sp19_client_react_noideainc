import providers from '../MockData/Providers.mock.json'

global.fetch = jest.fn().mockImplementation((url, config) => {
    // default GET request
    if (!config) {
        if (url.indexOf('/api/service-search/123/1/2') != -1) {
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                        return providers
                    }
                })
            })         
        }
    } 
});