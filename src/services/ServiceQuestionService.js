export default class ServiceQuestionService {
    static instance = null;
    static getInstance() {
        if(ServiceQuestionService.instance === null) {
            ServiceQuestionService.instance = new ServiceQuestionService()
        }
        return this.instance
    }
    findServiceQuestionById = id =>
        fetch("https://cs4500-sp19-noideainc.herokuapp.com/api/service-questions/" + id)
            .then(response => response.json())
    findAllServiceQuestions = () =>
        fetch("https://cs4500-sp19-noideainc.herokuapp.com/api/service-questions")
            .then(response => response.json())
}