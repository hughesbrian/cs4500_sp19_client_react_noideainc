export default class ServiceService {
    static instance = null;
    static getInstance() {
        if(ServiceService.instance === null) {
            ServiceService.instance = new ServiceService()
        }
        return this.instance
    }
    findServiceById = serviceId =>
        fetch("https://cs4500-sp19-noideainc.herokuapp.com/api/services/${serviceId}")
            .then(response => response.json())
    findAllServices = () =>
        fetch("https://cs4500-sp19-noideainc.herokuapp.com/api/services")
            .then(response => response.json())
    createService = service =>
        fetch(`https://cs4500-sp19-noideainc.herokuapp.com/api/services`,
            {
                method: 'POST',
                body: JSON.stringify(service),
                headers: {'content-type': 'application/json'}
            })
            .then(response => response.json())
    updateService = service =>
        fetch(`https://cs4500-sp19-noideainc.herokuapp.com/api/services/${service.id}`,
            {
                method: 'PUT',
                body: JSON.stringify(service),
                headers: {'content-type': 'application/json'}
            })
            .then(response => response.json())
    deleteService = service =>
        fetch(`https://cs4500-sp19-noideainc.herokuapp.com/api/services/${service.id}`,
            {
                method: 'DELETE',
            })

    updateServiceScore = service =>
        // change to http://localhost:8080 to test locally
        fetch(`hhttps://cs4500-sp19-noideainc.herokuapp.com/api/services/score/${service.id}`, {
            method: 'put',
            body: JSON.stringify(service),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
}
