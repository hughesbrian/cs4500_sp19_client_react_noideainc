export default class ServiceQuestionService {
    static instance = null;
    static getInstance() {
        if(ServiceQuestionService.instance === null) {
            ServiceQuestionService.instance = new ServiceQuestionService()
        }
        return this.instance
    }
    findServiceQuestionById = id =>
        fetch(`cs4500-sp19-noideainc.herokuapp.com/api/questions/${id}`)
            .then(response => response.json())
    findAllServiceQuestions = () =>
        fetch("cs4500-sp19-noideainc.herokuapp.com/api/questions")
            .then(response => response.json())
}