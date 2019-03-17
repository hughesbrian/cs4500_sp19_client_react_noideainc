export default class FAQAnswerService {
    static instance = null;
    static getInstance() {
        if(FAQAnswerService.instance === null) {
            FAQAnswerService.instance = new FAQAnswerService()
        }
        return this.instance
    }

    findFAQAnswerById = id =>
        fetch(`http://localhost:8080/api/faq-answers/${id}`)
            .then(response => response.json())

    findAllFAQAnswers = () =>
        fetch("http://localhost:8080/api/faq-answers")
            .then(response => response.json())

    createFAQAnswer = newFAQAnswer =>
        fetch("http://localhost:8080/api/faq-answers", 
        {
            method: 'POST',
            body: JSON.stringify(newFAQAnswer),
            headers: {'content-type': 'application/json'}
        }).then(response => response.json())

    deleteFAQAnswer = id =>
        fetch(`http://localhost:8080/api/faq-answers/${id}`, 
        {
            method: 'DELETE'
        })

    editFAQAnswer = answer =>
        fetch(`http://localhost:8080/api/faq-answers/${answer.id}`,
        {
            method: 'PUT',
            body: JSON.stringify({
                answer: answer.answer
            }),
            headers: {'content-type': 'application/json'}
        }).then(response => response.json())

    findFiltered = (answer) =>
        fetch("http://localhost:8080/api/faq-answers/filtered?answer=" + answer)
            .then(response => response.json())
}