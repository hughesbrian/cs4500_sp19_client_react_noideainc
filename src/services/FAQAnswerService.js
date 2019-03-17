const baseURL = process.env.NODE_ENV !== 'development' ? 'http://localhost:8080' : 'https://cs4500-sp19-noideainc.herokuapp.com'

export default class FAQAnswerService {
    static instance = null;
    static getInstance() {
        if(FAQAnswerService.instance === null) {
            FAQAnswerService.instance = new FAQAnswerService()
        }
        return this.instance
    }

    findFAQAnswerById = id =>
        fetch(baseURL + `/api/faq-answers/${id}`)
            .then(response => response.json())

    findAllFAQAnswers = () =>
        fetch(baseURL + "/api/faq-answers")
            .then(response => response.json())

    createFAQAnswer = newFAQAnswer =>
        fetch(baseURL + "/api/faq-answers", 
        {
            method: 'POST',
            body: JSON.stringify(newFAQAnswer),
            headers: {'content-type': 'application/json'}
        }).then(response => response.json())

    deleteFAQAnswer = id =>
        fetch(baseURL + `/api/faq-answers/${id}`, 
        {
            method: 'DELETE'
        })

    editFAQAnswer = answer =>
        fetch(baseURL + `/api/faq-answers/${answer.id}`,
        {
            method: 'PUT',
            body: JSON.stringify({
                answer: answer.answer
            }),
            headers: {'content-type': 'application/json'}
        }).then(response => response.json())

    findFiltered = (answer) =>
        fetch(baseURL + "/api/faq-answers/filtered?answer=" + answer)
            .then(response => response.json())
}