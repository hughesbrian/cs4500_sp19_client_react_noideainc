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
}
