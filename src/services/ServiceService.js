export default class ServiceService {
    static instance = null;

    //backend_url = 'http://localhost:8080';
    backend_url = 'https://cs4500-sp19-noideainc.herokuapp.com';

    static getInstance() {
        if(ServiceService.instance === null) {
            ServiceService.instance = new ServiceService()
        }
        return this.instance
    }
    findServiceById = serviceId =>
        fetch(`${this.backend_url}/api/services/${serviceId}`)
            .then(response => response.json())
    findAllServices = () =>
        fetch(`${this.backend_url}/api/services`)
            .then(response => response.json())
    createService = service =>
        fetch(`${this.backend_url}/api/services`,
            {
                method: 'POST',
                body: JSON.stringify(service),
                headers: {'content-type': 'application/json'}
            })
            .then(response => response.json())
    updateService = service =>
        fetch(`${this.backend_url}/api/services/${service.id}`,
            {
                method: 'PUT',
                body: JSON.stringify(service),
                headers: {'content-type': 'application/json'}
            })
            .then(response => response.json())
    deleteService = service =>
        fetch(`${this.backend_url}/api/services/${service.id}`,
            {
                method: 'DELETE',
            })

    updateServiceScore = service =>
        // change to http://localhost:8080 to test locally
        fetch(`${this.backend_url}/api/services/score/${service.id}`, {
            method: 'put',
            body: JSON.stringify(service),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
}
