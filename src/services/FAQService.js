export default class FAQService {
    static instance = null;
    static getInstance() {
        if(FAQService.instance === null) {
            FAQService.instance = new FAQService()
        }
        return this.instance
    }
    findFAQById = id =>
        fetch("https://cs4500-sp19-noideainc.herokuapp.com/api/faqs/${id}")
            .then(response => response.json())
    findAllFAQs = () =>
        fetch("https://cs4500-sp19-noideainc.herokuapp.com/api/faqs")
            .then(response => response.json())
}