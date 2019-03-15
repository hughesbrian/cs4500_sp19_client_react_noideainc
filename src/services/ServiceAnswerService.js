export default class ServiceAnswerService {
    static instance = null;
    static getInstance() {
        if(ServiceAnswerService.instance === null) {
            ServiceAnswerService.instance = new ServiceAnswerService()
        }
        return this.instance
    }
    findServiceAnswerById = id =>
        fetch(`https://cs4500-sp19-noideainc.herokuapp.com/api/service-answers/${id}`)
            .then(response => response.json())
    findAllServiceAnswers = () =>
        fetch("https://cs4500-sp19-noideainc.herokuapp.com/api/service-answers/")
            .then(response => response.json())

    createServiceAnswer = answer => {
        delete answer.id;
        return fetch(`https://cs4500-sp19-noideainc.herokuapp.com/api/service-answers/`, {
            method: 'post',
            body: JSON.stringify(answer),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    }

    updateServiceAnswer= answer =>
        fetch(`https://cs4500-sp19-noideainc.herokuapp.com/api/service-answers/${answer.id}`, {
            method: 'put',
            body: JSON.stringify(answer),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())

    deleteServiceAnswer = id =>
        fetch(`https://cs4500-sp19-noideainc.herokuapp.com/api/service-answers/${id}`, {
            method: 'delete'
        })
}