export default class ServiceAnswerService {
    static instance = null;

    //backend_url = 'http://localhost:8080';
    backend_url = 'https://cs4500-sp19-noideainc.herokuapp.com';

    static getInstance() {
        if(ServiceAnswerService.instance === null) {
            ServiceAnswerService.instance = new ServiceAnswerService()
        }
        return this.instance
    }
    findServiceAnswerById = id =>
        fetch(`${this.backend_url}/api/service-answers/${id}`)
            .then(response => response.json())
    findAllServiceAnswers = () =>
        fetch(`${this.backend_url}/api/service-answers/`)
            .then(response => response.json())

    createServiceAnswer = answer => {
        delete answer.id;
        return fetch(`${this.backend_url}/api/service-answers/`, {
            method: 'post',
            body: JSON.stringify(answer),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    }

    updateServiceAnswer= answer =>
        fetch(`${this.backend_url}/api/service-answers/${answer.id}`, {
            method: 'put',
            body: JSON.stringify(answer),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())

    deleteServiceAnswer = id =>
        fetch(`${this.backend_url}/api/service-answers/${id}`, {
            method: 'delete'
        })
}