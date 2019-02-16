export default class ServiceAnswerService {
    static instance = null;
    static getInstance() {
        if(ServiceAnswerService.instance === null) {
            ServiceAnswerService.instance = new ServiceAnswerService()
        }
        return this.instance
    }
    findServiceAnswerById = id =>
        fetch("https://cs4500-sp19-noideainc.herokuapp.com/api/service-answers/${id}")
            .then(response => response.json())
    findAllServiceAnswers = () =>
        fetch("https://cs4500-sp19-noideainc.herokuapp.com/api/service-answers/")
            .then(response => response.json())
}