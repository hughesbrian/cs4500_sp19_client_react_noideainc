export default class FAQAnswerService {
    static instance = null;
    static getInstance() {
        if(FAQAnswerService.instance === null) {
            FAQAnswerService.instance = new FAQAnswerService()
        }
        return this.instance
    }
    findFAQAnswerById = id =>
        fetch("https://cs4500-sp19-noideainc.herokuapp.com/api/faq-answers/${id}")
            .then(response => response.json())
    findAllFAQAnswers = () =>
        fetch("https://cs4500-sp19-noideainc.herokuapp.com/api/faq-answers")
            .then(response => response.json())
}