export default class ServiceAnswerService {
    static instance = null;
    static getInstance() {
        if(ServiceAnswerService.instance === null) {
            ServiceAnswerService.instance = new ServiceAnswerService()
        }
        return this.instance
    }
    findServiceAnswerById = id =>
        fetch("http://localhost:8080/api/service-answers/${id}")
            .then(response => response.json())
    findAllServiceAnswers = () =>
        fetch("http://localhost:8080/api/service-answers/")
            .then(response => response.json())
}