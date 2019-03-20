
const baseURL = process.env.NODE_ENV !== 'development' ? 'http://localhost:8080' : 'https://cs4500-sp19-noideainc.herokuapp.com'

export default class FAQService {
    static instance = null;
    static getInstance() {
        if(FAQService.instance === null) {
            FAQService.instance = new FAQService()
        }
        return this.instance
    }

    findFAQById = id =>
        fetch(baseURL + `/api/faqs/${id}`)
            .then(response => response.json())

    findAllFAQs = () =>
        fetch(baseURL + "/api/faqs")
            .then(response => response.json())

    createFAQ = newFAQ =>
        fetch(baseURL + "/api/faqs", 
        {
            method: 'POST',
            body: JSON.stringify(newFAQ),
            headers: {'content-type': 'application/json'}
        }).then(response => response.json())

    deleteFAQ = id =>
        fetch(baseURL + `/api/faqs/${id}`, 
        {
            method: 'DELETE'
        })

    editFAQ = question =>
        fetch(baseURL + `/api/faqs/${question.id}`,
        {
            method: 'PUT',
            body: JSON.stringify({
                question: question.question,
                title: question.title
            }),
            headers: {'content-type': 'application/json'}
        }).then(response => response.json())

    findFiltered = (title, question) =>
        fetch(baseURL + "/api/faqs/filtered?title=" + title + "&question=" + question)
            .then(response => response.json())

    findPagedFAQs = (page, count) =>
        fetch(baseURL + "/api/faqs/paged?page=" + page + "&count=" + count)
            .then(response => response.json())
}