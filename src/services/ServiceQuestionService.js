export default class ServiceQuestionService {
    static instance = null;

    backend_url = 'http://localhost:8080';
    //backend_url = 'https://cs4500-sp19-noideainc.herokuapp.com';

    static getInstance() {
        if(ServiceQuestionService.instance === null) {
            ServiceQuestionService.instance = new ServiceQuestionService()
        }
        return this.instance
    }

    findServiceQuestionById = (id) =>
        fetch(`${this.backend_url}/api/service-questions/${id}`)
            .then(response => response.json())
    findAllServiceQuestions = () =>
        fetch(`${this.backend_url}/api/service-questions`)
            .then(response => response.json())

    findAllServiceQuestionsByServiceId = (serviceId) =>
        fetch(`${this.backend_url}/api/service-questions/service/${serviceId}`)
            .then(response => response.json())

    createQuestion = (question) =>
        fetch(`${this.backend_url}/api/service-questions`,
        {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {'content-type': 'application/json'}
        })

    updateQuestion = (id, question) =>
        fetch(`${this.backend_url}/api/service-questions/${id}`,
        {
            method: 'PUT',
            body: JSON.stringify(question),
            headers: {'content-type': 'application/json'}
        })

    deleteQuestion = (id) =>
        fetch(`${this.backend_url}/api/service-questions/${id}`,
        {
            method: 'DELETE',
        })
}