export default class FAQService {
    static instance = null;
    static getInstance() {
        if(FAQService.instance === null) {
            FAQService.instance = new FAQService()
        }
        return this.instance
    }

    findFAQById = id =>
        fetch(`http://localhost:8080/api/faqs/${id}`)
            .then(response => response.json())

    findAllFAQs = () =>
        fetch("http://localhost:8080/api/faqs")
            .then(response => response.json())

    createFAQ = newFAQ =>
        fetch("http://localhost:8080/api/faqs", 
        {
            method: 'POST',
            body: JSON.stringify(newFAQ),
            headers: {'content-type': 'application/json'}
        }).then(response => response.json())

    deleteFAQ = id =>
        fetch(`http://localhost:8080/api/faqs/${id}`, 
        {
            method: 'DELETE'
        })

    editFAQ = question =>
        fetch(`http://localhost:8080/api/faqs/${question.id}`,
        {
            method: 'PUT',
            body: JSON.stringify({
                question: question.question,
                title: question.title
            }),
            headers: {'content-type': 'application/json'}
        }).then(response => response.json())

    findFiltered = (title, question) =>
        fetch("http://localhost:8080/api/faqs/filtered?title=" + title + "&question=" + question)
            .then(response => response.json())
}