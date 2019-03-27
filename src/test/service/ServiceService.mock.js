import services from '../MockData/Services.mock'

global.fetch = jest.fn().mockImplementation((url, config) => {
    if (!config) {
        if (url.indexOf('api/services/777') != -1) {
            return services[0];
        } else if (url.indexOf('api/services/778') != -1) {
            return services[1];
        } else if (url.indexOf('api/services') != -1) {
            return new Promise((resolve, reject) => {
                resolve({
                    json: function () {
                        return services;
                    }
                })
            })
        }
    } else if (config.method === 'post') {
        let service = JSON.parse(config.body);
        service.id = (new Date()).getTime();
        services.push(service);
        return new Promise((resolve, reject) => {
            resolve({
                json: function () {
                    return services;
                }
            })
        })
    } else if (config.method === 'put') {
        if (url.indexOf('api/services/777') != -1) {
            services[0] = JSON.parse(config.body);
            return services[0];
        } else if (url.indexOf('api/services/778') != -1) {
            services[1] = JSON.parse(config.body);
            return services[1];
        }
    } else if (config.method === 'delete') {
        if (url.indexOf('api/services/777') != -1) {
            return services[0];
        } else if (url.indexOf('api/services/778') != -1) {
            return services[1];
        }
    }
});